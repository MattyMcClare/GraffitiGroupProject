package com.codeclan.tagsproject.TagsProject.models;

import com.codeclan.tagsproject.TagsProject.Controllers.LocationController;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.sun.tools.javac.file.Locations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

@Component
public class CalculateDistance {

    @Autowired
    private LocationRepository locationRepository;

    private double lat;

    private double longi;

    private int distance;

    public CalculateDistance(){
        this.lat = 55.94861;
        this.longi = -3.20083;
        this.distance = 5;
    }

    public List<Location> calculation(double latitude, double longitude, int distance){
        if (latitude != 0 && longitude != 0){
        this.setLat(latitude);
        this.setLongi(longitude);
        }

        if (distance != 0){
        this.setDistance(distance);}

        List<Location> locations = locationRepository.findAll();
        double latMetersPerDegree = 111341;
        double longMetersPerDegree = 62473;
        List<Location> results = new ArrayList<>();
        for (Location location: locations) {
           double latCalc = ((this.lat - location.getLatitude()) * latMetersPerDegree);
            double longCalc = ((this.longi - location.getLongitude()) * longMetersPerDegree);
            double latCalcSq = Math.pow(latCalc, 2);
            double longCalcSq = Math.pow(longCalc, 2);
           double distanceFromPoint = Math.sqrt((latCalcSq + longCalcSq));
            if (distance <= distanceFromPoint)
                    results.add(location);

        }
        return results;
    }

    public List<Location> calculateDistance(double latitude, double longitude, int distance){
        List<Location> calculatedResult = calculation(latitude, longitude, distance);
        return calculatedResult;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLongi() {
        return longi;
    }

    public void setLongi(double longi) {
        this.longi = longi;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }
}
