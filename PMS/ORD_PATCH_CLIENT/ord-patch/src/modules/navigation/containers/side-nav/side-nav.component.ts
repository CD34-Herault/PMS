import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { SettingsService } from '@modules/settings/services';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    sidenavStyle= new  BehaviorSubject<string>("");
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;


    constructor(public navigationService: NavigationService, public userService: UserService, public authService: AuthentificationService, public user_profil: SettingsService) {}

    ngOnInit() {
        this.user_profil.get_user_profil().subscribe(res => {
            if(res.theme == 'Dark'){
                this.sidenavStyle.next('sb-sidenav-dark');
            };
            if(res.theme == 'Light'){
                this.sidenavStyle.next('sb-sidenav-light');
            }
            if(res.theme == 'blanc-bleu'){
                this.sidenavStyle.next('sb-sidenav');
            }
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
