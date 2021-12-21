package elasticsearch.backend.repository;

import elasticsearch.backend.model.IndexUnit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface IndexUnitRepository extends ElasticsearchRepository<IndexUnit, String> {
}
