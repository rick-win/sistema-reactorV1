export interface Production{
  id?: number;
  reportTime?:Date;
  endDate: Date;
  startDate: Date;
  productType: string;
  productIn: number;
  producedAmount: number;
  measureUnit: string;
  activeProcess: boolean;
  advancePercentage: number;
  remainingTime: string;
  state: string;
}
