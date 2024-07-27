import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyCvComponent } from '@presentation/cv/pages/my-cv/my-cv.component';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
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

  private themeService : ThemeService = inject(ThemeService);

  
}
