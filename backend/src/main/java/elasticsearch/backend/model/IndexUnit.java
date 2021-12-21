package elasticsearch.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.GeoPointField;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;

@Document(indexName = IndexUnit.INDEX_NAME, shards = 1, replicas = 0)
public class IndexUnit {

    public static final String INDEX_NAME = "applications";
    public static final String TYPE_NAME = "cv";

    public static final String DATE_PATTERN = "yyyy-MM-dd";
    public static final String ANALYZER_TYPE = "serbian";

    @Id
    @Field(type = FieldType.Text, store = true)
    private String filename;

    @Field(type = FieldType.Text, store = true)
    private String name;

    @Field(type = FieldType.Text, store = true)
    private String surname;

    @Field(type = FieldType.Integer, store = true)
    private int degreeOfEducation;

    @Field(type = FieldType.Text, store = true)
    private String fileContent;

    @Field(type = FieldType.Text, store = true)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_PATTERN)
    private String fileModificationDate;

    @Field(type = FieldType.Text, store = true)
    private String locationName;

    @GeoPointField
    private GeoPoint location;

    public IndexUnit() {
    }

    public static String getIndexName() {
        return INDEX_NAME;
    }

    public static String getTypeName() {
        return TYPE_NAME;
    }

    public static String getDatePattern() {
        return DATE_PATTERN;
    }

    public static String getAnalyzerType() {
        return ANALYZER_TYPE;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getDegreeOfEducation() {
        return degreeOfEducation;
    }

    public void setDegreeOfEducation(int degreeOfEducation) {
        this.degreeOfEducation = degreeOfEducation;
    }

    public String getFileContent() {
        return fileContent;
    }

    public void setFileContent(String fileContent) {
        this.fileContent = fileContent;
    }

    public String getFileModificationDate() {
        return fileModificationDate;
    }

    public void setFileModificationDate(String fileModificationDate) {
        this.fileModificationDate = fileModificationDate;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public GeoPoint getLocation() {
        return location;
    }

    public void setLocation(GeoPoint location) {
        this.location = location;
    }
}