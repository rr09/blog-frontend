import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = [ "Comedy", "Drama", "Action", "Technology"];

  constructor(private _route:ActivatedRoute, private router:Router, private blogHttpService: BlogHttpService,public toastr: ToastrService) { 
    
  }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {

        console.log(data);
        this.currentBlog = data['data'];
        console.log("Current blog is");
        console.log(this.currentBlog);
      },

      error => {
        console.log("Some error occured")
        console.log(error.errorMessage);
      }
    )
  }
public editThisBlog():any {
  this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
    data => {
      console.log(data);
      this.toastr.success('Blog edited Successfully', 'Success!');
      setTimeout (() => {
        this.router.navigate(['/blog', this.currentBlog.blogId]);

      },2000)
    },
    error => {
      console.log('some error occurred');
      console.log(error.errorMessage);
      this.toastr.error ('some error occurred', 'Error');
    }
  )  
}


}


