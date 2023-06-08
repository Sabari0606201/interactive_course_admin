import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-task',
  templateUrl: './read-task.component.html',
  styleUrls: ['./read-task.component.css']
})
export class ReadTaskComponent {
  topicid: any;
  constructor(private service: ApiserviceService, private route: ActivatedRoute) { }

  readTask: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicid = +params['topicid'];
      this.gettask();
    })
  }


  gettask() {
    this.service.topicId(this.topicid).subscribe((res: any) => {
      console.log(res, "res==>");
      this.readTask = res.data;
    });
  }
}