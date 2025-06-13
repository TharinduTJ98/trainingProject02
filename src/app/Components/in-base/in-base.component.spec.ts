import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBaseComponent } from './in-base.component';

describe('InBaseComponent', () => {
  let component: InBaseComponent;
  let fixture: ComponentFixture<InBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
