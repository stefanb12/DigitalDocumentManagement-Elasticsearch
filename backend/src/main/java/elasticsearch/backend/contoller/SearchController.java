package elasticsearch.backend.contoller;


import elasticsearch.backend.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/search")
public class SearchController {

    @Autowired
    private SearchService searchService;
}