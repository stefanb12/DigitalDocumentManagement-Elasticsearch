package elasticsearch.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

public class DegreeOfEducation {

    private Long id;
    private int degree;
    private String name;
    // @OneToMany(mappedBy = "degreeOfEducation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CVApplication> cvApplications;
}
