import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private Person: {[k: string]: any} = {};
  private isPopupOpen = false;
  public noData = false;

  private itemList = [];
  public selectedItemId = -1;
  // Validation check
  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  nameError = new MyErrorStateMatcher();

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameError = new MyErrorStateMatcher();

  idFormControl = new FormControl('', [
    Validators.required
  ]);

  idError = new MyErrorStateMatcher();
  // ---

  constructor(private router: Router) {
    if (history.state.person) {
      this.Person = history.state.person;
    }
  }

  ngOnInit() {
    this.itemList = [
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:08:2019 20:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '02:08:2019 10:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '01:08:2019 21:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '18:07:2019 22:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '11:07:2019 12:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:07:2019 13:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '07:07:2019 09:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '02:07:2019 18:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '01:07:2019 19:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '19:06:2019 18:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '11:06:2019 20:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '05:06:2019 22:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '15:05:2019 23:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:05:2019 21:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '17:04:2019 04:30'},
    ];
  }

  check(id): boolean {
    return id;
  }

  openClosePopup() {
    if (!this.nameFormControl.invalid && !this.surnameFormControl.invalid && !this.idFormControl.invalid) {
      this.isPopupOpen = !this.isPopupOpen;
    }
  }

  selectItem(index) {
    this.selectedItemId = index;
  }

  navigate() {
    if (this.selectedItemId >= 0) {
      this.router.navigateByUrl('/sms', { state: {person: this.Person}  });
    }
  }

}
