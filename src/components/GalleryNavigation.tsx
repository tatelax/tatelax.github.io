import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Custom left navigation arrow component for the image gallery
 */
export const renderLeftNav = (
  onClick: React.MouseEventHandler<HTMLElement>,
  disabled: boolean
): React.ReactNode => (
  <button
    className="image-gallery-left-nav"
    disabled={disabled}
    onClick={onClick}
    aria-label="Previous Slide"
    style={{
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(80, 80, 80, 0.5)",
      borderRadius: "50%",
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      padding: 0,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      zIndex: 4,
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.background = "rgba(100, 100, 100, 0.7)")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.background = "rgba(80, 80, 80, 0.5)")
    }
  >
    <ChevronLeft size={24} color="white" />
  </button>
);

/**
 * Custom right navigation arrow component for the image gallery
 */
export const renderRightNav = (
  onClick: React.MouseEventHandler<HTMLElement>,
  disabled: boolean
): React.ReactNode => (
  <button
    className="image-gallery-right-nav"
    disabled={disabled}
    onClick={onClick}
    aria-label="Next Slide"
    style={{
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(80, 80, 80, 0.5)",
      borderRadius: "50%",
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      padding: 0,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      zIndex: 4,
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.background = "rgba(100, 100, 100, 0.7)")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.background = "rgba(80, 80, 80, 0.5)")
    }
  >
    <ChevronRight size={24} color="white" />
  </button>
);
