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
              <h1 className="sectionTitle">How Sia Sentinel Works</h1>
              <p className="sectionText">
                Sia Sentinel provides a clear operational view of the Sia network. It discovers hosts, monitors reliability signals such as uptime and latency, and produces transparent trust scores so developers and operators can quickly understand network health.
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
