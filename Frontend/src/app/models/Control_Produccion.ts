export class Control_ProduccionFull{
    constructor(
      public id_contProduction?: number | null | undefined,
      public externalProcess?: number | null | undefined,

      public tiempoReporte_contProduction?:Date| null | undefined,
      public fechaInicio_contProduction?:Date| null | undefined,
      public fechaFin_contProduction?:Date | null | undefined,

      public tipoIngreso_contProduction?:string | null | undefined,
      public cantIngreso_contProduction?:number | null | undefined,
      public unidadIngreso_contProduction?:string | null | undefined,

      public cantLiquido_contProduction?:number| null | undefined,
      public cantSolido_contProduction?:number| null | undefined,
      public cantGas_contProduction?:number| null | undefined,

      public unidadLiquido_contProduction?:string | null | undefined,
      public unidadSolido_contProduction?:string| null | undefined,
      public unidadGas_contProduction?:string| null | undefined,

      public tipoLiquido_contProduction?:string| null | undefined,
      public tipoSolido_contProduction?:string | null | undefined,
      public tipoGas_contProduction?:string| null | undefined,

    ){

    }
  }
