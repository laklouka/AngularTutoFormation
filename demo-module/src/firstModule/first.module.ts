import { NgModule } from "@angular/core";
import { SubFirstComponent } from "./sub-first.component";
import { SubFirstService } from "./sub-first.service";
import { SubSecondComponent } from "./sub-second.component";

@NgModule({
    imports : [],
    declarations : [SubFirstComponent, SubSecondComponent],
    providers : [SubFirstService],
    exports : [SubFirstComponent]
})
export class FirstModule {

}