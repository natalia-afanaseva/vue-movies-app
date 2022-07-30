export const navLinks: {
  [key: string]: { link: string; name: string }[];
} = {
  isAuth: [
    { link: "/movies", name: "Movies" },
    { link: "/profile", name: "Profile" },
  ],
  notIsAuth: [{ link: "/movies", name: "Movies" }],
};
