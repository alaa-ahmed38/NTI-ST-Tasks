import { Injectable } from '@angular/core';
import { Ipost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class Post {
  private posts:Ipost[]=[
         {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:1,
      userid:1,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:2,
      userid:2,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:3,
      userid:3,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:4,
      userid:2,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:5,
      userid:12,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:6,
      userid:5,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:7,
      userid:6,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:8,
      userid:11,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:9,
      userid:10,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:10,
      userid:12,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:11,
      userid:4,
      date: new Date
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:12,
      userid:9,
      date: new Date
    },
     {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:13,
      userid:8,
      date:new Date

    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:14,
      userid:3,
      date: new Date

    }
  ];    

getposts():Ipost[]{
  return this.posts;
}
addpots(post:Ipost):void{
  this.posts.push(post);
}

deletePost(id:number):void{
  this.posts = this.posts.filter(p=>p.id!==id);

}
updatePost(updatapost:Ipost){
  const index = this.posts.findIndex(p=>p.id===updatapost.id);
  this.posts[index]={...updatapost};
}
}
