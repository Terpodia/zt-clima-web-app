import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-dialog.component.html',
  styleUrl: './whatsapp-dialog.component.scss',
})
export class WhatsappDialogComponent {
  @Output() close = new EventEmitter<void>();
  @Output() optionSelected = new EventEmitter<string>();

  private readonly WHATSAPP_API =
    'https://api.whatsapp.com/send/?type=phone_number&app_absent=0';
  private readonly message = 'Hola ZT Clima, necesito asesoramiento.';

  options = [
    {
      title: 'Aire acondicionado',
      phone: '541151534100',
      displayPhone: '11 5153-4100',
    },
    {
      title: 'Calefacción',
      phone: '541131601069',
      displayPhone: '11 3160-1069',
    },
  ];

  onClose() {
    this.close.emit();
  }

  onOptionClick(phone: string, title: string) {
    const whatsappUrl = `${this.WHATSAPP_API}&phone=${phone}&text=${this.message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    this.optionSelected.emit(title);
    this.close.emit();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
