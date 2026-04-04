import type { Metadata } from "next";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";

const title = "Amaturis | Conoce nuestra misión en Caquetá";
const description =
  "Amaturis conecta viajeros con planes responsables en Caquetá, promoviendo conservación, cultura local y experiencias seguras en la Amazonía colombiana con guías expertos y aliados comunitarios.";
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
        alt: "Paisaje amazónico en Caquetá",
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

export default function AcercaDePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Amaturis, turismo responsable en el corazón del Caquetá
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
            Somos una plataforma que conecta viajeros con planes auténticos en
            la Amazonía colombiana. Nuestro propósito es impulsar experiencias
            seguras, sostenibles y respetuosas con las comunidades y los
            ecosistemas del Caquetá.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Trabajamos con guías locales y aliados comunitarios para ofrecer
            rutas de aventura, cultura y naturaleza que protegen la biodiversidad
            y generan bienestar en la región.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
