import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, Renderer2, type OnInit } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { BadgeComponent } from '../badge/badge.component';
import { CvRepositoryImplService } from '@infraestructure/repositories/cv/cv.repository.impl.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewerCvComponent } from '../viewer-cv/viewer-cv.component';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [
  CommonModule,
    ButtonActionComponent, 
    BadgeComponent,
    MatDialogModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  private readonly cvRepository = inject(CvRepositoryImplService);
  private readonly rederer2 = inject(Renderer2);
  private readonly elementRef = inject(ElementRef);
  private readonly matDialod = inject(MatDialog);
  private readonly overlayCdk = inject(Overlay)

  private readonly pathCv = `assets/cv/CV-Daniel-Gutierrez-Ccallasaca.pdf`;

  private _themeService : ThemeService = inject(ThemeService);


  toggleMode(e : Event){
    this._themeService.toggleThemeMode();
    // console.log(this._themeService.isDark())
  }

  downloadCv(){
    
    this.cvRepository.getFileCv(this.pathCv).subscribe({
      next : (dataBlob : Blob) =>  { 
        
        let url = URL.createObjectURL(dataBlob);

        let aEl : HTMLAnchorElement = this.rederer2.createElement('a');
        this.rederer2.appendChild(this.elementRef.nativeElement, aEl);
        this.rederer2.setStyle(aEl, 'display', 'none');
        this.rederer2.setProperty(aEl, "href", url);
        this.rederer2.setProperty(aEl, "download","CV-Daniel-Gutierrez-Ccallasaca.pdf")
        aEl.click();
        URL.revokeObjectURL(url);
        this.rederer2.removeChild(this.elementRef.nativeElement, aEl);

      }
    })
  }

  viewCv(){
    this.matDialod.open(ViewerCvComponent, {
      scrollStrategy: this.overlayCdk.scrollStrategies.block(),
      data : this.pathCv
    });

  }

}
