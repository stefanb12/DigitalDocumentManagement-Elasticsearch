package elasticsearch.backend.service;

import elasticsearch.backend.dto.UploadModel;
import elasticsearch.backend.exception.BadRequestException;
import elasticsearch.backend.handler.DocumentHandler;
import elasticsearch.backend.handler.PDFHandler;
import elasticsearch.backend.model.IndexUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.regex.Pattern;

@Slf4j
@Service
public class IndexerService {

    private static final String DATA_DIR_PATH = "files";

    private final ElasticsearchOperations operations;

    public IndexerService(ElasticsearchOperations operations) {
        this.operations = operations;
    }

    public void index(UploadModel request) {
        MultipartFile file = request.getFile();
        if (file == null || file.isEmpty()) {
            System.out.println("Missing file!");
            return;
        }
        String filename = saveUploadedFile(file);
        if (filename != null) {
            DocumentHandler handler = getHandler(filename);
            if (handler == null) {
                System.out.println("No available handler for file: " + filename);
                return;
            }
            IndexUnit indexUnit = handler.getIndexUnit(new File(filename));
            String[] nameParts = filename.split(Pattern.quote("\\"));
            indexUnit.setFilename(nameParts[nameParts.length - 1]);
            indexUnit.setName(request.getName());
            indexUnit.setSurname(request.getSurname());
            indexUnit.setDegreeOfEducation(request.getDegreeOfEducation());
//            indexUnit.setLocation();
//            indexUnit.setLocationName();
            operations.save(indexUnit);
            System.out.println("File " + indexUnit.getFilename()  + " saved!");
        }
    }

    private String saveUploadedFile(MultipartFile file) {
        String retVal = null;
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(getResourceFilePath().getAbsolutePath() + File.separator + file.getOriginalFilename());
                Files.write(path, bytes);
                retVal = path.toString();
            } catch (IOException e) {
                 throw new BadRequestException();
            }
        }
        return retVal;
    }

    private DocumentHandler getHandler(String fileName) {
        if (fileName.endsWith(".pdf")) {
            return new PDFHandler();
        } else {
            return null;
        }
    }

    private File getResourceFilePath() {
        URL url = this.getClass().getClassLoader().getResource(DATA_DIR_PATH);
        File file;
        try {
            file = new File(url.toURI());
        } catch (URISyntaxException e) {
            file = new File(url.getPath());
        }
        return file;
    }

    public Resource getFile(String filename) {
        try {
            Path path = Paths.get(getResourceFilePath().getAbsolutePath() + File.separator + filename);
            return new ByteArrayResource(Files.readAllBytes(path));
        } catch (IOException e) {
            System.out.println("Error while reading file!");
            throw new BadRequestException();
        }
    }
}
