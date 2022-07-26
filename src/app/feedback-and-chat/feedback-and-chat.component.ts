import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedbackAndChatComponent implements OnInit {

  showMsg: boolean = false;

  contactForm = this.formBuilder.group({
    fullname: '',
    email: '',
    comments: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    console.log('Form inputs: ', this.contactForm.value);
    
    // The logic to fire an email should go here

    // If email is sent successfully
    this.showMsg = true;
    //this.contactForm.reset();
  }

}
