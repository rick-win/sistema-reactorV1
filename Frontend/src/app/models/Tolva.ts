export class TolvaFull{
  constructor(
    public id_Tolva?: number | null | undefined,
    public estadoTapa_Tolva?: boolean | null | undefined,
    public indicadorPresion_Tolva?: number | null | undefined,
    public tipoMaterial_Tolva?: string | null | undefined,
    public cantMaterial_Tolva?: number | null | undefined,
    public datetimeCargue_Tolva?: Date | null | undefined,
    public horaReporte_Tolva?: Date | null | undefined
  ){

  }
}
