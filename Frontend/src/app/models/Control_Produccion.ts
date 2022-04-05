export class Control_ProduccionFull{
    constructor(
      public id_contProduc?: number | null | undefined,
      public tiempoReporte_contProduc?:Date| null | undefined,
      public fechaInicio_contProduc?:Date| null | undefined,
      public fechaFin_contProduc?:Date | null | undefined,
      public tipoIngreso_contProduc?:string | null | undefined,
      public cantIngreso_contProduc?:number | null | undefined,

      
      public cantLiquido_contProduc?:number| null | undefined,
      public  cantSolido_contProduc?:number| null | undefined,

      public cantGas_contProduc?:number| null | undefined,
      public unidadLiquido_contProduc?:string | null | undefined,

      public unidadSolido_contProduc?:string| null | undefined,
      public  unidadGas_contProduc?:string| null | undefined,

      public tipoLiquido_contProduc?:string| null | undefined,
      public tipoSolido_contProduc?:string | null | undefined,

      public unidadIngreso_contProduc?:string| null | undefined,
      public tipoGas_contProduc?:string| null | undefined,
    
    ){
  
    }
  }
  