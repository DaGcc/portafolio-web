import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit, CUSTOM_ELEMENTS_SCHEMA, inject, signal, computed, OnDestroy, viewChild, ElementRef, AfterViewInit, ViewChild, AfterContentInit, AfterContentChecked, AfterViewChecked, Input, HostListener, Renderer2 } from '@angular/core';


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
  providers: [],
  templateUrl: './my-cv.component.html',
  styleUrl: './my-cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCvComponent implements OnInit, OnDestroy {


  private readonly cvRepository = inject(CvRepositoryImplService);
  private readonly renderer2 = inject(Renderer2);


  public dataCV = signal<{isLoad : boolean, cv : CvEntity | undefined}>({isLoad: false, cv: undefined});

  public cv = computed(()=> {
    if(!this.dataCV().isLoad){
      return null;
    }
    return this.dataCV().cv;
  })

  private cv$ : Subscription | undefined

  public dateNow = new Date();

  degratedEl = viewChild<ElementRef>('degraded');

  //* esto se ejecutara cada vez que s edetecte un cambio en el html del componente
  //* esta estrategia se aplica cuando el elemento que queremos seleccionar esta dentro de un bloque @if,@for, directiva estructural, etc
  // @ViewChild('degraded')
  // set elementDegra(e : ElementRef){
  //   if(e){
  //     this.degratedEl = e;   
  //   }
  // }
  // degratedEl! : ElementRef;

  ngOnInit(): void { 
    this.cv$ = this.cvRepository.readFileJsonCV('assets/json/cv.json').pipe(delay(0)).subscribe({
      next: (data: CvEntity) => {
        this.dataCV.set({isLoad: data ? true : false, cv: data})
      }
    })  

  }


  // @HostListener('mousemove', ['$event'])
  mouseMove(e:MouseEvent){
    // background: radial-gradient(circle at 50% 50%, var(--background-radial-gradient-cursor) 0%, var(--background-page) 600px);
    if(this.degratedEl()?.nativeElement) {
      this.renderer2.setStyle(this.degratedEl()?.nativeElement,'background',`radial-gradient(circle at ${e.pageX}px ${e.pageY}px, var(--background-radial-gradient-cursor) 0%, transparent 800px`)
    }
  
  }

  ngOnDestroy(): void {
    if(this.cv$) this.cv$.unsubscribe();
  }

}
