package elasticsearch.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;

@Document(indexName = IndexUnit.INDEX_NAME, type = IndexUnit.TYPE_NAME, shards = 1, replicas = 0)
public class IndexUnit {

    public static final String INDEX_NAME = "applications";
    public static final String TYPE_NAME = "cv";

    public static final String DATE_PATTERN = "yyyy-MM-dd";
    public static final String ANALYZER_TYPE = "serbian";

    @Id
    @Field(type = FieldType.String, index = FieldIndex.not_analyzed, store = true, analyzer = ANALYZER_TYPE)
    private String filename;

    @Field(type = FieldType.String, index = FieldIndex.analyzed, store = true, analyzer = ANALYZER_TYPE)
    private String name;

    @Field(type = FieldType.String, index = FieldIndex.analyzed, store = true, analyzer = ANALYZER_TYPE)
    private String surname;

    @Field(type = FieldType.Integer, index = FieldIndex.analyzed, store = true, analyzer = ANALYZER_TYPE)
    private int degreeOfEducation;

    @Field(type = FieldType.String, index = FieldIndex.analyzed, store = true, analyzer = ANALYZER_TYPE)
    private String fileContent;

    @Field(type = FieldType.String, index = FieldIndex.analyzed, store = true)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_PATTERN)
    private String fileModificationDate;

    @Field(type = FieldType.String, index = FieldIndex.analyzed, store = true)
    private String locationName;

    @GeoPointField
    private GeoPoint location;
}
