import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IContact } from './interfaces/concat.interface';
import { ContactsLib } from './libs/contacts.lib';
import { LContact } from './labels/contact.label';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public contactsList: IContact[] = ContactsLib.contactsList;

  protected readonly LContact: typeof LContact = LContact;
}
