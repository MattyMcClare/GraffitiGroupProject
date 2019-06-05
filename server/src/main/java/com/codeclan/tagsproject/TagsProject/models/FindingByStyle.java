package com.codeclan.tagsproject.TagsProject.models;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindingByStyle {

    @Autowired
    LocationRepository locationRepository;


     public static List<Location> findByStyle(String style, List<Location> locationsInArea) {
        List<Location> results = new ArrayList<>();
        for (Location location: locationsInArea) {
            if (location.getStyleForArtAtLocation() == style){
                results.add(location);
            }
        }
        return results;
    }
}
