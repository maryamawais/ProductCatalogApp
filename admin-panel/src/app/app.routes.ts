import { Routes } from '@angular/router';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { raceWith } from 'rxjs';
import { getLocaleDayPeriods } from '@angular/common';

export const routes: Routes = [
    // {
    //     path:'',
    //     component: ContentAreaComponent
    // },
    {
        path: '',
        component: DashboardComponent
    }
];

