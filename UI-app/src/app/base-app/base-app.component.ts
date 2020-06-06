import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {  MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-base-app',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.css']
})
export class BaseAppComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthGroup : FormGroup;
  fifthGroup: FormGroup;

  industries = new FormControl();
  domains = new FormControl();
  locations = new FormControl();
  exps= new FormControl();
  gap = new FormControl();

  showresult=false;   
  industryList: string[] = ['Marketing','Microsoft Office','Communication','Accounts','JAVA','Hadoop','Django','Ruby','HR', 'Python', 'SQL', 'Trainer'];
  locationList :string[]=['Bangalore','Chennai','Mumbai','Delhi/NCR','Gurugram','Noida','Ahmedabad','Kolkata'];
  expList :string[]=['0-1 yrs','1-3 yrs','3-5 yrs','5-8 yrs','8-10 yrs','10+ yrs']
  gapList:string[]=['1','2','3','4','5','6','7','8','9','10']


  domainList: string[] = ['Media / Entertainment / Internet','Advertising / PR / MR / Event Management','Banking / Financial Services / Broking','Aviation','Manager','IT-Software Programming','Data Science',];
  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      industries: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      domains: ['' ]
    });
    this.thirdFormGroup = this._formBuilder.group({
      locations: ['']
    });
    this.fourthGroup = this._formBuilder.group({
      gap: ['']
    });
    this.fifthGroup = this._formBuilder.group({
      exps: ['']
    });
    this._snackBar.open('Check out the latest job trending accross industries.', 'here..', {
      duration: 10000,
      horizontalPosition: 'start',
      verticalPosition: 'top',
    });
  
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      height: '600px',
      width: '800px'
  });
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
