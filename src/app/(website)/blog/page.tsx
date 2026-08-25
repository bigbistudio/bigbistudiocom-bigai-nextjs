import { notFound } from "next/navigation"
import { BlogListView } from "@/bigbistudio/pages/blog-list.view"
import { getAllBlogs } from "@/bigbistudio/lib/blog"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("blog")

export default async function BlogListPage() {
  const isDisabled = true;
  
  if (isDisabled) {
    notFound()
  }

  const allBlogs = await getAllBlogs()

  return <BlogListView blogs={allBlogs} />
}
