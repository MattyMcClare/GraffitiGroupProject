package com.codeclan.tagsproject.TagsProject.Controllers;

import com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/artists")
public class ArtistController {

    @Autowired
    ArtistRepository artistRepository;



}
