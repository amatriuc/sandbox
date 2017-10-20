import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Film} from "./films";
import {FilmsService} from "./films.service";

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  film: Film;
  displayDialog: boolean = false;
  rerender = false;

  constructor(private filmsService: FilmsService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmsService.getAllFilms().subscribe(films => {
      this.films = films;
    });
  }

  onAddFilm() {
    this.film = new Film();
    this.displayDialog = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  onEdit(film) {
    this.displayDialog = true;
    this.film = new Film();
    this.film = film;
  }

  onSave() {
    if(this.film.id) {
      this.filmsService.updateFilm(this.film).subscribe(data => {
        // let index: number = this.findEventIndexById(this.film.id);
        // if(index >= 0) {
        //   this.films[index] = data;
        // }
        this.film = null;
        this.loadFilms();
      });
    } else {
      this.filmsService.addFilm(this.film).subscribe(data => {
        // this.films.push(data);
        this.film = null;
        this.loadFilms();
      });
    }

    this.displayDialog = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.films.length; i++) {
      if(id == this.films[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  onClose() {

  }

  onDelete(film) {
    console.log(film);
    this.filmsService.deleteFilm(film.id).subscribe(data => {
      // This way for fronted refresh data
      // let index: number = this.findEventIndexById(film.id);
      // if(index >= 0) {
      //   this.films.splice(index, 1);
      // }
      this.loadFilms();
      this.displayDialog = false;
    });

  }

}
