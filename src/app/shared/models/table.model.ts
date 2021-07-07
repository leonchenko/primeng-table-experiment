export declare type SortDirection = 'ASC' | 'DESC';
export declare const SortDirection: {
  [K in SortDirection]: SortDirection;
} & {
  values: SortDirection[];
};
export declare type ColumnType = 'INTEGER' | 'DATE' | 'TIME' | 'DATETIME' | 'FLOAT' | 'BOOLEAN' | 'STRING';
export declare const ColumnType: {
  [K in ColumnType]: ColumnType;
} & {
  values: ColumnType[];
};
export declare type TableColumnType =
  'IDENTIFIER_COLUMN'
  | 'KPI_COLUMN'
  | 'RECORD_ATTRIBUTE_COLUMN'
  | 'RECORD_NEW_ATTRIBUTE_COLUMN'
  | 'TASK_COUNT_COLUMN'
  | 'ACTIVE_PRIORITY_COLUMN'
  | 'EMPTY_COLUMN';
export declare const TableColumnType: {
  [K in TableColumnType]: TableColumnType;
} & {
  values: TableColumnType[];
};

export declare class RecordTask {
  recordId: string | undefined;
  taskId: string | undefined;
  name: string | undefined;
}

export declare class RecordAlert {
  recordId: string | undefined;
  alertId: string | undefined;
  description: string | undefined;
}

export declare class RowCell {
  value: string | undefined;
  formattedValue: string | undefined;
  type: ColumnType | undefined;
  tasks: RecordTask[] | undefined;
  alerts: RecordAlert[] | undefined;
}

export declare class ColumnHeader {
  id: string | undefined;
  displayName: string | undefined;
  pql: string | undefined;
  recordMetadataId: string | undefined;
  dataType: ColumnType | undefined;
  columnType: TableColumnType | undefined;
  format: string | undefined;
  unit: string | undefined;
  sortDirection: SortDirection | undefined;
  error: string | undefined;
  filterable: boolean | undefined;
  sortable: boolean | undefined;
  editable: boolean | undefined;
}

export interface TableData {
  id: string;
  headers: ColumnHeader[];
  rows: RowCell[];
  totalCount: number;
  error: string | null;
}
