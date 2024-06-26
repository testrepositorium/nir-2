import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './entities/components/header/header.component';
import { FooterComponent } from './entities/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {}
