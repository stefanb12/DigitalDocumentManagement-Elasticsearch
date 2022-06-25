package elasticsearch.backend.service;

import elasticsearch.backend.model.enumeration.SearchType;
import org.elasticsearch.common.unit.DistanceUnit;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.stereotype.Service;

import static elasticsearch.backend.model.IndexUnit.SERBIAN_ANALYZER;

@Service
public class QueryService {

    public QueryBuilder buildQuery(SearchType queryType, String fieldName, String value) throws IllegalArgumentException {
        String errorMessage = "";
        if(fieldName == null || fieldName.equals("")){
            errorMessage += "Field not specified";
        }
        if(value == null){
            if(!errorMessage.equals("")) errorMessage += "\n";
            errorMessage += "Value not specified";
        }
        if(!errorMessage.equals("")){
            throw new IllegalArgumentException(errorMessage);
        }

        QueryBuilder queryBuilder = null;
        if(queryType.equals(SearchType.REGULAR)){
            String[] terms = value.split(" ");
            BoolQueryBuilder builder = QueryBuilders.boolQuery();
            for(String term : terms) {
                builder.should(QueryBuilders.matchQuery(fieldName, term).analyzer(SERBIAN_ANALYZER));
            }
            queryBuilder = builder;
        } else if(queryType.equals(SearchType.PHRASE)) {
            queryBuilder = QueryBuilders.matchPhraseQuery(fieldName, value).analyzer(SERBIAN_ANALYZER);
        }
        return queryBuilder;
    }

    public QueryBuilder buildGeoQuery(String latitude, String longitude, String distance) throws IllegalArgumentException {
        double lat = Double.parseDouble(latitude);
        double lon = Double.parseDouble(longitude);
        int dist = Integer.parseInt(distance);
        return QueryBuilders
                .geoDistanceQuery("geoPoint")
                .point(lat, lon)
                .distance(dist, DistanceUnit.KILOMETERS);
    }
}
