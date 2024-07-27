
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cv-layout',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './cv-layout.component.html',
  styleUrl: './cv-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvLayoutComponent { 



  

}
