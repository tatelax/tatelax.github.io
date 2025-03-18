import { BlogPostItemsMap } from "@/types";
import { ecs } from "./posts/ecs";
import { unityToUnreal } from "./posts/unityToUnreal";
import { markdownEverywhere } from "./posts/useMarkdown";
import { unityCICD } from "./posts/unityCiCd";
import { arAnotherLook } from "./posts/arAnotherLook";

export const blogPosts: BlogPostItemsMap = {
  [markdownEverywhere.id]: markdownEverywhere,
  [unityCICD.id]: unityCICD,
  [ecs.id]: ecs,
  [arAnotherLook.id]: arAnotherLook,
  [unityToUnreal.id]: unityToUnreal,
};
