package com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories;

import com.codeclan.tagsproject.TagsProject.models.Art;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ArtRepository extends JpaRepository<Art, Long>, ArtRepositoryCustom {

    List<Art> findArtByPublicationDate(Date publicationDate);
}
