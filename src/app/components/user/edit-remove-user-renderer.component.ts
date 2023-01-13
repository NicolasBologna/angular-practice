import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'edit-remove-user-component',
  template: `
    <span>
      <button (click)="buttonClicked()">Edit</button>
      <button (click)="buttonClicked()">Remove</button>
    </span>
  `,
})
export class EditRemoveUserRenderer implements AgRendererComponent {
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {}

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    return true;
  }

  buttonClicked() {}

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
