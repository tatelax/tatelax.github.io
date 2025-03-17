"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Search, User, Menu } from "lucide-react";

// Define interfaces for our data structures
interface FileItem {
  name: string;
  icon: string;
  color: string;
  folder?: string; // Added folder for search results
}

interface FolderItem {
  name: string;
  icon: string;
}

interface FileDetails {
  name: string;
  size: string;
  created: string;
  client: string;
  tags: string;
}

// Define type for our folder structure
type FolderStructure = {
  [key: string]: FileItem[];
};

const PortfolioApp: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string>("Experiments");
  const [selectedFile, setSelectedFile] = useState<string>(
    "Inner Creativity.png"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<FileItem[]>([]);

  // Mobile-specific states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewingFileDetail, setViewingFileDetail] = useState<boolean>(false);
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);

  const folderStructure: FolderStructure = {
    "Web Design": [
      { name: "Alternative Paint.png", icon: "🎨", color: "#5A8DEE" },
      { name: "Blurred Ovals.png", icon: "⭕", color: "#5A8DEE" },
      { name: "Toggle This.png", icon: "🔘", color: "#38AF65" },
    ],
    "Product Design": [
      { name: "God Rays.png", icon: "🌞", color: "#F8C881" },
      { name: "Foil.png", icon: "✨", color: "#4D4D4D" },
      { name: "Dream Glow.png", icon: "💫", color: "#B0AFFF" },
    ],
    "Visual Design": [
      { name: "Fire Glow.png", icon: "🔥", color: "#E63C2E" },
      { name: "Warmth.png", icon: "🔆", color: "#F8AF5F" },
      { name: "Pink Layers.png", icon: "💗", color: "#E63C3C" },
    ],
    Experiments: [
      { name: "Inner Creativity.png", icon: "🧠", color: "#F39C74" },
      { name: "Gradient Fluid.png", icon: "📄", color: "#F1F1F1" },
      { name: "Greenery.png", icon: "🌿", color: "#38AF65" },
      { name: "Into the Fold.png", icon: "📂", color: "#F8D881" },
      { name: "Micro Objects.png", icon: "🔍", color: "#F15887" },
      { name: "Dimensional.png", icon: "🧊", color: "#F15887" },
    ],
    "Don't open": [
      { name: "Gradient Collective.png", icon: "🎨", color: "#5A8DEE" },
    ],
  };

  // Get list of folders with their icons
  const folders: FolderItem[] = [
    { name: "Web Design", icon: "📁" },
    { name: "Product Design", icon: "📁" },
    { name: "Visual Design", icon: "📁" },
    { name: "Experiments", icon: "📁" },
    { name: "Don't open", icon: "📁" },
  ];

  const fileDetails: FileDetails = {
    name: selectedFile,
    size: "2.1 MB",
    created: "May 2024",
    client: "Self-initiated",
    tags: "Bold, Experimental",
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Back button handler for mobile
  const handleBackToFiles = () => {
    setViewingFileDetail(false);
  };

  // Update URL when a file or folder is selected
  const updateUrl = (foldername: string, filename?: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("folder", foldername);

    if (filename) {
      url.searchParams.set("file", filename);
    } else {
      url.searchParams.delete("file");
    }

    window.history.pushState({}, "", url);
  };

  // Reset URL to root (no parameters)
  const resetUrlToRoot = () => {
    const url = new URL(window.location.href);
    url.search = "";
    window.history.pushState({}, "", url);
  };

  // Handle file selection with URL update
  const handleFileSelect = (filename: string, folderName?: string) => {
    setSelectedFile(filename);

    // On mobile, switch to file detail view
    if (window.innerWidth < 768) {
      setViewingFileDetail(true);
    }

    // If folder is provided, use it, otherwise use currently selected folder
    const folder = folderName || selectedFolder;
    updateUrl(folder, filename);
  };

  // Handle folder selection with URL update
  const handleFolderSelect = (folderName: string) => {
    setSelectedFolder(folderName);
    setMobileMenuOpen(false); // Close mobile menu after selection
    setViewingFileDetail(false); // Return to file list view on mobile

    // Update URL with new folder
    if (folderStructure[folderName]?.length > 0) {
      const firstFile = folderStructure[folderName][0].name;
      setSelectedFile(firstFile);
      updateUrl(folderName, firstFile);
    } else {
      // If folder is empty, just update folder in URL
      updateUrl(folderName);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);

    // If search is cleared, restore the normal URL with current selection
    if (newQuery.trim() === "" && selectedFolder) {
      updateUrl(selectedFolder, selectedFile);
      setViewingFileDetail(false); // Return to file list on mobile when search is cleared
    }
  };

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

  // Parse the URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const folderParam = params.get("folder");
    const fileParam = params.get("file");

    // If folder is in URL and exists in our structure
    if (folderParam && folderStructure[folderParam]) {
      setSelectedFolder(folderParam);

      // If file is in URL and exists in the folder
      if (fileParam) {
        const fileExists = folderStructure[folderParam].some(
          (file) => file.name === fileParam
        );
        if (fileExists) {
          setSelectedFile(fileParam);
          // Set mobile view state based on screen size
          if (window.innerWidth < 768) {
            setViewingFileDetail(true);
          }
        } else if (folderStructure[folderParam].length > 0) {
          // If file doesn't exist, select first file in folder
          setSelectedFile(folderStructure[folderParam][0].name);
          updateUrl(folderParam, folderStructure[folderParam][0].name);
        }
      } else if (folderStructure[folderParam].length > 0) {
        // If no file in URL, select first file in folder
        setSelectedFile(folderStructure[folderParam][0].name);
        updateUrl(folderParam, folderStructure[folderParam][0].name);
      }
    } else if (fileParam) {
      // If only file is in URL, find which folder contains it
      for (const folderName in folderStructure) {
        const fileExists = folderStructure[folderName].some(
          (file) => file.name === fileParam
        );
        if (fileExists) {
          setSelectedFolder(folderName);
          setSelectedFile(fileParam);
          updateUrl(folderName, fileParam);

          // Set mobile view state based on screen size
          if (window.innerWidth < 768) {
            setViewingFileDetail(true);
          }
          break;
        }
      }
    }
  }, []);

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      // Don't reset URL when search is cleared if we're in normal browsing mode
      return;
    }

    const results: FileItem[] = [];
    const query = searchQuery.toLowerCase();

    // Search through all folders and files
    for (const folderName in folderStructure) {
      folderStructure[folderName].forEach((file) => {
        if (file.name.toLowerCase().includes(query)) {
          // Add the folder information to the file for display in search results
          results.push({ ...file, folder: folderName });
        }
      });
    }

    setSearchResults(results);

    // Select the first result by default if there are any
    if (results.length > 0) {
      const file = results[0].name;
      const folder = results[0].folder || selectedFolder;
      setSelectedFile(file);
      updateUrl(folder, file);

      // On mobile, don't automatically go to detail view for search results
      if (window.innerWidth < 768) {
        setViewingFileDetail(false);
      }
    } else {
      // If no search results, reset URL to root
      resetUrlToRoot();
    }
  }, [searchQuery]);

  // Get files for the currently selected folder
  const currentFiles: FileItem[] = folderStructure[selectedFolder] || [];

  const getFileByName = (name: string): FileItem | undefined => {
    // Look through all files in all folders to find the one that matches
    for (const folderName in folderStructure) {
      const fileMatch = folderStructure[folderName].find(
        (file) => file.name === name
      );
      if (fileMatch) return fileMatch;
    }
    // Fallback to first file in current folder
    return currentFiles[0];
  };

  return (
    <div className="flex flex-col h-screen bg-[url('/images/background.png')] relative">
      {/* Glass-like card that contains the entire UI */}
      <div className="relative z-10 m-2 md:m-15 rounded-lg overflow-hidden border border-white/20 shadow-2xl backdrop-filter backdrop-blur-xl bg-black/70 flex flex-col h-full">
        {/* Header - Updated for mobile with collapsible search */}
        <header className="p-2 flex justify-between items-center border-b border-white/10 backdrop-blur-lg">
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
              <Menu size={16} className="text-white" />
            </button>

            {/* Back button for mobile when viewing file details */}
            {viewingFileDetail && (
              <button
                className="md:hidden bg-black/20 p-1.5 rounded-full ml-2"
                onClick={handleBackToFiles}
              >
                <ChevronLeft size={16} className="text-white" />
              </button>
            )}

            <div className="hidden md:flex bg-black/20 p-1.5 rounded-full ml-1">
              <User size={16} className="text-white" />
            </div>

            {/* Current context for mobile - hidden when search is expanded */}
            <div className={`md:hidden ${searchExpanded ? "hidden" : "block"}`}>
              <span className="text-white text-sm font-medium">
                {viewingFileDetail ? selectedFile : selectedFolder}
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
                  <ChevronLeft size={16} className="text-white" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-black/20 backdrop-blur-lg rounded-lg py-1.5 pl-8 pr-2 w-full text-white text-sm border border-white/10"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    autoFocus
                  />
                  <Search
                    size={14}
                    className="absolute left-2 top-2.5 text-white/70"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* Desktop search bar */}
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-black/20 backdrop-blur-lg rounded-lg py-1 pl-8 pr-2 w-48 text-white text-sm border border-white/10"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <Search
                    size={14}
                    className="absolute left-2 top-2 text-white/70"
                  />
                </div>

                {/* Mobile search icon */}
                <button
                  className="md:hidden bg-black/20 p-1.5 rounded-full"
                  onClick={toggleSearchExpansion}
                >
                  <Search size={16} className="text-white" />
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
                <h1 className="text-lg font-bold mb-1 text-white">
                  Tate McCormick
                </h1>
                <p className="text-white/80 text-sm">Redmond, WA.</p>
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
                        className={`mr-3 text-lg ${
                          selectedFolder === folder.name
                            ? "text-white"
                            : "text-white/80"
                        }`}
                      >
                        {folder.icon}
                      </span>
                      <span className="text-white text-base">
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
        )}

        {/* Main Content - Responsive Layout */}
        <div className="flex flex-1 overflow-hidden">
          {searchQuery.trim() === "" ? (
            // Normal layout - responsive with conditional display on mobile
            <>
              {/* Left Sidebar - Hidden on mobile */}
              <div className="hidden md:w-64 md:flex md:flex-col bg-white/10 backdrop-blur-md overflow-y-auto border-r border-white/10 h-full">
                <div className="p-4">
                  <div className="mb-6">
                    <h1 className="text-lg font-bold mb-1 text-white">
                      Tate McCormick
                    </h1>
                    <p className="text-white/80 text-sm">Redmond, WA.</p>
                  </div>
                </div>

                {/* Folder list anchored to bottom */}
                <div className="mt-auto p-4">
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
                            className={`mr-2 text-base ${
                              selectedFolder === folder.name
                                ? "text-white"
                                : "text-white/80"
                            }`}
                          >
                            {folder.icon}
                          </span>
                          <span className="text-white text-sm">
                            {folder.name}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
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
                className={`w-full md:w-72 bg-white/5 backdrop-blur-md border-r border-white/10 overflow-y-auto ${
                  viewingFileDetail ? "hidden md:block" : "block"
                }`}
              >
                <div className="p-3">
                  {currentFiles.length > 0 ? (
                    <div className="space-y-1">
                      {currentFiles.map((file) => (
                        <div
                          key={file.name}
                          className={`flex items-center justify-between p-3 md:p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                            selectedFile === file.name ? "bg-white/10" : ""
                          }`}
                          onClick={() => handleFileSelect(file.name)}
                        >
                          <div className="flex items-center">
                            <div
                              className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md"
                              style={{ backgroundColor: file.color }}
                            >
                              <span className="text-sm">{file.icon}</span>
                            </div>
                            <span className="text-white text-sm truncate">
                              {file.name}
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`${
                              selectedFile === file.name
                                ? "text-white"
                                : "text-white/50"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-white/70 p-4 text-center text-sm">
                      No files in this folder
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Preview - Conditionally shown/hidden on mobile */}
              <div
                className={`w-full flex-1 md:flex-1 bg-white/5 backdrop-blur-md overflow-y-auto flex flex-col ${
                  viewingFileDetail ? "block" : "hidden md:flex"
                }`}
              >
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    {selectedFile === "Inner Creativity.png" && (
                      <div className="aspect-w-3 aspect-h-4">
                        <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 p-2 rounded-md">
                          <div className="grid grid-cols-4 gap-1">
                            {[...Array(16)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-6 ${
                                  i % 2 === 0
                                    ? "bg-yellow-300/50"
                                    : "bg-pink-400/50"
                                } ${i > 7 ? "rounded-sm" : ""}`}
                              ></div>
                            ))}
                          </div>
                          <div className="mt-2 flex justify-center">
                            <div className="h-24 w-20 bg-orange-300/70 rounded-t-full"></div>
                          </div>
                          <div className="text-center mt-2 text-xs">MANS</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t border-white/10">
                  <div className="text-white">
                    <h2 className="text-base font-semibold mb-1">
                      {fileDetails.name}
                    </h2>
                    <p className="text-white/70 text-sm mb-4">
                      {fileDetails.size}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Created</span>
                        <span>{fileDetails.created}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Client</span>
                        <span>{fileDetails.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Tags</span>
                        <span>{fileDetails.tags}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : searchResults.length > 0 ? (
            // Search mode - responsive with conditional display on mobile
            <>
              {/* Left - Search Results - Hidden on mobile when viewing detail */}
              <div
                className={`w-full md:w-72 bg-white/5 backdrop-blur-md border-r border-white/10 overflow-y-auto ${
                  viewingFileDetail ? "hidden md:block" : "block"
                }`}
              >
                <div className="p-3">
                  <h2 className="text-sm font-medium mb-2 text-white/70 uppercase tracking-wider px-2">
                    Search Results
                  </h2>
                  <div className="space-y-1">
                    {searchResults.map((file) => (
                      <div
                        key={file.name}
                        className={`flex items-center justify-between p-3 md:p-2 hover:bg-white/5 rounded-md cursor-pointer transition-all ${
                          selectedFile === file.name ? "bg-white/10" : ""
                        }`}
                        onClick={() => handleFileSelect(file.name, file.folder)}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <div
                              className="w-10 h-10 md:w-8 md:h-8 mr-3 md:mr-2 flex items-center justify-center rounded-md"
                              style={{ backgroundColor: file.color }}
                            >
                              <span className="text-sm">{file.icon}</span>
                            </div>
                            <span className="text-white text-sm truncate">
                              {file.name}
                            </span>
                          </div>
                          <span className="text-xs text-white/60 ml-12 md:ml-10 mt-0.5">
                            {file.folder}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`${
                            selectedFile === file.name
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
                className={`w-full flex-1 md:flex-1 bg-white/5 backdrop-blur-md overflow-y-auto flex flex-col ${
                  viewingFileDetail ? "block" : "hidden md:flex"
                }`}
              >
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    {selectedFile === "Inner Creativity.png" && (
                      <div className="aspect-w-3 aspect-h-4">
                        <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 p-2 rounded-md">
                          <div className="grid grid-cols-4 gap-1">
                            {[...Array(16)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-6 ${
                                  i % 2 === 0
                                    ? "bg-yellow-300/50"
                                    : "bg-pink-400/50"
                                } ${i > 7 ? "rounded-sm" : ""}`}
                              ></div>
                            ))}
                          </div>
                          <div className="mt-2 flex justify-center">
                            <div className="h-24 w-20 bg-orange-300/70 rounded-t-full"></div>
                          </div>
                          <div className="text-center mt-2 text-xs">MANS</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t border-white/10">
                  <div className="text-white">
                    <h2 className="text-base font-semibold mb-1">
                      {fileDetails.name}
                    </h2>
                    <p className="text-white/70 text-sm mb-4">
                      {fileDetails.size}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Created</span>
                        <span>{fileDetails.created}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Client</span>
                        <span>{fileDetails.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Tags</span>
                        <span>{fileDetails.tags}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // No search results
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-xl">No results :(</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioApp;
