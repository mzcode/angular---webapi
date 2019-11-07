import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynotfoundComponent } from './mynotfound.component';

describe('MynotfoundComponent', () => {
  let component: MynotfoundComponent;
  let fixture: ComponentFixture<MynotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
