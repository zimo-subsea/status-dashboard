window.addEventListener("load", () => {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default"
    });
  }
});
