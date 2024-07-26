import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonActionComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void { }

}
