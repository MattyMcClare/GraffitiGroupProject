package com.codeclan.tagsproject.TagsProject.Projections;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedAllForArtForLocation", types = Location.class)
public interface EmbedAllForArtForLocation {
    double getLatitude();
    double getLongitude();
    EmbedAllForArt getArt();
}
