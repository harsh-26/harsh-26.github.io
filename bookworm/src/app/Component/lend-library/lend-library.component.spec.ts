import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendLibraryComponent } from './lend-library.component';

describe('LendLibraryComponent', () => {
  let component: LendLibraryComponent;
  let fixture: ComponentFixture<LendLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
