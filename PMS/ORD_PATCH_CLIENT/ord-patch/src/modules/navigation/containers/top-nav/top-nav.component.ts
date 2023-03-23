import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '@modules/navigation/services';
import { sideNavItems, sideNavSections, sideNavSectionsCollege } from '@modules/navigation/data';

@Component({
    selector: 'sb-top-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
    recherche: string | undefined = undefined;
    mode_college = 'inactive'
    mode_dept = 'active'
    constructor(private navigationService: NavigationService) {}
    ngOnInit() {
    }
    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }

    changeCollege(){
        this.navigationService._mode.next("COLLEGE");
        this.mode_dept = 'inactive';
        this.mode_college = 'active';
    }

    changeDept(){
        this.navigationService._mode.next("DEPT");
        this.mode_dept = 'active';
        this.mode_college = 'inactive';
    }
}
