import { Component, OnInit } from "@angular/core";
import {
    ModalDialogHost,
    ModalDialogParams
} from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-day-modal",
    templateUrl: "./day-modal.component.html",
    styleUrls: ["./day-modal.component.css"]
})
export class DayModalComponent implements OnInit {
    private loadedDate: Date;
    constructor(private modalParams: ModalDialogParams) {}

    ngOnInit() {
        this.loadedDate = (this.modalParams.context as { date: Date }).date
    }

    onHandleInput (action: string){
        this.modalParams.closeCallback(action);
    }
}
