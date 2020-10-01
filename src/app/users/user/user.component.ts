import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public posts : any = [];
  public allUsers:any = [];

  constructor(private api : ApiService) {
    this.api.getUsers(`https://jsonplaceholder.typicode.com/users`)
    .then(user => {
        this.allUsers = user;
    });
    this.api.posts(`https://jsonplaceholder.typicode.com/posts`)
    .then(p => {
      this.posts = p;
      console.log(this.posts);
    })
  }

  ngOnInit(): void {
  }

}
