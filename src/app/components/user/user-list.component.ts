import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { Observable } from 'rxjs';
import { User } from '../common/models/user';
import { ApiService } from '../common/services/api.service';
import { EditRemoveUserRenderer } from './edit-remove-user-renderer.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public frameworkComponents;

  columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true },
    { field: 'userName', sortable: true, filter: true },
    { field: 'firstName', sortable: true, filter: true },
    { field: 'lastName', sortable: true, filter: true },
    { field: 'displayName', sortable: true, filter: true },
    { field: 'status', sortable: true, filter: true },
    { field: 'allowManageHSCUsers', sortable: true, filter: true },
    { field: '', cellRenderer: 'EditRemoveUserRenderer' },
  ];

  rowData: Observable<any[]>;

  constructor(private apiService: ApiService) {
    this.rowData = apiService.getUsers();
    // apiService.getUsers().subscribe({
    //   next: (result) => {
    //     this.rowData = result;
    //   },
    // });
    this.frameworkComponents = {
      EditRemoveUserRenderer: EditRemoveUserRenderer,
    };
  }
}
