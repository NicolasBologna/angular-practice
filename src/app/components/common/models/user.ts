export class User {
  constructor(
    public Id: number,
    public UserName: string,
    public FirstName: string,
    public LastName: string,
    public DisplayName: string,
    public Status?: UserStatus,
    public AllowManageHSCUsers?: boolean
  ) {}
}

export enum UserStatus {
  active = 'Active',
  inactive = 'Inactive',
}
