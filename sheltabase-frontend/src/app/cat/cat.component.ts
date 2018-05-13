import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
cats: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllCats()
    .subscribe(response =>{this.cats = response.json()})
  }


}
