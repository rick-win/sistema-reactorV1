export interface Failure{
  id?: number;
  reportTime?: Date;
  date: Date;
  failureType: string;
  zone: string;
  failureDesc: string;
  solved: boolean;
  annotations: string;
}
