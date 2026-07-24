import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import { AureaLogo } from "./AureaLogo";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-navy/10 bg-crema">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6 max-w-md">
            <AureaLogo className="w-64 md:w-80 h-auto" loading="lazy" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-navy/50 leading-loose">
              {t("footer.tagline")}
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Hecho en México · Imported to Puglia
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-4">
              <p className="eyebrow">{t("footer.nav")}</p>
              <ul className="space-y-2 text-sm text-navy/80">
                <li>
                  <Link to="/story" className="hover:text-gold transition-colors">
                    {t("nav.story")}
                  </Link>
                </li>
                <li>
                  <Link to="/expression" className="hover:text-gold transition-colors">
                    {t("nav.expression")}
                  </Link>
                </li>
                <li>
                  <Link to="/craft" className="hover:text-gold transition-colors">
                    {t("nav.craft")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="eyebrow">{t("footer.connect")}</p>
              <ul className="space-y-2 text-sm text-navy/80">
                <li>
                  <Link to="/contact" className="hover:text-gold transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
                <li>
                  <Link to="/legal/privacy" className="hover:text-gold transition-colors">
                    {t("footer.legal.privacy")}
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="hover:text-gold transition-colors">
                    {t("footer.legal.terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-navy/10 gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-navy/40">
            {t("footer.rights")}
          </span>
          <div className="px-4 py-1.5 border border-navy/20 rounded-full text-[9px] font-semibold tracking-[0.3em] text-navy/70 uppercase">
            {t("footer.responsible")}
          </div>
        </div>
      </div>
    </footer>
  );
}
