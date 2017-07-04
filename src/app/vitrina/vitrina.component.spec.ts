import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinaComponent } from './vitrina.component';

describe('VitrinaComponent', () => {
  let component: VitrinaComponent;
  let fixture: ComponentFixture<VitrinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
