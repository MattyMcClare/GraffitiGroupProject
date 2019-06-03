package com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;

import java.util.List;

public interface ArtRepositoryCustom {
    List<Art> getAllArtForLocation (Long location_id);
}
