import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgenerateComponent } from './modalgenerate.component';

describe('ModalgenerateComponent', () => {
  let component: ModalgenerateComponent;
  let fixture: ComponentFixture<ModalgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalgenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
