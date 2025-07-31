import { Component,OnInit  } from '@angular/core';
import { Ipost } from '../models/post.model';
import{Post}from '../services/post'

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Posts implements OnInit {
    posts: Ipost[] = [];
  constructor(private postService:Post){}
  ngOnInit():void{
   this.posts= this.postService.getposts();
  }
  removepost(id:number){
    this.postService.deletePost(id);
    this.posts= this.postService.getposts();
  }
}

