import { Injectable } from '@angular/core';
//importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs'; //changed from import {Observable} from 'rxjs/Observable';
import { catchError,tap } from 'rxjs/operators'; //changed from single imports




@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {
  public allBlogs;
  private authtoken = "NzAyNzAzZDYyOTdlZmVhODE5NmYyY2VlYjQwMWEzNTBjZGVlZDIxZDEzYTRmMjM3ZTcyZTEwZTc1OWMyNWNhYjA5ODdlNzBhNGM3MTA4MTgzODI3ZDk2OTNmYWM4ODc4MjkzNDIxYmExYmQ2MjYzYjQ2YWVhMDFkNTk1ODQ4MGQ1YjY2";
 
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
 

  constructor(private _http:HttpClient) {
    console.log('Blog-Http service was called');
  }

  //method for getting all blogs
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=NzAyNzAzZDYyOTdlZmVhODE5NmYyY2VlYjQwMWEzNTBjZGVlZDIxZDEzYTRmMjM3ZTcyZTEwZTc1OWMyNWNhYjA5ODdlNzBhNGM3MTA4MTgzODI3ZDk2OTNmYWM4ODc4MjkzNDIxYmExYmQ2MjYzYjQ2YWVhMDFkNTk1ODQ4MGQ1YjY2');
    console.log(myResponse)
    return myResponse;

  }

  //method for getting a single blog
  public getSingleBlogInformation(currentBlogId): any {

  let myResponse = this._http.get(`${this.baseUrl}/view/${currentBlogId}?authToken= ${this.authtoken}`);
  return myResponse;
  }


  public createBlog (blogData): any {
    let myResponse = this._http.post (this.baseUrl + '/create'+'?authToken=N2RlOWUzYjdmODY3MTcwMTE2Yjc3ZDcwMTM1ZDljM2YzNzkxZmIyNDBkODljZTFhNjdmMzdjNDg0YjBjYTFlMzBlMTE4YWY5NzIzYTcwZWU2ZDU4ZDViNzE5YTczYzZiNmEyZTQ3YmFjZjhhOGJlNzRjZGI0ZTM4OGJmZjQxNWI0ZTE0',blogData);
    return myResponse;
  
  }

  public deleteBlog(currentBlogId):any {
    let myResponse = this._http.post(this.baseUrl + '/' + currentBlogId + '/delete' + '?authToken=N2RlOWUzYjdmODY3MTcwMTE2Yjc3ZDcwMTM1ZDljM2YzNzkxZmIyNDBkODljZTFhNjdmMzdjNDg0YjBjYTFlMzBlMTE4YWY5NzIzYTcwZWU2ZDU4ZDViNzE5YTczYzZiNmEyZTQ3YmFjZjhhOGJlNzRjZGI0ZTM4OGJmZjQxNWI0ZTE0',{},{});
    return myResponse;
  }

  public editBlog (currentBlogId, currentBlog):any {
    let myResponse = this._http.put(this.baseUrl + '/' + currentBlogId + '/edit' + '?authToken=N2RlOWUzYjdmODY3MTcwMTE2Yjc3ZDcwMTM1ZDljM2YzNzkxZmIyNDBkODljZTFhNjdmMzdjNDg0YjBjYTFlMzBlMTE4YWY5NzIzYTcwZWU2ZDU4ZDViNzE5YTczYzZiNmEyZTQ3YmFjZjhhOGJlNzRjZGI0ZTM4OGJmZjQxNWI0ZTE0',currentBlog);
    return myResponse;
  }
}
