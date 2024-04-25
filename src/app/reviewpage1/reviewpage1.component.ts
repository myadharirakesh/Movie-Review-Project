import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reviewpage1',
  templateUrl: './reviewpage1.component.html',
  styleUrl: './reviewpage1.component.css'
})
export class Reviewpage1Component {
  review:any;
  rating:any;
  constructor(private route: ActivatedRoute,private service:MoviesService,private router :Router) { }
  movie:any;
  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movie=this.service.getMovieById(movieId)||null;
  }
  onSubmit(){
    Swal.fire({
      title:"Thank you",
      text:"Thank you for your review",
      icon:"success"
    });
    this.router.navigateByUrl('/home/trending')
}

moviereview:any;
name:any;
addreview1(){
  this.moviereview={
    name:this.name,
    rating:this.rating,
    review:this.review,
  };
  this.service.addreview(this.moviereview);
}

}

