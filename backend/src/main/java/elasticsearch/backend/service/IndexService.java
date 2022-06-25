package elasticsearch.backend.service;

import elasticsearch.backend.dto.UploadModel;
import elasticsearch.backend.exception.BadRequestException;
import elasticsearch.backend.handler.DocumentHandler;
import elasticsearch.backend.model.CVApplication;
import elasticsearch.backend.model.IndexUnit;
import elasticsearch.backend.model.enumeration.DegreeOfEducation;
import elasticsearch.backend.repository.CVApplicationRepository;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.common.recycler.Recycler;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.regex.Pattern;

@Slf4j
@Service
public class IndexService {

    private final ElasticsearchOperations operations;
    private final FileService fileService;
    private final CVApplicationRepository cvApplicationRepository;

    public IndexService(ElasticsearchOperations operations, FileService fileService, CVApplicationRepository cvApplicationRepository) {
        this.operations = operations;
        this.fileService = fileService;
        this.cvApplicationRepository = cvApplicationRepository;
    }

    public void index(UploadModel model) {
        MultipartFile file = model.getFile();
        if (file == null || file.isEmpty()) {
            throw new BadRequestException("Missing file!");
        }
        String filename = fileService.saveUploadedFile(file);
        if (filename != null) {
            DocumentHandler handler = fileService.getHandler(filename);
            if (handler == null) {
                throw new BadRequestException("No available handler for file: " + filename);
            }
            IndexUnit indexUnit = handler.getIndexUnit(new File(filename));
            String[] nameParts = filename.split(Pattern.quote("\\"));
            indexUnit.setFilename(nameParts[nameParts.length - 1]);
            indexUnit.setName(model.getName());
            indexUnit.setSurname(model.getSurname());
            indexUnit.setEmail(model.getEmail());
            indexUnit.setAddress(model.getAddress());
            indexUnit.setDegreeOfEducation(DegreeOfEducation.valueOf(model.getDegreeOfEducation()));
            indexUnit.setGeoPoint(new GeoPoint(model.getLatitude(),model.getLongitude()));
            operations.save(indexUnit);

            CVApplication cvApplication = new CVApplication();
            cvApplication.setName(model.getName());
            cvApplication.setSurname(model.getSurname());
            cvApplication.setEmail(model.getEmail());
            cvApplication.setAddress(model.getAddress());
            cvApplication.setDegreeOfEducation(DegreeOfEducation.valueOf(model.getDegreeOfEducation()));
            cvApplication.setFilename(indexUnit.getFilename());
            cvApplicationRepository.save(cvApplication);
        }
    }
}
