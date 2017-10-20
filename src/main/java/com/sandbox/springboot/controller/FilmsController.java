package com.sandbox.springboot.controller;

import com.sandbox.springboot.domain.Films;
import com.sandbox.springboot.repository.FilmsRepository;
import com.sandbox.springboot.service.FilmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static com.sandbox.springboot.controller.util.HeaderUtil.createEntityCreationAlert;
import static com.sandbox.springboot.controller.util.HeaderUtil.createEntityDeletionAlert;
import static com.sandbox.springboot.domain.Films.ENTITY_NAME;
/**
 * Created by amatriuc on 10/19/2017.
 */
@RestController
@RequestMapping("/films")
public class FilmsController {

    @Autowired
    private FilmsService filmsService;

    @Autowired
    private FilmsRepository filmsRepository;

    @GetMapping("/")
    public List<Films> getAll() {
        return filmsService.findAllFilms();
    }

    @PostMapping("/")
    public ResponseEntity<Films> save(@Valid @RequestBody Films films) {
        Films result = filmsRepository.save(films);

        return ResponseEntity.ok()
                .headers(createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
                .body(result);
    }

    @PutMapping("/")
    public ResponseEntity<Films> update(@Valid @RequestBody Films films) {
        Films result = filmsRepository.save(films);

        return ResponseEntity.ok()
                .headers(createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
                .body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        filmsRepository.delete(id);

        return ResponseEntity.ok()
                .headers(createEntityDeletionAlert(ENTITY_NAME, id.toString()))
                .build();
    }
}
