import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environment/environment';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: any = FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const params = this.contactForm.value;
      emailjs.init(environment.PUBLIC_KEY);
      emailjs
        .send(environment.SERVICE_ID, environment.TEMPLATE_ID, params)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert('Message sent!');
      // Clear the form data
      this.contactForm.reset();
    }
  }
}
