import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { environment } from '../environments/environment';
// Import angular-cropperjs
import { AngularCropperjsModule } from 'angular-cropperjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './frontpage/navbar/navbar.component';
import { HeaderComponent } from './frontpage/header/header.component';
import { FooterComponent } from './frontpage/footer/footer.component';
import { AboutComponent } from './frontpage/about/about.component';
import { ProjectsComponent } from './frontpage/projects/projects.component';
import { ContactComponent } from './frontpage/contact/contact.component';
import { SignupComponent } from './frontpage/signup/signup.component';
import { HomeComponent } from './frontpage/home/home.component';
import { LoginComponent } from './dashboard/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardDashboardComponent } from './dashboard/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardCodebookComponent } from './dashboard/dashboard-codebook/dashboard-codebook.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { DashboardRoleComponent } from './dashboard/dashboard-role/dashboard-role.component';
import { DashboardPositionComponent } from './dashboard/dashboard-position/dashboard-position.component';
import { TreeCustomerComponent } from './test/tree-customer/tree-customer.component';
import { ServiceComponent } from './frontpage/service/service.component';
import { FeaturesComponent } from './frontpage/features/features.component';
import { TestimonialComponent } from './frontpage/testimonial/testimonial.component';
import { CustomerComponent } from './frontpage/customer/customer.component';
import { PackageComponent } from './frontpage/package/package.component';
import { NewsidebarComponent } from './dashboard/newsidebar/newsidebar.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';
import { ToolsEditorPdfComponent } from './dashboard/tools/tools-editor-pdf/tools-editor-pdf.component';
import { ToolsSignaturePadComponent } from './dashboard/tools/tools-signature-pad/tools-signature-pad.component';
import { ToolsViewPdfComponent } from './dashboard/tools/tools-view-pdf/tools-view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SidebarComponent } from './manage/component/sidebar/sidebar.component';
import { BasicDescriptionComponent } from './manage/component/basic-description/basic-description.component';
import { UploadFilePdfComponent } from './dashboard/tools/upload-file-pdf/upload-file-pdf/upload-file-pdf.component';
import { PageComponent } from './manage/component/page/page.component';
import { HeaderComponent as HeaderComponentmanage } from '../app/manage/component/header/header.component';
import { SidebarComponent as SidebarComponentmanage } from '../app/manage/component/sidebar/sidebar.component';
import { CreatingElectronicComponent } from './manage/component/creating-electronic/creating-electronic.component';
import { DocumentUploadComponent } from './manage/component/document-upload/document-upload.component';
import { NavberComponent as NavbarComponentDemo } from './manage/component/navbar/navber.component';
import { EditorPdfComponent } from './manage/component/editor-pdf/editor-pdf.component';
import { SendingRecipientsComponent } from './manage/component/sending-recipients/sending-recipients.component';
import { ContractInformationComponent } from './manage/component/contract-information/contract-information.component';
import { ModalIdentityCertificateComponent } from './manage/component/modal/modal-identity-certificate/modal-identity-certificate.component';
import { RegisterComponent } from './frontpage/register/register.component';
import { PageRegisterComponent } from './frontpage/page-register/page-register.component';
import { PageLoginComponent } from './frontpage/page-login/page-login.component';
import { LoginComponent as LoginComponentFront } from './frontpage/login/login.component';
import { ForgotPasswordComponent } from './frontpage/forgot-password/forgot-password.component';
import { PageForgotPasswordComponent } from './frontpage/page-forgot-password/page-forgot-password.component';
import { PageVerificationRegisterComponent } from './frontpage/page-verification-register/page-verification-register.component';
import { VerificationRegisterComponent } from './frontpage/verification-register/verification-register.component';
import { CongratulationsJoiningComponent } from './frontpage/congratulations-joining/congratulations-joining.component';
import { PageCongratulationsJoiningComponent } from './frontpage/page-congratulations-joining/page-congratulations-joining.component';
import { ElementItemComponent } from './element-item/element-item.component';
import { DashboardComponent } from './manage/component/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ModalComponent } from './manage/component/modal/modal.component';
import { ExcelTransferComponent } from './manage/component/excel-transfer/excel-transfer.component';
import { TableDataComponent } from './manage/component/table-data/table-data.component';
import { SelectContractTypeComponent } from './manage/component/select-contract-type/select-contract-type.component';
import { SelectRecipientsComponent } from './manage/component/select-recipients/select-recipients.component';
import { TemplateManagementComponent } from './manage/component/template-management/template-management.component';
import { ContractManagementComponent } from './manage/component/contract-management/contract-management.component';
import { TableRequestedComponent } from './manage/component/table-requested/table-requested.component';
import { TableRequestedMeComponent } from './manage/component/table-requested-me/table-requested-me.component';
import { InformationManageComponent } from './manage/component/information-manage/information-manage.component';
import { SignatureManagementComponent } from './manage/component/signature-management/signature-management.component';
import { ModalAddSignatureComponent } from './manage/component/modal/modal-add-signature/modal-add-signature.component';
import { SignatureComponent } from './manage/component/signature/signature.component';
import { PaymentManagementComponent } from './manage/component/payment-management/payment-management.component';
import { PaymentHistoryComponent } from './manage/component/payment-history/payment-history.component';
import { RequestRefundComponent } from './manage/component/request-refund/request-refund.component';
import { RefundDetailsComponent } from './manage/component/refund-details/refund-details.component';
import { InquiryManagemantComponent } from './manage/component/inquiry-managemant/inquiry-managemant.component';
import { InquiryComponent } from './manage/component/inquiry/inquiry.component';
import { ContactPageInquiryComponent } from './manage/component/contact-page-inquiry/contact-page-inquiry.component';
import { MailTemplateManagementComponent } from './manage/component/mail-template-management/mail-template-management.component';
import { MailManagementComponent } from './manage/component/mail-management/mail-management.component';
import { MailRegistrationComponent } from './manage/component/mail-registration/mail-registration.component';
import { OrganizationManagementComponent } from './manage/component/organization-management/organization-management.component';
import { TeamMemberManagementComponent } from './manage/component/team-member-management/team-member-management.component';
import { ImportMemberComponent } from './manage/component/import-member/import-member.component';
import { ModalTeamMemberComponent } from './manage/component/modal/modal-team-member/modal-team-member.component';
import { PaginationComponent } from './manage/component/pagination/pagination.component';
import { AlertDeleteComponent } from './manage/component/modal/alert-delete/alert-delete.component';
import { AlertConfirmComponent } from './manage/component/modal/alert-confirm/alert-confirm.component';
import { AlertSaveComponent } from './manage/component/modal/alert-save/alert-save.component';
import { AlertSaveNameTemplateComponent } from './manage/component/modal/alert-save-name-template/alert-save-name-template.component';
import { SendLinkComponent } from './manage/component/modal/send-link/send-link.component';
import { ElectronicContractDetailsComponent } from './manage/component/modal/electronic-contract-details/electronic-contract-details.component';
import { ContractCancellationComponent } from './manage/component/modal/contract-cancellation/contract-cancellation.component';
import { LayoutDashboardComponent } from './manage/layout/layout-dashboard/layout-dashboard.component';
import { ElectronicContractAuthenticationCompletedComponent } from './manage/component/electronic-contract-authentication-completed/electronic-contract-authentication-completed.component';
import { SubmitCertificateComponent } from './manage/component/modal/submit-certificate/submit-certificate.component';
import { LayoutEditorComponent } from './manage/layout/layout-editor/layout-editor.component';
import { LayoutMainContractComponent } from './manage/layout/layout-main-contract/layout-main-contract.component';
import { LoadingComponent } from './manage/shared/loading/loading.component';

import { JwtModule } from '@auth0/angular-jwt';
import TokenUtils from './manage/shared/token/token-utils';


export function jwtTokenGetter() {
  return TokenUtils.getToken();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    DashboardHomeComponent,
    DashboardDashboardComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    DashboardCodebookComponent,
    DashboardUserComponent,
    DashboardRoleComponent,
    DashboardPositionComponent,
    TreeCustomerComponent,
    ServiceComponent,
    FeaturesComponent,
    TestimonialComponent,
    CustomerComponent,
    PackageComponent,
    NewsidebarComponent,
    DashboardProfileComponent,
    ToolsEditorPdfComponent,
    ToolsSignaturePadComponent,
    ToolsViewPdfComponent,
    SidebarComponent,
    BasicDescriptionComponent,
    UploadFilePdfComponent,
    PageComponent,
    HeaderComponentmanage,
    SidebarComponentmanage,
    CreatingElectronicComponent,
    DocumentUploadComponent,
    NavbarComponentDemo,
    EditorPdfComponent,
    SendingRecipientsComponent,
    ContractInformationComponent,
    ModalIdentityCertificateComponent,
    RegisterComponent,
    PageRegisterComponent,
    PageLoginComponent,
    LoginComponentFront,
    ForgotPasswordComponent,
    PageForgotPasswordComponent,
    PageVerificationRegisterComponent,
    VerificationRegisterComponent,
    CongratulationsJoiningComponent,
    PageCongratulationsJoiningComponent,
    ElementItemComponent,
    DashboardComponent,
    ModalComponent,
    ExcelTransferComponent,
    TableDataComponent,
    SelectContractTypeComponent,
    SelectRecipientsComponent,
    TemplateManagementComponent,
    ContractManagementComponent,
    TableRequestedComponent,
    TableRequestedMeComponent,
    InformationManageComponent,
    SignatureManagementComponent,
    ModalAddSignatureComponent,
    SignatureComponent,
    PaymentManagementComponent,
    PaymentHistoryComponent,
    RequestRefundComponent,
    RefundDetailsComponent,
    InquiryManagemantComponent,
    InquiryComponent,
    ContactPageInquiryComponent,
    MailTemplateManagementComponent,
    MailManagementComponent,
    MailRegistrationComponent,
    OrganizationManagementComponent,
    TeamMemberManagementComponent,
    ImportMemberComponent,
    ModalTeamMemberComponent,
    PaginationComponent,
    AlertDeleteComponent,
    AlertConfirmComponent,
    AlertSaveComponent,
    AlertSaveNameTemplateComponent,
    SendLinkComponent,
    ElectronicContractDetailsComponent,
    ContractCancellationComponent,
    LayoutDashboardComponent,
    ElectronicContractAuthenticationCompletedComponent,
    SubmitCertificateComponent,
    LayoutEditorComponent,
    LayoutMainContractComponent,
    LoadingComponent,
  ],
  imports: [

    ChartsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    FontAwesomeModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    AngularCropperjsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: environment.whitelistedDomains,
        blacklistedRoutes: [new RegExp('.+\/oauth\/token')]
      }
    }),
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
