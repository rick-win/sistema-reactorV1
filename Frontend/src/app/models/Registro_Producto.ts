export class Registro_ProductoFull{
    constructor(
      public id_regProducto?: number | null | undefined,
      public cantProducto_regProducto?: number | null | undefined,
      public tipoProducto_regProducto?: string  | null | undefined,
      public subProducto_regProducto?: string| null | undefined,
      public unidadMedida_regProducto?: string| null | undefined,
      public detalle_regProducto?: string | null | undefined,
      public  detetime_regProducto?: Date | null | undefined,
    
    ){
  
    }
  }
  