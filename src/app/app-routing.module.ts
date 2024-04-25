import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { Reviewpage1Component } from './reviewpage1/reviewpage1.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { Reviewpage2Component } from './reviewpage2/reviewpage2.component';
import { ReviewdisplayComponent } from './reviewdisplay/reviewdisplay.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'movie',component:MoviesComponent},
    {path:'trending',component:TrendingmoviesComponent},
    { path: 'review/:id', component: ReviewpageComponent },
    {path:'review1/:id',component:Reviewpage1Component},
    {path:'bollywood',component:BollywoodComponent},
    {path:'review2/:id',component:Reviewpage2Component},
    {path:'display',component:ReviewdisplayComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
