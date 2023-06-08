import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  result: any
  ngOnInit(): void {
    this.service.getcourse().subscribe((res) => {
      this.result = res.data;
      console.log("topic", this.result);

    })
  }

  userForm = new FormGroup({
    'courseid': new FormControl('', Validators.required),
    //'courseid': new FormControl('', Validators.required),
    'topics': new FormControl('', Validators.required),

  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createtopics(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }


  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption!: string;

}
