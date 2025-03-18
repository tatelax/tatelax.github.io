import { BlogPostItemsMap } from "@/types";
import { ecs } from "./posts/ecs";

export const blogPosts: BlogPostItemsMap = {
  [ecs.id]: ecs,
};
