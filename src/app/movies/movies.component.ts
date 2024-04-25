import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private service:MoviesService,private router: Router){}
  movies:any;
  selectedMovie:any;
  review:any;
  rating:any;
  showAddReview=false;
  addReview(m:any){
 
    this.router.navigate(['/home/review',m]);

  }

  ngOnInit(){
    this.service.getMovies().subscribe((result)=>{
      this.movies=result;
      console.log(this.movies);
    });
  }
 
 
}
