export interface UserForCreationDto {
  Id: number;
  UserName: string;
  FirstName: string;
  LastName: string;
  DisplayName: string;
  Status?: number;
  AllowManageHSCUsers?: boolean;
}
