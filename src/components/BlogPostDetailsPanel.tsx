import { BlogPostDetailsPanelProps } from "@/types";
import { Calendar, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const BlogPostDetailsPanel: React.FC<BlogPostDetailsPanelProps> = ({
  selectedBlogPost,
}) => {
  return (
    <div className="w-full md:w-5/12 lg:w-7/12 xl:w-3/5 2xl:w-2/3 bg-white/7 backdrop-blur-md overflow-y-auto flex flex-col h-full mac-scrollbar">
      <div className="h-full flex flex-col">
        {selectedBlogPost && (
          <>
            {/* Blog post content area */}
            <div className="flex-1 p-8 flex flex-col h-full overflow-y-auto">
              {/* Blog post header */}
              <h1 className="text-3xl font-bold text-white mb-4">
                {selectedBlogPost.title}
              </h1>

              <div className="flex items-center text-white/70 space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{selectedBlogPost.date}</span>
                </div>

                {selectedBlogPost.author && (
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{selectedBlogPost.author}</span>
                  </div>
                )}
              </div>

              {/* Blog post content */}
              <div className="markdown">
                <ReactMarkdown>{selectedBlogPost.content}</ReactMarkdown>
              </div>
            </div>

            {/* Tags footer */}
            {selectedBlogPost.tags && selectedBlogPost.tags.length > 0 && (
              <div className="mt-auto bg-black/30 p-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedBlogPost.tags.map((tag, index) => {
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
            )}
          </>
        )}
      </div>
    </div>
  );
};
