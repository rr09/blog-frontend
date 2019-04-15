//this is by default
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

   public allBlogs=[];
   errorMessage:any;
   
  //declare a dummy blog variable here
  
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home component constructor called");
  }

  ngOnInit() {
    console.log("Home component ngOnInit called");
    //this.allBlogs = this.blogHttpService.getAllBlogs();
    //console.log(this.allBlogs);

    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(

      data =>{
         console.log("Logging Data");
         console.log(data);
         this.allBlogs = data ["data"];

      },

      error =>{
          console.log("Some error occured")
          console.log(error.errorMessage);
      }

  


    )
  
    
  }

  ngOnDestroy() {
    console.log("Home component destroyed");
  }
}
