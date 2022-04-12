export class ProcesoFull{
    constructor(
      // public TOLVA_id_Tolva?: number | null | undefined,
      public id_Proceso?: number | null | undefined,
      public horaCorrida_Proceso?: Date | null | undefined,
      public horaReporte_Proceso?: Date | null | undefined,
      public operador_Proceso?: string | null | undefined,
      public annotations_Proceso?: string | null | undefined,
      public prod_Data?: string | null | undefined,
      public success_proceso?: boolean | null | undefined,
      public verificarEnergia_Proceso?: boolean | null | undefined,
      public verificarCierre_Proceso?: boolean | null | undefined,

    ){

    }
  }
