package elasticsearch.backend.repository;

import elasticsearch.backend.model.CVApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CVApplicationRepository extends JpaRepository<CVApplication, Long> {
}
