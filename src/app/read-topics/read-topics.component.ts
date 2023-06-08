import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-topics',
  templateUrl: './read-topics.component.html',
  styleUrls: ['./read-topics.component.css']
})
export class ReadTopicsComponent {

  constructor(private service: ApiserviceService, private route: ActivatedRoute) { }

  readtopics: any;
  id: any
  result: any;
  courseid: any;
  courseid_data: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseid = +params['courseid'];
      this.getCourseId();
    });


    this.service.gettopics().subscribe((res) => {
      console.log(res, "res==>");
      this.readtopics = res.data;
    });

    this.service.getSelectCourse(this.courseid).subscribe((res) => {
      this.result = res.data;
      console.log("topic", this.result);

    })
  }

  userForm = new FormGroup({
    'courseid': new FormControl('', Validators.required),
    //'courseid': new FormControl('', Validators.required),
    'topics': new FormControl('', Validators.required),

  });


  getCourseId() {
    this.service.courseId(this.courseid).subscribe((response: any) => {
      this.courseid_data = response.data;
      console.log(response.data, "response.data");

    })
  }

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createtopics(this.userForm.value).subscribe((res) => {
        this.getCourseId();
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }


  gettask(topicid: any) {
    console.log(topicid);

    this.service.topicId(topicid).subscribe((res: any) => {
      window.location.href = `/readtask/${topicid}`;
    })

  }
}
