import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsubtopicsComponent } from './readsubtopics.component';

describe('ReadsubtopicsComponent', () => {
  let component: ReadsubtopicsComponent;
  let fixture: ComponentFixture<ReadsubtopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadsubtopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadsubtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
