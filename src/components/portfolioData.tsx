"use client";
import { ItemsMap, FoldersMap, FolderInfoMap } from "./PortfolioApp";

// Define content structure
export const portfolioData = {
  // All items with their details
  items: {
    sandboxr: {
      id: "sandboxr",
      name: "Sandboxr",
      icon: "🎨",
      color: "#5A8DEE",
      image: "images/icons/paceicontiny.jpg",
      year: "2011",
      details: {
        name: "Sandboxr - a 3D printing service.",
        date: "2011",
        client: "Self-initiated",
        tags: ["Bold", "Experimental", "Digital"],
        description: "An exploration of digital painting techniques.",
        media: [
          {
            path: "testimage.png",
            type: "image",
            title: "Hello, World!",
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
    cavecrusade: {
      id: "cavecrusade",
      name: "Cave Crusade",
      icon: "⭕",
      color: "#5A8DEE",
      year: "2013",
      details: {
        name: "Cave Crusade",
        date: "2013",
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
    processoptimization: {
      id: "processoptimization",
      name: "Process Optimization",
      icon: "🔘",
      color: "#38AF65",
      year: "2016",
      details: {
        name: "Process Optimization",
        date: "2016",
        client: "Process, Research, & Optimization, LLC",
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
    emergenyc: {
      id: "emergenyc",
      name: "EmergeNYC",
      icon: "🌞",
      color: "#F8C881",
      year: "2016",
      details: {
        name: "EmergeNYC",
        date: "2016",
        client: "Self-initiated",
        tags: ["Lighting", "Natural", "Atmospheric"],
        description: "A study of light rays through different atmospheres.",
        media: [
          {
            path: "god-rays.png",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was date using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
        ],
      },
    },
    volygon: {
      id: "volygon",
      name: "Volygon",
      icon: "⚔️",
      color: "#7c6af7",
      year: "2018",
      details: {
        name: "Volygon",
        date: "2018",
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
    magellan: {
      id: "magellan",
      name: "Magellan",
      icon: "⚡",
      color: "#00000",
      year: "2020",
      details: {
        name: "Magellan",
        date: "2020",
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
    herorescuers: {
      id: "herorescuers",
      name: "Hero Rescuers",
      icon: "🚨",
      color: "#ff5733",
      year: "2021",
      details: {
        name: "Volygon",
        date: "2021",
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
    tinydrive: {
      id: "tinydrive",
      name: "Tiny Drive",
      icon: "🏎️",
      color: "#33ffc2",
      year: "2021",
      details: {
        name: "Tiny Drive",
        date: "2021",
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
    walmartauc: {
      id: "walmartauc",
      name: "Walmart AUC",
      icon: "🧠",
      image: "images/icons/walmarticontiny.png",
      color: "#F39C74",
      year: "2022",
      details: {
        name: "Walmart Associate Use Case",
        date: "2022",
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
    walmartvideocapture: {
      id: "walmartvideocapture",
      name: "Walmart XR Video",
      icon: "🧠",
      image: "images/icons/walmarticontiny.png",
      color: "#F39C74",
      year: "2023",
      details: {
        name: "Walmart XR Video",
        date: "2018",
        client: "Walmart, Inc.",
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
    walmartaixr: {
      id: "walmartaixr",
      name: "Walmart AI + XR",
      icon: "🧠",
      image: "images/icons/walmarticontiny.png",
      color: "#F39C74",
      year: "2023",
      details: {
        name: "Walmart AI + XR",
        date: "2023",
        client: "Walmart, Inc.",
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
    walmartspectatorview: {
      id: "walmartspectatorview",
      name: "Walmart Spectator View",
      icon: "🧠",
      image: "images/icons/walmarticontiny.png",
      color: "#F39C74",
      year: "2024",
      details: {
        name: "Walmart Spectator View",
        date: "2024",
        client: "Walmart, Inc.",
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
    melo: {
      id: "melo",
      name: "melo",
      icon: "🧠",
      color: "#F39C74",
      year: "2024",
      details: {
        name: "melo",
        date: "2024",
        client: "self",
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
    wine: {
      id: "wine",
      name: "wine",
      icon: "🧠",
      color: "#F39C74",
      year: "2024",
      details: {
        name: "wine",
        date: "2024",
        client: "self",
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
    rso: {
      id: "rso",
      name: "Rescue Simulator: Online",
      icon: "🧠",
      image: "images/icons/rsoicontiny.jpg",
      color: "#F39C74",
      year: "2024",
      details: {
        name: "Rescue Simulator: Online",
        date: "2024",
        client: "self",
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
    pace: {
      id: "pace",
      name: "pace",
      icon: "🧠",
      image: "images/icons/paceicontiny.jpg",
      color: "#F39C74",
      year: "2025",
      details: {
        name: "pace",
        date: "2025",
        client: "self",
        tags: ["Swift", "Design", "Engineering"],
        description: "A social habit building app for iOS.",
        media: [
          {
            path: "images/portfolio/pace/1.png",
            type: "image",
            title: "Dashboard",
            description:
              "This is the dashboard view of the pace app. This is where users can see all of the groups they belong to.",
          },
          {
            path: "images/portfolio/pace/1.png",
            type: "image",
            thumbnail: "creative-process-thumb.png",
            description:
              "This comprehensive PDF explores the theoretical framework behind the visual representation. It includes additional diagrams, research citations, and practical exercises for enhancing creative thinking based on neuroscience principles.",
          },
        ],
      },
    },
    aimarketresearch: {
      id: "aimarketresearch",
      name: "AI Market Research",
      icon: "🧠",
      color: "#F39C74",
      year: "2025",
      details: {
        name: "AI Market Research",
        date: "2025",
        client: "self",
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
    Projects: [
      "sandboxr",
      "cavecrusade",
      "processoptimization",
      "emergenyc",
      "volygon",
      "magellan",
      "herorescuers",
      "tinydrive",
      "walmartauc",
      "walmartvideocapture",
      "walmartaixr",
      "walmartspectatorview",
      "rso",
      "pace",
    ],
    Experiments: ["tinydrive", "melo", "aimarketresearch"],
    "Open-Source": ["item3", "item4", "item5"],
    Educational: ["item2", "item4"],
    About: ["item5"],
  } as FoldersMap,

  // Folder metadata
  folderInfo: {
    Projects: { icon: "📁", description: "Projects" },
    Experiments: { icon: "📁", description: "Experiments" },
    "Open-Source": {
      icon: "📁",
      description: "Open-source stuff I've contributed to",
    },
    Educational: {
      icon: "📁",
      description: "Educational projects",
    },
    About: { icon: "📁", description: "About me" },
    Posts: { icon: "📁", description: "Posts" },
  } as FolderInfoMap,
};
