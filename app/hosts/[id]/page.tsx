import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { getHost } from "@/lib/data";
import { incidentTone, statusTone } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HostDetailPage({ params }: Props) {
  const { id } = await params;
  const host = getHost(id);

  if (!host) notFound();

  return (
    <main className="pageShell">
      <NavBar />
      <section className="section" style={{ paddingTop: 42 }}>
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Host profile</div>
              <h1 className="sectionTitle">{host.name}</h1>
              <p className="sectionText">{host.hostKey} · {host.address} · {host.region}</p>
            </div>
            <span className={statusTone(host.status)}>{host.status}</span>
          </div>

          <div className="inlineGrid">
            <div className="statMini"><div className="muted">Reliability score</div><strong>{host.score.toFixed(1)}</strong></div>
            <div className="statMini"><div className="muted">7d uptime</div><strong>{host.uptime7d}%</strong></div>
            <div className="statMini"><div className="muted">Avg latency</div><strong>{host.avgLatencyMs} ms</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardsGrid">
          <div className="detailCard">
            <div className="smallCaps">Score reasoning</div>
            <h2 className="cardTitle" style={{ marginTop: 10 }}>Why this host looks the way it does</h2>
            <div className="notes">
              {host.notes.map((note) => (
                <div key={note} className="note">{note}</div>
              ))}
            </div>
            <div className="inlineGrid" style={{ marginTop: 18 }}>
              <div className="statMini"><div className="muted">Storage price</div><strong style={{ fontSize: 22 }}>{host.storagePrice}</strong></div>
              <div className="statMini"><div className="muted">Upload</div><strong style={{ fontSize: 22 }}>{host.uploadPrice}</strong></div>
              <div className="statMini"><div className="muted">Download</div><strong style={{ fontSize: 22 }}>{host.downloadPrice}</strong></div>
            </div>
          </div>

          <div className="detailCard">
            <div className="smallCaps">Performance history</div>
            <h2 className="cardTitle" style={{ marginTop: 10 }}>Uptime</h2>
            <div className="sparkline">
              {host.checks.map((check) => (
                <div className="barWrap" key={check.day}>
                  <div className="bar" style={{ height: `${Math.max(check.uptime, 12)}%` }} />
                  <div className="barLabel">{check.day}</div>
                </div>
              ))}
            </div>
            <h2 className="cardTitle" style={{ marginTop: 22 }}>Latency</h2>
            <div className="sparkline">
              {host.checks.map((check) => (
                <div className="barWrap" key={`${check.day}-latency`}>
                  <div className="barLatency" style={{ height: `${Math.max(check.latency / 5, 12)}px` }} />
                  <div className="barLabel">{check.day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detailCard">
          <div className="cardHeader">
            <div>
              <div className="smallCaps">Incidents</div>
              <h2 className="cardTitle">Operational history</h2>
            </div>
          </div>
          {host.incidents.length === 0 ? (
            <div className="note">No active or recently tracked incidents for this host.</div>
          ) : (
            host.incidents.map((incident) => (
              <div key={incident.id} className="note" style={{ marginTop: 12 }}>
                <div className="cardHeader" style={{ marginBottom: 8 }}>
                  <div>
                    <strong>{incident.type}</strong>
                    <div className="muted" style={{ marginTop: 6 }}>{incident.time}</div>
                  </div>
                  <span className={incidentTone(incident.severity)}>{incident.status}</span>
                </div>
                <div className="muted">{incident.description}</div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
