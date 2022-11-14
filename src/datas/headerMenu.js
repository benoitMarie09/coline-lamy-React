export const headerMenu = {
  menuItems: [
    { key: 0, class: "first", label: "Accueil", slug: "/" },
    { key: 1, class: "second", label: "Tableaux", slug: "/tableaux" },
    { key: 2, class: "third", label: "Videos", slug: "/illustrations" },
    { key: 2, class: "fourth", label: "Divers", slug: "/divers" },
    { key: 3, class: "fifth", label: "Biographie", slug: "/" },
    { key: 4, class: "sixth", label: "Contacts", slug: "/" },
  ],
  getHeaderMenu: () => headerMenu.menuItems,
};
