import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'logic-block',
    templateUrl: './logic-block.component.html',
    styleUrls: ['./logic-block.component.scss']
})
export class LogicBlockComponent implements OnInit {
    slug: string = ''
    @Input() hostObject: any;

    @Output() hostEvents: EventEmitter<any> = new EventEmitter<any>();

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.slug = this.hostObject?.Slug || '';
    }

    ngOnChanges(e: any): void {

    }

    closeDialogClick(value) {
        this.hostEvents.emit({
            type: 'close-dialog'
        })
    }
    
    doneClick(value) {
        this.hostEvents.emit({
            type: 'set-configuration',
            configuration: {
                Slug: this.slug
            }
        })
    }
}
