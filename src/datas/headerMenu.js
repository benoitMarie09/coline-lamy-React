export const headerMenu = {
  menuItems: [
    { key: 0, label: "Accueil", slug: "/" },
    { key: 1, label: "Tableaux", slug: "/tableaux" },
    { key: 2, label: "Videos", slug: "/illustrations" },
    { key: 2, label: "Divers", slug: "/divers" },
    { key: 3, label: "Biographie", slug: "/" },
    { key: 4, label: "Contacts", slug: "/" },
  ],
  getHeaderMenu: () => headerMenu.menuItems,
};
