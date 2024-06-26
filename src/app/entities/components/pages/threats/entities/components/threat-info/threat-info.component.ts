import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ThreatsLib } from '../../libs/threats.lib';
import { EThreatInfoField } from './entities/threat-info-field.enum';
import { NgLetModule } from 'ng-let';

@Component({
  selector: 'app-threat-info',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgLetModule],
  templateUrl: './threat-info.component.html',
  styleUrl: './threat-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatInfoComponent {
  public route: string = window.location.href.split('/').slice(-1)[0] as string;
  public threatInfoThresaurus: Record<string, Record<string, string>> = ThreatsLib.threatInfoThesaurus;

  protected readonly EThreatInfoField: typeof EThreatInfoField = EThreatInfoField;
}
