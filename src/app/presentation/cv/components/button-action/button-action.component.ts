import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [
    NgIf,
    MatTooltipModule
  ],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonActionComponent implements OnInit {

  public textAlt = input<string>('');
  public text = input<(string | undefined)>(undefined);
  public pathIcon = input<string>();

  

  ngOnInit(): void { }

}
