"use client";

import React from "react";
import { getPlanCatalog } from "@/services/planCatalog";
import PlansExplorer from "@/components/features/planes/organisms/PlansExplorer";
import { type PlanCatalogItem } from "@/types/planCatalog";

const PlansGrid: React.FC = () => {
  const [plans, setPlans] = React.useState<PlanCatalogItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    getPlanCatalog()
      .then((data) => {
        if (isMounted) {
          setPlans(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPlans([]);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-slate-500 text-sm">
        Cargando planes disponibles...
      </div>
    );
  }

  return <PlansExplorer initialPlans={plans} />;
};

export default PlansGrid;
