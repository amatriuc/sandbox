package com.sandbox.springboot.domain;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by amatriuc on 10/19/2017.
 */
@Entity
public class Films implements Serializable {

    public static final String ENTITY_NAME = Films.class.getSimpleName();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String dateProd;

    private String kind;

    private String len;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDateProd() {
        return dateProd;
    }

    public void setDateProd(String dateProd) {
        this.dateProd = dateProd;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getLen() {
        return len;
    }

    public void setLen(String len) {
        this.len = len;
    }
}
