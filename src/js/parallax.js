import SimpleParallax from "simple-parallax-js/vanilla";

var image = document.getElementsByClassName("parallax");
var slowParallax = document.getElementsByClassName("slow-parallax");
var fastParallax = document.getElementsByClassName("fast-parallax");

function parallaxCustom(
  nameItem,
  delayItem,
  ScaleItem,
  transitionItem,
  overflowItem,
) {
  if (nameItem.length) {
    new SimpleParallax(nameItem, {
      delay: delayItem,
      scale: ScaleItem,
      transition: transitionItem,
      overflow: overflowItem,
    });
  }
}

parallaxCustom(image, 0, 1.6, "cubic-bezier(0,0,0,1)", false);
parallaxCustom(slowParallax, 0, 1.2, "linear", true);
parallaxCustom(fastParallax, 0, 2, "linear", true);
