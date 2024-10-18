import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-send',
  standalone: true,
  templateUrl: './message-send.component.html',
  styleUrl: './message-send.component.scss',
})
export class MessageSendComponent { 
  constructor(private readonly router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
