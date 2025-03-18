import { ItemDetailsPanelProps } from "@/types";
import ImageGallery from "react-image-gallery";
import { renderLeftNav, renderRightNav } from "./GalleryNavigation";

export const ItemDetailsPanel: React.FC<ItemDetailsPanelProps> = ({
  selectedItem,
  currentMedia,
  currentMediaIndex,
  handleSlideChange,
  getGalleryItems,
}) => {
  return (
    <div className="w-full md:w-5/12 lg:w-7/12 xl:w-3/5 2xl:w-2/3 bg-white/7 backdrop-blur-md overflow-y-auto flex flex-col h-full mac-scrollbar">
      <div className="h-full flex flex-col">
        {selectedItem && (
          <>
            {/* Two column layout for media content and description */}
            <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
              {selectedItem.details.media.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:divide-x md:divide-white/20 h-full">
                  {/* Left Column - Image Gallery (70%) */}
                  <div className="image-gallery-container h-full md:col-span-7">
                    <div className="h-full">
                      <ImageGallery
                        items={getGalleryItems()}
                        showPlayButton={false}
                        showBullets={selectedItem.details.media.length > 1}
                        showThumbnails={selectedItem.details.media.length > 1}
                        showFullscreenButton={true}
                        useBrowserFullscreen={true}
                        slideInterval={3000}
                        lazyLoad={true}
                        slideDuration={450}
                        additionalClass="portfolio-gallery fit-content h-full items-center justify-center"
                        thumbnailPosition="left"
                        onSlide={handleSlideChange}
                        renderLeftNav={renderLeftNav}
                        renderRightNav={renderRightNav}
                        startIndex={currentMediaIndex}
                      />
                    </div>
                  </div>

                  {/* Right Column - Media Description (30%) */}
                  <div className="rounded-lg p-6 flex flex-col justify-start h-full overflow-y-auto mac-scrollbar md:col-span-3">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {currentMedia && currentMedia.title
                        ? currentMedia.title
                        : ""}
                    </h3>

                    {currentMedia && currentMedia.description ? (
                      <div className="space-y-4 justify-center">
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

            <div className="p-6 border-t border-white/20">
              <div className="text-white">
                <h2 className="text-2xl font-semibold mb-3">
                  {selectedItem.details.name}
                </h2>

                <p className="text-white/70 text-base mb-6">
                  {selectedItem.details.description}
                </p>
              </div>
            </div>

            {/* Full-width metadata footer */}
            <div className="mt-auto bg-black/30 p-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <div className="flex items-center">
                  <span className="text-white/60 mr-2">Date:</span>
                  <span className="font-medium">
                    {selectedItem.details.date}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="text-white/60 mr-2">Company:</span>
                  <span className="font-medium">
                    {selectedItem.details.client}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="text-white/60 mr-2">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.details.tags.map((tag, index) => {
                      // Generate different subtle colors based on tag content
                      const colors = [
                        "bg-blue-400/30",
                        "bg-purple-400/30",
                        "bg-teal-400/30",
                        "bg-indigo-400/30",
                        "bg-cyan-400/30",
                        "bg-emerald-400/30",
                        "bg-sky-400/30",
                        "bg-violet-400/30",
                        "bg-green-400/30",
                      ];

                      // Use the tag's hash to determine color (ensures same tag always gets same color)
                      const colorIndex =
                        Math.abs(
                          tag
                            .split("")
                            .reduce((acc, char) => acc + char.charCodeAt(0), 0)
                        ) % colors.length;

                      return (
                        <span
                          key={index}
                          className={`${colors[colorIndex]} px-3 py-1 rounded-full text-white/85 font-medium text-xs`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
