package com.codeclan.tagsproject.TagsProject.Projections;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedArtForLocation", types= Location.class)
public interface EmbedArtForLocation {

    List<Art> getArt();
}
