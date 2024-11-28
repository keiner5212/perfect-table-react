import { FunctionComponent, MouseEvent, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { Action } from "./TableTypes";

interface ActionsButtonProps {
    actions: Action[];
    hoverEffect?: boolean;
    hoverType?: "row" | "individual";
    color?: string;
    background?: string;
}

const ActionsButton: FunctionComponent<ActionsButtonProps> = ({
    actions,
    hoverEffect = false,
    hoverType = "individual",
    color,
    background,
}) => {
    const buttonRef = useRef<HTMLSpanElement | null>(null);
    const [actionsVisible, setActionsVisible] = useState(false);
    const [rect, setRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        if (actionsVisible && buttonRef.current) {
            setRect(buttonRef.current.getBoundingClientRect());
        }
    }, [actionsVisible]);

    const handleOutsideClick = (e: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
            setActionsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick as unknown as EventListener);
        return () => document.removeEventListener("click", handleOutsideClick as unknown as EventListener);
    }, []);

    const renderActionsList = () => {
        if (!actionsVisible || !rect) return null;

        const actionsStyle: React.CSSProperties = {
            position: "fixed",
            top: rect.bottom + 5,
            left: rect.left + rect.width / 2,
            transform: "translateX(-50%)",
            backgroundColor: "transparent",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "0.25rem",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            minWidth: "150px",
            overflow: "hidden",
        };

        return createPortal(
            <div style={actionsStyle}>
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        onClick={action.onClick}
                        style={{
                            padding: "0.5rem 1rem",
                            textAlign: "left",
                            border: "none",
                            backgroundColor: action.background,
                            color: action.color,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        {action.icon} {action.label}
                    </button>
                ))}
            </div>,
            document.body
        );
    };

    return (
        <td className={hoverEffect && hoverType === "individual" ? "hover-effect" : ""}
            style={{
                color,
                position: "relative",
                backgroundColor: background,
            }}
        >
            <span
                ref={buttonRef}
                className="actions-button"
                onClick={() => setActionsVisible(!actionsVisible)}
                style={{ cursor: "pointer" }}
            >
                <SlOptionsVertical />
            </span>
            {renderActionsList()}
        </td>
    );
};

export default ActionsButton;
