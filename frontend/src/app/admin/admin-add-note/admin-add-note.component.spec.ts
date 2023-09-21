import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNoteComponent } from './admin-add-note.component';

describe('AdminAddNoteComponent', () => {
  let component: AdminAddNoteComponent;
  let fixture: ComponentFixture<AdminAddNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddNoteComponent]
    });
    fixture = TestBed.createComponent(AdminAddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
