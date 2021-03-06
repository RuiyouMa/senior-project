import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  templateUrl: './new-poll.component.html'
})
export class NewPollComponent implements OnInit {
  pollForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  choice: 'Angular 7';
  // Change this array type to new poll component
  opArr: Array<string>;
  options: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.pollForm = this.formBuilder.group ({
      pollTitle: ['', Validators.required],
      options: this.formBuilder.array(
        [this.initOption()]
      )
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Title', form.value.pollTitle);
  }

  initOption() {
    return this.formBuilder.group({
      label: ''
    });
  }

  addOption(): void {
    //if (newOption){
      /*var opValue = (<HTMLInputElement>document.getElementById("optionBox")).value;
      this.opArr.push(opValue);
      document.getElementById("target-id").innerText = opValue;*/
   // }
    // Add the new option to FormArray
    //(this.pollForm.controls['options'] as FormArray).push(this.initOption())

    this.options = this.pollForm.get('options') as FormArray;
    this.options.push(this.initOption());
  }

  removeOption(){
    this.options = this.pollForm.get('options') as FormArray;
    this.options.removeAt(this.options.length - 1);
  }

  addUser() {

  }

  removeUser(){

  }
  send() {
    console.log(this.pollForm.value);
  }

  
}
