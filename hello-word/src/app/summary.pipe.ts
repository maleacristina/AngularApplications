import { Pipe , PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if (!value) {
            return null;
        }
        return value.substr(0, 50) + '...';
    }
}
