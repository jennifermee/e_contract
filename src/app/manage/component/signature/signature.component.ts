import { Component, OnInit, Input, Inject, Renderer2, ElementRef, Output, ChangeDetectionStrategy, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { fabric } from 'fabric/dist/fabric.js';

import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureComponent),
      multi: true,
    },
  ],
})
export class SignatureComponent implements OnInit {

  @Output() signatureImageBase64 = new EventEmitter<any>();
  @Output() signatureObjFabric = new EventEmitter<any>();

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  // Get with @ViewChild
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  config: any;
  zoomValue: any = 0.5;
  file: any;
  filName: any = '';
  constructor() {
    this.config = {
      // aspectRatio: 1 / 1,
      zoomable: true,
      height: '250px',
      // preview: '.img-preview',
      ready: function (e) {
        console.log(e.type);
      },
      cropstart: function (e) {
        console.log(e.type, e.detail.action);
      },
      cropmove: function (e) {
        console.log(e.type, e.detail.action);
      },
      cropend: function (e) {
        console.log(e.type, e.detail.action);
      },
      zoom: function (e) {
        console.log(e.type, e.detail.ratio);
      }
    };
  }


  public options: Object = {};
  public _signature: any = null;
  public propagateChange: Function = null;
  btnState = {
    signaturedrawing: {
      class: 'btn-bt-arrow-red',
      display: true
    },
    uploadimage: {
      class: 'btn-bt-arrow',
      display: false
    }
  };
  ngOnInit(): void {
    this.options = {
      // passed through to szimek/signature_pad constructor
      dotSize: 0.5,
      minWidth: 0.5,
      canvasWidth: 660,
      canvasHeight: 220,
      penColor: 'rgb(0,0,0)'
    };
  }

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

  addfile(event) {
    this.file = event.target.files[0];
    this.filName = this.file.name;
    console.log(this.file);
    var FR = new FileReader();
    FR.readAsDataURL(this.file);
    FR.onload = (e) => {
      this.angularCropper.imageUrl =  (e.target.result);
    }
    // this.angularCropper.
    // const fileReader = new FileReader();
    // fileReader.readAsArrayBuffer(this.file);
    // fileReader.onload = (e) => {
    // };
  }
  setResult(){

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

  penColor(color: any) {
    this.options['penColor'] = color;
    this.signaturePad.set('penColor', color);
    // console.log(color, this.options, this.signaturePad.options);
    // this.signaturePad.options = this.options;
  }

  cropperZoom(e) {
    let zoom: number;
    if (e.target.value > this.zoomValue) {
      zoom = 0.1;
    } else {
      zoom = -0.1;
    }
    this.zoomValue = e.target.value;
    this.angularCropper.cropper.zoom(zoom);
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
  btnSetState(keyOne: any, keyTwo: any) {
    this.btnState[keyOne].class = 'btn-bt-arrow-red';
    this.btnState[keyOne].display = true;

    this.btnState[keyTwo].class = 'btn-bt-arrow';
    this.btnState[keyTwo].display = false;
  }

}
