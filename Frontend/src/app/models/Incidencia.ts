export class Incidencia{
  constructor(
    public id_Incidencia?: bigint| null | undefined,
    public horaReporte_Incidencia?: Date| null | undefined,
    public operario_Incidencia?: string  | null | undefined,
    public incidente_Incidencia?: string| null | undefined,
    public zona_Incidencia?: string| null | undefined,
    public desc_Incidencia?: string| null | undefined,
    public resuelto_Incidencia?: boolean| null | undefined,
    public annotations_Incidencia?: string| null | undefined,

  ){

  }
}
