import { Component, OnInit, OnDestroy } from '@angular/core';
//importing route related  code
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  //empty object
  public currentBlog;


  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService,public toastr: ToastrService, private location:Location ) {

    console.log("Blog-View Constructor is called");
  }

  ngOnInit() {
    console.log("blog view ngOnInit is called");
    //Capturing the blog id parameter from the route 
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of the overall application
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {

        console.log(data);
        this.currentBlog = data['data'];
      },


      error => {
        console.log("Some error occured")
        console.log(error.errorMessage);
      }
    )


  }

  public deleteThisBlog():any {
     this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {

        console.log(data);
        this.toastr.success ('Blog deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate (['/home']);
        }, 2000)
      },

      error =>{
        console.log("Some error occurred");
        console.log(error.errorMessage);
        this.toastr.error ('Some error occurred', 'Error');
      }
     )
  }

  public goBackToPreviousPage (): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("Blog View Component is destroyed");


  }




}
