package elasticsearch.backend.contoller;

import elasticsearch.backend.dto.UploadModel;
import elasticsearch.backend.service.IndexerService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/index")
public class IndexerController {

    private final IndexerService indexerService;

    public IndexerController(IndexerService indexerService) {
        this.indexerService = indexerService;
    }

    @PostMapping()
    public ResponseEntity<String> index(@RequestBody UploadModel request) {
        indexerService.index(request);
        return new ResponseEntity<>("Successfully uploaded!", HttpStatus.OK);
    }

    @GetMapping(value = "/download/{filename}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {
        Resource file = indexerService.getFile(filename);
        return new ResponseEntity<>(file, HttpStatus.OK);
    }

}
