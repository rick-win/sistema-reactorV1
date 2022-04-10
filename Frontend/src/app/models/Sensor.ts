export class SensorFull{
    constructor(
      public id_Sensor?: number | null | undefined,
      public cod_Sensor?: string | null | undefined,
      public zona_Sensor?: string | null | undefined,
      public unidadMedida_Sensor?: string| null | undefined,
      public serial_Sensor?: string| null | undefined,
      public marca_Sensor?: string| null | undefined,
      public  modelo_Sensor?: string | null | undefined,
      public  fechaInstalacion_Sensor?: Date | null | undefined,
      public   fechaBajada_Sensor?: Date | null | undefined,
      public   proposito_Sensor?: string | null | undefined,
      public  tipoOperacionDato_Sensor?: Date | null | undefined,
    
    ){
  
    }
  }