package com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories;

import com.codeclan.tagsproject.TagsProject.Projections.EmbedArtForArtist;
import com.codeclan.tagsproject.TagsProject.models.Art;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtRepository extends JpaRepository<Art, Long>, ArtRepositoryCustom {

}
