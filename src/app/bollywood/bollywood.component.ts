import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrl: './bollywood.component.css'
})
export class BollywoodComponent {
  constructor(private service:MoviesService,private router: Router){}
  movies:any;
  selectedMovie:any;
  review:any;
  rating:any;
  showAddReview=false;
  addReview(m:any){
 
    this.router.navigate(['/home/review2',m]);

  }
  ngOnInit(){
    this.service.getMovies().subscribe((result)=>{
      this.movies=result;
      console.log(this.movies);
    });
  
  }
}

