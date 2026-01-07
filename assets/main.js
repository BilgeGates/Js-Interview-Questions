// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initializeDarkMode();
  initializePaletteSelector();
  initializeBackToTop();
  lucide.createIcons();
});

/**
 * Dark Mode Toggle
 */
function initializeDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  const icon = document.getElementById("themeIcon");
  const saved = localStorage.getItem("theme");

  // Load saved theme
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    icon.setAttribute("data-lucide", "sun");
  }

  // Toggle dark mode on click
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    icon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    lucide.createIcons();
  });

  lucide.createIcons();
}

/**
 * Theme Color Palette Selector
 */
function initializePaletteSelector() {
  const toggle = document.getElementById("paletteToggle");
  const selector = document.getElementById("paletteSelector");
  const buttons = document.querySelectorAll(".palette-button");
  const saved = localStorage.getItem("themeColor") || "green";

  // Load saved color theme
  document.body.className =
    document.body.className.replace(/theme-\w+/, "") + ` theme-${saved}`;
  buttons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.theme === saved)
  );

  // Toggle palette selector visibility
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    selector.classList.toggle("show");
  });

  // Close palette selector when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !selector.contains(e.target)) {
      selector.classList.remove("show");
    }
  });

  // Change theme color on button click
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      document.body.className =
        document.body.className.replace(/theme-\w+/, "") + ` theme-${theme}`;
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      localStorage.setItem("themeColor", theme);
    });
  });
}

/**
 * Collapsible Sidebar Navigation - Accordion Style
 * Only one section open at a time
 */
function initializeCollapsible() {
  setTimeout(() => {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;

    const sidebarNav = sidebar.querySelector(".sidebar-nav");
    if (!sidebarNav) return;

    // Get all top-level collapse items
    const collapseItems = sidebarNav.querySelectorAll(":scope > ul > li");

    collapseItems.forEach((item) => {
      const directLink = item.querySelector(":scope > a");
      const subList = item.querySelector(":scope > ul");

      // Only process items that have sub-lists
      if (subList && directLink) {
        item.classList.add("collapse");

        // Remove all existing event listeners by cloning
        const newLink = directLink.cloneNode(true);
        directLink.parentNode.replaceChild(newLink, directLink);

        // Add click handler for accordion behavior
        newLink.addEventListener("click", (e) => {
          const href = newLink.getAttribute("href");

          // Always prevent default for collapse headers
          e.preventDefault();
          e.stopPropagation();

          const wasOpen = item.classList.contains("open");

          // Close ALL other collapse items (accordion effect)
          collapseItems.forEach((otherItem) => {
            if (
              otherItem !== item &&
              otherItem.classList.contains("collapse")
            ) {
              otherItem.classList.remove("open");
            }
          });

          // Toggle current item
          item.classList.toggle("open", !wasOpen);
        });

        // Handle nested sub-items clicks (they should navigate)
        const subLinks = subList.querySelectorAll("a");
        subLinks.forEach((subLink) => {
          // Clone to remove old listeners
          const newSubLink = subLink.cloneNode(true);
          subLink.parentNode.replaceChild(newSubLink, subLink);

          newSubLink.addEventListener("click", (e) => {
            e.stopPropagation(); // Don't trigger parent collapse
            // Let Docsify handle the navigation

            // Update active states
            subLinks.forEach((link) => {
              link.parentElement.classList.remove("active");
            });
            newSubLink.parentElement.classList.add("active");
          });
        });
      }
    });

    // Auto-open first section on load if none are open
    if (!sidebarNav.querySelector(":scope > ul > li.collapse.open")) {
      const firstCollapse = sidebarNav.querySelector(
        ":scope > ul > li.collapse"
      );
      if (firstCollapse) {
        firstCollapse.classList.add("open");
      }
    }
  }, 150);
}

/**
 * Back to Top Button & Progress Bar
 */
function initializeBackToTop() {
  const backToTop = document.getElementById("backToTop");
  const progressBar = document.getElementById("progressBar");

  if (!backToTop || !progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide back to top button
    if (scrollTop > 400) {
      backToTop.classList.add("show");
      backToTop.style.display = "flex";
    } else {
      backToTop.classList.remove("show");
      setTimeout(() => {
        if (!backToTop.classList.contains("show")) {
          backToTop.style.display = "none";
        }
      }, 300);
    }

    // Update progress bar
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = scrollPercent + "%";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
