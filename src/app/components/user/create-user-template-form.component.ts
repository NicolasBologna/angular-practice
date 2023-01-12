import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../common/services/api.service';
import { User, UserStatus } from '../common/models/user';

@Component({
  selector: 'create-user-template',
  templateUrl: './create-user-template-form.component.html',
  styleUrls: [],
})
export class CreateUserTemplateFormComponent {
  public model: User = new User(0, '', '', '', '', UserStatus.active, false);
  public readonly possibleStatus: string[] = <string[]>(
    Object.values(UserStatus)
  );
  @ViewChild('userForm', { static: true }) userForm!: NgForm;

  constructor(
    private apiService: ApiService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}
  addUser() {
    console.log(this.model);
    this.apiService.createUser(this.model).subscribe({
      next: (user: User) => {
        console.log(user);
      },
    });
    this.userForm.reset();
    this.resetModel();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  clearInputs() {
    this.userForm.reset();
    this.resetModel();
  }

  resetModel() {
    this.model = new User(0, '', '', '', '', UserStatus.active, false);
  }
}
