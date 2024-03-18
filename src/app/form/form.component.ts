import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FormData {
  emails: string;
  amount: number;
  url: string;
}

interface FormErrors {
  emails?: string;
  amount?: string;
  url?: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  isValidate: boolean = false
  newErrors: FormErrors = { emails: '', amount: '', url: '' };
  formData: FormData = { emails: '', amount: 0, url: '' };

  onSubmit(e: any) {
    // this.isValidate = true
    e.preventDefault()
    this.validateForm()
  }

  onChange(e: any) {
    const data = e.target.value

    switch (e.target.id) {
      case "emails":
        this.formData.emails = data
        break;
      case "amount":
        this.formData.amount = data
        break;
      case "url":
        this.formData.url = data
        break;
    }
  }

  validateEmails = (emails: string): boolean => {
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}(?:, ?[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7})*$/;
    return emailRegex.test(emails);
  };

  validateAmount = (amount: string): boolean => {
    const amountRegex = /^€\s?\d+,\d{2}$/;
    return amountRegex.test(amount);
  };

  validateUrl = (url: string): boolean => {
    // Regular Expression
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.]*)*(#[\w-]*)?$/;
    return urlRegex.test(url);
  };

  validateForm = (): void => {
    this.newErrors = {};

    if (!this.validateEmails(this.formData.emails)) {
      this.newErrors.emails = "Incorrect email/s. Please try again.";
    }

    if (!this.validateAmount(this.formData.amount.toString())) {
      this.newErrors.amount = "This field only accept numbers with decimals and € symbol.";
    }

    if (!this.validateUrl(this.formData.url)) {
      this.newErrors.url = "Incorrect URL. Please try again.";
    }

    if (Object.keys(this.newErrors).length === 0) {
      this.isValidate = true
    }

  };
}
