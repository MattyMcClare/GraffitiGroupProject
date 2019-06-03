package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories.ArtRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories.ArtistRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/art")
public class ArtController {

    @Autowired
    ArtRepository artRepository;

    @GetMapping(value = "/location/{location}")
    public List<Art> getAllArtForLocation (@PathVariable Long location_id){
        return artRepository.getAllArtForLocation(location_id);
    }

}
