import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtDetailsComponent } from './yacht-details.component';

describe('YachtDetailsComponent', () => {
  let component: YachtDetailsComponent;
  let fixture: ComponentFixture<YachtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YachtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
