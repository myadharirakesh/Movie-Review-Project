import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import Swal from 'sweetalert2';
import { review } from '../services/movies';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrl: './reviewpage.component.css'
})
export class ReviewpageComponent {

  // constructor(private router: Router) {}
  // movies:any;
  // goToReview(movieId: number) {
  //   this.router.navigate(['/home/review', movieId]);
  // }
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
    this.router.navigateByUrl('/home/movie')
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