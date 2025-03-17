"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Search, User } from "lucide-react";

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

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
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
      setSelectedFile(results[0].name);
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

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-800 via-teal-700 to-blue-800 p-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col h-full text-white">
        {/* Header */}
        <header className="p-4 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-800 p-2 rounded-full">
              <User size={24} className="text-white" />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 rounded-lg py-2 pl-10 pr-4 w-64 text-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {searchQuery.trim() === "" ? (
            // Normal 3-column layout
            <>
              {/* Left Sidebar - Profile & Folders */}
              <div className="w-64 bg-gray-900 p-4 overflow-y-auto border-r border-gray-800">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold mb-1">
                    Fons Mans is a designer
                  </h1>
                  <p className="text-xl">based in Rotterdam, The Netherlands</p>
                </div>

                <div className="space-y-2">
                  {folders.map((folder) => (
                    <div
                      key={folder.name}
                      className={`flex items-center justify-between p-2 hover:bg-gray-800 rounded cursor-pointer ${
                        selectedFolder === folder.name ? "bg-gray-800" : ""
                      }`}
                      onClick={() => {
                        setSelectedFolder(folder.name);
                        // Set selected file to first file in the folder, if any exist
                        if (folderStructure[folder.name]?.length > 0) {
                          setSelectedFile(folderStructure[folder.name][0].name);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <span
                          className={`mr-2 ${
                            selectedFolder === folder.name
                              ? "text-blue-400"
                              : "text-blue-300"
                          }`}
                        >
                          {folder.icon}
                        </span>
                        <span>{folder.name}</span>
                      </div>
                      <ChevronRight
                        size={18}
                        className={`${
                          selectedFolder === folder.name
                            ? "text-blue-400"
                            : "text-gray-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle - File List */}
              <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
                <div className="p-2">
                  {currentFiles.length > 0 ? (
                    currentFiles.map((file) => (
                      <div
                        key={file.name}
                        className={`flex items-center justify-between p-2 hover:bg-gray-800 rounded cursor-pointer ${
                          selectedFile === file.name ? "bg-gray-800" : ""
                        }`}
                        onClick={() => setSelectedFile(file.name)}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-6 h-6 mr-2 flex items-center justify-center rounded"
                            style={{ backgroundColor: file.color }}
                          >
                            <span className="text-xs">{file.icon}</span>
                          </div>
                          <span>{file.name}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`${
                            selectedFile === file.name
                              ? "text-blue-400"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 p-4 text-center">
                      No files in this folder
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Preview */}
              <div className="flex-1 bg-gray-900 p-4 overflow-y-auto">
                <div className="bg-green-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-center">
                    <div className="relative w-64">
                      {selectedFile === "Inner Creativity.png" && (
                        <div className="aspect-w-3 aspect-h-4">
                          <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 p-2 rounded">
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
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{fileDetails.name}</h2>
                  <p className="text-gray-400">{fileDetails.size}</p>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Created</span>
                      <span>{fileDetails.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client</span>
                      <span>{fileDetails.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tags</span>
                      <span>{fileDetails.tags}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : searchResults.length > 0 ? (
            // Search mode - 2-column layout
            <>
              {/* Left - Search Results */}
              <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
                <div className="p-2">
                  {searchResults.map((file) => (
                    <div
                      key={file.name}
                      className={`flex items-center justify-between p-2 hover:bg-gray-800 rounded cursor-pointer ${
                        selectedFile === file.name ? "bg-gray-800" : ""
                      }`}
                      onClick={() => setSelectedFile(file.name)}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <div
                            className="w-6 h-6 mr-2 flex items-center justify-center rounded"
                            style={{ backgroundColor: file.color }}
                          >
                            <span className="text-xs">{file.icon}</span>
                          </div>
                          <span>{file.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 ml-8">
                          {file.folder}
                        </span>
                      </div>
                      <ChevronRight
                        size={18}
                        className={`${
                          selectedFile === file.name
                            ? "text-blue-400"
                            : "text-gray-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Preview */}
              <div className="flex-1 bg-gray-900 p-4 overflow-y-auto">
                <div className="bg-green-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-center">
                    <div className="relative w-64">
                      {selectedFile === "Inner Creativity.png" && (
                        <div className="aspect-w-3 aspect-h-4">
                          <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 p-2 rounded">
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
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{fileDetails.name}</h2>
                  <p className="text-gray-400">{fileDetails.size}</p>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Created</span>
                      <span>{fileDetails.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client</span>
                      <span>{fileDetails.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tags</span>
                      <span>{fileDetails.tags}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // No search results
            <div className="flex-1 flex items-center justify-center">
              <div className="text-gray-400 text-xl">No results :(</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioApp;
