import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';

@Component({
  selector: 'component-badge',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent implements OnInit {


  public text = input<string>();
  public src = input<string>();

  public classList = input<(string | string[] | Set<string> | { [klass: string]: any;} | null | undefined)>([])

  ngOnInit(): void { }

}
