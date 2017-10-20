package com.sandbox.springboot.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;;

import java.io.Serializable;

/**
 * Created by amatriuc on 10/19/2017.
 */
@NoRepositoryBean
public interface ApplicationRepository<T, ID extends Serializable>
        extends Repository<T, ID> {
    <S extends T> S save(S entity);

    T findOne(ID primaryKey);

    Iterable<T> findAll();

    Long count();

    void delete(ID id);

    <S extends T> S saveAndRefresh(S entity);

    boolean exists(ID primaryKey);
}
