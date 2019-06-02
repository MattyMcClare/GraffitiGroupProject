package com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories;

import com.codeclan.tagsproject.TagsProject.Projections.EmbedArtForArtist;
import com.codeclan.tagsproject.TagsProject.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository//RestResource(excerptProjection = EmbedArtForArtist.class)
public interface ArtistRepository extends JpaRepository<Artist, Long>, ArtistRepositoryCustom {

}
