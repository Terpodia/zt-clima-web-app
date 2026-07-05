import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
    selector: 'app-contact-section',
    imports: [ContactFormComponent],
    templateUrl: './contact-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {}
