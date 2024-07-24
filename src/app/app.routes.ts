import { Routes } from '@angular/router';
import { AppComponent } from './app.component';



export const routes: Routes = [


    {
        path : 'cv',
        loadChildren : () => import("src/app/presentation/cv/cv.routes"),
        title : 'cv',
    },
    {
        path: '',
        redirectTo : 'cv',
        pathMatch : 'full'
    }


];
