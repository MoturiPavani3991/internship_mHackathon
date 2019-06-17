import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsortedlistComponent } from './viewsortedlist.component';

describe('ViewsortedlistComponent', () => {
  let component: ViewsortedlistComponent;
  let fixture: ComponentFixture<ViewsortedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsortedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsortedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
