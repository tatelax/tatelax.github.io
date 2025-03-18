"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  User,
  Menu,
  X,
  Mail,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Calendar,
  Clock,
} from "lucide-react";
import { folderData } from "../data/folders";
import {
  BlogPostItem,
  FolderItem,
  LayoutType,
  PortfolioItem,
  SearchResult,
} from "@/types";
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/macScrollbar.css";
import { ItemDetailsPanel } from "./ItemDetailsPanel";
import { BlogPostDetailsPanel } from "./BlogPostDetailsPanel";

const PortfolioApp: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0); // Added to track current media index

  // Add this ref to track initialization state
  const initialized = useRef<boolean>(false);

  // Mobile-specific states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewingFileDetail, setViewingFileDetail] = useState<boolean>(false);
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);

  // Get list of folders with their icons
  const folders: FolderItem[] = Object.keys(folderData.folders).map(
    (folderName) => ({
      name: folderName,
      icon: folderData.folders[folderName]?.icon || "📁",
    })
  );

  // Helper function to get item by ID - memoized to avoid dependency loops
  const getItemById = useCallback(
    (id: string): PortfolioItem | BlogPostItem | undefined => {
      if (selectedFolder) {
        const folderType = folderData.folders[selectedFolder]?.layoutType;

        if (folderType === LayoutType.Portfolio) {
          return folderData.portfolioItems[id];
        } else if (folderType === LayoutType.Blog) {
          return folderData.blogPosts?.[id];
        }
      }

      // Default fallback - try both collections
      return folderData.portfolioItems[id] || folderData.blogPosts?.[id];
    },
    [selectedFolder]
  );

  // Helper function to get current selected item - memoized
  const getSelectedItem = useCallback(():
    | PortfolioItem
    | BlogPostItem
    | undefined => {
    return selectedItemId ? getItemById(selectedItemId) : undefined;
  }, [selectedItemId, getItemById]);

  // Helper function to check if current folder is Blog type
  const isBlogFolder = useCallback((): boolean => {
    return selectedFolder
      ? folderData.folders[selectedFolder]?.layoutType === LayoutType.Blog
      : false;
  }, [selectedFolder]);

  // Helper function to get items in a folder - memoized
  const getItemsInFolder = useCallback(
    (folderName: string): (PortfolioItem | BlogPostItem)[] => {
      const folder = folderData.folders[folderName];
      if (!folder) return [];

      // For Blog layout type, if items array is not specified,
      // return all available blog posts from the BlogPostItemsMap
      if (folder.layoutType === LayoutType.Blog) {
        let blogPosts: BlogPostItem[] = [];

        // If items is specified, use those specific blog posts
        if (folder.items && folder.items.length > 0) {
          blogPosts = folder.items
            .map((id) => folderData.blogPosts?.[id])
            .filter(Boolean) as BlogPostItem[];
        } else {
          // If items is not specified, return all blog posts
          blogPosts = Object.values(folderData.blogPosts ?? {});
        }

        // Sort blog posts by date (newest first)
        return blogPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
        });
      }
      // For Portfolio layout type
      else if (folder.layoutType === LayoutType.Portfolio) {
        // Use optional chaining and provide a default empty array
        const itemIds = folder.items ?? [];
        return itemIds
          .map((id) => folderData.portfolioItems[id])
          .filter(Boolean);
      }

      return [];
    },
    []
  );

  // Update URL when a file or folder is selected - memoized
  const updateUrl = useCallback((foldername: string, itemId?: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("folder", foldername);

    if (itemId) {
      url.searchParams.set("item", itemId);
    } else {
      url.searchParams.delete("item");
    }

    window.history.pushState({}, "", url);
  }, []);

  // Reset URL to root (no parameters) - memoized
  const resetUrlToRoot = useCallback(() => {
    const url = new URL(window.location.href);
    url.search = "";
    window.history.pushState({}, "", url);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Back button handler for mobile
  const handleBackToFiles = () => {
    setViewingFileDetail(false);
  };

  // Handle item selection with URL update
  const handleItemSelect = useCallback(
    (itemId: string, folderName?: string) => {
      setSelectedItemId(itemId);
      setCurrentMediaIndex(0); // Reset media index when selecting a new item

      // On mobile, switch to file detail view
      if (window.innerWidth < 768) {
        setViewingFileDetail(true);
      }

      // If folder is provided, use it, otherwise use currently selected folder
      const folder = folderName || selectedFolder;
      if (folder) {
        updateUrl(folder, itemId);
      }
    },
    [selectedFolder, updateUrl]
  );

  // Handle folder selection with URL update
  const handleFolderSelect = useCallback(
    (folderName: string) => {
      setSelectedFolder(folderName);
      setMobileMenuOpen(false); // Close mobile menu after selection
      setViewingFileDetail(false); // Return to file list view on mobile
      setCurrentMediaIndex(0); // Reset media index when selecting a new folder

      const folderItems = getItemsInFolder(folderName);

      // Update URL with new folder
      if (folderItems.length > 0) {
        // Select the newest item (last item in the array)
        const newestItem = folderItems[folderItems.length - 1];
        setSelectedItemId(newestItem.id);
        updateUrl(folderName, newestItem.id);
      } else {
        // If folder is empty, clear the selected item ID and just update folder in URL
        setSelectedItemId("");
        updateUrl(folderName);
      }
    },
    [getItemsInFolder, updateUrl]
  );

  // Handle slide change in the image gallery
  const handleSlideChange = (index: number) => {
    setCurrentMediaIndex(index);
  };

  // Handle search input change
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setSearchQuery(newQuery);

      // If search is cleared, restore the normal URL with current selection
      if (newQuery.trim() === "" && selectedFolder) {
        updateUrl(selectedFolder, selectedItemId);
        setViewingFileDetail(false); // Return to file list on mobile when search is cleared
      }
    },
    [selectedFolder, selectedItemId, updateUrl]
  );

  // Toggle search bar expansion on mobile
  const toggleSearchExpansion = () => {
    setSearchExpanded(!searchExpanded);
  };

  // Close search when input is blurred and empty
  const handleSearchBlur = () => {
    if (searchQuery.trim() === "") {
      setSearchExpanded(false);
    }
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchQuery("");
    if (selectedFolder) {
      updateUrl(selectedFolder, selectedItemId);
      setViewingFileDetail(false); // Return to file list on mobile when search is cleared
    }
  };

  // Check screen size and adjust view accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Reset mobile-specific states when on desktop
        setViewingFileDetail(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle browser navigation events
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const folderParam = params.get("folder");
      const itemParam = params.get("item");

      if (folderParam && folderData.folders[folderParam]) {
        setSelectedFolder(folderParam);

        if (itemParam) {
          const folderType = folderData.folders[folderParam].layoutType;
          let itemExists = false;

          if (
            folderType === LayoutType.Portfolio &&
            folderData.portfolioItems[itemParam]
          ) {
            itemExists = true;
          } else if (
            folderType === LayoutType.Blog &&
            folderData.blogPosts?.[itemParam]
          ) {
            itemExists = true;
          }

          if (itemExists) {
            setSelectedItemId(itemParam);
            setCurrentMediaIndex(0); // Reset media index when navigating
            if (window.innerWidth < 768) {
              setViewingFileDetail(true);
            }
          } else {
            const folderItems = getItemsInFolder(folderParam);
            if (folderItems.length > 0) {
              setSelectedItemId(folderItems[0].id);
            }
          }
        } else {
          const folderItems = getItemsInFolder(folderParam);
          if (folderItems.length > 0) {
            setSelectedItemId(folderItems[0].id);
          }
        }
      }

      // Clear search when navigating with browser buttons
      setSearchQuery("");
      setSearchResults([]);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getItemsInFolder]);

  // Combined effect for initialization and URL parameter handling
  useEffect(() => {
    // Skip if already initialized to prevent overriding URL-specified selections
    if (initialized.current) return;

    const params = new URLSearchParams(window.location.search);
    const folderParam = params.get("folder");
    const itemParam = params.get("item");

    let folderSet = false;
    let itemSet = false;

    // First priority: Process URL parameters completely
    if (folderParam && folderData.folders[folderParam]) {
      setSelectedFolder(folderParam);
      folderSet = true;

      const folderType = folderData.folders[folderParam].layoutType;

      // If item is in URL and exists
      if (itemParam) {
        let itemExists = false;

        if (
          folderType === LayoutType.Portfolio &&
          folderData.portfolioItems[itemParam]
        ) {
          itemExists = true;
        } else if (
          folderType === LayoutType.Blog &&
          folderData.blogPosts?.[itemParam]
        ) {
          itemExists = true;
        }

        if (itemExists) {
          setSelectedItemId(itemParam);
          itemSet = true;
          // Set mobile view state based on screen size
          if (window.innerWidth < 768) {
            setViewingFileDetail(true);
          }
        } else {
          // If no item in URL or invalid item, select first item in folder
          const folderItems = getItemsInFolder(folderParam);
          if (folderItems.length > 0) {
            setSelectedItemId(folderItems[0].id);
            itemSet = true;
            updateUrl(folderParam, folderItems[0].id);
          }
        }
      } else {
        // If no item in URL, select first item in folder
        const folderItems = getItemsInFolder(folderParam);
        if (folderItems.length > 0) {
          setSelectedItemId(folderItems[0].id);
          itemSet = true;
          updateUrl(folderParam, folderItems[0].id);
        }
      }
    } else if (itemParam) {
      // If only item is in URL, find which folder contains it
      for (const folderName in folderData.folders) {
        const folderType = folderData.folders[folderName].layoutType;
        let itemExists = false;

        if (
          folderType === LayoutType.Portfolio &&
          folderData.portfolioItems[itemParam]
        ) {
          itemExists = true;
        } else if (
          folderType === LayoutType.Blog &&
          folderData.blogPosts?.[itemParam]
        ) {
          itemExists = true;
        }

        // Check if folder has items array and if it includes the itemParam
        if (
          itemExists &&
          folderData.folders[folderName].items?.includes(itemParam)
        ) {
          setSelectedFolder(folderName);
          folderSet = true;
          setSelectedItemId(itemParam);
          itemSet = true;
          updateUrl(folderName, itemParam);

          // Set mobile view state based on screen size
          if (window.innerWidth < 768) {
            setViewingFileDetail(true);
          }
          break;
        }
      }
    }

    // Second priority: Default initialization only if URL didn't provide values
    if (!folderSet && folders.length > 0) {
      const firstFolder = folders[0].name;
      setSelectedFolder(firstFolder);

      // If URL processing didn't set an item, select the first item in the folder
      if (!itemSet) {
        const folderItems = getItemsInFolder(firstFolder);
        if (folderItems.length > 0) {
          const firstItem = folderItems[folderItems.length - 1];
          setSelectedItemId(firstItem.id);
          updateUrl(firstFolder, firstItem.id);
        }
      }
    }

    // Mark as initialized so this logic only runs once
    initialized.current = true;
  }, [folders, getItemsInFolder, updateUrl]);

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    // Search through all portfolio items
    for (const itemId in folderData.portfolioItems) {
      const item = folderData.portfolioItems[itemId];
      const itemName = item.name.toLowerCase();
      const itemTags = item.details.tags.join(" ").toLowerCase();
      const itemDesc = (item.details.description || "").toLowerCase();

      if (
        itemName.includes(query) ||
        itemTags.includes(query) ||
        itemDesc.includes(query)
      ) {
        // Find which folders contain this item - updated for new structure
        for (const folderName in folderData.folders) {
          if (
            folderData.folders[folderName].layoutType ===
              LayoutType.Portfolio &&
            folderData.folders[folderName].items?.includes(itemId)
          ) {
            results.push({
              ...item,
              folderId: folderName,
            });
            break; // Just add the first folder match to avoid duplicates in results
          }
        }
      }
    }

    // Search through all blog posts
    if (folderData.blogPosts) {
      for (const postId in folderData.blogPosts) {
        const post = folderData.blogPosts[postId];
        const postTitle = post.title.toLowerCase();
        const postContent = post.content.toLowerCase();
        const postTags = post.tags ? post.tags.join(" ").toLowerCase() : "";

        if (
          postTitle.includes(query) ||
          postContent.includes(query) ||
          postTags.includes(query)
        ) {
          // Find which folders contain this blog post
          for (const folderName in folderData.folders) {
            if (
              folderData.folders[folderName].layoutType === LayoutType.Blog &&
              folderData.folders[folderName].items?.includes(postId)
            ) {
              // Convert blog post to portfolio item format for search results
              results.push({
                id: post.id,
                name: post.title,
                icon: post.icon || "📝", // Default icon for blog posts
                color: post.color || "#6366F1", // Default color for blog posts
                year: post.date.split(" ")[2], // Extract year from date string if possible
                image: post.image,
                details: {
                  name: post.title,
                  date: post.date,
                  client: post.author || "Self",
                  tags: post.tags || [],
                  description: post.excerpt || "",
                  media: [],
                },
                folderId: folderName,
              });
              break;
            }
          }
        }
      }
    }

    setSearchResults(results);

    // Select the first result by default if there are any
    if (results.length > 0) {
      const item = results[0];
      setSelectedItemId(item.id);
      updateUrl(item.folderId, item.id);

      // On mobile, don't automatically go to detail view for search results
      if (window.innerWidth < 768) {
        setViewingFileDetail(false);
      }
    } else if (searchQuery.trim() !== "") {
      // Only clear selection if this is an actual search with no results
      // Don't reset URL completely, just show "no results" state
      setSelectedItemId("");
    }
  }, [searchQuery, updateUrl]);

  // Get current items in the selected folder
  const currentItems = selectedFolder ? getItemsInFolder(selectedFolder) : [];

  // Get the current selected item
  const selectedItem = getSelectedItem();

  // Check if selected item is a blog post
  const isSelectedItemBlogPost = isBlogFolder();

  // Get blog post if applicable
  const selectedBlogPost =
    isSelectedItemBlogPost && selectedItem
      ? (selectedItem as BlogPostItem)
      : undefined;

  // Get portfolio item if applicable
  const selectedPortfolioItem =
    !isSelectedItemBlogPost && selectedItem
      ? (selectedItem as PortfolioItem)
      : undefined;

  // Get the current media item being viewed (for portfolio items)
  const currentMedia =
    selectedPortfolioItem?.details.media[currentMediaIndex] || null;

  // Format media files for react-image-gallery
  const getGalleryItems = useCallback(() => {
    if (!selectedPortfolioItem || !selectedPortfolioItem.details.media.length)
      return [];

    return selectedPortfolioItem.details.media.map((media) => {
      const basePath = `${media.path}`;
      const thumbPath = `${media.thumbnail ? media.thumbnail : media.path}`;

      // Format based on media type
      if (media.type === "image") {
        return {
          original: basePath,
          thumbnail: thumbPath,
          originalAlt: selectedPortfolioItem.name,
          thumbnailAlt: selectedPortfolioItem.name,
          thumbnailClass: "rounded-md white-thumbnail-border",
          renderItem: () => (
            <div className="h-full flex items-center justify-center">
              <img
                src={basePath}
                alt={selectedPortfolioItem.name}
                className="max-w-full max-h-full object-contain rounded-md"
                style={{ maxHeight: "60vh" }}
              />
            </div>
          ),
        };
      } else if (media.type === "video") {
        // For videos, use custom rendering
        return {
          original: basePath,
          thumbnail: media.thumbnail ? `${media.thumbnail}` : basePath,
          originalAlt: `${selectedPortfolioItem.name} (video)`,
          thumbnailAlt: `${selectedPortfolioItem.name} (video)`,
          renderItem: () => (
            <div
              className="video-wrapper flex justify-center items-center h-full"
              style={{ height: "60vh" }}
            >
              <video
                src={basePath}
                controls
                className="max-w-full max-h-full object-contain rounded-md"
                style={{ maxHeight: "100%" }}
                poster={media.thumbnail ? `${media.thumbnail}` : undefined}
              />
            </div>
          ),
        };
      } else if (media.type === "pdf") {
        // For PDFs, use custom rendering
        return {
          original: basePath,
          thumbnail: media.thumbnail ? `${media.thumbnail}` : basePath,
          originalAlt: `${selectedPortfolioItem.name} (PDF)`,
          thumbnailAlt: `${selectedPortfolioItem.name} (PDF)`,
          renderItem: () => (
            <div
              className="pdf-wrapper flex flex-col items-center justify-center"
              style={{ height: "60vh" }}
            >
              {media.thumbnail && (
                <div className="h-4/5 flex items-center justify-center">
                  <img
                    src={`${media.thumbnail}`}
                    alt="PDF preview"
                    className="max-w-full max-h-full object-contain rounded-md mb-4"
                  />
                </div>
              )}
              <a
                href={basePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white transition-colors mt-4"
              >
                View PDF
              </a>
            </div>
          ),
        };
      }

      // Default case (shouldn't reach here)
      return {
        original: basePath,
        thumbnail: basePath,
      };
    });
  }, [selectedPortfolioItem]);

  // Render blog post item card
  const renderBlogPostItem = (item: BlogPostItem) => {
    const date = new Date(item.date);
    const formattedDate =
      date instanceof Date && !isNaN(date.getTime())
        ? date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : item.date;

    return (
      <div
        key={item.id}
        className={`p-4 mb-4 hover:bg-white/5 rounded-lg cursor-pointer transition-all ${
          selectedItemId === item.id ? "bg-white/10" : ""
        }`}
        onClick={() => handleItemSelect(item.id)}
      >
        <div className="flex flex-col">
          <h3 className="text-white text-xl font-semibold mb-2">
            {item.title}
          </h3>

          <div className="flex items-center text-white/70 text-sm mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>

            {item.author && (
              <>
                <span className="mx-2">•</span>
                <User size={14} className="mr-1" />
                <span>{item.author}</span>
              </>
            )}
          </div>

          {item.excerpt && (
            <p className="text-white/80 mb-3 line-clamp-2">{item.excerpt}</p>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {item.tags.slice(0, 3).map((tag, index) => {
                const colors = [
                  "bg-blue-400/30",
                  "bg-purple-400/30",
                  "bg-teal-400/30",
                  "bg-indigo-400/30",
                  "bg-cyan-400/30",
                ];

                const colorIndex =
                  Math.abs(
                    tag
                      .split("")
                      .reduce((acc, char) => acc + char.charCodeAt(0), 0)
                  ) % colors.length;

                return (
                  <span
                    key={index}
                    className={`${colors[colorIndex]} px-2 py-0.5 rounded-full text-white/85 font-medium text-xs`}
                  >
                    {tag}
                  </span>
                );
              })}

              {item.tags.length > 3 && (
                <span className="text-white/60 text-xs px-1">
                  +{item.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render portfolio item card (original behavior)
  const renderPortfolioItem = (item: PortfolioItem) => {
    return (
      <div
        key={item.id}
        className={`flex items-center justify-between p-3 md:p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
          selectedItemId === item.id ? "bg-white/10" : ""
        }`}
        onClick={() => handleItemSelect(item.id)}
      >
        <div className="flex items-center">
          <div
            className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md border-2 border-white overflow-hidden"
            style={{ backgroundColor: item.color }}
          >
            {item.image ? (
              <img
                src={`${item.image}`}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-base">{item.icon}</span>
            )}
          </div>
          <span className="text-white text-base truncate font-semibold">
            {item.name}
          </span>
        </div>
        <ChevronRight
          size={18}
          className={`${
            selectedItemId === item.id ? "text-white" : "text-white/50"
          }`}
        />
      </div>
    );
  };

  return (
    <div
      className="flex px-0 md:px-4 lg:px-8 lg:py-20 xl:px-16 2xl:px-35 flex-col h-screen relative"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        backgroundImage:
          "url('nextjs-github-pages/images/pexels-adrien-olichon-1257089-2387793.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glass-like card that contains the entire UI */}
      <div className="relative z-10 m-2 md:m-4 rounded-2xl overflow-hidden border border-white/30 shadow-2xl backdrop-filter backdrop-blur-xl bg-black/70 flex flex-col h-full md:min-h-[1000px]">
        {/* Header - Updated for mobile with collapsible search */}
        <header className="p-3 flex justify-between items-center border-b border-white/20 backdrop-blur-lg">
          <div
            className={`flex items-center space-x-2 ${
              searchExpanded ? "md:flex hidden" : "flex"
            }`}
          >
            {/* Mobile menu button - shown only on small screens when search is not expanded */}
            <button
              className="md:hidden bg-black/20 p-1.5 rounded-full"
              onClick={toggleMobileMenu}
            >
              <Menu size={18} className="text-white" />
            </button>

            {/* Back button for mobile when viewing file details */}
            {viewingFileDetail && (
              <button
                className="md:hidden bg-black/20 p-1.5 rounded-full ml-2"
                onClick={handleBackToFiles}
              >
                <ChevronLeft size={18} className="text-white" />
              </button>
            )}

            <div className="hidden md:flex ml-4 overflow-hidden">
              <img
                src="nextjs-github-pages/images/tate.jpg"
                alt="Tate McCormick"
                className="w-10 h-10 rounded-full object-cover border border-white/30"
              />
            </div>

            {/* Current context for mobile - hidden when search is expanded */}
            <div className={`md:hidden ${searchExpanded ? "hidden" : "block"}`}>
              <span className="text-white text-base font-medium">
                {viewingFileDetail
                  ? isSelectedItemBlogPost
                    ? selectedBlogPost?.title
                    : selectedPortfolioItem?.name
                  : selectedFolder}
              </span>
            </div>
          </div>

          <div
            className={`relative ${
              searchExpanded ? "flex-1" : ""
            } flex items-center`}
          >
            {/* Social Media Icons - Hidden on mobile or when search is expanded */}
            <div
              className={`hidden md:flex items-center space-x-2 mr-10 ${
                searchExpanded ? "md:hidden" : ""
              }`}
            >
              <a
                href="mailto:hi@tate.sh"
                className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              >
                <Mail size={16} className="text-white" />
              </a>
              <a
                href="https://github.com/tatelax"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              >
                <Github size={16} className="text-white" />
              </a>
              <a
                href="https://instagram.com/tatelax"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://x.com/tatemccormick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/tatemccormick/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
            </div>

            {searchExpanded ? (
              <div className="flex items-center w-full">
                <button
                  className="md:hidden bg-black/20 p-1.5 rounded-full mr-2"
                  onClick={toggleSearchExpansion}
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-black/20 backdrop-blur-lg rounded-lg py-2 pl-8 pr-8 w-full text-white text-base border border-white/20"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    autoFocus
                  />
                  <Search
                    size={16}
                    className="absolute left-2 top-3 text-white/70"
                  />
                  {searchQuery.trim() !== "" && (
                    <button
                      className="absolute right-2 top-2.5 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
                      onClick={handleClearSearch}
                    >
                      <X size={14} className="text-white" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                {/* Desktop search bar */}
                <div className="hidden md:block relative pr-1">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-black/20 backdrop-blur-lg rounded-lg py-1.5 pl-8 pr-8 w-52 text-white text-base border border-white/20"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <Search
                    size={16}
                    className="absolute left-3 top-2.5 text-white/70"
                  />
                  {searchQuery.trim() !== "" && (
                    <button
                      className="absolute right-2 top-2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
                      onClick={handleClearSearch}
                    >
                      <X size={14} className="text-white" />
                    </button>
                  )}
                </div>

                {/* Mobile search icon */}
                <button
                  className="md:hidden bg-black/20 p-1.5 rounded-full"
                  onClick={toggleSearchExpansion}
                >
                  <Search size={18} className="text-white" />
                </button>
              </>
            )}
          </div>
        </header>
        {/* Mobile menu drawer - only visible on mobile when toggled */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-12 left-0 right-0 bottom-0 z-20 bg-black/90 backdrop-blur-md">
            <div className="p-4">
              <div className="mb-6">
                <h1 className="text-xl font-bold mb-1 text-white">
                  Tate McCormick
                </h1>
                <p className="text-white/80 text-base">Redmond, WA.</p>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-2">
                {folders.map((folder) => (
                  <div
                    key={folder.name}
                    className={`flex items-center justify-between p-3 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                      selectedFolder === folder.name ? "bg-white/10" : ""
                    }`}
                    onClick={() => handleFolderSelect(folder.name)}
                  >
                    <div className="flex items-center">
                      <span
                        className={`mr-3 text-xl ${
                          selectedFolder === folder.name
                            ? "text-white"
                            : "text-white/80"
                        }`}
                      >
                        {folder.icon}
                      </span>
                      <span className="text-white text-lg">{folder.name}</span>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`${
                        selectedFolder === folder.name
                          ? "text-white"
                          : "text-white/50"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Main Content - Responsive Layout */}
        <div className="flex flex-1 overflow-hidden">
          {searchQuery.trim() === "" ? (
            // Normal layout - responsive with conditional display on mobile
            <>
              {/* Left Sidebar - Hidden on mobile */}
              <div className="hidden md:w-1/4 lg:w-1/5 xl:w-1/5 2xl:w-1/6 md:flex md:flex-col bg-white/5 backdrop-blur-md overflow-y-auto border-r border-white/20 h-full max-w-sm mac-scrollbar">
                <div className="p-7">
                  <div className="mb-6">
                    <h1
                      className="font-bold mb-1 text-white"
                      style={{
                        fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      Tate McCormick is a designer & engineer based in Redmond,
                      WA.
                    </h1>
                  </div>
                </div>

                {/* Folder list anchored to bottom */}
                <div className="mt-auto p-6">
                  <div className="space-y-1">
                    {folders.map((folder) => (
                      <div
                        key={folder.name}
                        className={`flex items-center justify-between p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                          selectedFolder === folder.name ? "bg-white/10" : ""
                        }`}
                        onClick={() => handleFolderSelect(folder.name)}
                      >
                        <div className="flex items-center">
                          <span
                            className={`mr-2 text-lg ${
                              selectedFolder === folder.name
                                ? "text-white"
                                : "text-white/80"
                            }`}
                          >
                            {folder.icon}
                          </span>
                          <span className="text-white text-base font-semibold">
                            {folder.name}
                          </span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`${
                            selectedFolder === folder.name
                              ? "text-white"
                              : "text-white/50"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle - File List - Conditionally shown/hidden on mobile and adjusted width when no item is selected */}
              <div
                className={`${
                  selectedItem
                    ? `w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white/7 backdrop-blur-md border-r border-white/20 overflow-y-auto md:max-w-sm mac-scrollbar ${
                        viewingFileDetail ? "hidden md:block" : "block"
                      }`
                    : "w-full flex-1 bg-white/7 backdrop-blur-md overflow-y-auto mac-scrollbar"
                }`}
              >
                <div className="p-6">
                  {selectedFolder &&
                  folderData.folders[selectedFolder]?.layoutType ===
                    LayoutType.Blog ? (
                    // Blog post list layout
                    <div className="space-y-2">
                      {currentItems.length > 0 ? (
                        currentItems.map((item) =>
                          renderBlogPostItem(item as BlogPostItem)
                        )
                      ) : (
                        <div className="text-white/70 p-4 text-center text-base">
                          No blog posts in this folder
                        </div>
                      )}
                    </div>
                  ) : // Default portfolio layout
                  currentItems.length > 0 ? (
                    <div>
                      {(() => {
                        // Group items by year
                        const itemsByYear: { [year: string]: PortfolioItem[] } =
                          currentItems.reduce((acc, item) => {
                            const year =
                              (item as PortfolioItem).year || "Undated";
                            if (!acc[year]) acc[year] = [];
                            acc[year].unshift(item as PortfolioItem);
                            return acc;
                          }, {} as { [year: string]: PortfolioItem[] });

                        // Get years and sort them in descending order
                        const years = Object.keys(itemsByYear).sort((a, b) => {
                          // Handle 'Undated' special case
                          if (a === "Undated") return 1;
                          if (b === "Undated") return -1;
                          return b.localeCompare(a); // Descending order
                        });

                        return years.map((year, yearIndex) => (
                          <div
                            key={year}
                            className={yearIndex > 0 ? "mt-6" : ""}
                          >
                            {/* Year Divider - Year on left, line on right */}
                            <div className="relative mb-3 flex items-center">
                              <span className="bg-black/20 backdrop-blur-sm px-3 py-1 text-white/90 text-sm font-semibold rounded-md mr-3">
                                {year}
                              </span>
                              <div className="border-t border-white/8 flex-grow"></div>
                            </div>

                            {/* Items for this year */}
                            <div className="space-y-1">
                              {itemsByYear[year].map((item) =>
                                renderPortfolioItem(item)
                              )}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  ) : (
                    <div className="text-white/70 p-4 text-center text-base">
                      No files in this folder
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Preview - Only show when an item is selected */}
              {selectedItem &&
                (isBlogFolder() ? (
                  // Blog post details view
                  <BlogPostDetailsPanel selectedBlogPost={selectedBlogPost} />
                ) : (
                  // Portfolio item details view
                  <ItemDetailsPanel
                    selectedItem={selectedPortfolioItem}
                    currentMedia={currentMedia}
                    currentMediaIndex={currentMediaIndex}
                    handleSlideChange={handleSlideChange}
                    getGalleryItems={getGalleryItems}
                  />
                ))}
            </>
          ) : searchResults.length > 0 ? (
            // Search mode - responsive with conditional display on mobile
            <>
              {/* Left - Search Results - Hidden on mobile when viewing detail and adjusted width when no item is selected */}
              <div
                className={`${
                  selectedItem
                    ? `w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white/5 backdrop-blur-md border-r border-white/20 overflow-y-auto md:max-w-sm mac-scrollbar ${
                        viewingFileDetail ? "hidden md:block" : "block"
                      }`
                    : "w-full flex-1 bg-white/5 backdrop-blur-md overflow-y-auto mac-scrollbar"
                }`}
              >
                <div className="p-3">
                  <h2 className="text-base font-semibold mb-4 text-white/70 uppercase tracking-wider px-2">
                    Results
                  </h2>
                  <div className="space-y-1">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-3 md:p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                          selectedItemId === item.id ? "bg-white/10" : ""
                        }`}
                        onClick={() => handleItemSelect(item.id, item.folderId)}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <div
                              className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md border-2 border-white overflow-hidden"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.image ? (
                                <img
                                  src={`${item.image}`}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-base">{item.icon}</span>
                              )}
                            </div>
                            <span className="text-white font-semibold text-base truncate">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-sm text-white/60 ml-12 md:ml-10 mt-0.5">
                            {item.folderId}
                          </span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`${
                            selectedItemId === item.id
                              ? "text-white"
                              : "text-white/50"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Preview - Only show when an item is selected */}
              {selectedItem &&
                (isBlogFolder() ? (
                  <BlogPostDetailsPanel selectedBlogPost={selectedBlogPost} />
                ) : (
                  <ItemDetailsPanel
                    selectedItem={selectedPortfolioItem}
                    currentMedia={currentMedia}
                    currentMediaIndex={currentMediaIndex}
                    handleSlideChange={handleSlideChange}
                    getGalleryItems={getGalleryItems}
                  />
                ))}
            </>
          ) : (
            // No search results
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-2xl">No results found</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioApp;
