package CabanasSyC.service;

import CabanasSyC.domain.Cabin;
import java.util.List;  

public interface CabinService {
    public List<Cabin> getAllCabins();

    public Cabin getCabinById(Long id);

    public void saveOrUpdate(Cabin cabin);
    
    public void deleteCabana(Long id);
} 
