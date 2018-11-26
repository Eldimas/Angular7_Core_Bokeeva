import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

@Component({
  selector: 'app-proba-sample',
  templateUrl: './proba-sample.component.html',
  styleUrls: ['./proba-sample.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ProbaSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
