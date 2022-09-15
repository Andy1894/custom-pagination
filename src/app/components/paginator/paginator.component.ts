import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Output() currentPage: EventEmitter<number> = new EventEmitter()

  emitCurrentPage = (page: number) => this.currentPage.emit(page)
}
