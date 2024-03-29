package elasticsearch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResultData {
    private String name;
    private String surname;
    private String email;
    private String address;
    private String degreeOfEducation;
    private String filename;
    private String highlight;
}
