"use client";
import { ItemsMap, FoldersMap, FolderInfoMap } from "./PortfolioApp";

// Define content structure
export const portfolioData = {
  // All items with their details
  items: {
    item1: {
      id: "item1",
      name: "Alternative Paint.png",
      icon: "🎨",
      color: "#5A8DEE",
      details: {
        name: "Alternative Paint.png",
        size: "2.1 MB",
        created: "May 2024",
        client: "Self-initiated",
        tags: ["Bold", "Experimental", "Digital"],
        description: "An exploration of digital painting techniques.",
        media: [
          { path: "testimage.png", type: "image" },
          { path: "alternative-paint-2.png", type: "image" },
        ],
      },
    },
    item2: {
      id: "item2",
      name: "Blurred Ovals.png",
      icon: "⭕",
      color: "#5A8DEE",
      details: {
        name: "Blurred Ovals.png",
        size: "1.8 MB",
        created: "April 2024",
        client: "Agency X",
        tags: ["Minimal", "Clean", "Abstract"],
        description: "A series of abstract compositions with blurred ovals.",
        media: [{ path: "blurred-ovals.png", type: "image" }],
      },
    },
    item3: {
      id: "item3",
      name: "Toggle This.png",
      icon: "🔘",
      color: "#38AF65",
      details: {
        name: "Toggle This.png",
        size: "0.9 MB",
        created: "June 2024",
        client: "UI Elements Co.",
        tags: ["UI", "Components", "Interactive"],
        description:
          "A collection of toggle switch designs for web interfaces.",
        media: [
          { path: "toggle-this-1.png", type: "image" },
          { path: "toggle-this-2.png", type: "image" },
          {
            path: "toggle-demo.mp4",
            type: "video",
            thumbnail: "toggle-thumb.png",
          },
        ],
      },
    },
    item4: {
      id: "item4",
      name: "God Rays.png",
      icon: "🌞",
      color: "#F8C881",
      details: {
        name: "God Rays.png",
        size: "3.2 MB",
        created: "March 2024",
        client: "Self-initiated",
        tags: ["Lighting", "Natural", "Atmospheric"],
        description: "A study of light rays through different atmospheres.",
        media: [{ path: "god-rays.png", type: "image" }],
      },
    },
    item5: {
      id: "item5",
      name: "Inner Creativity.png",
      icon: "🧠",
      color: "#F39C74",
      details: {
        name: "Inner Creativity.png",
        size: "2.4 MB",
        created: "February 2024",
        client: "Creative Mind Inc.",
        tags: ["Abstract", "Conceptual", "Mind"],
        description: "An abstract representation of the creative process.",
        media: [
          { path: "inner-creativity.png", type: "image" },
          {
            path: "creative-process.pdf",
            type: "pdf",
            thumbnail: "creative-process-thumb.png",
          },
        ],
      },
    },
  } as ItemsMap,

  // Folders with references to items
  folders: {
    "Web Design": ["item1", "item2", "item3"],
    "Product Design": ["item3", "item4", "item5"],
    "Visual Design": ["item2", "item4"],
    Experiments: ["item1", "item5"],
    Portfolio: ["item1", "item2", "item3", "item4", "item5"],
  } as FoldersMap,

  // Folder metadata
  folderInfo: {
    "Web Design": { icon: "📱", description: "Web interface designs" },
    "Product Design": {
      icon: "📦",
      description: "Physical and digital product designs",
    },
    "Visual Design": {
      icon: "👁️",
      description: "Visual experiments and studies",
    },
    Experiments: { icon: "🧪", description: "Experimental works and concepts" },
    Portfolio: { icon: "🗂️", description: "Complete portfolio collection" },
  } as FolderInfoMap,
};
