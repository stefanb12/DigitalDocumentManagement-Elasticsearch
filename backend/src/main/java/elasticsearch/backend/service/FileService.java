package elasticsearch.backend.service;

import elasticsearch.backend.exception.BadRequestException;
import elasticsearch.backend.handler.DocumentHandler;
import elasticsearch.backend.handler.PDFHandler;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {

    private static final String DATA_DIR_PATH = "files";

    public FileService() {
    }

    public Resource getFile(String filename) {
        try {
            Path path = Paths.get(getResourceFilePath().getAbsolutePath() + File.separator + filename);
            return new ByteArrayResource(Files.readAllBytes(path));
        } catch (IOException e) {
            throw new BadRequestException("Error while reading file!");
        }
    }

    public String saveUploadedFile(MultipartFile file) {
        String retVal = null;
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(getResourceFilePath().getAbsolutePath() + File.separator + file.getOriginalFilename());
                Files.write(path, bytes);
                retVal = path.toString();
            } catch (IOException e) {
                throw new BadRequestException("Error while saving file!");
            }
        }
        return retVal;
    }

    public DocumentHandler getHandler(String fileName) {
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

}
