import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { Post1Component } from './post1/post1.component';
import { BlogComponent } from './blog.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    Post1Component,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ClipboardModule
  ],
  providers: [
  ]
})
export class BlogModule { }
