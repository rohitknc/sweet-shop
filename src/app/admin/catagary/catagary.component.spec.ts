import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagaryComponent } from './catagary.component';

describe('CatagaryComponent', () => {
  let component: CatagaryComponent;
  let fixture: ComponentFixture<CatagaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
