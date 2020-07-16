import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMemberComponent } from './import-member.component';

describe('ImportMemberComponent', () => {
  let component: ImportMemberComponent;
  let fixture: ComponentFixture<ImportMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
