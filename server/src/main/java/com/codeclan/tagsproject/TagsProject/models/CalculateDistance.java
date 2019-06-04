package com.codeclan.tagsproject.TagsProject.models;

import com.codeclan.tagsproject.TagsProject.Controllers.LocationController;
import com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories.LocationRepository;
import com.sun.tools.javac.file.Locations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.Collections;
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
//        System.out.println("lat = " + lat);
//        System.out.println("longitude = "+longi);
        List<Location> locations = locationRepository.findAll();
        double latMetersPerDegree = 111341;
        double longMetersPerDegree = 62473;
        List<Location> results = new ArrayList<>();
        for (Location location: locations) {
           double latCalc = ((this.lat - location.getLatitude()) * latMetersPerDegree);
//           System.out.println("location latitude = " + location.getLatitude());
//           System.out.println("Lat Calculation = " + latCalc);
            double longCalc = ((this.longi - location.getLongitude()) * longMetersPerDegree);
//            System.out.println("location longitude = " + location.getLongitude());
//            System.out.println("Long Calculation =" + longCalc);
            double latCalcSq = (latCalc * latCalc);
//            System.out.println("Lat Calc squared =" + latCalcSq);
            double longCalcSq = (longCalc * longCalc);
//            System.out.println("Long Calc squared =" + longCalcSq);
            double x = latCalcSq + longCalcSq;
//            System.out.println("x =" + x);
            double distanceFromPointInMetres = Math.sqrt(x);
//            System.out.println("distanceFromPointInMetres =" + distanceFromPointInMetres);
            double distanceFromPoint = distanceFromPointInMetres/1000;
            location.setDistanceTo(distanceFromPoint);
//            System.out.println(location.getDistanceTo());
//            System.out.println("distancefrompoint = "+distanceFromPoint);
//            System.out.println("distance = "+ distance);

            if (distanceFromPoint <= distance)
                    results.add(location);

        }
        System.out.println(results);
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
