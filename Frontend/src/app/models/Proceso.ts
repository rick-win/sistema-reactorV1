export class ProcesoFull{
    constructor(
      public id_Proceso?: number | null | undefined,
      public TOLVA_id_Tolva?: number | null | undefined,
      public datetime_proceso?: Date | null | undefined,
      public horaReporte_proceso?: Date | null | undefined,
      public operador_proceso?: string | null | undefined,
      public anotaciones_proceso?: string | null | undefined,
      public exito_proceso?: string | null | undefined,
      public verificarEnergia_proceso?: boolean | null | undefined,
      public consumoEnergia_proceso?: number | null | undefined,
      public cierreVerificado?: boolean | null | undefined,
    ){

    }
  }
