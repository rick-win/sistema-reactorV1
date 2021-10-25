import {Time} from "@angular/common";

export interface Production{
  Id_Production?: number
  Tiempo_Reporte?: Date
  Fecha_Inicio: Date
  Fecha_Finalizacion: Date
  Tipo_Ingreso: string
  Cantidad_Ingreso: string
  Unidad_Ingreso: string
  Cantidad_Liquido?: number
  Cantidad_Solido?: number
  Cantidad_Gas?: number
  Unidad_Gas?: string
  Unidad_Liquido?: string
  Unidad_Solido?: string
  Tipo_Liquido?: string
  Tipo_Solido?: string
  Tipo_Gas?: string
}
