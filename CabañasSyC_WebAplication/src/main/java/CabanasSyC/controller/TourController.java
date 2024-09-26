package CabanasSyC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import CabanasSyC.domain.Tour;
import CabanasSyC.service.TourService;

@Controller
@RequestMapping("/tours")
public class TourController {
    @Autowired
    private TourService tourService;

    @GetMapping("/toursList")
    public String listTours(Model model) {
        var tours = tourService.getAllTours();
        model.addAttribute("tours", tours);
        return "/tours/toursList";
    }

    @GetMapping("/new")
    public String newTour(Tour tour) {
        return "/tours/edit";
    }

    @GetMapping("/edit/{id}")
    public String editTour(Long id, Model model) {
        var tour = tourService.getTourById(id);
        model.addAttribute("tour", tour);
        return "/tours/edit";
    }

    @GetMapping("/delete/{id}")
    public String deleteTour(Long id) {
        tourService.deleteTour(id);
        return "redirect:/tours/list";
    }

    @PostMapping("/save")
    public String saveTour(Tour tour) {
        tourService.saveOrUpdate(tour);
        return "redirect:/tours/list";
    }
}
