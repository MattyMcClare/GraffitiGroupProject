package com.codeclan.tagsproject.TagsProject.Repositories.LocationRepositories;

import com.codeclan.tagsproject.TagsProject.Enums.StyleType;
import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.CalculateDistance;
import com.codeclan.tagsproject.TagsProject.models.FindingByStyle;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

public class LocationRepositoryImpl implements LocationRepositoryCustom{

    @Autowired
    CalculateDistance calculateDistance;

    @Autowired
    EntityManager entityManager;

    @Autowired
    LocationRepository locationRepository;

    public List<Location> getAllArtWithinDistance(double latitude, double longitude, int distance) {
       List<Location> result = null;
       Session session = entityManager.unwrap(Session.class);
       try {
          result = calculateDistance.calculateDistance(latitude, longitude, distance);
       } catch (HibernateException ex){
           ex.printStackTrace();
       } finally {
           session.close();
       }
       return result;
    }

    public List<Location> getAllArtOfACertainStyle(String style, List<Location> locationsInArea) {
        List<Location> result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            result = FindingByStyle.findByStyle(style, locationsInArea);
        } catch (HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return result;
    }

    public List<Location> getAllArtByStyleWithinDistance(double latitude, double longitude, int distance, String style) {
        List<Location> artWithinDistance = getAllArtWithinDistance(latitude, longitude, distance);
        ArrayList<Location> results = new ArrayList<>();
        for (Location location : artWithinDistance) {
            if (location.getStyleForArtAtLocation().equals(style)) {
                results.add(location);
            }
        }
        if (results.isEmpty())
            return artWithinDistance;
        else
            return results;
    }
}
