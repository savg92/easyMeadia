import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotesListComponent } from './admin-notes-list.component';

describe('AdminNotesListComponent', () => {
  let component: AdminNotesListComponent;
  let fixture: ComponentFixture<AdminNotesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNotesListComponent]
    });
    fixture = TestBed.createComponent(AdminNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
