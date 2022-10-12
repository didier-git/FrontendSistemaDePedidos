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

import { ProductoDto } from '../models/producto-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductoCreateProductoPost
   */
  static readonly ApiProductoCreateProductoPostPath = '/Api/Producto/CreateProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoCreateProductoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoCreateProductoPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ProductoDto
  }
): Observable<StrictHttpResponse<ProductoDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoCreateProductoPostPath, 'post');
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
        return r as StrictHttpResponse<ProductoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoCreateProductoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoCreateProductoPost$Plain(params?: {
    context?: HttpContext
    body?: ProductoDto
  }
): Observable<ProductoDto> {

    return this.apiProductoCreateProductoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductoDto>) => r.body as ProductoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoCreateProductoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoCreateProductoPost$Json$Response(params?: {
    context?: HttpContext
    body?: ProductoDto
  }
): Observable<StrictHttpResponse<ProductoDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoCreateProductoPostPath, 'post');
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
        return r as StrictHttpResponse<ProductoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoCreateProductoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoCreateProductoPost$Json(params?: {
    context?: HttpContext
    body?: ProductoDto
  }
): Observable<ProductoDto> {

    return this.apiProductoCreateProductoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductoDto>) => r.body as ProductoDto)
    );
  }

  /**
   * Path part for operation apiProductoGetListaDeProductosGet
   */
  static readonly ApiProductoGetListaDeProductosGetPath = '/Api/Producto/GetListaDeProductos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGetListaDeProductosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetListaDeProductosGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ProductoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetListaDeProductosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductoDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGetListaDeProductosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetListaDeProductosGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ProductoDto>> {

    return this.apiProductoGetListaDeProductosGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductoDto>>) => r.body as Array<ProductoDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGetListaDeProductosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetListaDeProductosGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ProductoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetListaDeProductosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductoDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGetListaDeProductosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetListaDeProductosGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ProductoDto>> {

    return this.apiProductoGetListaDeProductosGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductoDto>>) => r.body as Array<ProductoDto>)
    );
  }

  /**
   * Path part for operation apiProductoGetProductoGet
   */
  static readonly ApiProductoGetProductoGetPath = '/Api/Producto/GetProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGetProductoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetProductoGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductoDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetProductoGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGetProductoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetProductoGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ProductoDto> {

    return this.apiProductoGetProductoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductoDto>) => r.body as ProductoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGetProductoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetProductoGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductoDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetProductoGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGetProductoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGetProductoGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ProductoDto> {

    return this.apiProductoGetProductoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductoDto>) => r.body as ProductoDto)
    );
  }

}
