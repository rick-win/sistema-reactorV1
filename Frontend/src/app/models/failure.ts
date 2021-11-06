export interface Failure{
  Sensor_Id_Sensor?: number;
  Alarma_Id_Alarma?: number;
  Fecha_Hora_LogAlarma?: Date;
  Mensaje?: number
  Usuario_Proceso_LogAlarma: string;
  Error_Falla_Indicente_LogAlarma: string;
  Nom_Zona: string;
  Descripcion_LogAlarma: string;
  Estado_LogAlarma: boolean;
  Anotaciones_LogAlarma: string;
  Fecha_Resol: Date;
}
