import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { AuthentificationService } from '@modules/generic-services/authentification.service';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public authentificationService: AuthentificationService) {}
    ngOnInit() {}

    Reset(){
        this.authentificationService.disconnect().subscribe(res => {
            console.log(res);
        });
    }
}
