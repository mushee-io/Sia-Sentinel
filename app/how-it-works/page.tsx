import { Footer } from "@/components/Footer";
import { HowItWorksGrid } from "@/components/HowItWorksGrid";
import { NavBar } from "@/components/NavBar";

export default function HowItWorksPage() {
  return (
    <main className="pageShell">
      <NavBar />
      <section className="section" style={{ paddingTop: 42 }}>
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Methodology</div>
              <h1 className="sectionTitle">How the MVP is meant to work</h1>
              <p className="sectionText">
                The site is designed to present a credible grant-ready story: a strong landing page, a clear operational dashboard, transparent host scoring, and room to connect live Sia signals after the first polished release.
              </p>
            </div>
          </div>
          <HowItWorksGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
}
