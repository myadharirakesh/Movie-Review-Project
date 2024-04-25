import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { Reviewpage1Component } from './reviewpage1/reviewpage1.component';
import { BollywoodComponent } from './bollywood/bollywood.component';

import { Reviewpage2Component } from './reviewpage2/reviewpage2.component';
import { ReviewdisplayComponent } from './reviewdisplay/reviewdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    TrendingmoviesComponent,
    ReviewpageComponent,
    Reviewpage1Component,
    BollywoodComponent,
    Reviewpage2Component,
    ReviewdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
