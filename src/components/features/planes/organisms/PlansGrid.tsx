import { getPlanCatalog } from "@/services/planCatalog";
import PlansExplorer from "@/components/features/planes/organisms/PlansExplorer";

const PlansGrid = async () => {
  const plans = await getPlanCatalog();
  return <PlansExplorer initialPlans={plans} />;
};

export default PlansGrid;
