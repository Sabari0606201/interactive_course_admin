import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.css']
})
export class SubtopicsComponent {
  constructor(private service: ApiserviceService) { }
  result: any;
  id: any;
  ngOnInit(): void {
    this.service.gettopics().subscribe((res) => {
      this.result = res.data;
    })
  }

  userForm = new FormGroup({
    'topicid': new FormControl('', Validators.required),
    'subtopicname': new FormControl('', Validators.required),

  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createsubtopics(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }
}
