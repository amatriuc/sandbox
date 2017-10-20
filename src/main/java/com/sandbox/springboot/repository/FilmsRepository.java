package com.sandbox.springboot.repository;

import com.sandbox.springboot.domain.Films;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by amatriuc on 10/19/2017.
 */
@Repository
public interface FilmsRepository extends CrudRepository<Films, Long> {

    @Override
    List<Films> findAll();

}
