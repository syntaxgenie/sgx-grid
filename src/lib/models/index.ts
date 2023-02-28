// export interface SGXTable {}

export interface TableColumn {
  id: string;
  title: string;
  timeSlots: TableCellValue[];
}

export interface TableRow {
  id: string;
  height: number;
}

export interface Cell {
  value: JSX.Element;
  column: number;
  row: number;
  header: boolean;
}

export interface TableData {
  columns: TableColumn[];
}

export interface TableCellValue {
  from: number;
  to: number;
}
