import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from '../shared/data-service.service';
import {ColumnHeader, RowCell, TableData} from '../shared/models/table.model';

import {EditableColumn} from 'primeng/table';

@Component({
  selector: 'app-table-lib',
  templateUrl: './table-lib.component.html',
  styleUrls: ['./table-lib.component.scss']
})
export class TableLibComponent implements OnInit {

  @Input() limit = 10;
  first = 0;

  public tableData: TableData;
  public headers: ColumnHeader[];
  public columns: RowCell[];

  // @ViewChild(EditableColumn) editableColumn: EditableColumn;

  // clonedValue: { [s: string]: any; } = {};
  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.dataService.getTableData().subscribe((data: TableData) => {
      console.log(data);
      this.tableData = data;
      this.headers = data.headers;
      this.columns = data.rows;
    });
  }

  public log(row: any): void {
    console.log(row);
  }


  public next(): void {

    this.first =  this.first + this.limit;
  }

  public prev(): void {
    this.first = this.first - this.limit;
  }

  public reset(): void {
    this.first = 0;
  }
  public goToPageNumber(num: number): void {
    this.first = this.limit * (num - 1);
  }

  public isLastPage(): boolean {
    return this.columns ? this.first === (this.columns.length - this.limit) : true;
  }

  public isFirstPage(): boolean {
    return this.columns ? this.first === 0 : true;
  }

}
