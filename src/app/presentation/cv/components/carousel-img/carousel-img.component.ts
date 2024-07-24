import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, type OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'component-carousel-img',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgFor,
  ],
  templateUrl: './carousel-img.component.html',
  styleUrl: './carousel-img.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselImgComponent implements OnInit {

  public images = input<string[]>([])

  constructor() {
    register();
  }

  ngOnInit(): void { 
  
  }

}
