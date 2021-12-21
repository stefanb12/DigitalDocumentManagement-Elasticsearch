package elasticsearch.backend.repository;

import elasticsearch.backend.model.IndexUnit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndexUnitRepository extends ElasticsearchRepository<IndexUnit, String> {
}
