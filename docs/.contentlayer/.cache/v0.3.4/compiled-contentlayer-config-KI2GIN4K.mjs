// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `content/blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    coverImage: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    authorIcon: { type: "string" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `content/docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    date: { type: "date", required: true },
    subType: { type: "string" },
    category: { type: "string", required: true },
    tags: { type: "string", required: true },
    author: { type: "string" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "code" && node.data && node.data.meta) {
            node.properties.meta = node.data.meta;
          }
        });
      }
    ]
  }
});
export {
  Docs,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KI2GIN4K.mjs.map
