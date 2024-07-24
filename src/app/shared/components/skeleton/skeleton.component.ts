import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'component-skeleton',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<div class="skeleton"></div>`,
  styleUrl: './skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent { }
