/**
 * Created by zongy on 16-02-2017.
 */
import { Component } from '@angular/core';
import { Contactinfo } from './contact';

@Component({
  selector: 'contact',
  templateUrl: 'app/contact.html'
})
export class FormComponent {
  model = new Contactinfo('', '', '');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  active = true;
}
