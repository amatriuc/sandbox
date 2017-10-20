package com.sandbox.springboot.service;

import com.sandbox.springboot.domain.Films;
import com.sandbox.springboot.repository.FilmsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by amatriuc on 10/19/2017.
 */
@Service
public class FilmsService {

    @Autowired
    private FilmsRepository filmsRepository;

    public List<Films> findAllFilms() {
        List<Films> films = filmsRepository.findAll();

        return films;
    }
}
