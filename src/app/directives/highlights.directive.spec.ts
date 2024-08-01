import { ElementRef } from '@angular/core';
import { HighlightsDirective } from './highlights.directive';

describe('HighlightsDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('div'));
    const directive = new HighlightsDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
