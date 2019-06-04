package com.codeclan.tagsproject.TagsProject.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.hql.internal.ast.tree.BinaryLogicOperatorNode;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name="images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("images")
    @ManyToOne
    @JoinColumn(name="art_id")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Art art;

    @Column(name = "BLOBName")
    private String name;

    @Column(name = "BLOBData")
    private Blob data;

    public Image(Art art, Blob data, String name) {
        this.id = id;
        this.art = art;
        this.data = data;
        this.name = name;
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

    public Blob getData() {
        return data;
    }

    public void setData(Blob data) {
        this.data = data;
    }
}
