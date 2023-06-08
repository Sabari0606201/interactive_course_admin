import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  readcourse: any;
  ngOnInit(): void {
    this.service.getcourse().subscribe((res) => {
      console.log(res, "res==>");
      this.readcourse = res.data;
    });
  }

  userForm = new FormGroup({
    'programming_course': new FormControl('', Validators.required),
  });
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createcourse(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    }
    else {
      console.log(`all field is required`);
    }
  }





}
