import { CommonModule, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, Input, input, InputSignal, InputSignalWithTransform, output, Output, OutputEmitterRef, Signal, signal, type OnInit } from '@angular/core';
import { EventEmitter } from 'stream';


@Component({
  selector: 'component-button-action',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonActionComponent implements OnInit {

  
  public textAlt : InputSignal<string | undefined> = input<string | undefined>(undefined);

  public text : InputSignal<string | undefined> = input<string | undefined>(undefined);
  public pathIcon = input<string>();

  public disabled : InputSignalWithTransform<boolean, string | boolean> = input<boolean, string | boolean>(false, {
    transform : (value : (string | boolean)) => typeof value === 'string' ? value==='': value
  })
  public transparent :  InputSignalWithTransform<boolean, string | boolean> = input<boolean, string | boolean>(false, {
    transform : (value : (string | boolean)) => typeof value === 'string' ? value==='': value
  })

  public colorClassBtn = signal<string | undefined>(undefined);

  @Input()
  set color(valor : 'primary' | 'warn' | 'accent' ){

    if(valor === 'primary'){
      this.colorClassBtn.set('btn-primary')
      return ;
    }
    if(valor === 'accent'){
      this.colorClassBtn.set('btn-accent');
      return;
    }
    if(valor === 'warn'){
      this.colorClassBtn.set('btn-warn');
      return;
    }

  }

  public classList = computed<string | string[] | Set<string> | { [klass: string]: boolean;} | null | undefined>(() => { 

    const arrClass : string[] = []; 

    if(this.colorClassBtn()!=undefined){
      arrClass.push(this.colorClassBtn()!);
    }
    if(this.transparent()){
      arrClass.push('btn-transparent')
    }
    if(this.disabled()){
      arrClass.push('btn-disabled')
    }

    return arrClass
  })


  //* EVENT EMITERS 

  public cClick : OutputEmitterRef<Event> = output<Event>();
  

  ngOnInit(): void { 

  }

}
