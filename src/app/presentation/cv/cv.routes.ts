import { Routes } from '@angular/router';
import { CvLayoutComponent } from './layout/cv-layout/cv-layout.component';

const routes: Routes = [


    {
        path : '',
        component : CvLayoutComponent,
        children : [
            {
                path : 'my-cv',
                loadComponent : () => import("@presentation/cv/pages/my-cv/my-cv.component").then(m => m.MyCvComponent ),
                title : 'Portafolio :: CV'
            },
            {
                path : '',
                redirectTo : 'my-cv',
                pathMatch : 'full'
            }
        
        ]
    }
    

];

export default routes;