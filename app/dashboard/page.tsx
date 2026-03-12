import { Footer } from "@/components/Footer";
import { HostTable } from "@/components/HostTable";
import { NavBar } from "@/components/NavBar";
import { MetricCard } from "@/components/MetricCard";
import { activeIncidents, hosts, networkSummary } from "@/lib/data";
import { incidentTone, statusTone } from "@/lib/utils";

const topHosts = hosts.slice(0, 2);

export default function DashboardPage() {
  return (
    <main className="pageShell">
      <NavBar />
      <section className="section" style={{ paddingTop: 42 }}>
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Dashboard</div>
              <h1 className="sectionTitle">Host reliability overview</h1>
              <p className="sectionText">
                This MVP demonstrates the core Sentinel story: discover hosts, monitor them, score them, and surface incidents in a polished operational interface.
              </p>
            </div>
            <span className="pill">{networkSummary.lastRefresh}</span>
          </div>

          <div className="dashboardTop">
            <MetricCard label="Hosts tracked" value={String(networkSummary.hostsTracked)} hint="Visible in registry" />
            <MetricCard label="Hosts online" value={String(networkSummary.hostsOnline)} hint="Passing recent checks" />
            <MetricCard label="Online ratio" value={`${networkSummary.onlineRatio}%`} hint="Network-wide availability" />
            <MetricCard label="Open incidents" value={String(networkSummary.openIncidents)} hint="Unresolved issues" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="smallCaps">Leaderboard</div>
              <h2 className="sectionTitle">Sorted by trust score</h2>
            </div>
          </div>
          <HostTable />
        </div>
      </section>

      <section className="section">
        <div className="container cardsGrid">
          <div className="hostCard">
            <div className="cardHeader">
              <div>
                <div className="smallCaps">Top monitored hosts</div>
                <h3 className="cardTitle">High-confidence operators</h3>
              </div>
            </div>
            {topHosts.map((host) => (
              <div key={host.id} className="note" style={{ marginTop: 12 }}>
                <div className="cardHeader" style={{ marginBottom: 8 }}>
                  <div>
                    <strong>{host.name}</strong>
                    <div className="muted" style={{ marginTop: 6 }}>{host.address}</div>
                  </div>
                  <span className={statusTone(host.status)}>{host.status}</span>
                </div>
                <div className="inlineGrid">
                  <div className="statMini"><div className="muted">Score</div><strong>{host.score.toFixed(1)}</strong></div>
                  <div className="statMini"><div className="muted">7d uptime</div><strong>{host.uptime7d}%</strong></div>
                  <div className="statMini"><div className="muted">Latency</div><strong>{host.avgLatencyMs} ms</strong></div>
                </div>
              </div>
            ))}
          </div>

          <div className="incidentCard">
            <div className="cardHeader">
              <div>
                <div className="smallCaps">Incident feed</div>
                <h3 className="cardTitle">Live operator attention</h3>
              </div>
            </div>
            {activeIncidents.slice(0, 4).map((incident) => (
              <div key={incident.id} className="note" style={{ marginTop: 12 }}>
                <div className="cardHeader" style={{ marginBottom: 8 }}>
                  <div>
                    <strong>{incident.type}</strong>
                    <div className="muted" style={{ marginTop: 6 }}>{incident.hostName} · {incident.address}</div>
                  </div>
                  <span className={incidentTone(incident.severity)}>{incident.severity}</span>
                </div>
                <div className="muted">{incident.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
