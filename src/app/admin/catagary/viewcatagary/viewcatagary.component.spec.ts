import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatagaryComponent } from './viewcatagary.component';

describe('ViewcatagaryComponent', () => {
  let component: ViewcatagaryComponent;
  let fixture: ComponentFixture<ViewcatagaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcatagaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcatagaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
