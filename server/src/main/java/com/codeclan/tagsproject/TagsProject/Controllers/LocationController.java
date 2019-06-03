package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "/{latitude}/{longitude}/{distance}")
    public List<Location> getAllArtWithinDistance (@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude,@PathVariable("distance") int distance) {
        return locationRepository.getAllArtWithinDistance(latitude, longitude, distance);
    }


    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}
