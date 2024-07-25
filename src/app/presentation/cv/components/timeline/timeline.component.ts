import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'component-timeline',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {

  ngOnInit(): void { }

}
