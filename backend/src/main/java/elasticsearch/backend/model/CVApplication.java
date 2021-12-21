package elasticsearch.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

public class CVApplication {

    private Long id;
    private String name;
    private String surname;
    private String email;
    private String address;
    private String fileLocation;
    // @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private DegreeOfEducation degreeOfEducation;
}
