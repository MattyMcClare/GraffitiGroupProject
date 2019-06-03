package com.codeclan.tagsproject.TagsProject.Components;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories.ArtRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories.ArtistRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ImageRepository.ImageRepo;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Artist;
import com.codeclan.tagsproject.TagsProject.models.Image;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ArtRepository artRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    ImageRepo imageRepo;

    public DataLoader (){

    }

    public void run(ApplicationArguments args){

        Location Edinburgh = new Location(55.95206, -3.19648);

        Location Glasgow = new Location(55.86515, -4.25763);

        Location Dundee = new Location(56.46913, -2.97489);

        Artist JimmyMcGee = new Artist("Wee Jim", "https://www.instagram.com/p/Bx9yf7pDs4M/", "He's wee, He's Jim.");

        Artist Banksy = new Artist("Banksy", "https://www.instagram.com/p/BwPyw1-gS0y/", "Mysterious. Probably a dick.");

        Artist Salvador = new Artist("Dali", "https://www.instagram.com/p/BuQtpMIALY9/", "Real straight shooter.");

        LocalDate date1 = LocalDate.now();

        Art piece1 = new Art(JimmyMcGee, StyleType.PIECE, "Pure piece eh?", date1);

        Art piece2 = new Art(Banksy, StyleType.PASTEUP, "Hedgehog with Ennui", date1);

        Art piece3 = new Art(Salvador, StyleType.STENCIL, "Paint Roller Girl", date1);

        Image image1 = new Image(piece1, "https://www.instagram.com/p/Bs8Xt7BgfLM/");

        Image image2 = new Image(piece2, "https://www.instagram.com/p/Bsn6PN4gzfw/");

        Image image3 = new Image(piece3, "https://www.instagram.com/p/BjJxuVtAZUm/");

        locationRepository.save(Dundee);
        locationRepository.save(Glasgow);
        locationRepository.save(Edinburgh);
        imageRepo.save(image1);
        imageRepo.save(image2);
        imageRepo.save(image3);
        piece1.getImages().add(image1);
        piece2.getImages().add(image2);
        piece3.getImages().add(image3);
        piece1.setLocation(Edinburgh);
        piece2.setLocation(Glasgow);
        piece3.setLocation(Dundee);
        artRepository.save(piece3);
        artRepository.save(piece2);
        artRepository.save(piece1);

        JimmyMcGee.getArt().add(piece1);
        Banksy.getArt().add(piece2);
        Salvador.getArt().add(piece3);
        artistRepository.save(Salvador);
        artistRepository.save(Banksy);
        artistRepository.save(JimmyMcGee);
    }


}
