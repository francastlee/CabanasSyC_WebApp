package CabanasSyC.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import CabanasSyC.domain.Tour;

public interface ToursDao extends JpaRepository<Tour, Long> {
}
