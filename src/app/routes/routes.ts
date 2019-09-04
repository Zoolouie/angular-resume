import { HomeComponent } from '../home/home.component';
import { Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { ResumeComponent } from '../resume/resume.component';
import { AboutMeComponent } from '../about-me/about-me.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
]