package com.codeclan.tagsproject.TagsProject.Repositories.ArtRepositories;

import com.codeclan.tagsproject.TagsProject.models.Art;
import com.codeclan.tagsproject.TagsProject.models.Location;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

public class ArtRepositoryImpl implements ArtRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Art> getAllArtForLocation(Long location_id) {
        List<Art> result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Art.class);
            cr.createAlias("location", "locationAlias");
            cr.add(Restrictions.eq("locationAlias.id", location_id));
            result = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return result;
    }
}
