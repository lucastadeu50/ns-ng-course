import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef
} from "@angular/core";
import { UIService } from "./shared/ui.service";
import { Subscriber, Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent , { static: true }) drawerComponent: RadSideDrawerComponent;

    activeChallenge = "";
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;

    constructor(
        private uiService: UIService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }
    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            this.drawerComponent.sideDrawer
            if (this.drawer) {
               this.drawer.toggleDrawerState();

            }
        });
    }

    onChallengeInput(challengeDescription: string) {
        this.activeChallenge = challengeDescription;
        console.log("onChallengeInput: ", challengeDescription);
    }
}
