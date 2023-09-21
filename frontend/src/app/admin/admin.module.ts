import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAddNoteComponent } from './admin-add-note/admin-add-note.component';
import { AdminNotesListComponent } from './admin-notes-list/admin-notes-list.component';
import { AdminMyNotesComponent } from './admin-my-notes/admin-my-notes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminAddNoteComponent,
    AdminNotesListComponent,
    AdminMyNotesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
  
}
