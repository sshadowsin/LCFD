import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'highlight2' })

export class HighlightPipe implements PipeTransform {
  noMatch: string;
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      this.noMatch = 'No Match Found';
      return value;
    }

    this.noMatch = 'Match Found';

    // eslint-disable-next-line @typescript-eslint/quotes
    // const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>");
    // return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    // if(value !== '<' || '>' || '<strong>' || '</strong>'){
      return value.replace(re, `<span class="highlight">${match[0]}</span>`);
    // }
    // return window.scrollY();
  }
}
