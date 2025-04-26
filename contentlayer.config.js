import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        author: { type: "string", required: true },
        slug: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/blogpost/${post.slug}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "data/posts",
    documentTypes: [Post],
});
