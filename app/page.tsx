import Link from "next/link";
import { Footer } from "@/components/Footer";
import { LogoRain } from "@/components/LogoRain";
import { NavBar } from "@/components/NavBar";
import { MetricCard } from "@/components/MetricCard";
import { networkSummary } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="pageShell">
      <LogoRain />
      <NavBar />

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCard">
            <div className="eyebrow">Reliability intelligence for the Sia network</div>
            <h1 className="heroTitle">
              Sia <span className="accentGreen">Sentinel</span>
              <br />
              sees what <span className="accentRed">breaks</span> before trust does.
            </h1>
            <p className="heroText">
              A reliability intelligence layer for the Sia ecosystem that turns host monitoring,
              scoring, incidents, and network visibility into a single clear interface.
            </p>
            <div className="heroActions">
              <Link href="/dashboard" className="buttonPrimary">Open Dashboard</Link>
              <Link href="/how-it-works" className="buttonGhost">How It Works</Link>
            </div>
          </div>

          <div className="heroSide heroCard">
            <div className="sideHeader">
              <div>
                <div className="smallCaps">Network pulse</div>
                <h2 style={{ margin: "10px 0 0", fontSize: 30 }}>{networkSummary.networkHeadline}</h2>
              </div>
              <span className="pill">{networkSummary.lastRefresh}</span>
            </div>
            <div className="gridMetrics">
              <MetricCard label="Hosts tracked" value={String(networkSummary.hostsTracked)} hint="Registry coverage" />
              <MetricCard label="Hosts online" value={String(networkSummary.hostsOnline)} hint="Currently reachable" />
              <MetricCard label="Average score" value={networkSummary.averageScore.toFixed(1)} hint="Network-wide trust" />
              <MetricCard label="Open incidents" value={String(networkSummary.openIncidents)} hint="Needs operator attention" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="smallCaps">What Sentinel shows</p>
              <h2 className="sectionTitle">Clear, reliable insight into the Sia network.</h2>
            </div>
          </div>
          <div className="cardsGrid">
            <div className="detailCard">
              <div className="eyebrow">Landing experience</div>
              <h3 className="cardTitle" style={{ marginTop: 18 }}>Cinematic first impression</h3>
              <p className="sectionText">The landing page sets the tone for Sentinel with a subtle animated background and a simple call to action that leads straight into the dashboard.</p>
            </div>
            <div className="detailCard">
              <div className="eyebrow">Operator intelligence</div>
              <h3 className="cardTitle" style={{ marginTop: 18 }}>Metrics that matter</h3>
              <p className="sectionText">Hosts are ranked by reliability score, health status, pricing posture, software freshness, and incident history so the product feels useful immediately.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
