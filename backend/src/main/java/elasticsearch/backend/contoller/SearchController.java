package elasticsearch.backend.contoller;

import elasticsearch.backend.dto.GeoQueryData;
import elasticsearch.backend.dto.QueryData;
import elasticsearch.backend.dto.ResultData;
import elasticsearch.backend.service.SearchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/search")
public class SearchController {

    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping()
    public ResponseEntity<List<ResultData>> search(@RequestBody List<QueryData> request) throws IllegalArgumentException {
        if (request == null || request.size() == 0) {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(searchService.search(request), HttpStatus.OK);
    }

    @PostMapping("/geo")
    public ResponseEntity<List<ResultData>> geoSearch(@RequestBody GeoQueryData geoQueryData) throws IllegalArgumentException, ParseException {
        if (geoQueryData == null || geoQueryData.getLatitude().equals("") || geoQueryData.getLongitude().equals("") || geoQueryData.getDistance().equals("")) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(searchService.geoSearch(geoQueryData), HttpStatus.OK);
    }
}
