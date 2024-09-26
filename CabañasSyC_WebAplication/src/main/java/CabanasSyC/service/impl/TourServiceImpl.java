package CabanasSyC.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CabanasSyC.dao.ToursDao;
import CabanasSyC.domain.Tour;
import CabanasSyC.service.TourService;
import jakarta.transaction.Transactional;

@Service
public class TourServiceImpl implements TourService {
    @Autowired 
    private ToursDao toursDao;

    @Override
    @Transactional
    public List<Tour> getAllTours() {
        return toursDao.findAll();
    }

    @Override
    @Transactional
    public Tour getTourById(Long id) {
        return toursDao.findById(id).get();
    }

    @Override
    @Transactional
    public void saveOrUpdate(Tour tour) {
        toursDao.save(tour);
    }

    @Override
    @Transactional
    public void deleteTour(Long id) {
        toursDao.deleteById(id);
    }
}
