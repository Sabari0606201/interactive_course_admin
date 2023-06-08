import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read-course',
  templateUrl: './read-course.component.html',
  styleUrls: ['./read-course.component.css']
})
export class ReadCourseComponent {
  constructor(private service: ApiserviceService) { }

  readData: any;
  readcourse: any;

  ngOnInit(): void {
    this.service.getcourse().subscribe((res) => {
      console.log(res, "res==>");
      this.readcourse = res.data;
    });
    // this.service.DeleteCourse(id).subscribe((res){
    //   console.log(res, "res==>");
    // })
  }
  delete(id: any) {
    console.log(id, "id");

    this.service.DeleteCourse(id).subscribe((res) => {
      console.log(res, "deleted");
      this.service.getcourse().subscribe((res) => {
        console.log(res, "res==>");
        this.readcourse = res.data;
      });
    });
  }
}
