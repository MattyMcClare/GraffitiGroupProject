package com.codeclan.tagsproject.TagsProject.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table(name="images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("image")
    @ManyToOne
    @JoinColumn(name="art_id")
    private Art art;

    @Column(name = "url")
    private String url;

    public Image(Art art, String url) {
        this.art = art;
        this.url = url;
    }

    public Image(Long id, Art art, String url) {
        this(art, url);
        this.id = id;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Art getArt() {
        return art;
    }

    public void setArt(Art art) {
        this.art = art;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
