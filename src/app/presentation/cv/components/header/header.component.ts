import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonActionComponent, 
    BadgeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  
  private _themeService : ThemeService = inject(ThemeService);

  toggleMode(e : Event){

    this._themeService.toggleThemeMode();
    console.log(this._themeService.isDark())

  }

}
