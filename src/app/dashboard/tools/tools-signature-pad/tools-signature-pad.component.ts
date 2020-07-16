import { Component, OnInit, Input, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { fabric } from 'fabric/dist/fabric.js';

@Component({
  selector: 'app-tools-signature-pad',
  templateUrl: './tools-signature-pad.component.html',
  styleUrls: ['./tools-signature-pad.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToolsSignaturePadComponent),
      multi: true,
    },
  ],
})
export class ToolsSignaturePadComponent implements OnInit {

  @Output() signatureImageBase64 = new EventEmitter<any>();
  @Output() signatureObjFabric = new EventEmitter<any>();

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  ngOnInit(): void {
    this.options = {
      // passed through to szimek/signature_pad constructor
      minWidth: 0.5,
      canvasWidth: 300,
      canvasHeight: 100
    };
  }

  public options: Object = {};
  public _signature: any = null;
  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    console.log('signature data :');
    console.log(this.signaturePad.toData());
    // this.propagateChange(this.signature);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // no-op
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
  }

  public drawBegin($event): void {
    console.log('Begin Drawing');
  }

  public drawComplete($event): void {
    this.signature = this.signaturePad.toDataURL('image/png', 0.1);
  }

  public clear(): void {
    this.signaturePad.clear();
    this.signature = '';
  }

  public done() {
    this.genImageBase64();
    this.genSigntureToFabric();
  }

  genImageBase64() {
    const img = this.signaturePad.toDataURL("image/png", 1.0);
    console.log(img, 'genImageBase64');
    this.signatureImageBase64.emit(img);
  }

  genSigntureToFabric() {
    // event call back on add item
    const img = this.signaturePad.toDataURL("image/png", 1.0);
    const imgElement = document.createElement('img');
    imgElement.src = img;
    const imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      angle: 0,
      opacity: 1,
      width: 300,
      height: 100,
      typeEditor: 'signture'
    });
    imgInstance.setControlVisible('tl', false);
    imgInstance.setControlVisible('tr', false);
    imgInstance.setControlVisible('bl', false);
    imgInstance.setControlVisible('br', true);
    imgInstance.setControlVisible('mb', false);
    imgInstance.setControlVisible('mt', false);
    imgInstance.setControlVisible('ml', false);
    imgInstance.setControlVisible('mr', false);
    this.signatureObjFabric.emit(imgInstance);
  }
}
