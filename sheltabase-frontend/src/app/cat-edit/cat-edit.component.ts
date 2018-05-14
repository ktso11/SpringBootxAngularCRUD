import { UserService } from './../services/user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  cat: any = {};
  sub: Subscription;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.get(id)
      .subscribe(response =>{this.cat = response.json()})
      console.log(`Grabbed '${id}'`);
    });
  }
  remove(){
    this.userService.remove(this.cat.id).subscribe(respond=>
      { this.router.navigate(['/cats'])})
  }

  save(){
    this.userService.save(this.cat).subscribe(respond=>console.log(respond))
  }


}
