export class Registro_ProductoFull{
    constructor(
      public parentProcess?: number | null | undefined,
      public id_regProducto?: number | null | undefined,
      public cantProducto_regProducto?: number | null | undefined,
      public tipoProducto_regProducto?: string  | null | undefined,
      public subProducto_regProducto?: string| null | undefined,
      public unidadMedida_regProducto?: string| null | undefined,
      public catalizador?: boolean| null | undefined,
      public catalizador_Cant?: number| null | undefined,
      public catalizador_Med?: string| null | undefined,
      public detalle_regProducto?: string | null | undefined,
      public datetime_regProducto?: Date | null | undefined,

    ){

    }
  }
