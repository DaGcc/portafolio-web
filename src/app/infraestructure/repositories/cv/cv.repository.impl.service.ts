import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CvEntity } from '@domain/entities/cv.entity';
import { CvReporitory } from '@domain/repositories/cv/cv.repository';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CvRepositoryImplService extends CvReporitory{

  private readonly _http : HttpClient = inject(HttpClient)
  
  // private readonly _url : string = `http://${environment.IP_APP}:${environment.PORT_APP}`

  constructor() { 
    super();
  }

  /**
   * @description petición para obtener la data del cv en formato `json`, ejp: `assets/json/cv.json`, por defecto la petición empezara a buscar en el directorio raiz.
   * @param jsonName ruta del archivo json con los datos necesarios
   * @returns un observable con tipo `CvEntity`
   */
  override readFileJsonCV( jsonName : string ): Observable<CvEntity> {
    return this._http.get<CvEntity>(`${jsonName}`);
  }

  override getFileCv(filePath: string): Observable<Blob> {
    return this._http.get( filePath,  { 
      responseType : 'blob'
    });
  }


}
