package elasticsearch.backend.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import elasticsearch.backend.dto.GeoQueryData;
import elasticsearch.backend.dto.QueryData;
import elasticsearch.backend.dto.RequiredHighlight;
import elasticsearch.backend.dto.ResultData;
import elasticsearch.backend.model.IndexUnit;
import elasticsearch.backend.model.enumeration.SearchType;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class SearchService {

    private final ElasticsearchRestTemplate template;
    private final QueryService queryService;

    public SearchService(ElasticsearchRestTemplate template, QueryService queryService) {
        this.template = template;
        this.queryService = queryService;
    }

    public List<ResultData> search(List<QueryData> request) {
        List<RequiredHighlight> requiredHighlights = new ArrayList<>();

        QueryData queryData = request.get(0);
        QueryBuilder query = queryService.buildQuery(isPhraseSearch(queryData.getValue()) ? SearchType.PHRASE : SearchType.REGULAR,
                queryData.getFieldName(), queryData.getValue());
        requiredHighlights.add(new RequiredHighlight(queryData.getFieldName(), queryData.getValue()));

        for (int i = 1; i < request.size(); i++) {
            QueryData previousQueryData = request.get(i-1);
            QueryData currentQueryData = request.get(i);
            QueryBuilder currentQuery = queryService.buildQuery(isPhraseSearch(queryData.getValue()) ? SearchType.PHRASE : SearchType.REGULAR,
                    currentQueryData.getFieldName(), currentQueryData.getValue());
            BoolQueryBuilder builder = QueryBuilders.boolQuery();
            if (previousQueryData.getOperator().equals("AND")) {
                builder.must(query);
                builder.must(currentQuery);
            } else if (previousQueryData.getOperator().equals("OR")) {
                builder.should(query);
                builder.should(currentQuery);
            }
            requiredHighlights.add(new RequiredHighlight(currentQueryData.getFieldName(), currentQueryData.getValue()));
            query = builder;
        }
        return getResults(query, requiredHighlights);
    }

    public List<ResultData> geoSearch(GeoQueryData geoQueryData) {
        List<RequiredHighlight> requiredHighlights = new ArrayList<>();

        QueryBuilder query = queryService.buildGeoQuery(geoQueryData.getLatitude(), geoQueryData.getLongitude(), geoQueryData.getDistance());
        requiredHighlights.add(new RequiredHighlight("geoPoint", ""));

        return getResults(query, requiredHighlights);
    }

    private List<ResultData> getResults(QueryBuilder query, List<RequiredHighlight> requiredHighlights) {
        if(query == null) {
            return null;
        }

        List<ResultData> results = new ArrayList<>();

        NativeSearchQuery searchQuery = new NativeSearchQueryBuilder()
                .withQuery(query)
//                .withHighlightFields(new HighlightBuilder.Field("fileContent"))
                .withHighlightFields(getFieldsForHighlighting(requiredHighlights))
                .build();

        SearchHits<IndexUnit> hits = template.search(searchQuery, IndexUnit.class);
        Gson gson = new GsonBuilder().disableHtmlEscaping().create();
        for (SearchHit<IndexUnit> hit : hits) {
            IndexUnit indexUnit = hit.getContent();
            try {
//                Object fieldText = hit.getHighlightFields().get("fileContent");
//                String highlight = gson.toJson(fieldText);
                String highlight = getHighlight(hit);
                results.add(new ResultData(indexUnit.getName(), indexUnit.getSurname(), indexUnit.getEmail(), indexUnit.getAddress(),
                        indexUnit.getDegreeOfEducation().toString(), indexUnit.getFilename(), highlight));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return results;
    }

    private HighlightBuilder.Field[] getFieldsForHighlighting(List<RequiredHighlight> requiredHighlights) {
        return requiredHighlights.stream()
                .map(requiredHighlight -> new HighlightBuilder.Field(requiredHighlight.getFieldName()))
                .toArray(HighlightBuilder.Field[]::new);
    }

    private String getHighlight(SearchHit<IndexUnit> hit) {
        return hit.getHighlightFields().values()
                .stream()
                .reduce((strings1, strings2) -> Stream.concat(strings1.stream(), strings2.stream()).collect(Collectors.toList()))
                .map(strings -> String.join(" ... ", strings))
                .orElseGet(() -> hit.getContent().getFileContent().substring(0, 150).concat(" ... "));
    }

    private boolean isPhraseSearch(String value) {
        return value.startsWith("\"") && value.endsWith("\"");
    }
}
