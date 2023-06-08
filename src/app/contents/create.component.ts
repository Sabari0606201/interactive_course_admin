import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  result: any;
  ngOnInit(): void {
    this.service.getsubtopics().subscribe((res) => {
      this.result = res.data;
    })
  }

  userForm = new FormGroup({

    'subtopicid': new FormControl('', Validators.required),
    'contents': new FormControl('', Validators.required),

  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createcontent(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }

}
