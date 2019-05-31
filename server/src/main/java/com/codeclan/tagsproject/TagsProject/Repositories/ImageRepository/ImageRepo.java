package com.codeclan.tagsproject.TagsProject.Repositories.ImageRepository;

import com.codeclan.tagsproject.TagsProject.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepo extends JpaRepository<Image, Long> {
}
