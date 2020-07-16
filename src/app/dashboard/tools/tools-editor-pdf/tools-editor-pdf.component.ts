import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { fabric } from 'fabric/dist/fabric.js';

import { faTextHeight,faLink } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare,faCalendarMinus,faSquare } from '@fortawesome/free-regular-svg-icons';
import { faVine } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-tools-editor-pdf',
  templateUrl: './tools-editor-pdf.component.html',
  styleUrls: ['./tools-editor-pdf.component.scss']
})
export class ToolsEditorPdfComponent implements OnInit {
  // event call back on add item
  @Output() evnentAddFabric = new EventEmitter<boolean>();
  @Output() evnentSelectColor = new EventEmitter<boolean>();
  // config Componemt
  @Input() configTools;

  faTextHeight = faTextHeight;
  faLink = faLink;
  faCheckSquare = faCheckSquare;
  faCalendarMinus = faCalendarMinus;
  faSquare = faSquare;
  faVine = faVine;


  config: any;
  colors: any[];
  constructor(
  ) {
    this.config = {
      showTools: true,
    };
  }

  ngOnInit(): void {
    this.setConfig();
    this.initColor();
  }

  initColor() {
    this.colors = [
      {
        r: 255,
        g: 0,
        b: 0
      },
      {
        r: 255,
        g: 64,
        b: 0
      },
      // {
      //   r: 255,
      //   g: 128,
      //   b: 0
      // },
      // {
      //   r: 255,
      //   g: 191,
      //   b: 0
      // },
      // {
      //   r: 255,
      //   g: 255,
      //   b: 0
      // },
      // {
      //   r: 191,
      //   g: 255,
      //   b: 0
      // },
      // {
      //   r: 128,
      //   g: 255,
      //   b: 0
      // },
      // {
      //   r: 64,
      //   g: 255,
      //   b: 0
      // },
      // {
      //   r: 0,
      //   g: 255,
      //   b: 0
      // },
      // {
      //   r: 0,
      //   g: 255,
      //   b: 128
      // },
      // {
      //   r: 0,
      //   g: 255,
      //   b: 191
      // }
    ]
  }

  setConfig() {
    const key = Object.keys(this.configTools);

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < key.length; i++) {
      this.config[key[i]] = this.configTools[key[i]];
    }
  }

  addTextToPdf(type: string, text: string) {
    // event call back on add item
    const obj = new fabric.Textbox(text, {
      left: 0,
      top: 0,
      fontSize: 20,
      typeEditor: type,
      transparentCorners: true,
      hasControls: true,
    });
    this.evnentAddFabric.emit(obj);
  }

  addTestTypeDate(type: string) {
    const date = new Date();
    let monthdata = (date.getMonth() + 1) + '';
    if ((date.getMonth() + 1) < 10) {
      monthdata = '0' + (date.getMonth() + 1);
    }
    const str_date = monthdata + '/' + date.getDate() + '/' + date.getFullYear();
    console.log(str_date);
    const obj = new fabric.IText(str_date, {
      left: 0,
      top: 0,
      width: 150,
      fontSize: 20,
      typeEditor: type
    });
    obj.on('changed', (e) => {
      console.log('changed', obj.text);
      const date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!date_regex.test(obj.text)) {
        obj.fill = 'rgb(255,0,0)';
        alert('format Invalid (mm/dd/yyyy) ex : 01/01/1999');
      } else {
        obj.fill = 'rgb(0,0,0)';
      }
    });
    this.evnentAddFabric.emit(obj);
  }

  addTestTypeNumber(type: string) {
    const obj = new fabric.IText('123', {
      left: 0,
      top: 0,
      width: 150,
      fontSize: 20,
      typeEditor: type
    });
    obj.on('changed', (e) => {
      console.log('changed', obj.text);
      const date_regex = /^\d+$/;
      if (!date_regex.test(obj.text)) {
        obj.fill = 'rgb(255,0,0)';
        alert('format Invalid number only ex : 123');
      } else {
        obj.fill = 'rgb(0,0,0)';
      }
    });

    obj.setControlVisible('tl', false);
    obj.setControlVisible('tr', false);
    obj.setControlVisible('bl', false);
    obj.setControlVisible('br', false);
    obj.setControlVisible('mb', false);
    obj.setControlVisible('mt', false);
    obj.setControlVisible('ml', true);
    obj.setControlVisible('mr', true);

    this.evnentAddFabric.emit(obj);
  }



  addTextAr(type: string) {
    const obj = new fabric.Textbox("text Ar", {
      left: 0,
      top: 0,
      fontSize: 20,
      typeEditor: type,
    });
    obj.setControlVisible('tl', false);
    obj.setControlVisible('tr', false);
    obj.setControlVisible('bl', false);
    obj.setControlVisible('br', false);
    obj.setControlVisible('mb', false);
    obj.setControlVisible('mt', false);
    obj.setControlVisible('ml', true);
    obj.setControlVisible('mr', true);
    this.evnentAddFabric.emit(obj);
  }

  selectColor(rgb: any) {
    this.evnentSelectColor.emit(rgb);
  }
}
