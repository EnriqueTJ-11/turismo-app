export const extractPlanSlug = (value: string): string => {
  if (!value) return "";
  const hashIndex = value.lastIndexOf("#");
  if (hashIndex >= 0 && hashIndex < value.length - 1) {
    return value.slice(hashIndex + 1);
  }
  const parts = value.split("/");
  return parts[parts.length - 1] || value;
};

export const matchesPlanSlug = (id: string, slug: string): boolean =>
  extractPlanSlug(id) === slug;
