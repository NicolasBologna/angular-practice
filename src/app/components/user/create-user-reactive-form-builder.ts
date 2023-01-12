import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User, UserStatus } from '../common/models/user';
import { ApiService } from '../common/services/api.service';
import { startsWithCapitalValidator } from '../directives/startWithCapital.directive';

@Component({
  selector: 'create-user-reactive-builder',
  templateUrl: './create-user-reactive-form-builder.template.html',
})
export class CreateUserReactiveFormBuilderComponent {
  public userForm: FormGroup = this.formBuilder.group({
    userName: [
      '',
      [Validators.required, Validators.maxLength(50), Validators.email],
    ],
    firstName: [
      '',
      [
        Validators.required,
        Validators.maxLength(25),
        startsWithCapitalValidator(),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(25),
        startsWithCapitalValidator(),
      ],
    ],
    displayName: ['', [Validators.required]],
    status: [''],
    allowManageHSCUsers: [''],
  });

  public readonly possibleStatus: string[] = <string[]>(
    Object.values(UserStatus)
  );

  constructor(
    private apiService: ApiService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  addUser() {
    this.apiService.createUser(this.userForm.value).subscribe({
      next: (user: User) => {
        console.log(user);
      },
    });
    this.resetForm();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  resetForm() {
    this.userForm.reset({
      status: 'Active',
    });
  }

  get userName() {
    return this.userForm.get('userName')!;
  }

  get firstName() {
    return this.userForm.get('firstName')!;
  }

  get lastName() {
    return this.userForm.get('lastName')!;
  }

  get displayName() {
    return this.userForm.get('displayName')!;
  }
}
