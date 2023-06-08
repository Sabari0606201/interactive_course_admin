import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read-contents',
  templateUrl: './read-contents.component.html',
  styleUrls: ['./read-contents.component.css']
})
export class ReadContentsComponent {
  constructor(private service:ApiserviceService){ }

  readData:any; 
  
  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
         this.readData = res.data;
    });
  }
  
}
