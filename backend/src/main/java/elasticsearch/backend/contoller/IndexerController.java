package elasticsearch.backend.contoller;

import elasticsearch.backend.service.IndexerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/index")
public class IndexerController {

    @Autowired
    private IndexerService indexerService;
}
