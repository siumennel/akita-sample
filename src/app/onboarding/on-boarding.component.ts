import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  template: `
   <form [formGroup]="onboardingForm">
     <input formControlName="name">
     <input formControlName="age">
     <input formControlName="city">
     <br/>
     {{(value$ | async)?.name}}-{{(value$ | async)?.age}}-{{(value$ | async)?.city}}
     <button *ngIf="isDirty$ | async">Save</button>
   </form>
  `
})

export class OnboardingComponent implements OnInit, OnDestroy {

  onboardingForm: FormGroup;
  value$ = this.formsManager.valueChanges('onboarding');
  isDirty$ = this.formsManager.initialValueChanged('onboarding');

  constructor(
    private formsManager: NgFormsManager,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.onboardingForm = this.builder.group({
      name: ['name', Validators.required],
      age:  [null, Validators.required, , Validators.min(10)],
      city: ['city', Validators.required]
    });

    this.formsManager.upsert('onboarding', this.onboardingForm, {
      withInitialValue: true,
    });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('onboarding');
  }
}
