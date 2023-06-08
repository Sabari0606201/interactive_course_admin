import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './contents/create.component';
import { HomeComponent } from './course/home.component';
import { ReadContentsComponent } from './read-contents/read-contents.component';
import { ReadCourseComponent } from './read-course/read-course.component';
import { ReadTopicsComponent } from './read-topics/read-topics.component';


import { ReadComponent } from './read/read.component';
import { ReadsubtopicsComponent } from './readsubtopics/readsubtopics.component';
import { SubtopicsComponent } from './subtopics/subtopics.component';
import { ContentsComponent } from './topics/contents.component';
import { QuizComponent } from './quiz/quiz.component';
import { TaskComponent } from './task/task.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadQuizComponent } from './read-quiz/read-quiz.component';
import { ReadTaskComponent } from './read-task/read-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'course', component: HomeComponent
  },
  {
    path: 'topics/:courseid', component: ContentsComponent
  },
  {
    path: 'subtopics', component: SubtopicsComponent
  },
  {
    path: 'readcontents', component: ReadContentsComponent
  },
  {
    path: 'readcourse', component: ReadCourseComponent
  },
  {
    path: 'readtopics/:courseid', component: ReadTopicsComponent
  },
  {
    path: 'readsubtopics', component: ReadsubtopicsComponent
  },
  {
    path: 'quiz', component: QuizComponent
  },
  {
    path: 'task', component: TaskComponent
  },

  { path: 'contents', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'readQuiz', component: ReadQuizComponent },
  { path: 'readtask/:topicid', component: ReadTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
