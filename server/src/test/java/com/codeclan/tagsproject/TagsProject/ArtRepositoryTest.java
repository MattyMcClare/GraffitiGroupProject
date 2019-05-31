package com.codeclan.tagsproject.TagsProject;

import com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories.ArtRepository;
import com.codeclan.tagsproject.TagsProject.models.Art;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import javax.swing.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

//@RunWith(SpringRunner.class)
//
//public class ArtRepositoryTest {
//
//    @Autowired
//    private ArtRepository artRepository;

//    @Test
//    public void whenFindByPublicationDate_thenArticles1And2Returned() {
//        List<Art> result = new ArrayList<>();
//        try {
//            result = artRepository.findArtByPublicationDate(
//                    new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"));
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//
//        assertEquals(2, result.size());
//        assertTrue(result.stream()
//                .map(Art::getId)
//                .allMatch(id -> Arrays.asList(1, 2).contains(id)));
//    }
//}
