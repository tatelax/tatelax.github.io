"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, Search, User, Menu, X } from "lucide-react";
import { portfolioData } from "./portfolioData";
import ImageGallery from "react-image-gallery";
import { renderLeftNav, renderRightNav } from "./GalleryNavigation";
import "react-image-gallery/styles/css/image-gallery.css";

// Define interfaces for our data structures
interface MediaFile {
  path: string;
  type: "image" | "video" | "pdf";
  thumbnail?: string; // Optional thumbnail for videos/pdfs
  description?: string; // Added description field for each media item
}

interface ItemDetails {
  name: string;
  size: string;
  created: string;
  client: string;
  tags: string[];
  description?: string;
  media: MediaFile[];
}

interface PortfolioItem {
  id: string; // Unique identifier for each item
  name: string;
  icon: string;
  color: string;
  details: ItemDetails;
}

interface SearchResult extends PortfolioItem {
  folderId: string;
}

interface FolderInfo {
  icon: string;
  description: string;
}

export interface FolderInfoMap {
  [key: string]: FolderInfo;
}

interface FolderItem {
  name: string;
  icon: string;
}

export interface ItemsMap {
  [key: string]: PortfolioItem;
}

export interface FoldersMap {
  [key: string]: string[];
}

const PortfolioApp: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0); // Added to track current media index

  // Mobile-specific states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewingFileDetail, setViewingFileDetail] = useState<boolean>(false);
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);

  // Get list of folders with their icons
  const folders: FolderItem[] = Object.keys(portfolioData.folders).map(
    (folderName) => ({
      name: folderName,
      icon: portfolioData.folderInfo[folderName]?.icon || "📁",
    })
  );

  // Helper function to get item by ID - memoized to avoid dependency loops
  const getItemById = useCallback((id: string): PortfolioItem | undefined => {
    return portfolioData.items[id];
  }, []);

  // Helper function to get current selected item - memoized
  const getSelectedItem = useCallback((): PortfolioItem | undefined => {
    return selectedItemId ? getItemById(selectedItemId) : undefined;
  }, [selectedItemId, getItemById]);

  // Helper function to get items in a folder - memoized
  const getItemsInFolder = useCallback(
    (folderName: string): PortfolioItem[] => {
      const itemIds = portfolioData.folders[folderName] || [];
      return itemIds.map((id) => portfolioData.items[id]).filter(Boolean);
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
        const firstItem = folderItems[0];
        setSelectedItemId(firstItem.id);
        updateUrl(folderName, firstItem.id);
      } else {
        // If folder is empty, just update folder in URL
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

      if (folderParam && portfolioData.folders[folderParam]) {
        setSelectedFolder(folderParam);

        if (itemParam && portfolioData.items[itemParam]) {
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
      }

      // Clear search when navigating with browser buttons
      setSearchQuery("");
      setSearchResults([]);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getItemsInFolder]);

  // Initialize the default folder and item when component mounts
  useEffect(() => {
    // If no folder is already selected, select the first one
    if (!selectedFolder && folders.length > 0) {
      const firstFolder = folders[0].name;
      setSelectedFolder(firstFolder);

      // Select the first item in that folder
      const folderItems = getItemsInFolder(firstFolder);
      if (folderItems.length > 0) {
        const firstItem = folderItems[0];
        setSelectedItemId(firstItem.id);
        updateUrl(firstFolder, firstItem.id);
      }
    }
  }, [folders, selectedFolder, getItemsInFolder, updateUrl]);

  // Parse the URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const folderParam = params.get("folder");
    const itemParam = params.get("item");

    // If folder is in URL and exists in our structure
    if (folderParam && portfolioData.folders[folderParam]) {
      setSelectedFolder(folderParam);

      // If item is in URL and exists
      if (itemParam && portfolioData.items[itemParam]) {
        setSelectedItemId(itemParam);
        // Set mobile view state based on screen size
        if (window.innerWidth < 768) {
          setViewingFileDetail(true);
        }
      } else {
        // If no item in URL or invalid item, select first item in folder
        const folderItems = getItemsInFolder(folderParam);
        if (folderItems.length > 0) {
          setSelectedItemId(folderItems[0].id);
          updateUrl(folderParam, folderItems[0].id);
        }
      }
    } else if (itemParam && portfolioData.items[itemParam]) {
      // If only item is in URL, find which folder contains it
      for (const folderName in portfolioData.folders) {
        if (portfolioData.folders[folderName].includes(itemParam)) {
          setSelectedFolder(folderName);
          setSelectedItemId(itemParam);
          updateUrl(folderName, itemParam);

          // Set mobile view state based on screen size
          if (window.innerWidth < 768) {
            setViewingFileDetail(true);
          }
          break;
        }
      }
    }
  }, [getItemsInFolder, updateUrl]);

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      // Don't reset URL when search is cleared if we're in normal browsing mode
      return;
    }

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    // Search through all items
    for (const itemId in portfolioData.items) {
      const item = portfolioData.items[itemId];
      const itemName = item.name.toLowerCase();
      const itemTags = item.details.tags.join(" ").toLowerCase();
      const itemDesc = (item.details.description || "").toLowerCase();

      if (
        itemName.includes(query) ||
        itemTags.includes(query) ||
        itemDesc.includes(query)
      ) {
        // Find which folders contain this item
        for (const folderName in portfolioData.folders) {
          if (portfolioData.folders[folderName].includes(itemId)) {
            results.push({
              ...item,
              folderId: folderName,
            });
            break; // Just add the first folder match to avoid duplicates in results
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

  // Get the current media item being viewed
  const currentMedia = selectedItem?.details.media[currentMediaIndex] || null;

  // Format media files for react-image-gallery
  const getGalleryItems = useCallback(() => {
    if (!selectedItem || !selectedItem.details.media.length) return [];

    return selectedItem.details.media.map((media) => {
      const basePath = `/images/${media.path}`;

      // Format based on media type
      if (media.type === "image") {
        return {
          original: basePath,
          thumbnail: basePath,
          originalAlt: selectedItem.name,
          thumbnailAlt: selectedItem.name,
          renderItem: () => (
            <div className="h-full flex items-center justify-center">
              <img
                src={basePath}
                alt={selectedItem.name}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: "60vh" }}
              />
            </div>
          ),
        };
      } else if (media.type === "video") {
        // For videos, use custom rendering
        return {
          original: basePath,
          thumbnail: media.thumbnail ? `/images/${media.thumbnail}` : basePath,
          originalAlt: `${selectedItem.name} (video)`,
          thumbnailAlt: `${selectedItem.name} (video)`,
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
                poster={
                  media.thumbnail ? `/images/${media.thumbnail}` : undefined
                }
              />
            </div>
          ),
        };
      } else if (media.type === "pdf") {
        // For PDFs, use custom rendering
        return {
          original: basePath,
          thumbnail: media.thumbnail ? `/images/${media.thumbnail}` : basePath,
          originalAlt: `${selectedItem.name} (PDF)`,
          thumbnailAlt: `${selectedItem.name} (PDF)`,
          renderItem: () => (
            <div
              className="pdf-wrapper flex flex-col items-center justify-center"
              style={{ height: "60vh" }}
            >
              {media.thumbnail && (
                <div className="h-4/5 flex items-center justify-center">
                  <img
                    src={`/images/${media.thumbnail}`}
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
  }, [selectedItem]);

  return (
    <div
      className="flex px-0 md:px-4 lg:px-8 lg:py-20 xl:px-16 2xl:px-40 flex-col h-screen relative"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glass-like card that contains the entire UI */}
      <div className="relative z-10 m-2 md:m-4 rounded-2xl overflow-hidden border border-white/30 shadow-2xl backdrop-filter backdrop-blur-xl bg-black/70 flex flex-col h-full">
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

            <div className="hidden md:flex bg-black/20 p-1.5 rounded-full ml-2">
              <User size={26} className="text-white" />
            </div>

            {/* Current context for mobile - hidden when search is expanded */}
            <div className={`md:hidden ${searchExpanded ? "hidden" : "block"}`}>
              <span className="text-white text-base font-medium">
                {viewingFileDetail ? selectedItem?.name : selectedFolder}
              </span>
            </div>
          </div>

          {/* Collapsible search for mobile */}
          <div className={`relative ${searchExpanded ? "flex-1" : ""}`}>
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
              <div className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/5 2xl:w-1/6 md:flex md:flex-col bg-white/5 backdrop-blur-md overflow-y-auto border-r border-white/20 h-full max-w-sm">
                <div className="p-7">
                  <div className="mb-6">
                    <h1
                      className="font-bold mb-1 text-white"
                      style={{
                        fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      Tate McCormick is a designer & engineer based in
                    </h1>
                    <p className="text-white/80 text-base">Redmond, WA.</p>
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

              {/* Middle - File List - Conditionally shown/hidden on mobile */}
              <div
                className={`w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white/7 backdrop-blur-md border-r border-white/20 overflow-y-auto md:max-w-sm ${
                  viewingFileDetail ? "hidden md:block" : "block"
                }`}
              >
                <div className="p-6">
                  {currentItems.length > 0 ? (
                    <div className="space-y-1">
                      {currentItems.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between p-3 md:p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                            selectedItemId === item.id ? "bg-white/10" : ""
                          }`}
                          onClick={() => handleItemSelect(item.id)}
                        >
                          <div className="flex items-center">
                            <div
                              className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md border-2 border-white"
                              style={{ backgroundColor: item.color }}
                            >
                              <span className="text-base">{item.icon}</span>
                            </div>
                            <span className="text-white text-base truncate font-semibold">
                              {item.name}
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
                  ) : (
                    <div className="text-white/70 p-4 text-center text-base">
                      No files in this folder
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Preview - Conditionally shown/hidden on mobile */}
              <div
                className={`w-full md:w-5/12 lg:w-7/12 xl:w-3/5 2xl:w-2/3 bg-white/7 backdrop-blur-md overflow-y-auto flex flex-col h-full ${
                  viewingFileDetail ? "block" : "hidden md:flex"
                }`}
              >
                <div className="h-full flex flex-col">
                  {selectedItem && (
                    <>
                      {/* Two column layout for media content and description */}
                      <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
                        {selectedItem.details.media.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:divide-x md:divide-white/20 h-full">
                            {/* Left Column - Image Gallery */}
                            <div className="image-gallery-container h-full">
                              <div className="h-full">
                                <ImageGallery
                                  items={getGalleryItems()}
                                  showPlayButton={false}
                                  showBullets={
                                    selectedItem.details.media.length > 1
                                  }
                                  showThumbnails={
                                    selectedItem.details.media.length > 1
                                  }
                                  showFullscreenButton={true}
                                  useBrowserFullscreen={true}
                                  slideInterval={3000}
                                  slideDuration={450}
                                  additionalClass="portfolio-gallery fit-content h-full"
                                  thumbnailPosition="bottom"
                                  onSlide={handleSlideChange}
                                  renderLeftNav={renderLeftNav}
                                  renderRightNav={renderRightNav}
                                />
                              </div>
                            </div>

                            {/* Right Column - Media Description */}
                            <div className="rounded-lg p-6 flex flex-col justify-start h-full overflow-y-auto">
                              <h3 className="text-xl font-semibold text-white mb-4">
                                Media Details
                              </h3>

                              {currentMedia && currentMedia.description ? (
                                <div className="space-y-4">
                                  <p className="text-white/90 text-base">
                                    {currentMedia.description}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-white/70 italic">
                                  No description available for this media.
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border-t border-white/20">
                        <div className="text-white">
                          <h2 className="text-lg font-semibold mb-1">
                            {selectedItem.name}
                          </h2>
                          <p className="text-white/70 text-base mb-4">
                            {selectedItem.details.size}
                          </p>

                          <div className="space-y-2 text-base">
                            <div className="flex justify-between">
                              <span className="text-white/70">Created</span>
                              <span>{selectedItem.details.created}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Client</span>
                              <span>{selectedItem.details.client}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Tags</span>
                              <span>
                                {selectedItem.details.tags.join(", ")}
                              </span>
                            </div>
                            {selectedItem.details.description && (
                              <div className="pt-2">
                                <span className="text-white/70 block mb-1">
                                  Description
                                </span>
                                <p className="text-white/90">
                                  {selectedItem.details.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : searchResults.length > 0 ? (
            // Search mode - responsive with conditional display on mobile
            <>
              {/* Left - Search Results - Hidden on mobile when viewing detail */}
              <div
                className={`w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white/5 backdrop-blur-md border-r border-white/20 overflow-y-auto md:max-w-sm ${
                  viewingFileDetail ? "hidden md:block" : "block"
                }`}
              >
                <div className="p-3">
                  <h2 className="text-base font-medium mb-2 text-white/70 uppercase tracking-wider px-2">
                    Search Results
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
                              className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md"
                              style={{ backgroundColor: item.color }}
                            >
                              <span className="text-base">{item.icon}</span>
                            </div>
                            <span className="text-white text-base truncate">
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
              {/* Right - Preview - Shown on mobile only when viewing detail */}
              <div
                className={`w-full md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6 bg-white/5 backdrop-blur-md overflow-y-auto flex flex-col ${
                  viewingFileDetail ? "block" : "hidden md:flex"
                }`}
              >
                {selectedItem && (
                  <>
                    {/* Two column layout for media content and description */}
                    <div className="flex-1 p-4">
                      {selectedItem.details.media.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:divide-x md:divide-white/20">
                          {/* Left Column - Image Gallery */}
                          <div className="image-gallery-container">
                            <ImageGallery
                              items={getGalleryItems()}
                              showPlayButton={false}
                              showBullets={
                                selectedItem.details.media.length > 1
                              }
                              showThumbnails={
                                selectedItem.details.media.length > 1
                              }
                              showFullscreenButton={true}
                              useBrowserFullscreen={true}
                              slideInterval={3000}
                              slideDuration={450}
                              additionalClass="portfolio-gallery fit-content"
                              thumbnailPosition="bottom"
                              onSlide={handleSlideChange}
                              renderLeftNav={renderLeftNav}
                              renderRightNav={renderRightNav}
                            />
                          </div>

                          {/* Right Column - Media Description */}
                          <div className="rounded-lg p-6 flex flex-col justify-start h-full">
                            <h3 className="text-xl font-semibold text-white mb-4">
                              Media Details
                            </h3>

                            {currentMedia && currentMedia.description ? (
                              <div className="space-y-4">
                                <p className="text-white/90 text-base">
                                  {currentMedia.description}
                                </p>
                              </div>
                            ) : (
                              <p className="text-white/70 italic">
                                No description available for this media.
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 border-t border-white/20">
                      <div className="text-white">
                        <h2 className="text-lg font-semibold mb-1">
                          {selectedItem.name}
                        </h2>
                        <p className="text-white/70 text-base mb-4">
                          {selectedItem.details.size}
                        </p>

                        <div className="space-y-2 text-base">
                          <div className="flex justify-between">
                            <span className="text-white/70">Created</span>
                            <span>{selectedItem.details.created}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Client</span>
                            <span>{selectedItem.details.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Tags</span>
                            <span>{selectedItem.details.tags.join(", ")}</span>
                          </div>
                          {selectedItem.details.description && (
                            <div className="pt-2">
                              <span className="text-white/70 block mb-1">
                                Description
                              </span>
                              <p className="text-white/90">
                                {selectedItem.details.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
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
