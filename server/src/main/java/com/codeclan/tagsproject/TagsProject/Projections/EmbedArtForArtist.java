package com.codeclan.tagsproject.TagsProject.Projections;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Artist;
import com.codeclan.tagsproject.TagsProject.models.Image;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;

@Projection(name="embedArtForArtist", types= Artist.class)
public interface EmbedArtForArtist {

    ArrayList<Art> getArt();
    String getHandle();
    String getSignature();

//   public ArrayList<Image> getImages();
//   public StyleType getStyle();
//   public String getDescription();

}
