import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTopicsComponent } from './read-topics.component';

describe('ReadTopicsComponent', () => {
  let component: ReadTopicsComponent;
  let fixture: ComponentFixture<ReadTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
