import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-blog-create', 
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService: BlogHttpService, private _route:ActivatedRoute,private router:Router, public toastr: ToastrService){ 
 
  }

  public blogTitle:string= "This is the default title";
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]



  ngOnInit() {
  }

  public createBlog(): any {
    let blogData ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category: this.blogCategory
    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

    data => {
      console.log("Blog Created");
      console.log(data);
      this.toastr.success('Blog Posted Successfully', 'Success!'); 

      setTimeout (()=>{
        this.router.navigate(['/blog', data.data.blogId]);
      },2000 )

    },

    error =>{

      console.log("Some error occurred");
      console.log(error.errorMessage);
      this.toastr.error('This is not good!', 'Oops!');
    }

    )

  }
}
