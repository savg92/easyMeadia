import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
	@Input() totalItems = 0;
	@Input() itemsPerPage = 10;
	@Output() pageChange = new EventEmitter<number>();
	pages: number[] = [];
	currentPage = 1;

	ngOnChanges() {
		this.pages = Array(Math.ceil(this.totalItems / this.itemsPerPage))
			.fill(0)
			.map((x, i) => i + 1);
	}

	changePage(page: number) {
		this.currentPage = page;
		this.pageChange.emit(page);
	}
}
