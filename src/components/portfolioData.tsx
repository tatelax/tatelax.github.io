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
          {
            path: "testimage.png",
            type: "image",
            description:
              "This piece explores an alternative approach to digital painting, using unconventional brushes and textures to create depth. The technique involves layering multiple translucent colors to achieve a vibrant yet controlled chaos effect.",
          },
          {
            path: "testimage.png",
            type: "image",
            description:
              "A close-up detail of the painting showing the intricate brushwork and texture. Notice how the overlapping layers create an almost three-dimensional effect when viewed from different angles.",
          },
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
        media: [
          {
            path: "blurred-ovals.png",
            type: "image",
            description:
              "This minimalist composition features a series of overlapping oval shapes with carefully calibrated blur effects. The gradual transition between sharp and blurred elements creates a sense of depth and movement within a deceptively simple framework.",
          },
        ],
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
          {
            path: "toggle-this-1.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "toggle-this-2.png",
            type: "image",
            description:
              "Alternative toggle states showing various color combinations and states (active, inactive, disabled, and hover). Each variation maintains the core design language while adapting to different contexts.",
          },
          {
            path: "toggle-demo.mp4",
            type: "video",
            thumbnail: "toggle-thumb.png",
            description:
              "This video demonstrates the toggle switch in action, showing the fluid microinteractions and state transitions. The animation timing was carefully calibrated to feel responsive without being distracting.",
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
        media: [
          {
            path: "god-rays.png",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was created using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
        ],
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
          {
            path: "inner-creativity.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "creative-process.pdf",
            type: "pdf",
            thumbnail: "creative-process-thumb.png",
            description:
              "This comprehensive PDF explores the theoretical framework behind the visual representation. It includes additional diagrams, research citations, and practical exercises for enhancing creative thinking based on neuroscience principles.",
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
    "Web Design": { icon: "📁", description: "Web interface designs" },
    "Product Design": {
      icon: "📁",
      description: "Physical and digital product designs",
    },
    "Visual Design": {
      icon: "📁",
      description: "Visual experiments and studies",
    },
    Experiments: { icon: "📁", description: "Experimental works and concepts" },
    Portfolio: { icon: "📁", description: "Complete portfolio collection" },
  } as FolderInfoMap,
};
