import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [

    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comdedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "this is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comdedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is big text</h1><p>Small text</p>",
      "description": "this is the description of the example blog",
      "title": "this is an example blog"
    },

    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comdedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body. this blog body. this the blog.",
      "description": "this is blog 3 description",
      "title": "this is the third blog"
    }

  ]

  public currentBlog;
  constructor() {
    console.log("service constructor is called")
  }

  public getAllBlogs():any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
          return this.currentBlog = blog;
      }
      
    }
    
  }
  
}
