import { CommonModule, DatePipe, IMAGE_CONFIG, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit, CUSTOM_ELEMENTS_SCHEMA, inject, signal, computed, OnDestroy } from '@angular/core';


import { CvRepositoryImplService } from '@infraestructure/repositories/cv/cv.repository.impl.service';
import { CvEntity } from '@domain/entities/cv.entity';
import { SkeletonComponent } from 'src/app/shared/components/skeleton/skeleton.component';
import { delay, Subscription } from 'rxjs';
import { BadgeComponent } from '@presentation/cv/components/badge/badge.component';
import { CardProjectComponent } from '@presentation/cv/components/card-project/card-project.component';
import { ButtonLinkComponent } from '@presentation/cv/components/button-link/button-link.component';
import { TimelineComponent } from '@presentation/cv/components/timeline/timeline.component';
import { HeaderComponent } from '@presentation/cv/components/header/header.component';

@Component({
  selector: 'app-my-cv',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgFor,
    NgIf,
    SkeletonComponent,
    BadgeComponent,
    CardProjectComponent,
    ButtonLinkComponent,
    TimelineComponent,
    HeaderComponent,
    DatePipe
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ],
  templateUrl: './my-cv.component.html',
  styleUrl: './my-cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCvComponent implements OnInit, OnDestroy {

  private readonly cvRepository = inject(CvRepositoryImplService)


  public dataCV = signal<{isLoad : boolean, cv : CvEntity | undefined}>({isLoad: false, cv: undefined});

  public cv = computed(()=> {
    if(!this.dataCV().isLoad){
      return null;
    }
    return this.dataCV().cv;
  })

  private cv$ : Subscription | undefined

  public dateNow = new Date();


  ngOnInit(): void { 

    this.cv$ = this.cvRepository.readFileJsonCV('assets/json/cv.json').pipe(delay(0)).subscribe({
      next: (data: CvEntity) => {
        this.dataCV.set({isLoad: data ? true : false, cv: data})
      }
    })

  }



  ngOnDestroy(): void {
    if(this.cv$) this.cv$.unsubscribe();
  }

}
