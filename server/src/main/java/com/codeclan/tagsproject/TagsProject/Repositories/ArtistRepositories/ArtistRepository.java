package com.codeclan.tagsproject.TagsProject.Repositories.ArtistRepositories;

import com.codeclan.tagsproject.TagsProject.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long>, ArtistRepositoryCustom {

}
