import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogicBlockModule } from './logic-block/logic-block.module';

@NgModule({
    imports: [
        BrowserModule,
        LogicBlockModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
