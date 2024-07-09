import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        title: 'About',
        component: AboutComponent
    },
    {
        path: 'portfolio',
        title: 'Portfolio',
        component: PortfolioComponent
    }
];
