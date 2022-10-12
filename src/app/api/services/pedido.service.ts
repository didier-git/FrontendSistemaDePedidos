/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PedidoDto } from '../models/pedido-dto';

@Injectable({
  providedIn: 'root',
})
export class PedidoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPedidoCreatePedidoPost
   */
  static readonly ApiPedidoCreatePedidoPostPath = '/Api/Pedido/CreatePedido';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoCreatePedidoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPedidoCreatePedidoPost$Plain$Response(params?: {
    context?: HttpContext
    body?: PedidoDto
  }
): Observable<StrictHttpResponse<PedidoDto>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoCreatePedidoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PedidoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoCreatePedidoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPedidoCreatePedidoPost$Plain(params?: {
    context?: HttpContext
    body?: PedidoDto
  }
): Observable<PedidoDto> {

    return this.apiPedidoCreatePedidoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PedidoDto>) => r.body as PedidoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoCreatePedidoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPedidoCreatePedidoPost$Json$Response(params?: {
    context?: HttpContext
    body?: PedidoDto
  }
): Observable<StrictHttpResponse<PedidoDto>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoCreatePedidoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PedidoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoCreatePedidoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPedidoCreatePedidoPost$Json(params?: {
    context?: HttpContext
    body?: PedidoDto
  }
): Observable<PedidoDto> {

    return this.apiPedidoCreatePedidoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PedidoDto>) => r.body as PedidoDto)
    );
  }

  /**
   * Path part for operation apiPedidoGetPedidoGet
   */
  static readonly ApiPedidoGetPedidoGetPath = '/Api/Pedido/GetPedido';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoGetPedidoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetPedidoGet$Plain$Response(params?: {
    IdPedido?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PedidoDto>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoGetPedidoGetPath, 'get');
    if (params) {
      rb.query('IdPedido', params.IdPedido, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PedidoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoGetPedidoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetPedidoGet$Plain(params?: {
    IdPedido?: number;
    context?: HttpContext
  }
): Observable<PedidoDto> {

    return this.apiPedidoGetPedidoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PedidoDto>) => r.body as PedidoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoGetPedidoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetPedidoGet$Json$Response(params?: {
    IdPedido?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PedidoDto>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoGetPedidoGetPath, 'get');
    if (params) {
      rb.query('IdPedido', params.IdPedido, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PedidoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoGetPedidoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetPedidoGet$Json(params?: {
    IdPedido?: number;
    context?: HttpContext
  }
): Observable<PedidoDto> {

    return this.apiPedidoGetPedidoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PedidoDto>) => r.body as PedidoDto)
    );
  }

  /**
   * Path part for operation apiPedidoGetListaPedidosGet
   */
  static readonly ApiPedidoGetListaPedidosGetPath = '/Api/Pedido/GetListaPedidos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoGetListaPedidosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetListaPedidosGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PedidoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoGetListaPedidosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PedidoDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoGetListaPedidosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetListaPedidosGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<PedidoDto>> {

    return this.apiPedidoGetListaPedidosGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PedidoDto>>) => r.body as Array<PedidoDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPedidoGetListaPedidosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetListaPedidosGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PedidoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PedidoService.ApiPedidoGetListaPedidosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PedidoDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPedidoGetListaPedidosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPedidoGetListaPedidosGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<PedidoDto>> {

    return this.apiPedidoGetListaPedidosGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PedidoDto>>) => r.body as Array<PedidoDto>)
    );
  }

}
