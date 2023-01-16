import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcallComponent } from './postcall.component';

describe('PostcallComponent', () => {
  let component: PostcallComponent;
  let fixture: ComponentFixture<PostcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
