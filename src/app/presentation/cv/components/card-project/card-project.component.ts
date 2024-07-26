import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, input, Signal, type OnInit } from '@angular/core';
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
    NgClass,
    BadgeComponent,
    CarouselImgComponent,
    ButtonLinkComponent
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent implements OnInit {


  public project = input<Project>();

  public withShadow = input<boolean, string | boolean>(false, {
    transform: (value: (string | boolean)) => typeof value === 'string' ? value === '' : value
    // transform : booleanAttribute
  })


  public classList: Signal<
    string | string[] | Set<string> | { [klass: string]: boolean } | null | undefined
  > = computed<
    string | string[] | Set<string> | { [klass: string]: boolean } | null | undefined
  >(() => {
    return {
      '--shadow' : this.withShadow()
    }
  })

  ngOnInit(): void {
  }

}
