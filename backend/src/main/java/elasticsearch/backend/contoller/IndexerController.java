package elasticsearch.backend.contoller;

import elasticsearch.backend.model.CVApplication;
import elasticsearch.backend.repository.CVApplicationRepository;
import elasticsearch.backend.service.IndexerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/index")
public class IndexerController {

    @Autowired
    private IndexerService indexerService;
}
