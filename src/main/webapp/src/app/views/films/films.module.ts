import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsComponent} from "./films.component";
import {FilmsRoutingModule} from "./films-routing.module";
import {FilmsService} from "app/views/films/films.service";
import {ButtonModule, DataListModule, DialogModule, InputTextModule} from "primeng/primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FilmsRoutingModule,
    DataListModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  providers: [FilmsService],
  declarations: [FilmsComponent]
})
export class FilmsModule { }
