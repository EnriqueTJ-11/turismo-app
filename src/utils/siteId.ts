export const extractSiteSlug = (value: string): string => {
  if (!value) return "";
  const hashIndex = value.lastIndexOf("#");
  if (hashIndex >= 0 && hashIndex < value.length - 1) {
    return value.slice(hashIndex + 1);
  }
  const parts = value.split("/");
  return parts[parts.length - 1] || value;
};

export const matchesSiteSlug = (id: string, slug: string): boolean =>
  extractSiteSlug(id) === slug;
