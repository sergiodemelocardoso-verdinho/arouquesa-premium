import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import "@/i18n";
import { SITE } from "@/lib/site";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description:
    "Restaurante de fine-dining em Repeses, Viseu, especialista na confeção de carne Arouquesa D.O.P. sobre a brasa.",
  servesCuisine: ["Portuguese", "Arouquesa Beef DOP", "Steakhouse"],
  priceRange: SITE.priceRange,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    postalCode: SITE.address.postalCode,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:15",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "19:15",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:15",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "19:15",
      closes: "22:30",
    },
  ],
  sameAs: [SITE.facebook],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-5xl text-bone mt-4">Página não encontrada</h1>
        <p className="mt-4 text-bone/60">A página que procura não existe ou foi movida.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold text-charcoal px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-gold-soft transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-bone">Algo correu menos bem</h1>
        <p className="mt-3 text-sm text-bone/60">Pode tentar novamente ou voltar à página inicial.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-gold text-charcoal px-5 py-2.5 text-xs tracking-[0.22em] uppercase hover:bg-gold-soft transition-colors"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-gold/40 text-gold px-5 py-2.5 text-xs tracking-[0.22em] uppercase hover:bg-gold/5 transition-colors"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Casa Arouquesa · Restaurante de carne Arouquesa D.O.P. em Viseu" },
      {
        name: "description",
        content:
          "Em Repeses, Viseu, a Casa Arouquesa celebra a autêntica carne Arouquesa D.O.P. sobre a brasa. Cozinha de terroir, garrafeira do Dão e sala privada para grupos.",
      },
      { name: "author", content: "Casa Arouquesa" },
      { name: "theme-color", content: "#1a1412" },
      { property: "og:site_name", content: "Casa Arouquesa" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </QueryClientProvider>
  );
}
