package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
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

    @GetMapping(value = "/long={long}/lat={lat}/dist={dist}")
    public List<Art> getAllArtWithinDistance (@PathVariable double latitude, double longitude, int distance) {
        return locationRepository.getAllArtWithinDistance(latitude, longitude, distance);
    } catch {

    }


    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}
