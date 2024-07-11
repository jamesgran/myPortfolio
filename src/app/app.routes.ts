import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EducationComponent } from './pages/education/education.component';

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
    },
    {
        path: 'educacion',
        title: 'Educacion',
        component: EducationComponent
    }
];
