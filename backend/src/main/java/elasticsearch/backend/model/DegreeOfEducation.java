package elasticsearch.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="degree_of_educations")
public class DegreeOfEducation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique=true, nullable=false)
    private Long id;

    @Column(name = "degree", nullable = false)
    private int degree;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "degreeOfEducation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CVApplication> cvApplications;

    public DegreeOfEducation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDegree() {
        return degree;
    }

    public void setDegree(int degree) {
        this.degree = degree;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CVApplication> getCvApplications() {
        return cvApplications;
    }

    public void setCvApplications(List<CVApplication> cvApplications) {
        this.cvApplications = cvApplications;
    }
}