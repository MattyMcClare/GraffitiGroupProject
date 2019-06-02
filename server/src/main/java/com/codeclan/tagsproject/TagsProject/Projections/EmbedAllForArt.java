package com.codeclan.tagsproject.TagsProject.Projections;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Artist;
import com.codeclan.tagsproject.TagsProject.models.Image;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedAllForArt", types = Art.class)
public interface EmbedAllForArt {
    public Artist getArtist();
    public Location getLocation();
    public List<Image> getImages();

}
