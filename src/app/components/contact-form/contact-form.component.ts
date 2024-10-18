import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importamos los módulos necesarios
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isLoading = false;
  isDialogOpen = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router
  ) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      areaCode: ['', [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\d\s]+$/),
          Validators.maxLength(10),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
    });

    emailjs.init({
      publicKey: '6MCw1hLeM0g5EdMnV',
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const formData = this.contactForm.value;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      emailjs.send('service_xmv6zfe', 'template_r6h2za9', templateParams).then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.contactForm.reset(); // Resetea el formulario después de enviar
          this.isLoading = false;
          this.router.navigate(['/mensaje-enviado']);
          this.cdr.detectChanges();
        },
        (err) => {
          this.isLoading = false;
          console.error('FAILED...', err);
          alert('Ocurrió un error al enviar el mensaje.');
        }
      );
    } else {
      console.log('Form not valid');
    }
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.cdr.detectChanges();
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }

  get areaCode() {
    return this.contactForm.get('areaCode');
  }

  get phone() {
    return this.contactForm.get('phone');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
