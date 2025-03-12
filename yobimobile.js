function openGallery(url) {
    if (!window.matchMedia("(hover: hover)").matches) {
      // If it's a mobile device (no hover), open the gallery page
      window.location.href = url;
    }
  }
  