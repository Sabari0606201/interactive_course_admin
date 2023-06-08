import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read-quiz',
  templateUrl: './read-quiz.component.html',
  styleUrls: ['./read-quiz.component.css']
})
export class ReadQuizComponent {
  constructor(private service: ApiserviceService) { }

  readQuiz: any;

  ngOnInit(): void {
    this.service.getquiz().subscribe((res) => {
      console.log(res, "res==>");
      this.readQuiz = res.data;
    });
  }
}
