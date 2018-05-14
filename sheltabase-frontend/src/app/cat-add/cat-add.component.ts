import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {
cat = {
  name:'',
  location: ''
}
  constructor(private userService: UserService,private router:Router){}

  ngOnInit() {
  }
  add(){
    this.userService.add(this.cat).subscribe(respond=>
    { this.router.navigate(['/cats'])})
  }
}
