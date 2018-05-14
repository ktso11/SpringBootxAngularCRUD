import { UserService } from './services/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { HttpModule} from '@angular/http';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FosterComponent } from './foster/foster.component';
import { CatAddComponent } from './cat-add/cat-add.component';

const appRoutes: Routes = [

  {
    path: 'cats/:id',
    component: CatEditComponent
  },
  {
    path: 'cats',
    component: CatComponent
  },
  {
    path: 'addcat',
    component: CatAddComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatEditComponent,
    FosterComponent,
    CatAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
