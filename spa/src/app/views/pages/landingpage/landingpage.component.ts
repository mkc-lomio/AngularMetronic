import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router  ) { }

  ngOnInit() {
  }
  
  createSubmission(): void {
    this.router.navigate(['/quotes']);
  }

  /**
   * <button mat-button="" id="3320:44302" class="btn btnapplynow-332044302"  (click)="createSubmission()">
        <div id="3320:44303" class="lblapplynow-332044303">Apply Now</div>
      </button>
   */
}

