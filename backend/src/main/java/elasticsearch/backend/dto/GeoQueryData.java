package elasticsearch.backend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GeoQueryData {
    private String latitude;
    private String longitude;
    private String distance;
}
