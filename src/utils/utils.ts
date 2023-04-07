export const openNewTab = (link: string) => {
  const w = window.open("about:blank");
  if (w) {
    w.location.href = link;
  }
};
