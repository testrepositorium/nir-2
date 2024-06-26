import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { IThreatCard } from './entities/interfaces/threat-card.interface';
import { ThreatsLib } from './entities/libs/threats.lib';
import { LThreatCard } from './entities/labels/threat-card.label';
import { ETab } from '../../header/entities/enums/tab.enum';
import { NavigationEnd, Router, RouterLink, RouterOutlet, Event } from '@angular/router';
import { map, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-threats',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './threats.component.html',
  styleUrl: './threats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatsComponent implements OnInit {
  private readonly _router: Router = inject(Router);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public threats: IThreatCard[] = ThreatsLib.threatsList;

  public isListVisible: boolean = window.location.href.split('#')[1] === `/${ETab.THREATS}`;

  public ngOnInit(): void {
    this._router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === `/${ETab.THREATS}`),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe((isListVisible: boolean) => {
      this.isListVisible = isListVisible;
      this._changeDetectorRef.detectChanges();
    });
  }

  protected readonly LThreatCard: typeof LThreatCard = LThreatCard;
  protected readonly ETab: typeof ETab = ETab;
}
