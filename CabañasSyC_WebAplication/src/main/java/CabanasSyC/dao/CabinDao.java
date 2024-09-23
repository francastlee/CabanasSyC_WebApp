package CabanasSyC.dao;

import CabanasSyC.domain.Cabin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CabinDao extends JpaRepository<Cabin, Long> {
}
