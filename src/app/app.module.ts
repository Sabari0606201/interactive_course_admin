import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './contents/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadComponent } from './read/read.component';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './course/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ContentsComponent } from './topics/contents.component';

import { ReadTopicsComponent } from './read-topics/read-topics.component';
import { ReadContentsComponent } from './read-contents/read-contents.component';
import { ReadCourseComponent } from './read-course/read-course.component';
import { SubtopicsComponent } from './subtopics/subtopics.component';
import { ReadsubtopicsComponent } from './readsubtopics/readsubtopics.component';
import { QuizComponent } from './quiz/quiz.component';
import { TaskComponent } from './task/task.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { ReadQuizComponent } from './read-quiz/read-quiz.component';
import { ReadTaskComponent } from './read-task/read-task.component'



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent, ReadComponent, HeaderComponent, SidenavComponent, HomeComponent, ContentsComponent, ReadTopicsComponent, ReadContentsComponent, ReadCourseComponent, SubtopicsComponent, ReadsubtopicsComponent, QuizComponent, TaskComponent, HomepageComponent, ReadQuizComponent, ReadTaskComponent
  ],
  imports: [
    BrowserModule, MatButtonModule,
    AppRoutingModule, MatMenuModule, BrowserAnimationsModule, MatCardModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
