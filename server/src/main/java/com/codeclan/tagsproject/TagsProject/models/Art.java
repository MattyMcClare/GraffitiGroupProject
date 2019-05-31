package com.codeclan.tagsproject.TagsProject.models;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PostMapping;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "art")
public class Art {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToMany(mappedBy = "art", fetch = FetchType.LAZY)
    private List<Image> images;

    @JsonIgnore
    @ManyToOne
    Artist artist;

    @Column
    private StyleType style;

    @Column
    private String description;

    @JsonIgnore
    @OneToOne
    Location location;

//    @Column
//    @Temporal(TemporalType.DATE)
//    private Date publicationDate;

    public Art(Artist artist, StyleType style, String description, Location location) {
        this.images = new ArrayList<>();
        this.artist = artist;
        this.style = style;
        this.description = description;
        this.location = location;
//        this.publicationDate = publicationDate;
        this.images = new ArrayList<>();
    }

    public Art() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public StyleType getStyle() {
        return style;
    }

    public void setStyle(StyleType style) {
        this.style = style;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

//    public void setPublicationDate(Date publicationDate) {
//        this.publicationDate = publicationDate;
//    }

//    public Date getPublicationDate() {
//        return publicationDate;
//    }
}
