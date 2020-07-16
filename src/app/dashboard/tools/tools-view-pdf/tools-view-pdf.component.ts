import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jsPDF from 'jspdf/dist/jspdf.min.js';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
import { FormBuilder, FormControl } from '@angular/forms';
import { fabric } from 'fabric/dist/fabric.js';
import { environment } from '../../../../environments/environment';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { AlertSaveService } from './../../../manage/component/modal/alert-save/alert-save.service';
import { AlertSaveNameTemplateService } from './../../../manage/component/modal/alert-save-name-template/alert-save-name-template.service';
import { EditorPdfService } from '../../../manage/component/editor-pdf/editor-pdf.service';
import { TemplateService } from '../../../manage/service/template/template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-view-pdf',
  templateUrl: './tools-view-pdf.component.html',
  styleUrls: ['./tools-view-pdf.component.scss']
})
export class ToolsViewPdfComponent implements OnInit {

  pdfSrc = [{
    src: '../../../../assets/file/DigitalOcean Invoice 2020 Feb (2558051-414145077).pdf'
  }, {
    src: '../../../../assets/file/Sample Service Contractor Agreement.pdf'
  }];
  deleteIcon = 'data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'utf-8\'%3F%3E%3C!DOCTYPE svg PUBLIC \'-//W3C//DTD SVG 1.1//EN\' \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'%3E%3Csvg version=\'1.1\' id=\'Ebene_1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'595.275px\' height=\'595.275px\' viewBox=\'200 215 230 470\' xml:space=\'preserve\'%3E%3Ccircle style=\'fill:%23F44336;\' cx=\'299.76\' cy=\'439.067\' r=\'218.516\'/%3E%3Cg%3E%3Crect x=\'267.162\' y=\'307.978\' transform=\'matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)\' style=\'fill:white;\' width=\'65.545\' height=\'262.18\'/%3E%3Crect x=\'266.988\' y=\'308.153\' transform=\'matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)\' style=\'fill:white;\' width=\'65.544\' height=\'262.179\'/%3E%3C/g%3E%3C/svg%3E';
  readonly dpiRatio = 96 / 72;
  faPlus = faPlus;
  faMinus = faMinus;

  pdfdocument: any;
  objCanves: any;
  text: string;
  page: any;
  thispage: any;
  uploadfile: any;
  fileName: any;
  canvas: any[];
  imagePage: any[];
  pdfcanvas: any;
  loading: boolean;
  selectItem: any;
  constructor(
    private http: HttpClient,
    private alertSaveService: AlertSaveService,
    private alertSaveNameTemplateService: AlertSaveNameTemplateService,
    private editorPdfService: EditorPdfService,
    private templateService: TemplateService,
    private router: Router,
  ) {
  }

  @HostListener('scroll', ['$event'])
  scrollHandler(event) {
    this.onScrollViewPdf();
  }

  initValue() {
    this.canvas = [];
    this.imagePage = [];
    this.page = {
      maxpage: 1,
      pagenumber: 1
    };
    this.thispage = 1;
  }

  ngOnInit(): void {
    this.loadClose();
    this.initValue();
    this.onScrollViewPdf();
    console.log(this.editorPdfService.getTemplateAID());
  }

  ngAfterViewInit() {
    this.getFildMark();
  }

  getFildMark() {
    this.templateService.getFildMark(this.editorPdfService.getTemplateAID()).subscribe((rs: any) => {
      console.log(rs);
      this.pdfSrc[1].src = this.templateService.openPdfFile(rs.templNm + rs.templFile);
    });
  }

  testPdf() {
    const pdf = new jsPDF();
    for (let i = 0; i < this.page.maxpage; i++) {
      const imgData = this.canvas[i].toDataURL("image/png", 1.0);
      pdf.addImage(this.imagePage[i], 'png', 0, 0);
      pdf.addImage(imgData, 'png', 0, 0);
      pdf.addPage();
    }
    pdf.save("download.pdf");
    // this.loadClose();
  }

  loadOpen() {
    this.loading = true;
  }

  loadClose() {
    this.loading = false;
  }

  checkoffsetTopPage(viewpdf: number) {
    for (let i = 1; i <= this.canvas.length; i++) {
      const el1 = document.getElementById('pagenumber-' + i);
      // tslint:disable-next-line: triple-equals
      if (i == this.canvas.length) {
        if (viewpdf >= el1.offsetTop) {
          this.thispage = i;
          this.page.pagenumber = this.thispage;
          break;
        }
      } else {
        const el2 = document.getElementById('pagenumber-' + (i + 1));
        if (viewpdf >= el1.offsetTop && viewpdf < el2.offsetTop) {
          this.thispage = i;
          this.page.pagenumber = this.thispage;
          break;
        }
      }
    }

  }

  onScrollViewPdf() {
    const view = document.getElementById('view-pdf-div');
    this.checkoffsetTopPage(view.scrollTop);
  }

  checkDisplayPage() {
    for (let i = 0; i < this.canvas.length; i++) {
      // tslint:disable-next-line: triple-equals
      if ((this.page.pagenumber - 1) == i) {
        const el = document.getElementById('pagenumber-' + this.page.pagenumber);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  nextPage() {
    if (!((this.thispage + 1) > this.page.maxpage)) {
      this.thispage++;
      this.page.pagenumber = this.thispage;
      this.checkDisplayPage();
    }
  }

  backPage() {
    if (((this.thispage - 1) > 0)) {
      this.thispage--;
      this.page.pagenumber = this.thispage;
      this.checkDisplayPage();
    }
  }

  // setFormUpload() {
  //   this.FormUpload = this.fb.group({
  //     uploadfile: ['']
  //   });
  // }

  clickPage(index: number) {
    this.page.pagenumber = (index + 1);
    this.checkDisplayPage();
  }

  setDataCanves(data: any) {
    this.objCanves = data;
  }

  callBackEnd() {
    const url = environment.nodeEndPoint.url;
    const port = environment.nodeEndPoint.port;
    this.http.get(url + ':' + port + '/test?name=Rosmee').subscribe(
      response => {
        console.log(response);
      }
    );
  }

  changePage() {
    this.page.pagenumber = this.thispage;
    this.checkDisplayPage();
  }

  uploadFile() {
    console.log(this.uploadfile);
    this.uploadPdfFileToNodeJs(this.uploadfile);
  }

  handleFileInput(event) {
    this.uploadfile = event.target.files[0];
  }

  uploadPdfFileToNodeJs(file) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'multipart/form-data'
      })
    };
    const url = environment.nodeEndPoint.url;
    const port = environment.nodeEndPoint.port;
    const formData = new FormData();
    formData.append('file', this.uploadfile);
    // formData.append('content', file);
    console.log(this.uploadfile, formData);

    this.http.post<any>(url + ':' + port + '/pdfUpload', formData, httpOptions).subscribe((response) => {
      console.log(response);
    });
  }

  createElementCanvas(page) {
    const canvasNgto = document.getElementById('page' + page);
    const { width, height } = canvasNgto.getBoundingClientRect();
    console.log(width, height);
    const parent = canvasNgto.parentElement;
    parent.setAttribute('style', parent.getAttribute('style') + 'position: relative;');
    const parentup = parent.parentElement;
    parentup.setAttribute('id', 'pagenumber-' + page);
    canvasNgto.setAttribute('style', canvasNgto.getAttribute('style') + 'position: absolute;top: 0;left: 0;z-index:50;');
    const gencanvas = document.createElement('canvas');
    gencanvas.setAttribute('id', 'page1-' + page);
    gencanvas.setAttribute('width', '' + width);
    gencanvas.setAttribute('height', '' + height);
    gencanvas.setAttribute('style', 'width:' + width + 'px; height:' + height + 'px;position: absolute;top: 0;left: 0;z-index:100;');
    parent.appendChild(gencanvas);
    const canvas = new fabric.Canvas('page1-' + page);
    this.pushCanvas(canvas);
    this.checkDisplayPage();
  }

  createImagePage(page) {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const canvasNgto = <HTMLCanvasElement>document.getElementById('page' + page);

    const dataURL = canvasNgto.toDataURL();
    this.pushImagePage(dataURL);
  }

  pushCanvas(canvas: any) {
    this.canvas.push(canvas);
  }

  pushImagePage(image: any) {
    this.imagePage.push(image);
  }


  addFabric($event) {
    // tslint:disable-next-line: radix
    this.canvas[(parseInt(this.page.pagenumber) - 1)].add($event);
    console.log($event, '..');
  }

  colorText($event) {
    this.canvas[(parseInt(this.page.pagenumber) - 1)].getActiveObject().setColor('rgb(' + $event.r + ',' + $event.g + ',' + $event.b + ')');
    this.canvas[(parseInt(this.page.pagenumber) - 1)].requestRenderAll();
  }

  renderIcon(icon) {
    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      const size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

  getObjectInCanvas() {
    const CanvasObj = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.canvas.length; i++) {
      const canvasobj = [];
      const objCanvas = this.canvas[i].getObjects();
      for (let j = 0; j < objCanvas.length; j++) {
        console.log(objCanvas[j]);
        canvasobj.push({
          page: i,
          item: j,
          locatiion: {
            x: objCanvas[j].left, y: objCanvas[j].top
          },
          color: objCanvas[j].fill,
          type: objCanvas[j].typeEditor,
          value: objCanvas[j].text,
        });
      }
      CanvasObj.push(canvasobj);
    }
  }

  pageRendered(e: CustomEvent) {
    // console.log('(page-rendered)', e['pageNumber']);
    // tslint:disable-next-line: no-string-literal
    this.page.maxpage = e['pageNumber'];
    // tslint:disable-next-line: no-string-literal
    this.createElementCanvas(e['pageNumber']);
    // tslint:disable-next-line: no-string-literal
    this.createImagePage(e['pageNumber']);
  }

  // textLayerRendered(e: CustomEvent) {
  //   console.log('(text-layer-rendered)', e);
  // }

  // onProgress(progressData: PDFProgressData) {
  //   // do anything with progress data. For example progress indicator
  // }

  selectFilePDF($event) {
    this.pdfSrc[1].src = $event;
    this.initValue();
  }

  onCancelEditors() {
    this.alertSaveService.open({
      func: () => {
        this.alertSaveService.close();
      }
    }, {
      func: () => {
        this.alertSaveService.close();
        this.alertSaveNameTemplateService.open(
          {
            func: () => {

            }
          },
          {
            func: () => {
              this.alertSaveNameTemplateService.getNameTemplate();
              this.alertSaveNameTemplateService.close();
              this.router.navigate(['template-management']);
            }
          }
        );
      }
    });
  }
}
