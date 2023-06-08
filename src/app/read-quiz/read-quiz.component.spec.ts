import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuizComponent } from './read-quiz.component';

describe('ReadQuizComponent', () => {
  let component: ReadQuizComponent;
  let fixture: ComponentFixture<ReadQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
