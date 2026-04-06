"use client";

import React from "react";
import SitesFilters from "@/components/features/sitios/organisms/SitesFilters";
import SitesGrid from "@/components/features/sitios/organisms/SitesGrid";
import PlansPagination from "@/components/features/planes/organisms/PlansPagination";
import { getSiteCatalog, getSiteFilters } from "@/services/siteCatalog";
import { type SiteCatalogItem } from "@/types/siteCatalog";
import { type SiteFilterOptions } from "@/types/siteFilters";

const normalizeToken = (value: string) => value.trim().toLowerCase();

const PAGE_SIZE = 12;

const defaultCapacityOptions = [
  { key: "1-10", label: "1-10 personas", min: 1, max: 10 },
  { key: "11-30", label: "11-30 personas", min: 11, max: 30 },
  { key: "31-50", label: "31-50 personas", min: 31, max: 50 },
  { key: "50+", label: "Más de 50", min: 51, max: Number.POSITIVE_INFINITY },
];

const SitesExplorer: React.FC = () => {
  const [sites, setSites] = React.useState<SiteCatalogItem[]>([]);
  const [filterOptions, setFilterOptions] = React.useState<SiteFilterOptions>({
    types: [],
    municipalities: [],
  });
  const [searchValue, setSearchValue] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");
  const [selectedMunicipality, setSelectedMunicipality] = React.useState("");
  const [selectedCapacity, setSelectedCapacity] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("popularidad");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    const loadData = async () => {
      setIsLoading(true);
      const [catalog, filters] = await Promise.all([
        getSiteCatalog(),
        getSiteFilters(),
      ]);
      if (!active) return;
      setSites(catalog);
      setFilterOptions(filters);
      setIsLoading(false);
    };
    loadData();
    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchValue]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedType, selectedMunicipality, selectedCapacity, sortOrder]);

  const capacityOptions = React.useMemo(() => {
    if (filterOptions.capacityMin == null || filterOptions.capacityMax == null) {
      return defaultCapacityOptions;
    }
    return defaultCapacityOptions;
  }, [filterOptions.capacityMin, filterOptions.capacityMax]);

  const filteredSites = React.useMemo(() => {
    const query = normalizeToken(debouncedSearch);
    const typeToken = normalizeToken(selectedType);
    const municipalityToken = normalizeToken(selectedMunicipality);
    const capacityRange = capacityOptions.find(
      (option) => option.key === selectedCapacity,
    );

    return sites.filter((site) => {
      if (query) {
        const name = normalizeToken(site.name);
        const description = normalizeToken(site.description);
        const location = normalizeToken(site.location);
        if (
          !name.includes(query) &&
          !description.includes(query) &&
          !location.includes(query)
        ) {
          return false;
        }
      }

      if (typeToken) {
        const types = (site.types ?? [site.type]).map(normalizeToken);
        if (!types.includes(typeToken)) {
          return false;
        }
      }

      if (municipalityToken) {
        const municipality = normalizeToken(site.municipality ?? "");
        const location = normalizeToken(site.location);
        if (!municipality.includes(municipalityToken) && !location.includes(municipalityToken)) {
          return false;
        }
      }

      if (capacityRange) {
        const capacity = site.capacityValue ?? 0;
        if (capacity < capacityRange.min || capacity > capacityRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [
    sites,
    debouncedSearch,
    selectedType,
    selectedMunicipality,
    selectedCapacity,
    capacityOptions,
  ]);

  const sortedSites = React.useMemo(() => {
    const sorted = [...filteredSites];
    if (sortOrder === "capacidad") {
      sorted.sort(
        (a, b) => (b.capacityValue ?? 0) - (a.capacityValue ?? 0),
      );
      return sorted;
    }
    if (sortOrder === "nombre") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      return sorted;
    }
    sorted.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    return sorted;
  }, [filteredSites, sortOrder]);

  const totalSites = sortedSites.length;
  const totalPages = Math.max(1, Math.ceil(totalSites / PAGE_SIZE));
  const clampedPage = Math.min(currentPage, totalPages);
  const paginatedSites = sortedSites.slice(
    (clampedPage - 1) * PAGE_SIZE,
    clampedPage * PAGE_SIZE,
  );
  const rangeStart = totalSites === 0 ? 0 : (clampedPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(totalSites, clampedPage * PAGE_SIZE);

  return (
    <>
      <SitesFilters
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        types={filterOptions.types}
        municipalities={filterOptions.municipalities}
        selectedType={selectedType}
        selectedMunicipality={selectedMunicipality}
        selectedCapacity={selectedCapacity}
        capacityOptions={capacityOptions}
        sortOrder={sortOrder}
        onTypeChange={setSelectedType}
        onMunicipalityChange={setSelectedMunicipality}
        onCapacityChange={setSelectedCapacity}
        onSortChange={setSortOrder}
        isLoading={isLoading}
      />
      <SitesGrid
        sites={paginatedSites}
        total={totalSites}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        isLoading={isLoading}
      />
      <PlansPagination
        currentPage={clampedPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default SitesExplorer;
