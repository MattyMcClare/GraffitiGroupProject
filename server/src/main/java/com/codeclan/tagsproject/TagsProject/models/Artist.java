package com.codeclan.tagsproject.TagsProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "artist")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "handle")
    private String handle;

    @Column(name = "signature")
    private String signature;

    @Column(name  = "description")
    private String description;

    @JsonIgnoreProperties("artist")
    @OneToMany(mappedBy = "artist", fetch = FetchType.LAZY)
    private  List<Art> art;

    public Artist(String handle, String signature, String description) {
        this.handle = handle;
        this.signature = signature;
        this.description = description;
        this.art = new ArrayList<>();
    }

    public Artist(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Art> getArt() {
        return art;
    }

    public void setArt(List<Art> art) {
        this.art = art;
    }
}
