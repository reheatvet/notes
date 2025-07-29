import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Twitter: "https://x.com/ReheatVet"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.RecentNotes({
      title: "latest note",
      limit: 1,
      showTags: false
    }
    )),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({
      title: "notes", // title of the explorer component
      folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
      useSavedState: false, // whether to use local storage to save "state" (which folders are opened) of explorer
      // omitted but shown later 
      // what order to apply functions in
      sortFn: (a, b) => {
        return a.displayName.localeCompare(b.displayName)
      },
      order: ["filter", "map", "sort"],
    })
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({
    spacerSymbol: "❯", // symbol between crumbs
    rootName: "Home", // name of first/root element
    resolveFrontmatterTitle: true, // whether to resolve folder names through frontmatter titles
    // hideOnRoot: true, // whether to hide breadcrumbs on root `index.md` page
    showCurrentPage: true, // whether to display the current page in the breadcrumbs
  }), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "notes", // title of the explorer component
      folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
      useSavedState: false, // whether to use local storage to save "state" (which folders are opened) of explorer
      // omitted but shown later 
      // what order to apply functions in
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [],
}
