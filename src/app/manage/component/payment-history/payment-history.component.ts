import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  td: any;
  constructor() { }

  ngOnInit(): void {
    this.td = this.inData();
  }

  inData() {
    return [
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '1,000,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '1,000',
        processingStatus: '요청',
        refundOrCancellation: true
      },
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '500,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '100',
        processingStatus: '진행중',
        refundOrCancellation: false
      },
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '10,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '10',
        processingStatus: '환불완료',
        refundOrCancellation: true
      },
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '1,000,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '1,000',
        processingStatus: '요청',
        refundOrCancellation: true
      },
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '500,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '100',
        processingStatus: '진행중',
        refundOrCancellation: false
      },
      {
        paymentDate: '2020/03/30 09:30:30',
        paymentServiceHistory: '프리미엄',
        paymentMethod: '신용카드',
        cardNumber: '1234-1234-****-5678',
        amountOfPayment: '10,000',
        approvalNumber: '79234598',
        approvalDate: '2020/05/02',
        purchasePoint: '10',
        processingStatus: '환불완료',
        refundOrCancellation: true
      }
    ]
  }

}
