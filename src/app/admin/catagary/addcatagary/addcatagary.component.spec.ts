import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatagaryComponent } from './addcatagary.component';

describe('AddcatagaryComponent', () => {
  let component: AddcatagaryComponent;
  let fixture: ComponentFixture<AddcatagaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcatagaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcatagaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
