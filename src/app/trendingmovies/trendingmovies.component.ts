import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trendingmovies',
  templateUrl: './trendingmovies.component.html',
  styleUrl: './trendingmovies.component.css'
})
export class TrendingmoviesComponent {
  constructor(private service:MoviesService,private router: Router){}
  movies:any;
  selectedMovie:any;
  review:any;
  rating:any;
  showAddReview=false;
  addReview(m:any){
 
    this.router.navigate(['/home/review1',m]);

  }
  ngOnInit(){
    this.service.getMovies().subscribe((result)=>{
      this.movies=result;
      console.log(this.movies);
    });
  
  }
}
