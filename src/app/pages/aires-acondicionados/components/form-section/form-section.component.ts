import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface for form data
interface FormData {
  // Step 1
  nombre: string;
  telefono: string;
  email: string;
  localidad: string;
  // Step 2
  tipoProyecto: string;
  superficie: string;
  tipoObra: string;
  sistemaInteres: string;
  // Step 3
  mensaje: string;
  archivos: FileList | null;
}

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss',
})
export class FormSectionComponent {
  currentStep = 1;
  formData: FormData = {
    nombre: '',
    telefono: '',
    email: '',
    localidad: '',
    tipoProyecto: '',
    superficie: '',
    tipoObra: '',
    sistemaInteres: '',
    mensaje: '',
    archivos: null,
  };

  formErrors: Record<string, string> = {};
  isSubmitting = false;
  showSuccess = false;

  // Handle form input changes
  handleInputChange(field: keyof FormData, value: string | FileList | null) {
    this.formData = { ...this.formData, [field]: value };
    if (this.formErrors[field]) {
      this.formErrors = { ...this.formErrors, [field]: '' };
    }
  }

  // Handle form submission
  async handleSubmit() {
    if (!this.validateStep(2)) return;

    this.isSubmitting = true;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submission payload:', this.formData);

    this.isSubmitting = false;
    this.showSuccess = true;

    // Reset form after success
    setTimeout(() => {
      this.showSuccess = false;
      this.currentStep = 1;
      this.formData = {
        nombre: '',
        telefono: '',
        email: '',
        localidad: '',
        tipoProyecto: '',
        superficie: '',
        tipoObra: '',
        sistemaInteres: '',
        mensaje: '',
        archivos: null,
      };
    }, 3000);
  }

  // Validate form step
  validateStep(step: number): boolean {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!this.formData.nombre.trim())
        errors['nombre'] = 'El nombre es requerido';
      if (!this.formData.telefono.trim())
        errors['telefono'] = 'El teléfono es requerido';
      if (!this.formData.email.trim())
        errors['email'] = 'El email es requerido';
      if (!this.formData.localidad.trim())
        errors['localidad'] = 'La localidad es requerida';
    } else if (step === 2) {
      if (!this.formData.tipoProyecto)
        errors['tipoProyecto'] = 'El tipo de proyecto es requerido';
      if (!this.formData.superficie.trim())
        errors['superficie'] = 'La superficie es requerida';
      if (!this.formData.tipoObra)
        errors['tipoObra'] = 'El tipo de obra es requerido';
    }

    this.formErrors = errors;
    return Object.keys(errors).length === 0;
  }

  // Navigation methods
  nextStep() {
    if (this.validateStep(this.currentStep)) {
      this.currentStep++;
    }
  }

  prevStep() {
    this.currentStep--;
  }

  // File handling
  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.handleInputChange('archivos', target.files);
    }
  }
}
