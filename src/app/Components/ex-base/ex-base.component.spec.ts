import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBaseComponent } from './ex-base.component';

describe('ExBaseComponent', () => {
  let component: ExBaseComponent;
  let fixture: ComponentFixture<ExBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
