package elasticsearch.backend.handler;

import elasticsearch.backend.model.IndexUnit;

import java.io.File;

public interface DocumentHandler {
    IndexUnit getIndexUnit(File file);
    String getText(File file);
}
