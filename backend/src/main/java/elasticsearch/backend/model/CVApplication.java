package elasticsearch.backend.model;

import elasticsearch.backend.model.enumeration.DegreeOfEducation;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="cv_applications")
public class CVApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique=true, nullable=false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "degree_of_education", nullable = false)
    private DegreeOfEducation degreeOfEducation;

    @Column(name = "filename", nullable = false)
    private String filename;
}
