import type { Metadata } from "next";
import { AllyRegistrationTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Registro de aliados",
  description:
    "Solicita tu registro como agencia, prestador o comunidad local en Amaturis.",
};

export default function RegistroAgentePage() {
  return <AllyRegistrationTemplate />;
}
