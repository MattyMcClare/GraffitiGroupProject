package com.codeclan.tagsproject.TagsProject.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

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

    public Location(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
//        this.distanceTo = distanceTo;
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
}
