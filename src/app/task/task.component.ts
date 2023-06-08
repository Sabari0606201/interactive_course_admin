import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private service: ApiserviceService) { }

  id: any;
  result: any;
  ngOnInit() {
    this.service.gettopics().subscribe((res) => {
      this.result = res.data;
    })
  }

  userForm = new FormGroup({
    'topicid': new FormControl('', Validators.required),
    'question': new FormControl('', Validators.required),
    'constraints': new FormControl('', Validators.required),
    'input': new FormControl('', Validators.required),
    'expected_output': new FormControl('', Validators.required),

  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createtask(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }
}
