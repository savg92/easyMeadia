import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyNotesComponent } from './admin-my-notes.component';

describe('AdminMyNotesComponent', () => {
  let component: AdminMyNotesComponent;
  let fixture: ComponentFixture<AdminMyNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMyNotesComponent]
    });
    fixture = TestBed.createComponent(AdminMyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
