import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-reviewpage2',
  templateUrl: './reviewpage2.component.html',
  styleUrl: './reviewpage2.component.css'
})
export class Reviewpage2Component {
  review:any;
  rating:any;
  constructor(private route: ActivatedRoute,private service:MoviesService,private router : Router) { }
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
    this.router.navigateByUrl('/home/bollywood')
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
