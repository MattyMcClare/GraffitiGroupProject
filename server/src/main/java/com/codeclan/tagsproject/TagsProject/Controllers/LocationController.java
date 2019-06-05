package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "sortbydistance/lat={latitude}/long={longitude}/dis={distance}/style={style}")
    public List<Location> getAllArtWithinDistance (@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude, @PathVariable("distance") int distance, @PathVariable("style") String style) {
//        List<Location> unsortedResultAllStyles = locationRepository.getAllArtWithinDistance(latitude, longitude, distance);
//        List<Location> unsortedResult = locationRepository.getAllArtOfACertainStyle(style, unsortedResultAllStyles);
        List<Location> locations = locationRepository.getAllArtByStyleWithinDistance(latitude, longitude, distance, style);
        return locations.stream().sorted(Comparator.comparing(Location::getDistanceTo)).collect(Collectors.toList());
    }

    @GetMapping(value = "sortbydate/lat={latitude}/long={longitude}/dis={distance}/style={style}")
    public List<Location> getAllArtWithinDistanceSortDate (@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude,@PathVariable("distance") int distance, @PathVariable("style") String style) {
        List<Location> unsortedResult = locationRepository.getAllArtByStyleWithinDistance(latitude, longitude, distance, style);
        List<Location> sortedResult = unsortedResult.stream().sorted(Comparator.comparing(Location::getDateForLocation).reversed()).collect(Collectors.toList());
        return sortedResult;
    }


    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }


}
