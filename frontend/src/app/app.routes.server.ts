import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'employee/edit/:id',
  //   renderMode: RenderMode.Server
  // },
  // {
  //   path: 'employee/:id',
  //   renderMode: RenderMode.Server
  // },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
