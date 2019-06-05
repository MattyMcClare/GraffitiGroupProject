package com.codeclan.tagsproject.TagsProject.models;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="latitude")
    private double latitude;

    @Column(name="longitude")
    private double longitude;

    @JsonIgnoreProperties("location")
    @OneToOne(mappedBy = "location", fetch = FetchType.LAZY)
    private Art art;

    @Column(name="distanceTo")
    private double distanceTo;

    @Column(name="stringLocation")
    private String stringLocation;

    public Location(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Location(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public Art getArt() {
        return art;
    }

    public void setDistanceTo(double distanceTo) {
        this.distanceTo = distanceTo;
    }

    public double getDistanceTo() {
        return distanceTo;
    }

    public String getStringLocation() {
        return stringLocation;
    }

    public void setStringLocation(String stringLocation) {
        this.stringLocation = stringLocation;
    }

    public LocalDate getDateForLocation(){
        return art.getDateUploaded();
    }

    public String getStyleForArtAtLocation() {
        return art.getStyle();
    }



}
