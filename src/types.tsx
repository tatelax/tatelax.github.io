export interface MediaFile {
  path: string;
  type: "image" | "video" | "pdf";
  thumbnail?: string; // Optional thumbnail for videos/pdfs
  description?: string; // Added description field for each media item
}

export interface ItemDetails {
  name: string;
  date: string;
  client: string;
  tags: string[];
  description?: string;
  media: MediaFile[];
}

export interface PortfolioItem {
  id: string; // Unique identifier for each item
  name: string;
  icon: string;
  image?: string;
  color: string;
  year?: string;
  details: ItemDetails;
}

// New interface for blog posts
export interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  image?: string;
  color?: string;
  icon?: string;
  year?: string;
}

export interface SearchResult extends PortfolioItem {
  folderId: string;
}

export enum LayoutType {
  Portfolio,
  Blog,
  Photography,
  Text,
}

export interface FolderInfo {
  icon: string;
  description: string;
  layoutType: LayoutType;
  items?: string[];
}

export interface FolderStructure {
  [key: string]: FolderInfo;
}

export interface FolderItem {
  name: string;
  icon: string;
}

export interface PortfolioItemsMap {
  [key: string]: PortfolioItem;
}

export interface BlogPostItemsMap {
  [key: string]: BlogPostItem;
}

export interface ItemDetailsPanelProps {
  selectedItem: PortfolioItem | undefined;
  currentMedia: MediaFile | null;
  currentMediaIndex: number;
  handleSlideChange: (index: number) => void;
  getGalleryItems: () => any[]; // This should ideally match the ImageGallery items type
}

// Blog post detail panel props
export interface BlogPostDetailsPanelProps {
  selectedBlogPost: BlogPostItem | undefined;
}
