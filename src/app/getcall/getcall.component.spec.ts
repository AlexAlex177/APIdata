import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcallComponent } from './getcall.component';

describe('GetcallComponent', () => {
  let component: GetcallComponent;
  let fixture: ComponentFixture<GetcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
