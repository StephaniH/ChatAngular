import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
