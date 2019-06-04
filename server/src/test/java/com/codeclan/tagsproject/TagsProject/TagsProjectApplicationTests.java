package com.codeclan.tagsproject.TagsProject;

import com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories.ArtRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories.ArtistRepository;
import com.codeclan.tagsproject.TagsProject.Repositories.ImageRepository.ImageRepo;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Artist;
import com.codeclan.tagsproject.TagsProject.models.Image;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TagsProjectApplicationTests {

	@Autowired
	ArtRepository artRepository;

	@Autowired
	ArtistRepository artistRepository;

	@Autowired
	LocationRepository locationRepository;

	@Autowired
	ImageRepo imageRepo;


	@Test
	public void contextLoads() {
	}


	@Test
	public void canFindAllArt(){
		List<Art> found = artRepository.findAll();
		assertEquals(3, found.size());
	}

	@Test
	public void canFindAllArtForLocation(){
		List<Art> found = artRepository.getAllArtForLocation(1L);
		assertEquals(1, found.size());
	}

	@Test
	public void canFindAllArtists() {
		List<Artist> found = artistRepository.findAll();
		assertEquals(3, found.size());
	}

	@Test
	public void canFindAllLocations() {
		List<Location> found = locationRepository.findAll();
		assertEquals(3, found.size());
	}

	@Test
	public void canFindAllImages() {
		List<Image> found = imageRepo.findAll();
		assertEquals(3, found.size());
	}

	@Test
	public void canFindAllByDateUploadedBetween(){
		LocalDate startDate = LocalDate.now().minusDays(7);
		LocalDate endDate = LocalDate.now();
		List <Art> found = artRepository.findAllByDateUploadedBetween(startDate, endDate);
		assertEquals(1, found.size());
	}


}
