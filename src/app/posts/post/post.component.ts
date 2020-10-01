import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: any;
  public userName:any;
  constructor(private api : ApiService){
    this.api.posts(`https://jsonplaceholder.typicode.com/posts`)
    .then(p=>{
     console.log(p);
     this.post = p;
    }).catch( e => console.log(e));
    this.api.getUsers(`https://jsonplaceholder.typicode.com/users`)
    .then( u => {
      this.userName = u;
      console.log(this.userName);
    })
  }

  ngOnInit(): void {

  }

}
