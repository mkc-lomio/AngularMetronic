// Angular
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { LandingpageComponent } from './landingpage.component';
import { MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
	declarations: [
		LandingpageComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: LandingpageComponent,
				children: [
					{ // same with '' 
						path: 'landingpage',
						component: LandingpageComponent
					}
				]
			},
		]),
		MatSelectModule,
		MatInputModule
	]
})
export class LandingPageModule {
}
