package elasticsearch.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import elasticsearch.backend.model.enumeration.DegreeOfEducation;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.GeoPointField;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;

@Document(indexName = IndexUnit.INDEX_NAME, shards = 1, replicas = 0)
public class IndexUnit {

    public static final String INDEX_NAME = "cv-applications";
    public static final String TYPE_NAME = "cv";

    public static final String DATE_PATTERN = "yyyy-MM-dd";
    public static final String SERBIAN_ANALYZER = "serbian";

    @Id
    @Field(type = FieldType.Text, store = true)
    private String filename;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String name;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String surname;

    @Field(type = FieldType.Text, index = false, store = true)
    private String email;

    @Field(type = FieldType.Text, index = false, store = true)
    private String address;

    @Field(type = FieldType.Text, store = true)
    private DegreeOfEducation degreeOfEducation;

    @Field(type = FieldType.Text, store = true, analyzer = SERBIAN_ANALYZER)
    private String fileContent;

    @Field(type = FieldType.Text, store = true)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_PATTERN)
    private String fileModificationDate;

    @GeoPointField
    private GeoPoint geoPoint;

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

    public static String getSerbianAnalyzer() {
        return SERBIAN_ANALYZER;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public DegreeOfEducation getDegreeOfEducation() {
        return degreeOfEducation;
    }

    public void setDegreeOfEducation(DegreeOfEducation degreeOfEducation) {
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

    public GeoPoint getGeoPoint() {
        return geoPoint;
    }

    public void setGeoPoint(GeoPoint geoPoint) {
        this.geoPoint = geoPoint;
    }
}
