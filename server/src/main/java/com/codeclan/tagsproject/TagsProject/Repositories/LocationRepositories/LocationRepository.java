package com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories;

import com.codeclan.tagsproject.TagsProject.Projections.EmbedAllForArt;
import com.codeclan.tagsproject.TagsProject.Projections.EmbedAllForArtForLocation;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAllForArtForLocation.class)
public interface LocationRepository extends JpaRepository<Location, Long>, LocationRepositoryCustom {
}
