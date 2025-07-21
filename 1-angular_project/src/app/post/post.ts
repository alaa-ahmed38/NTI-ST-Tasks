import { Component } from '@angular/core';
import { Ipost } from '../models/post.model';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  posts:Ipost[]=[
     {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:1,
      userid:1,
      username: 'ali'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:2,
      userid:2,
      username: 'mona'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:3,
      userid:3,
      username: 'sama'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:4,
      userid:4,
      username: 'alaa'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:5,
      userid:3,
      username: 'sama'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:6,
      userid:5,
      username: 'ahmed'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:7,
      userid:7,
      username: 'osama'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:8,
      userid:6,
      username: 'salem'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:9,
      userid:2,
      username: 'mona'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:10,
      userid:12,
      username: 'sara'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:11,
      userid:4,
      username: 'alaa'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:12,
      userid:1,
      username: 'ali'
    }
  ];

}