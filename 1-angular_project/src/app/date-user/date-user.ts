import { Component, Input } from '@angular/core';
import { Iuser } from '../models/user.model';

@Component({
  selector: 'app-date-user',
  standalone: false,
  templateUrl: './date-user.html',
  styleUrl: './date-user.css'
})
export class DateUser {
  users: Iuser[]= [
    {
      "id": 1,
      "name": "maostafa tarek",
      "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      "password": "123"
    },
    {
      "id": 2,
      "name": "mana ali",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 3,
      "name": "sama ahmed",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 4,
      "name": "alaa ahmed",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 5,
      "name": "ahmed eldanan",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 6,
      "name": "salem salem",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 7,
      "name": "osama ahmed",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 8,
      "name": "fathy galal",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 9,
      "name": "samy saad",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 10,
      "name": "mariem khaled",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 11,
      "name": "safa omran",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
    {
      "id": 12,
      "name": "sara sameh",
      "imgurl": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "password": "356"
    },
  ]
   @Input() userid!:number;
  @Input()date_create !:Date;
  user !:Iuser
   ngOnInit(): void {

    this.user = this.users.find(u => u.id === this.userid)!;
  }
}
