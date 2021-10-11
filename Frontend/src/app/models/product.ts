export interface Product{
  id?: number;
  reportTime?:Date;
  classification: string;
  description: string;
  measureUnit: string;
  amount: number;
  startDate: Date;
  endDate: Date;
  producedAmount: number;
}
