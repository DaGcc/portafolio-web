import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, type OnInit } from '@angular/core';
import { Project } from '@domain/entities/cv.entity';
import { BadgeComponent } from '../badge/badge.component';
import { CarouselImgComponent } from '../carousel-img/carousel-img.component';
import { ButtonLinkComponent } from '../button-link/button-link.component';

@Component({
  selector: 'component-card-project',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgFor,
    NgIf,
    BadgeComponent,
    CarouselImgComponent,
    ButtonLinkComponent
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent implements OnInit {


  public project = input<Project>()

  ngOnInit(): void { }

}
