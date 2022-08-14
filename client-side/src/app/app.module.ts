import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Component, DoBootstrap, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogicBlockModule } from './logic-block/logic-block.module';
import { RouterModule, Routes } from '@angular/router';
import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { LogicBlockComponent } from './logic-block';

import { config } from './addon.config'

@Component({
    selector: 'app-empty-route',
    template: '<div>Route is not exist.</div>',
})
export class EmptyRouteComponent {}

const routes: Routes = [
    { path: '**', component: EmptyRouteComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        LogicBlockModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        //AppComponent
    ]
})
export class AppModule implements DoBootstrap {
    
    constructor(private pepAddonService: PepAddonService,
        private injector: Injector) {}

    ngDoBootstrap(appRef: ApplicationRef): void {
        this.pepAddonService.defineCustomElement(`example-logic-block-element-${config.AddonUUID}`, LogicBlockComponent, this.injector)      
    }
}
