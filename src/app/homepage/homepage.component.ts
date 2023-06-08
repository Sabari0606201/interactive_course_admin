import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
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


  userForm = new FormGroup({
    'programming_course': new FormControl('', Validators.required),
  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createcourse(this.userForm.value).subscribe((res) => {
        this.service.getcourse().subscribe((res) => {
          console.log(res, "res==>");
          this.readcourse = res.data;
        });
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }

  topics(id: any) {
    this.service.courseId(id).subscribe((res: any) => {
      window.location.href = `/readtopics/${id}`;
    })

  }

  // console.log("id", id);
  // this.service.setid(id);

  // this.service.gettopics().subscribe((res) => {

  //   console.log(res, "res==>");
  //   this.readcourse = res.data;
  // });


}
