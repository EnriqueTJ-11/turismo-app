import { getPlanCatalog } from "@/services/planCatalog";
import PlansGridClient from "@/components/features/planes/organisms/PlansGridClient";

const PlansGrid = async () => {
  const plans = await getPlanCatalog();
  const total = 12;

  return <PlansGridClient initialPlans={plans} total={total} />;
};

export default PlansGrid;
