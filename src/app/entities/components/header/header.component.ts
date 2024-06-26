import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ITab } from './entities/interfaces/tab.interface';
import { TabLib } from './entities/libs/tab.lib';
import { LTab } from './entities/labels/tab.label';
import { NavigationEnd, Router, Event, RouterLink } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { ETab } from './entities/enums/tab.enum';
import { AsyncPipe } from '@angular/common';
import { NgLetModule } from 'ng-let';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgLetModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly _router: Router = inject(Router);

  public tabs: ITab[] = TabLib.tabs;
  public routeName$: Observable<string> = this._router.events.pipe(
    filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.url)
  );

  protected readonly LTab: typeof LTab = LTab;

  /**
   * Переходим на вкладку HOME
   */
  public goHome(): void {
    this._router.navigate([ETab.HOME]);
  }
}
