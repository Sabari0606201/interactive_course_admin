import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadContentsComponent } from './read-contents.component';

describe('ReadContentsComponent', () => {
  let component: ReadContentsComponent;
  let fixture: ComponentFixture<ReadContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
