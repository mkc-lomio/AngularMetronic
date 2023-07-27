import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  data: any[] = ELEMENT_DATA;
  columns: string[] = [
    'QuoteNumber',
    'Date Time',
    'OrganizationName',
    'Premium',
    'Status',
    'Action',
  ];

  constructor(private sanitized: DomSanitizer) {}

  ngOnInit(): void {}

  innerHTMLSanitizer(value?: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

const ELEMENT_DATA: any[] = [
  {
    isHTMLTag: {
      QuoteNumber: false,
      DateTime: false,
      OrganizationName: false,
      Premium: false,
      Status: false,
      Action: false,
    },
    QuoteNumber: 'test',
    DateTime: 'test',
    OrganizationName: 'test',
    Premium: 'test',
    Status: 'test',
    Action: 'test',
  },
  {
    isHTMLTag: {
      QuoteNumber: false,
      DateTime: false,
      OrganizationName: false,
      Premium: false,
      Status: false,
      Action: false,
    },
    QuoteNumber: 'test',
    DateTime: 'test',
    OrganizationName: 'test',
    Premium: 'test',
    Status: 'test',
    Action: 'test',
  },
  {
    isHTMLTag: {
      QuoteNumber: false,
      DateTime: false,
      OrganizationName: false,
      Premium: false,
      Status: false,
      Action: false,
    },
    QuoteNumber: 'test',
    DateTime: 'test',
    OrganizationName: 'test',
    Premium: 'test',
    Status: 'test',
    Action: 'test',
  },
];

