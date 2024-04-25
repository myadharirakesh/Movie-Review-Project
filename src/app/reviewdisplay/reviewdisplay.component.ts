import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-reviewdisplay',
  templateUrl: './reviewdisplay.component.html',
  styleUrl: './reviewdisplay.component.css'
})
export class ReviewdisplayComponent {
constructor(private service : MoviesService){}

review:any;
 ngOnInit(){
  this.service.getReviews().subscribe((res)=>{
    this.review=res;
   
    
  });
}
}
