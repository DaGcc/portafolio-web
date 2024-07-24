import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal, type OnInit } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'component-button-link',
  standalone: true,
  imports: [
    NgIf,
    MatTooltipModule
  ],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLinkComponent implements OnInit {

  public link : InputSignal<string , string> = input.required<string>()
  public target = input<'_black' | '_parent' | '_selft' | '_top'>('_black');
  public pathIcon = input<string>()
  public textAlt = input<string>('');
  public text = input<(string | undefined)>(undefined)

  ngOnInit(): void { }

}
