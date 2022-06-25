package elasticsearch.backend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QueryData {
    private String fieldName;
    private String value;
    private String operator;
}
