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
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-crema px-4 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-6">Aurea</p>
        <h1 className="font-display text-6xl text-navy">404</h1>
        <p className="mt-4 text-navy/70">This page hasn't found its home yet.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-navy hover:text-gold"
        >
          ← Return home
        </Link>
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
    <div className="flex min-h-screen items-center justify-center bg-crema px-4 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-6">Aurea</p>
        <h1 className="font-display text-3xl text-navy">Something went quiet.</h1>
        <p className="mt-3 text-navy/70">The page didn't load. Try again.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-6 py-2.5 bg-navy text-crema text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-navy transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-2.5 border border-navy/20 text-[11px] uppercase tracking-[0.25em] hover:border-navy transition-colors"
          >
            Home
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
      { title: "Aurea — Tequila Puglia" },
      {
        name: "description",
        content:
          "Aurea is a premium tequila born where two sun-blessed lands meet — 100% blue agave crafted in Mexico, brought home to Puglia. Reposado, copper-distilled, rested in oak.",
      },
      { name: "author", content: "Aurea Tequila" },
      { property: "og:title", content: "Aurea — Tequila Puglia" },
      {
        property: "og:description",
        content:
          "Aurea is a premium tequila born where two sun-blessed lands meet — 100% blue agave crafted in Mexico, brought home to Puglia. Reposado, copper-distilled, rested in oak.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aurea Tequila" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f5efe4" },
      { name: "twitter:title", content: "Aurea — Tequila Puglia" },
      { name: "twitter:description", content: "Aurea is a premium tequila born where two sun-blessed lands meet — 100% blue agave crafted in Mexico, brought home to Puglia. Reposado, copper-distilled, rested in oak." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/04dcf0fa-c943-43cd-8423-9814e3124d0b/id-preview-1787fef6--1f2af0cb-525a-47da-b48f-0ffd4da33691.lovable.app-1784533953874.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/04dcf0fa-c943-43cd-8423-9814e3124d0b/id-preview-1787fef6--1f2af0cb-525a-47da-b48f-0ffd4da33691.lovable.app-1784533953874.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/aurea-favicon.svg?v=1" },
      { rel: "alternate icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png?v=1" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=1" },
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
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurea Tequila",
          description:
            "Premium tequila made in Mexico with 100% blue agave and imported to Puglia by three friends.",
          slogan: "Where the golden soul of Mexico meets the timeless light of Puglia.",
          founder: [
            { "@type": "Person", name: "Luigi Marinaro" },
            { "@type": "Person", name: "Romano Masiello" },
            { "@type": "Person", name: "Gigi Marinaro" },
          ],
          areaServed: ["IT", "MX"],
        }),
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
    <html lang="en">
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
      <I18nProvider>
        <div className="flex min-h-screen flex-col bg-crema">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <AgeGate />
      </I18nProvider>
    </QueryClientProvider>
  );
}
