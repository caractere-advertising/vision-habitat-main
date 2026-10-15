/* Sélecteur de sections du builder en grille (cf. includes/acf-layout-picker.php)
 *
 * ACF construit son popup "Ajouter une ligne" à partir du template
 * <script class="tmpl-popup"> rendu par le champ. On enrichit ce template
 * (miniature + nom + recherche) : ACF garde la main sur l'ajout des layouts,
 * les min/max et le compteur "requis".
 */
(function ($) {
  if (typeof acf === "undefined" || !window.vhLayoutPicker) return;

  const { fieldKey, thumbs, i18n } = window.vhLayoutPicker;

  const normalize = (str) =>
    str
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim();

  function enhanceTemplate(field) {
    const $tmpl = field.$el.find(".tmpl-popup").last();
    if (!$tmpl.length || $tmpl.data("vhEnhanced")) return;

    const $ul = $("<div>").html($tmpl.html()).children("ul");
    if (!$ul.length) return;

    $ul.addClass("vh-layout-grid");

    $ul.find("a[data-layout]").each(function () {
      const $a = $(this);
      const label = $a.text().trim();
      const thumb = thumbs[$a.data("layout")];

      const $media = thumb
        ? $('<span class="vh-layout-thumb">').append(
            $("<img>", { src: thumb, alt: "", loading: "lazy" }),
          )
        : $('<span class="vh-layout-thumb vh-layout-thumb--empty">').text(
            label.charAt(0),
          );

      $a.attr("data-search", normalize(label))
        .empty()
        .append($media, $('<span class="vh-layout-label">').text(label));
    });

    const $picker = $('<div class="vh-layout-picker">').append(
      $('<div class="vh-layout-picker__head">').append(
        $('<strong class="vh-layout-picker__title">').text(i18n.title),
        $('<input type="search" class="vh-layout-search">').attr(
          "placeholder",
          i18n.search,
        ),
        $('<a href="#" class="vh-layout-close" data-event="cancel">')
          .attr("aria-label", i18n.close)
          .html("&times;"),
      ),
      $ul,
      $('<p class="vh-layout-empty" hidden>').text(i18n.noResults),
    );

    $tmpl.html($picker.prop("outerHTML"));
    $tmpl.data("vhEnhanced", true);
  }

  acf.addAction("ready_field/key=" + fieldKey, enhanceTemplate);
  acf.addAction("append_field/key=" + fieldKey, enhanceTemplate);

  // ACF ferme le popup dès qu'un clic atteint le document : on bloque
  // la propagation dans le popup, sauf pour les tuiles et le bouton fermer
  // (gérés par ACF, qui stoppe lui-même la propagation)
  function bindPopup(popup) {
    const $popup = $(popup);

    $popup.on("click", (e) => {
      if (!$(e.target).closest("[data-layout], [data-event]").length) {
        e.stopPropagation();
      }
    });

    $popup.find(".vh-layout-search").trigger("focus");
    document.body.classList.add("vh-layout-picker-open");
  }

  new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.querySelector(".vh-layout-picker")) {
          bindPopup(node);
        }
      });
      m.removedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.querySelector(".vh-layout-picker")) {
          document.body.classList.remove("vh-layout-picker-open");
        }
      });
    });
  }).observe(document.body, { childList: true });

  // Recherche (insensible aux accents)
  $(document).on("input", ".vh-layout-search", function () {
    const q = normalize(this.value);
    const $picker = $(this).closest(".vh-layout-picker");
    let visible = 0;

    $picker.find(".vh-layout-grid > li").each(function () {
      const match = !q || $(this).find("[data-search]").data("search").includes(q);
      this.hidden = !match;
      if (match) visible++;
    });

    $picker.find(".vh-layout-empty").prop("hidden", visible > 0);
  });

  // Entrée = 1er résultat, Échap = fermer
  $(document).on("keydown", ".vh-layout-search", function (e) {
    const $picker = $(this).closest(".vh-layout-picker");

    if (e.key === "Enter") {
      e.preventDefault();
      $picker.find(".vh-layout-grid > li:not([hidden]) a:not(.disabled)").first().trigger("click");
    }
  });

  $(document).on("keydown", (e) => {
    if (e.key === "Escape") {
      $(".acf-fc-popup .vh-layout-close").trigger("click");
    }
  });
})(jQuery);
