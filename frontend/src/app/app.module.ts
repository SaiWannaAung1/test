import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { ShowQuizComponent } from './components/public/show-quiz/show-quiz.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/student/course/course.component';
import { CourseDetailComponent } from './components/student/course-detail/course-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularEditorModule } from '@kolkov/angular-editor';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


const appRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}

    ],
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {path: 'course', component: CourseComponent},
        {path: 'course_detail', component: CourseDetailComponent},
      {path: 'quiz', component: ShowQuizComponent}
    ],
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PublicComponent,
    TeacherComponent,
    ShowQuizComponent,
    StudentComponent,
    CourseComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
