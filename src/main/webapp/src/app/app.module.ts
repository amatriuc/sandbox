import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import {FilmsService} from "./films/films.service";
import {ButtonModule, DataListModule, DialogModule, InputTextModule} from "primeng/primeng";


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    DataListModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
