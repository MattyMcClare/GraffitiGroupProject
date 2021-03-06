package com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories;

import com.codeclan.tagsproject.TagsProject.Projections.EmbedAllForArt;
import com.codeclan.tagsproject.TagsProject.models.Art;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;
import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedAllForArt.class)
public interface ArtRepository extends JpaRepository<Art, Long>, ArtRepositoryCustom {

    List<Art> findAllByDateUploadedBetween(LocalDate startDate, LocalDate endDate);
    }
