import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'' , component: HomeComponent },
  { path: 'chat/:id', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }


