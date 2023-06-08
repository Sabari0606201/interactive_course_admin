import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-readsubtopics',
  templateUrl: './readsubtopics.component.html',
  styleUrls: ['./readsubtopics.component.css']
})
export class ReadsubtopicsComponent {
  constructor(private service:ApiserviceService){ }

  readsubtopics:any; 
  
  ngOnInit(): void {
    this.service.getsubtopics().subscribe((res)=>{
      console.log(res,"res==>");
         this.readsubtopics = res.data;
    });
  }
  
}
