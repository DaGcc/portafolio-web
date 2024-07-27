import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _document : Document = inject(DOCUMENT);

  private _isDark : WritableSignal<boolean> = signal<boolean>(false);


  public readonly isDark = computed(() => { 
    return this._isDark();
  }) 

  constructor() { 
    this.initStateStorageMode().subscribe({
      next : (data : boolean) => {
        console.info("El tema es: "+ data ? "WHITE" : "DARK")
        this.setTheme();
      }
    });
  }

  /**
   * @description Función que inicializara tipo de modo, evaluando el storage del navegador
   * @returns un `Observable` de tipo `boolean`
   */
  private initStateStorageMode() : Observable<boolean>{
    const valueMode : string | null = sessionStorage.getItem(environment.THEME_MODE);
    this._isDark.set( typeof valueMode === 'string' ? (valueMode === 'true') :  false );
    this.toggleStateStorage(this._isDark());
    return of<boolean>(this._isDark());
  }


  /**
   * @description Función que orquestara la lógica necesaria para el cambio de modo `DARK` o `WHITE`, sera usado fuera de este servicio para interactuar con el modo de página
   */
  toggleThemeMode() : void {
    this._isDark.update((prevValue) => !prevValue )
    this.toggleStateStorage(this._isDark());
    this.setTheme();
  }

  /**
   * @description Función que modificara el tema del elemento `body` del documento en base al signal `_isDark`
   * 
   */
  private setTheme() : void{
    if(this._isDark()){
      this._document.body.classList.add('dark-mode')
      return;
    }
    this._document.body.classList.remove('dark-mode')
    console.log(this._document.body.classList)
  }

  /**
   * @description Método para mainpular el storage del navegador y cambiar los valores del item `THEME_MODE` que es de tipo `boolean`
   * @private Solo este servicio manipulara esta funcion para alternar el valor del storage del navegador.
   * @param stateMode de tipo booleando, que determinara el valor del storage para el navegador
   */
  private toggleStateStorage(stateMode : boolean){
    sessionStorage.setItem(environment.THEME_MODE, stateMode+"" ) 
  }


}