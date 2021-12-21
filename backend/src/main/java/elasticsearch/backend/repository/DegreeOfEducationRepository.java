package elasticsearch.backend.repository;

import elasticsearch.backend.model.DegreeOfEducation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DegreeOfEducationRepository extends JpaRepository<DegreeOfEducation, Long> {
}
