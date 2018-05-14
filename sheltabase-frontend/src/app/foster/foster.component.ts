import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-foster',
  templateUrl: './foster.component.html',
  styleUrls: ['./foster.component.css']
})
export class FosterComponent implements OnInit {
  fosters: Array<any>;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getAllFosters()
    .subscribe(response =>{this.fosters = response.json()})
  }
}
