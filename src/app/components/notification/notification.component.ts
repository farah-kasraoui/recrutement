import { Input, Component } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    constructor() {
        // this.alerts.push({
        //     id: 1,
        //     type: 'success',
        //     message: 'This is an success alert',
        // }, {
        //     id: 2,
        //     type: 'info',
        //     message: 'This is an info alert',
        // }, {
        //     id: 3,
        //     type: 'warning',
        //     message: 'This is a warning alert',
        //     icon: 'nc-bell-55'
        // }, {
        //     id: 4,
        //     type: 'danger',
        //     message: 'This is a danger alert',
        //     icon: 'nc-bell-55'
        // });
        // this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }
    showNotification(from, align){
        const type = ['','info','success','warning','danger'];
  
        const color = Math.floor((Math.random() * 4) + 1);
  
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
  
        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
              '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
              '<i class="material-icons" data-notify="icon">notifications</i> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }
    // public closeAlert(alert: IAlert) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
    icon?: string;
}
