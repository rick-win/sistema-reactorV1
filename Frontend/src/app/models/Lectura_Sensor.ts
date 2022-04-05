export class Lectura_SensorFull{
    constructor(
      public  id_LecturaSensor?: bigint| null | undefined,
      public  SENSOR_id_Sensor?: number| null | undefined,
      public datetiime_LecturaSensor?: Date| null | undefined,
      public codSensor_LecturaSensor?: string  | null | undefined,
      public  medida_LecturaSensor?: number| null | undefined,
      public modoTornillo_LecturaSensor?: boolean| null | undefined,
    
    ){
  
    }
  }