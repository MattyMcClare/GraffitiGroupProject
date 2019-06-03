package com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;

import java.util.List;

public interface LocationRepositoryCustom {
    List<Location> getAllArtWithinDistance(double latitude, double longitude, int distance);
}
