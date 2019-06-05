package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "sortbydistance/lat={latitude}/long={longitude}/dis={distance}")
    public List<Location> getAllArtWithinDistance (@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude,@PathVariable("distance") int distance) {
        List<Location> unsortedResult = locationRepository.getAllArtWithinDistance(latitude, longitude, distance);
        List<Location> sortedResult = unsortedResult.stream().sorted(Comparator.comparing(Location::getDistanceTo)).collect(Collectors.toList());
        return sortedResult;
    }

    @GetMapping(value = "sortbydate/lat={latitude}/long={longitude}/dis={distance}")
    public List<Location> getAllArtWithinDistanceSortDate (@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude,@PathVariable("distance") int distance) {
        List<Location> unsortedResult = locationRepository.getAllArtWithinDistance(latitude, longitude, distance);
        List<Location> sortedResult = unsortedResult.stream().sorted(Comparator.comparing(Location::getDateForLocation).reversed()).collect(Collectors.toList());
        return sortedResult;
    }


    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }


}
