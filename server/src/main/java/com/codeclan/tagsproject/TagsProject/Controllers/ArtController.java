package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories.ArtRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories.ArtistRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/art")
public class ArtController {

    @Autowired
    ArtRepository artRepository;

    @GetMapping(value = "/location/{location}")
    public List<Art> getAllArtForLocation (@PathVariable Long location_id){
        return artRepository.getAllArtForLocation(location_id);
    }

    @GetMapping(value ="/date/{searchByDays}")
    public List<Art> findAllByDateUploadedBetween(@PathVariable int searchByDays){
        LocalDate startDate = LocalDate.now().minusDays(searchByDays);
        LocalDate endDate = LocalDate.now();
        List<Art> unsortedList = artRepository.findAllByDateUploadedBetween(startDate, endDate);
        List<Art> sortedList = unsortedList.stream().sorted(Comparator.comparing(Art::getDateUploaded).reversed()).collect(Collectors.toList());
        return sortedList;
    }

}
