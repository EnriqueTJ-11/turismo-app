import type { Metadata } from "next";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";

const title = "Amaturis | Pasarela segura de pagos turísticos";
const description =
  "Finaliza tu reserva en Amaturis con una pasarela de pagos segura, confirmación inmediata y soporte en caso de dudas. Protegemos tus datos y facilitamos transacciones transparentes para tu viaje.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6aB1OqFsG8iGytQuO0egF3B0bKBfpBOOPUgucjEZsQF_C29aXAs250nRCqTowYlR5YST7RoQ0sPNEiWUySv_-vOGT0bAwo-NJSckOjK8luPe6JV91KXnxy0g9tHbrY5bpSSdymFd6udL5qYgiCelDClo4xtYLod-BZwqGDsJhj7w8Zuvdhak-yA9F7Y0pvkzD2Bd4voVVI8J1yrI7y-jtkXRBvqBD50I1StK3NahD_YV2fo1ng7iW5FIWu2n7Cd-Ro7-oh6UNpJo";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Selva del Caquetá en Amaturis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function PasarelaPagosPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Pasarela de pagos segura para tu aventura
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
            Aquí podrás confirmar tu reserva y completar el pago de forma rápida
            y protegida. Amaturis prioriza la seguridad de tus datos y te entrega
            confirmaciones claras para que viajes con tranquilidad.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Si tienes preguntas sobre tu transacción o necesitas asistencia,
            nuestro equipo está listo para ayudarte en cada paso.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
