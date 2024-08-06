import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-viewer-cv',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './viewer-cv.component.html',
  styleUrl: './viewer-cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewerCvComponent {


  pdfSrc : string = inject(MAT_DIALOG_DATA); 
  isLoad : WritableSignal<boolean>  = signal<boolean>(false)

  onProgress(e : any){
    // console.log(e)
    this.isLoad.set(true)
  }
 
}
