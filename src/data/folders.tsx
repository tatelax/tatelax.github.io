"use client";
import { FolderStructure, LayoutType } from "@/types";
import { portfolioItems } from "./portfolioItems";
import { blogPosts } from "./blogPosts";

// Define content structure
export const folderData = {
  // All items with their details
  portfolioItems,
  blogPosts,
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
    },
  } as FolderStructure,
};
