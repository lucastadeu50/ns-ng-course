import { Component, OnInit, Input } from "@angular/core";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { UIService } from "../../ui.service";
declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {
    constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) {}

    @Input() title: string;
    @Input() showBackButton = true;
    @Input() hasMenu = true;

    ngOnInit() {}


    get android (){
        return isAndroid;
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }
    onGoBack() {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }
    onToggleMenu(){
        this.uiService.toggleDrawer();
    }
}
