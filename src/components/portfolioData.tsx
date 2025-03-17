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
            path: "images/portfolio/sandboxr/1.jpg",
            type: "image",
            title: "Hello, World!",
            description:
              "This piece explores an alternative approach to digital painting, using unconventional brushes and textures to create depth. The technique involves layering multiple translucent colors to achieve a vibrant yet controlled chaos effect.",
          },
          {
            path: "images/portfolio/sandboxr/2.jpg",
            type: "image",
            description:
              "A close-up detail of the painting showing the intricate brushwork and texture. Notice how the overlapping layers create an almost three-dimensional effect when viewed from different angles.",
          },
          {
            path: "images/portfolio/sandboxr/3.jpg",
            type: "image",
            description:
              "A close-up detail of the painting showing the intricate brushwork and texture. Notice how the overlapping layers create an almost three-dimensional effect when viewed from different angles.",
          },
          {
            path: "images/portfolio/sandboxr/4.jpg",
            type: "image",
            description:
              "A close-up detail of the painting showing the intricate brushwork and texture. Notice how the overlapping layers create an almost three-dimensional effect when viewed from different angles.",
          },
          {
            path: "images/portfolio/sandboxr/5.png",
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
            path: "images/portfolio/cavecrusade/1.png",
            type: "image",
            description:
              "This minimalist composition features a series of overlapping oval shapes with carefully calibrated blur effects. The gradual transition between sharp and blurred elements creates a sense of depth and movement within a deceptively simple framework.",
          },
          {
            path: "images/portfolio/cavecrusade/2.png",
            type: "image",
            description:
              "This minimalist composition features a series of overlapping oval shapes with carefully calibrated blur effects. The gradual transition between sharp and blurred elements creates a sense of depth and movement within a deceptively simple framework.",
          },
          {
            path: "images/portfolio/cavecrusade/3.png",
            type: "image",
            description:
              "This minimalist composition features a series of overlapping oval shapes with carefully calibrated blur effects. The gradual transition between sharp and blurred elements creates a sense of depth and movement within a deceptively simple framework.",
          },
          {
            path: "images/portfolio/cavecrusade/4.png",
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
            path: "images/portfolio/pro/video.mp4",
            type: "video",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "images/portfolio/pro/2.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "images/portfolio/pro/3.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "images/portfolio/pro/4.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "images/portfolio/pro/5.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
          },
          {
            path: "images/portfolio/pro/6.png",
            type: "image",
            description:
              "The primary toggle design featuring a smooth animation curve and tactile visual feedback. This design prioritizes accessibility while maintaining a modern aesthetic that works across both light and dark mode interfaces.",
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
            path: "images/portfolio/emergenyc/1.jpg",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was date using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
          {
            path: "images/portfolio/emergenyc/2.jpg",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was date using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
          {
            path: "images/portfolio/emergenyc/3.jpg",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was date using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
          {
            path: "images/portfolio/emergenyc/4.jpg",
            type: "image",
            description:
              "This atmospheric rendering explores the phenomenon of crepuscular rays ('god rays') as they filter through various atmospheric conditions. The piece was date using a combination of 3D volumetric rendering and hand-painted elements to achieve the ethereal quality of natural light.",
          },
          {
            path: "images/portfolio/emergenyc/5.jpg",
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
            path: "images/portfolio/volygon/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/2.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/3.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/4.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/5.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/6.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/volygon/7.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/magellan/full/1.png",
            thumbnail: "images/portfolio/magellan/thumbnails/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/2.png",
            thumbnail: "images/portfolio/magellan/thumbnails/2.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/3.png",
            thumbnail: "images/portfolio/magellan/thumbnails/3.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/4.png",
            thumbnail: "images/portfolio/magellan/thumbnails/4.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/5.png",
            thumbnail: "images/portfolio/magellan/thumbnails/5.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/6.png",
            thumbnail: "images/portfolio/magellan/thumbnails/6.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/7.png",
            thumbnail: "images/portfolio/magellan/thumbnails/7.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/8.png",
            thumbnail: "images/portfolio/magellan/thumbnails/8.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/9.png",
            thumbnail: "images/portfolio/magellan/thumbnails/9.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/10.png",
            thumbnail: "images/portfolio/magellan/thumbnails/10.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/11.png",
            thumbnail: "images/portfolio/magellan/thumbnails/11.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/12.png",
            thumbnail: "images/portfolio/magellan/thumbnails/12.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/13.png",
            thumbnail: "images/portfolio/magellan/thumbnails/13.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/14.png",
            thumbnail: "images/portfolio/magellan/thumbnails/14.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/15.png",
            thumbnail: "images/portfolio/magellan/thumbnails/15.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/16.png",
            thumbnail: "images/portfolio/magellan/thumbnails/16.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/17.png",
            thumbnail: "images/portfolio/magellan/thumbnails/17.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/18.png",
            thumbnail: "images/portfolio/magellan/thumbnails/18.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/19.png",
            thumbnail: "images/portfolio/magellan/thumbnails/19.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/20.png",
            thumbnail: "images/portfolio/magellan/thumbnails/20.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/21.png",
            thumbnail: "images/portfolio/magellan/thumbnails/21.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/22.png",
            thumbnail: "images/portfolio/magellan/thumbnails/22.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/23.png",
            thumbnail: "images/portfolio/magellan/thumbnails/23.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/24.png",
            thumbnail: "images/portfolio/magellan/thumbnails/24.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/25.png",
            thumbnail: "images/portfolio/magellan/thumbnails/25.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/26.png",
            thumbnail: "images/portfolio/magellan/thumbnails/26.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/27.png",
            thumbnail: "images/portfolio/magellan/thumbnails/27.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/28.png",
            thumbnail: "images/portfolio/magellan/thumbnails/28.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/29.png",
            thumbnail: "images/portfolio/magellan/thumbnails/29.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/30.png",
            thumbnail: "images/portfolio/magellan/thumbnails/30.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/31.png",
            thumbnail: "images/portfolio/magellan/thumbnails/31.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/32.png",
            thumbnail: "images/portfolio/magellan/thumbnails/32.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/33.png",
            thumbnail: "images/portfolio/magellan/thumbnails/33.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/34.png",
            thumbnail: "images/portfolio/magellan/thumbnails/34.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/35.png",
            thumbnail: "images/portfolio/magellan/thumbnails/35.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/36.png",
            thumbnail: "images/portfolio/magellan/thumbnails/36.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/37.png",
            thumbnail: "images/portfolio/magellan/thumbnails/37.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/38.png",
            thumbnail: "images/portfolio/magellan/thumbnails/38.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/39.png",
            thumbnail: "images/portfolio/magellan/thumbnails/39.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/40.png",
            thumbnail: "images/portfolio/magellan/thumbnails/40.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/41.png",
            thumbnail: "images/portfolio/magellan/thumbnails/41.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/42.png",
            thumbnail: "images/portfolio/magellan/thumbnails/42.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/magellan/full/43.png",
            thumbnail: "images/portfolio/magellan/thumbnails/43.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
        client: "self",
        tags: ["Abstract", "Conceptual", "Mind"],
        description: "An abstract representation of the creative process.",
        media: [
          {
            path: "images/portfolio/tinydrive/1.jpg",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/tinydrive/2.jpg",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/tinydrive/3.jpg",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/tinydrive/4.jpg",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/xraiassistant/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/spectatorview/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/spectatorview/2.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/spectatorview/3.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/spectatorview/4.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/spectatorview/5.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/spectatorview/6.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/rso/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/2.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/3.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/4.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/5.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/6.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/7.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
          },
          {
            path: "images/portfolio/rso/8.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/aimarketresearch/1.png",
            type: "image",
            description:
              "This abstract visualization maps the neural pathways of creative thinking. The interconnected nodes represent different cognitive functions, while the flowing lines illustrate how ideas connect and transform during the creative process.",
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
            path: "images/portfolio/pace/2.png",
            type: "image",
            title: "Dashboard",
            description:
              "This is the dashboard view of the pace app. This is where users can see all of the groups they belong to.",
          },
          {
            path: "images/portfolio/pace/3.png",
            type: "image",
            title: "Dashboard",
            description:
              "This is the dashboard view of the pace app. This is where users can see all of the groups they belong to.",
          },
          {
            path: "images/portfolio/pace/4.png",
            type: "image",
            title: "Dashboard",
            description:
              "This is the dashboard view of the pace app. This is where users can see all of the groups they belong to.",
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
      "aimarketresearch",
      "melo",
      "pace",
    ],
    Experiments: ["tinydrive", "melo", "aimarketresearch"],
    "Open-Source": ["item3", "item4", "item5"],
    Educational: ["item2", "item4"],
    Photography: [],
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
    Photography: { icon: "📁", description: "Photography" },
  } as FolderInfoMap,
};
