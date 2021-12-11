import {Component, OnInit} from '@angular/core';

import * as monaco from 'monaco-editor'

@Component({
  selector: 'app-module-name',
  templateUrl: './module-name.component.html',
  styleUrls: ['./module-name.component.scss']
})
export class ModuleNameComponent implements OnInit {

  text: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

  onInit(event: any) {
    const markerData: monaco.editor.IMarkerData = {
      // severity: monaco.MarkerSeverity.Info,
      severity: 2,
      message: 'message',
      startLineNumber: 0,
      startColumn: 0,
      endLineNumber: 0,
      endColumn: 0
    }
    console.log(markerData)
  }
}
