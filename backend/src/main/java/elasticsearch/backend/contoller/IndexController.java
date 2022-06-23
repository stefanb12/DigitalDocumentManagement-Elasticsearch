package elasticsearch.backend.contoller;

import elasticsearch.backend.dto.UploadModel;
import elasticsearch.backend.service.IndexService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/index")
public class IndexController {

    private final IndexService indexService;

    public IndexController(IndexService indexService) {
        this.indexService = indexService;
    }

    @PostMapping()
    public ResponseEntity<String> index(@ModelAttribute UploadModel model) {
        indexService.index(model);
        return new ResponseEntity<>("Successfully uploaded!", HttpStatus.OK);
    }
}
