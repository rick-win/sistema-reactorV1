export interface Process{
  id?: number;
  reportTime?: Date;
  date: Date;
  operator: string;
  powerVerify: boolean;
  closeVerify: boolean;
  success: boolean;
  annotations: string;
}
