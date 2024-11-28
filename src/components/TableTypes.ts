import { MouseEvent, ReactNode } from "react";

/** 
 * Represents an individual table content element. 
 * It extends the base properties defined in `TableElementBase`.
 */
export interface TableContentIndvidual extends TableElementBase {
    /**
     * The content of the table cell.
     * - `Label`: The display text for the cell.
     * - `data`: The actual data contained in the cell (can be of any type).
     */
    content: {
        Label: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
    };
    /** Text color of the element. */
    color?: string;
    /** Background color of the element. */
    background?: string;
    /** Callback function triggered when the element is clicked. */
    onClick?: (event: MouseEvent<HTMLTableCellElement>) => void;
    /** Text alignment for the content: "left", "center", or "right". */
    align?: "left" | "center" | "right";
}

/**
 * Defines base properties for table elements, including cells and headers.
 */
interface TableElementBase {
    /** Custom CSS class for the element. */
    classname?: string;
    /** Indicates whether the content should be bold. */
    bold?: boolean;
    /** Text color of the element. */
    color?: string;
    /** Background color of the element. */
    background?: string;
    /** Text alignment for the content: "left", "center", or "right". */
    align?: "left" | "center" | "right";
    /** Tooltip text displayed on hover. */
    tooltip?: string;
}

/**
 * Represents a table header element, extending base properties and adding specific options for headers.
 */
export interface TableHeaderType extends TableElementBase {
    /**
     * The content of the header.
     * - `Label`: The display text for the header.
     */
    content: {
        Label: string;
    };
    /** An optional icon to be displayed in the header. */
    icon?: ReactNode;
    /** Indicates whether the header reacts visually on hover. */
    hoverEffect?: boolean;
    /** Position of the icon relative to the label: "left" or "right". */
    iconPosition?: "left" | "right";
    /** Indicates whether the header is sortable. */
    sortable?: boolean;
    /**
     * Custom sorting function for the header.
     * @param dataA First data element to compare.
     * @param dataB Second data element to compare.
     * @returns A number indicating the order of elements for sorting.
     */
    sortMethod?: (
        dataA: TableContentIndvidual[],
        dataB: TableContentIndvidual[]
    ) => number;
}

export interface Action {
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    icon?: ReactNode;
    background?: string;
    color?: string;
}

/**
 * Represents a table row, including its columns and optional actions.
 */
export interface TableRowType {
    /** Optional identifier for the row. */
    id?: string;
    /** Array of columns, each representing an individual table content element. */
    columns: TableContentIndvidual[];
    /** Indicates whether the row reacts visually on hover. */
    hoverEffect?: boolean;
    /** Specifies the hover effect type: "row" for the entire row or "individual" for each cell. */
    hoverType?: "row" | "individual";
    /**
     * Array of actions available for the row.
     * Each action includes:
     * - `label`: Display text for the action.
     * - `icon`: Optional icon for the action.
     * - `onClick`: Callback function triggered when the action is clicked.
     */
    actions?: Action[];
}