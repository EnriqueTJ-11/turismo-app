import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import SiteDetailHero from "@/components/features/sitios/organisms/SiteDetailHero";
import SiteDetailGallery from "@/components/features/sitios/organisms/SiteDetailGallery";
import SiteDetailVideo from "@/components/features/sitios/organisms/SiteDetailVideo";
import SiteDetailSidebar from "@/components/features/sitios/organisms/SiteDetailSidebar";
import SiteDetailRelatedPlans from "@/components/features/sitios/organisms/SiteDetailRelatedPlans";
import { getSiteDetail } from "@/services/siteDetail";

const SiteDetailTemplate = async () => {
  const site = await getSiteDetail();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <SiteDetailHero site={site} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Sobre el destino
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {site.description.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </section>
            <SiteDetailGallery images={site.galleryImages} />
            <SiteDetailVideo cover={site.videoCover} />
          </div>
          <SiteDetailSidebar site={site} />
        </div>
        <SiteDetailRelatedPlans />
      </main>
      <Footer />
    </div>
  );
};

export default SiteDetailTemplate;
