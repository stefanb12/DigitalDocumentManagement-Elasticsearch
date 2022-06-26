package elasticsearch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UploadModel {
    private String name;
    private String surname;
    private String email;
    private String address;
    private String degreeOfEducation;
    private Double latitude;
    private Double longitude;
    private MultipartFile file;
}
