import { Cell } from "../../models";
import styles from "./cell.module.scss";

interface CellProps {
  column: number;
  row: number;
  value: JSX.Element;
  type?: "header" | "text";
  onMouseDown: (cell: Cell) => void;
  onMouseUp: (cell: Cell) => void;
  onMouseMove: (cell: Cell) => void;
  isDragging: boolean;
  mode: "Edit" | "View";
}

export const DEFAULT_CELL_WIDTH = 120;
export const DEFAULT_CELL_HEIGHT = 50;

const TableCell = (props: CellProps) => {
  return (
    <div
      className={`${styles.cell} ${
        props.type === "header" ? styles.headerCell : ""
      }`}
      onMouseDown={() => {
        if (props.mode === "Edit" && props.type === "text")
          props.onMouseDown({
            column: props.column,
            row: props.row,
            value: props.value,
            header: false,
          });
      }}
      onMouseUp={() => {
        if (props.mode === "Edit" && props.type === "text")
          props.onMouseUp({
            column: props.column,
            row: props.row,
            value: props.value,
            header: false,
          });
      }}
      onMouseMove={() => {
        if (props.mode === "Edit" && props.type === "text")
          props.onMouseMove({
            column: props.column,
            row: props.row,
            value: props.value,
            header: false,
          });
      }}
      onDragStart={() => false}
      style={{
        width: `${DEFAULT_CELL_WIDTH}px`,
        height: `${DEFAULT_CELL_HEIGHT}px`,
        top: `${DEFAULT_CELL_HEIGHT * props.row}px`,
        left: `${DEFAULT_CELL_WIDTH * props.column}px`,
        cursor: `${props.isDragging ? "grabbing" : "grab"}`,
      }}
    >
      {/* <input value={value} onChange={(e) => setValue(e.target.value)} /> */}
      {props.value}
    </div>
  );
};

export default TableCell;
