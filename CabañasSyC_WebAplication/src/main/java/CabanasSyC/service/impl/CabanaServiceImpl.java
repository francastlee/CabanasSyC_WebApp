package CabanasSyC.service.impl;

import CabanasSyC.dao.CabinDao;
import CabanasSyC.domain.Cabin;
import CabanasSyC.service.CabinService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CabanaServiceImpl implements CabinService {
    @Autowired
    private CabinDao cabinDao;

    @Override
    @Transactional
    public List<Cabin> getAllCabins() {
        return cabinDao.findAll();
    }

    @Override
    @Transactional
    public Cabin getCabinById(Long id) {
        return cabinDao.findById(id).get();
    }

    @Override
    @Transactional
    public void saveOrUpdate(Cabin cabin) {
        cabinDao.save(cabin);
    }

    @Override
    @Transactional
    public void deleteCabana(Long id) {
        cabinDao.deleteById(id);
    }
}
