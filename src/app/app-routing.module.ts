import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBooksComponent } from './list-taches/list-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  { path: 'books', component: ListBooksComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'updateBook/:id', component: UpdateBookComponent },
  { path: 'viewBook/:id', component: ViewBookComponent },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
