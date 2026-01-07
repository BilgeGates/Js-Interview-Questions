// Docsify Configuration
window.$docsify = {
  name: "JS Interview Questions",
  repo: "https://github.com/sudheerj/javascript-interview-questions",

  // Load files
  loadSidebar: true,
  loadNavbar: false,
  coverpage: true,
  onlyCover: false,

  // Navigation
  subMaxLevel: 3,
  auto2top: true,
  maxLevel: 4,

  // CRITICAL: Theme color
  themeColor: "#10b981",

  // Sidebar position
  hideSidebar: false,

  // Routing
  routerMode: "hash",
  relativePath: false,

  // Search plugin configuration
  search: {
    maxAge: 86400000, // 1 day cache
    paths: "auto",
    placeholder: "Search questions...",
    noData: "No results found",
    depth: 6,
    hideOtherSidebarContent: false,
  },

  // Copy code plugin configuration
  copyCode: {
    buttonText: "Copy",
    errorText: "Error",
    successText: "Copied!",
  },

  // Pagination plugin configuration
  pagination: {
    previousText: "← Previous",
    nextText: "Next →",
    crossChapter: true,
    crossChapterText: true,
  },

  // Footer configuration
  footer: {
    copy: '<span>Created by <a href="https://github.com/sudheerj" target="_blank">Sudheer Jonna</a> | Enhanced by <a href="https://github.com/BilgeGates" target="_blank">BilgeGates</a> &copy; 2024</span>',
    pre: "<hr/>",
    style:
      "text-align: center; font-size: 0.9em; color: var(--text-secondary); padding: 2rem 0;",
  },

  // Custom plugins
  plugins: [
    function (hook, vm) {
      // Fix content positioning on mount
      hook.mounted(function () {
        fixContentPosition();
      });

      // Initialize after ready
      hook.ready(function () {
        fixContentPosition();
        initializeCollapsible();
        lucide.createIcons();
      });

      // Initialize icons and collapsible after each page load
      hook.doneEach(function () {
        fixContentPosition();
        lucide.createIcons();
        initializeCollapsible();
      });

      // After each route change
      hook.afterEach(function (html, next) {
        next(html);
        setTimeout(() => {
          fixContentPosition();
        }, 50);
      });
    },
  ],
};

// Helper function to fix content positioning
function fixContentPosition() {
  const content = document.querySelector(".content");
  const sidebar = document.querySelector(".sidebar");

  if (content) {
    content.style.cssText = `
      position: relative !important;
      left: 0 !important;
      right: 0 !important;
      margin-left: 0 !important;
      padding-left: calc(280px + 40px) !important;
    `;
  }

  if (sidebar) {
    sidebar.style.cssText = `
      position: fixed !important;
      left: 0 !important;
      top: 0 !important;
      bottom: 0 !important;
      width: 280px !important;
      z-index: 100 !important;
    `;
  }

  // Also fix on window resize
  if (!window.contentFixAttached) {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        fixContentPosition();
      }
    });
    window.contentFixAttached = true;
  }
}
