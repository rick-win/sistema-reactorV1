export interface Process{
  Id_Proceso?: number;
  reportTime_Proceso?: Date;
  date_Proceso: Date;
  operator_Proceso: string;
  powerVerify_Proceso: boolean;
  closeVerify_Proceso: boolean;
  initial_Config: string;
  temp_Start: number;
  prod_Data: string;
  success_Proceso: boolean;
  annotations_Proceso: string;
}
