import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { activeIncidents } from "@/lib/data";
import { incidentTone } from "@/lib/utils";

export default function IncidentsPage() {
  return (
    <main className="pageShell">
      <NavBar />
      <section className="section" style={{ paddingTop: 42 }}>
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Incident center</div>
              <h1 className="sectionTitle">What needs attention now</h1>
              <p className="sectionText">Sentinel flags downtime, degraded health, and software freshness issues so the network picture feels immediately actionable.</p>
            </div>
          </div>
          <div className="cardsGrid">
            {activeIncidents.map((incident) => (
              <div key={`${incident.hostId}-${incident.id}`} className="incidentCard">
                <div className="cardHeader">
                  <div>
                    <div className="smallCaps">{incident.hostName}</div>
                    <h2 className="cardTitle" style={{ marginTop: 10 }}>{incident.type}</h2>
                  </div>
                  <span className={incidentTone(incident.severity)}>{incident.severity}</span>
                </div>
                <div className="muted">{incident.address}</div>
                <p className="sectionText" style={{ marginTop: 16 }}>{incident.description}</p>
                <div className="pill">{incident.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
