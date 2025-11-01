export const menuItems = [
  {
    name: "Collection",
    panel: {
      colums: [
        {
          title: "Category",
          items: [
            { label: "Shop All", path: "collection/all" },
            { label: "Blouses & Top", path: "collection/blouses" },
            { label: "Pants", path: "collection/pants" },
            { label: "Dresses & Jumpsuits", path: "collection/dresses" },
            { label: "Outwear & Jackets ", path: "collection/outwear" },
            { label: "Pullovers", path: "collection/pullovers" },
            { label: "Tees", path: "collection/tees" },
            { label: "Shorts & Skirts", path: "collection/shourts" },
          ],
        },
        {
          title: "Featured",
          items: [
            { label: "New", path: "collection/new" },
            { label: "Modiweek", path: "collection/modiweek" },
            { label: "Plus Size", path: "collection/plus" },
            { label: "Best Seller", path: "collection/best" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Bundles", path: "collection/bundles" },
            { label: "Occasion Wear", path: "collection/occasion" },
            { label: "Matching Set", path: "collection/matching" },
            { label: "Suiting", path: "collection/suiting" },
          ],
        },
      ],
      images: [
        { href: "", caption: "Bundles", path: "collection/bundles" },
        { href: "", caption: "Plus Size", path: "collection/plus" },
      ],
    },
  },
  {
    name: "New In",
    panel: {
      colums: [
        {
          title: "Category",
          items: [
            { label: "Shop All", path: "newIn/all" },
            { label: "Blouses & Top", path: "newIn/blouses" },
            { label: "Pants", path: "newIn/pants" },
            { label: "Dresses & Jumpsuits", path: "newIn/dresses" },
            { label: "Outwear & Jackets ", path: "newIn/outwear" },
            { label: "Pullovers", path: "newIn/pullovers" },
            { label: "Tees", path: "newIn/tees" },
            { label: "Shorts & Skirts", path: "newIn/shourts" },
          ],
        },
        {
          title: "Trending",
          items: [
            { label: "Plus Size", path: "newIn/plus" },
            { label: "Fall Collection", path: "newIn/fall" },
            { label: "Modiweek", path: "newIn/modiweek" },
          ],
        },
      ],
      images: [
        { href: "", caption: "Fall Collection", path: "newIn/fall" },
        { href: "", caption: "Blouses", path: "newIn/blouses" },
        { href: "", caption: "Dresses", path: "newIn/dresses" },
      ],
    },
  },
  {
    name: "Modiweek",
    panel: {},
  },
  {
    name: "Plus Size",
    panel: {},
  },
  {
    name: "Sustainability",
    panel: {
      colums: [
        {
          title: "Sustainability",
          items: [
            { label: "Mission", path: "sustainability/mission" },
            { label: "Processing", path: "sustainability/processing" },
            { label: "Materials", path: "sustainability/materials" },
            { label: "Packaging", path: "sustainability/packaging" },
            { label: "Product Care", path: "sustainability/care" },
            { label: "Our Suppliers", path: "sustainability/suppliers" },
          ],
        },
      ],
      images: [
        { href: "", caption: "", path: "" },
        { href: "", caption: "", path: "" },
      ],
    },
  },
];
