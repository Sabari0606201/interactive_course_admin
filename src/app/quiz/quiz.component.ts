import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private service: ApiserviceService) { }
  result: any;
  id: any;
  ngOnInit() {
    this.service.gettopics().subscribe((res) => {
      this.result = res.data;
    })
  }

  userForm = new FormGroup({
    'topicid': new FormControl('', Validators.required),
    'question': new FormControl('', Validators.required),
    'optiona': new FormControl('', Validators.required),
    'optionb': new FormControl('', Validators.required),
    'optionc': new FormControl('', Validators.required),
    'optiond': new FormControl('', Validators.required),
    'answer': new FormControl('', Validators.required),
  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createquiz(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }
}
