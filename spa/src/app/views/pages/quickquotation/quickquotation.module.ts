// Angular
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { QuickquotationComponent } from './quickquotation.component';
import { MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
	declarations: [
		QuickquotationComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: QuickquotationComponent,
				children: [
					// {
					// 	path: 'wizard-1',
					// 	component: Wizard1Component
					// }
				]
			},
		]),
		MatSelectModule,
		MatInputModule
	]
})
export class QuickQuotationModule {
}
