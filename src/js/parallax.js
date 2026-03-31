import SimpleParallax from "simple-parallax-js/vanilla";

var image = document.getElementsByClassName("section-image-parallax");
new SimpleParallax(image, {
  delay: 1,
  scale: 1.6,
  transition: "cubic-bezier(0,0,0,1)",
});
