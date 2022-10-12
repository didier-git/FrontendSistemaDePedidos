/* tslint:disable */
/* eslint-disable */
import { ProductoDto } from './producto-dto';
export interface PedidoDto {
  detalle?: null | Array<ProductoDto>;
  direccion?: null | string;
  id?: null | number;
  identificacion?: null | string;
  nombre?: null | string;
  telefono?: null | string;
}
