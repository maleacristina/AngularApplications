import { Pipe , PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: any) {
        if (!value) {
            return null;
        }
        const actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}
