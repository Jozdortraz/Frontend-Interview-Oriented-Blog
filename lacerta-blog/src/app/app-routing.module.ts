import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/html/html-history',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/html/html-tags/doctype',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/html/html-tags/p',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/interview/career-development/frontend-engineer-career',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/interview/interview-preparation/job-seeking',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'frontend-interview/interview/interviewing/interview-questions-answering',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'misc',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'programming',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'website-development',
    component: PageComponent,
    pathMatch: 'full'
  },
{
    path: 'about',
    component: PageComponent,
    pathMatch: 'full'
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
