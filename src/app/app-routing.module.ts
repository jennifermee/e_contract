import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './frontpage/home/home.component';
import { LoginComponent as AdminLogin } from './dashboard/login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardRoleComponent } from './dashboard/dashboard-role/dashboard-role.component';
import { DashboardPositionComponent } from './dashboard/dashboard-position/dashboard-position.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { DashboardCodebookComponent } from './dashboard/dashboard-codebook/dashboard-codebook.component';
import { TreeCustomerComponent } from './test/tree-customer/tree-customer.component';
import { ToolsViewPdfComponent } from './dashboard/tools/tools-view-pdf/tools-view-pdf.component';
import { PageComponent } from './manage/component/page/page.component';
import { CreatingElectronicComponent } from './manage/component/creating-electronic/creating-electronic.component';
import { DocumentUploadComponent } from './manage/component/document-upload/document-upload.component';
import { EditorPdfComponent } from './manage/component/editor-pdf/editor-pdf.component';
import { SendingRecipientsComponent } from './manage/component/sending-recipients/sending-recipients.component';
import { ContractInformationComponent } from './manage/component/contract-information/contract-information.component';
import { PageRegisterComponent } from './frontpage/page-register/page-register.component';
import { PageLoginComponent } from './frontpage/page-login/page-login.component';
import { PageForgotPasswordComponent } from './frontpage/page-forgot-password/page-forgot-password.component';
import { PageVerificationRegisterComponent } from './frontpage/page-verification-register/page-verification-register.component';
import { PageCongratulationsJoiningComponent } from './frontpage/page-congratulations-joining/page-congratulations-joining.component';
import { DashboardComponent as DashboardDemoComponent } from './manage/component/dashboard/dashboard.component';
import { ElementItemComponent } from './element-item/element-item.component';
import { SelectContractTypeComponent } from './manage/component/select-contract-type/select-contract-type.component';
import { TemplateManagementComponent } from './manage/component/template-management/template-management.component';
import { ContractManagementComponent } from './manage/component/contract-management/contract-management.component';
import { InformationManageComponent } from './manage/component/information-manage/information-manage.component';
import { SignatureManagementComponent } from './manage/component/signature-management/signature-management.component';
import { PaymentManagementComponent } from './manage/component/payment-management/payment-management.component';
import { InquiryManagemantComponent } from './manage/component/inquiry-managemant/inquiry-managemant.component';
import { MailTemplateManagementComponent } from './manage/component/mail-template-management/mail-template-management.component';
import { OrganizationManagementComponent } from './manage/component/organization-management/organization-management.component';
import { LayoutDashboardComponent } from './manage/layout/layout-dashboard/layout-dashboard.component';
import { LayoutEditorComponent } from './manage/layout/layout-editor/layout-editor.component';
import { ElectronicContractAuthenticationCompletedComponent } from './manage/component/electronic-contract-authentication-completed/electronic-contract-authentication-completed.component';
import { UploadFilePdfComponent } from './dashboard/tools/upload-file-pdf/upload-file-pdf/upload-file-pdf.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'treeCustomer', component: TreeCustomerComponent },
  { path: 'forgotpassword', component: PageForgotPasswordComponent },
  { path: 'verification-register', component: PageVerificationRegisterComponent },
  { path: 'congratulations-joining', component: PageCongratulationsJoiningComponent },
  // { path: 'organization-management', component: OrganizationManagementComponent },
  // { path: 'mail-managemant', component: MailTemplateManagementComponent },
  // { path: 'inquiry-managemant', component: InquiryManagemantComponent },
  // { path: 'payment-management', component: PaymentManagementComponent },
  // { path: 'signature-management', component: SignatureManagementComponent },
  // { path: 'document-upload', component: DocumentUploadComponent },
  // { path: 'contract-management', component: ContractManagementComponent },
  // { path: 'creating-electronic', component: CreatingElectronicComponent },
  // { path: 'template-management', component: TemplateManagementComponent },
  // { path: 'main', component: DashboardDemoComponent },
  { path: 'element-item', component: ElementItemComponent },
  { path: 'demo', component: PageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'dashboard', component: AdminLogin },
  { path: 'dashboard/login', component: AdminLogin },
  { path: 'dashboard/home', component: DashboardHomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/role', component: DashboardRoleComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/position', component: DashboardPositionComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/user', component: DashboardUserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/codebook', component: DashboardCodebookComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/viewpdf', component: ToolsViewPdfComponent, canActivate: [AuthGuard] },{
    path: '',
    canActivate: [AuthGuard],
    component: LayoutDashboardComponent,
    children: [
      {
        path: 'main',
        component: DashboardDemoComponent
      },
      {
        path: 'template-management',
        component: TemplateManagementComponent
      },
      {
        path: 'creating-electronic',
        component: CreatingElectronicComponent
      },
      {
        path: 'contract-management',
        component: ContractManagementComponent
      },
      {
        path: 'select-contract-type',
        component: SelectContractTypeComponent,
      },
      {
        path: 'information-manage',
        component: InformationManageComponent
      },
      {
        path: 'signature-management',
        component: SignatureManagementComponent
      },
      {
        path: 'payment-management',
        component: PaymentManagementComponent
      },
      {
        path: 'inquiry-managemant',
        component: InquiryManagemantComponent
      },
      {
        path: 'mail-managemant',
        component: MailTemplateManagementComponent
      },
      {
        path: 'organization-management',
        component: OrganizationManagementComponent
      },
      {
        path: 'contract-information',
        component: ContractInformationComponent
      },
      {
        path: 'sending-recipients',
        component: SendingRecipientsComponent
      },
      {
        path: 'document-upload',
        component: DocumentUploadComponent
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutDashboardComponent,
    children: [{
      path: 'electronic-contract-authentication-completed',
      component: ElectronicContractAuthenticationCompletedComponent
    }]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutEditorComponent,
    children: [
      {
        path: 'create-template-contract',
        component: EditorPdfComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
