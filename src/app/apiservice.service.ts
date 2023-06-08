import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  public courseid: any;
  setid(id: any) {
    this.courseid = id;
  }

  //frontend to backend

  apiUrl = 'http://localhost:3000/';

  //get all data

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `admincontent`);
  }
  getcourse(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `admincourse`);
  }
  id: any;
  gettopics(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `topics/` + `${this.courseid}`);

  }
  getsubtopics(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `adminsubtopics`);
  }
  getquiz(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `adminQuiz`)
  }
  getTask(): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `adminTask`)
  }

  getSelectCourse(cid: any): Observable<any> {
    return this._http.get(`${this.apiUrl}` + `selectcourse/${cid}`)
  }
  courseId(cid: any) {
    return this._http.get(`http://localhost:3000/courseId/${cid}`);
  }
  topicId(cid: any) {
    return this._http.get(`http://localhost:3000/topicId/${cid}`);
  }

  //create data

  createcontent(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `contents`, data);
  }

  createtopics(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `topics`, data);
  }
  createcourse(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `course`, data);
  }
  createsubtopics(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `subtopics`, data);
  }

  createquiz(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `adminquiz`, data);
  }

  createtask(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}` + `admintask`, data);
  }



  //Delete
  DeleteCourse(courseId: any): Observable<any> {
    return this._http.delete(`${this.apiUrl}` + `deleteCourse/` + `${courseId}`)
  }


  getid() {
    return this.courseid;
  }

}
