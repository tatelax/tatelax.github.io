"use client";
import {
  PortfolioItemsMap,
  FolderStructure,
  BlogPostItemsMap,
  LayoutType,
} from "@/types";

// Define content structure
export const portfolioData = {
  // All items with their details
  portfolioItems: {
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
      icon: "🍋",
      color: "#f244bb",
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
  } as PortfolioItemsMap,

  blogPosts: {
    "blog-post-1": {
      id: "blog-post-1",
      title: "Designing for Accessibility: Modern Web Practices",
      date: "March 15, 2025",
      author: "Tate McCormick",
      excerpt:
        "Exploring how modern web design can embrace accessibility without compromising aesthetics. Learn key techniques to make your websites more inclusive.",
      content: `
        <div class="blog-content">
          <p>In today's digital landscape, creating accessible websites isn't just a nice-to-have — it's essential. According to the World Health Organization, more than one billion people worldwide live with some form of disability. That's approximately 15% of the global population who may face barriers when trying to access and use your website.</p>
          
          <h2>Why Accessibility Matters</h2>
          <p>Beyond the ethical considerations of inclusive design, there are practical business reasons to prioritize accessibility:</p>
          <ul>
            <li>Expanded audience reach</li>
            <li>Improved SEO performance</li>
            <li>Protection against potential legal issues</li>
            <li>Enhanced user experience for <em>all</em> users</li>
          </ul>
          
          <h2>Key Accessibility Principles</h2>
          <p>When designing for accessibility, focus on these fundamental areas:</p>
          
          <h3>1. Semantic HTML</h3>
          <p>Using proper HTML elements communicates structure to assistive technologies:</p>
          <pre><code>&lt;nav&gt; instead of &lt;div class="navigation"&gt;
  &lt;button&gt; instead of &lt;div onclick="..."&gt;
  &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, etc. for proper document structure</code></pre>
          
          <h3>2. Color Contrast</h3>
          <p>WCAG 2.1 guidelines recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. Tools like the WebAIM Contrast Checker can help ensure your color choices meet these standards.</p>
          
          <h3>3. Keyboard Navigation</h3>
          <p>Many users navigate exclusively with keyboards. Ensure all interactive elements can be accessed and operated without a mouse:</p>
          <ul>
            <li>Logical tab order</li>
            <li>Visible focus states</li>
            <li>Keyboard-accessible custom components</li>
          </ul>
          
          <h3>4. Screen Reader Compatibility</h3>
          <p>Screen readers announce content to users with visual impairments. To support these tools:</p>
          <ul>
            <li>Add alternative text for images</li>
            <li>Use ARIA attributes when necessary (but prefer semantic HTML)</li>
            <li>Create descriptive links (avoid "click here")</li>
          </ul>
          
          <h2>Modern Accessibility Techniques</h2>
          <p>Modern frameworks and CSS capabilities make it easier than ever to build accessible interfaces:</p>
          
          <h3>Using CSS Grid and Flexbox</h3>
          <p>These layout systems maintain proper source order while creating complex visual arrangements, which helps screen reader users navigate your content in a logical sequence.</p>
          
          <h3>Dark Mode Support</h3>
          <p>Implementing dark mode can help users with light sensitivity or those who prefer reduced brightness. Use CSS custom properties to manage color themes:</p>
          <pre><code>:root {
    --text-color: #333;
    --background-color: #fff;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #eee;
      --background-color: #121212;
    }
  }</code></pre>
          
          <h3>Reduced Motion</h3>
          <p>Animations can trigger discomfort or even vestibular disorders in some users. Respect user preferences:</p>
          <pre><code>@media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
    }
  }</code></pre>
          
          <h2>Testing Your Accessibility Implementation</h2>
          <p>Regular testing is crucial to ensure your website remains accessible. Consider using:</p>
          <ul>
            <li>Automated tools like Lighthouse, WAVE, or axe</li>
            <li>Keyboard navigation testing</li>
            <li>Screen reader testing with VoiceOver (macOS/iOS) or NVDA (Windows)</li>
            <li>User testing with people who have disabilities</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Designing for accessibility doesn't mean sacrificing aesthetics or innovation. By embracing these principles from the start of your design process, you can create beautiful, functional websites that everyone can use and enjoy.</p>
          
          <p>The web was designed to work for all people, whatever their hardware, software, language, location, or ability. When we fulfill this promise, we empower everyone to participate equally in our increasingly digital society.</p>
        </div>
      `,
      tags: [
        "Accessibility",
        "Web Design",
        "UX",
        "Inclusive Design",
        "Frontend",
      ],
      image: "/images/blog/accessibility-header.jpg", // Update with your image path
      color: "#6366F1", // Indigo color
      icon: "📝",
    },

    "blog-post-2": {
      id: "blog-post-2",
      title: "The Future of React: What's Coming in 2025 and Beyond",
      date: "February 28, 2025",
      author: "Tate McCormick",
      excerpt:
        "Exploring the latest updates to React and what they mean for frontend developers. From concurrent rendering to server components, the future is exciting.",
      content: `
        <div class="blog-content">
          <p>React has been at the forefront of frontend development for nearly a decade, continuously evolving to meet the changing needs of web developers. In this post, we'll explore what's on the horizon for React in 2025 and beyond.</p>
          
          <h2>Server Components: The New Default</h2>
          <p>With the full adoption of React Server Components, we're seeing a fundamental shift in how React applications are built and delivered. Unlike traditional components that execute entirely in the browser, server components run on the server and stream their output to the client.</p>
          
          <p>This approach offers several significant advantages:</p>
          <ul>
            <li>Reduced JavaScript bundle sizes</li>
            <li>Improved initial load performance</li>
            <li>Direct access to server-side resources without APIs</li>
            <li>Better SEO without complex SSR setups</li>
          </ul>
          
          <h2>Concurrent Rendering Everywhere</h2>
          <p>Concurrent Mode is now fully integrated into React's core, allowing components to render without blocking the main thread. This means more responsive UIs, even during complex updates, as React can pause and resume work as needed.</p>
          
          <p>We're seeing this particularly shine in complex dashboards and data-heavy applications, where updates can happen across multiple components simultaneously without causing UI jank.</p>
          
          <h2>React Compiler Optimization</h2>
          <p>The React team has been working on a compiler approach that can automatically optimize your components. By analyzing how state flows through your application, it can eliminate unnecessary re-renders and reduce memory usage.</p>
          
          <p>This is particularly exciting because it delivers performance improvements without requiring developers to manually optimize with <code>useMemo</code>, <code>useCallback</code>, or <code>React.memo</code>.</p>
          
          <h2>First-Class TypeScript Integration</h2>
          <p>While TypeScript has been widely used with React for years, we're seeing tighter integration directly in React's core APIs. New type utilities and improved inference are making it easier to type complex patterns like higher-order components and render props.</p>
          
          <h2>Sustainability Focus</h2>
          <p>An interesting development has been React's focus on energy efficiency. New metrics and tools are emerging to measure and optimize the energy consumption of React applications, particularly important for mobile users and global markets with energy constraints.</p>
          
          <h2>Ecosystem Evolution</h2>
          <p>The React ecosystem continues to evolve alongside the core library:</p>
          
          <h3>State Management</h3>
          <p>While Redux remains popular, we're seeing increased adoption of Jotai, Zustand, and React Query for different state management needs. The trend is toward more specialized tools rather than one-size-fits-all solutions.</p>
          
          <h3>Styling Solutions</h3>
          <p>CSS-in-JS libraries are focusing more on zero-runtime or server-extraction approaches to avoid the performance penalties of client-side style injection. Tailwind CSS continues to be popular, with better tooling for component-based architectures.</p>
          
          <h3>Meta-Frameworks</h3>
          <p>Next.js and other meta-frameworks are becoming increasingly sophisticated, abstracting away more of the complex infrastructure decisions while providing flexible deployment options from edge functions to static generation.</p>
          
          <h2>Looking Ahead</h2>
          <p>What's most exciting about React's future is how it's adapting to changing web standards. As the platform becomes more capable with features like Web Components, native HTTP streaming, and improved CSS capabilities, React is evolving to be a thinner layer that leverages these platform features rather than reimplementing them.</p>
          
          <p>For developers, this means learning React continues to be a valuable investment, as the skills transfer well to understanding the evolving web platform itself.</p>
        </div>
      `,
      tags: ["React", "JavaScript", "Web Development", "Frontend"],
      image: "/images/blog/react-future.jpg", // Update with your image path
      color: "#2563EB", // Blue color
      icon: "⚛️",
    },
  } as BlogPostItemsMap,

  folders: {
    Projects: {
      icon: "📁",
      description: "Projects",
      layoutType: LayoutType.Portfolio,
      items: [
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
    },
    Experiments: {
      icon: "📁",
      description: "Experiments",
      layoutType: LayoutType.Portfolio,
      items: ["tinydrive", "melo", "aimarketresearch"],
    },
    "Open-Source": {
      icon: "📁",
      description: "Open-source stuff I've contributed to",
      layoutType: LayoutType.Portfolio,
      items: ["item3", "item4", "item5"],
    },
    Educational: {
      icon: "📁",
      description: "Educational projects",
      layoutType: LayoutType.Portfolio,
      items: ["item2", "item4"],
    },
    Photography: {
      icon: "📁",
      description: "Photography",
      layoutType: LayoutType.Portfolio,
      items: [],
    },
    About: {
      icon: "📁",
      description: "About me",
      layoutType: LayoutType.Portfolio,
      items: ["item5"],
    },
    Posts: {
      icon: "📁",
      description: "Posts",
      layoutType: LayoutType.Blog,
      items: ["blog-post-1"],
    },
  } as FolderStructure,
};
