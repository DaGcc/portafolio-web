import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyCvComponent } from '@presentation/cv/pages/my-cv/my-cv.component';

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
export class CvLayoutComponent { }
