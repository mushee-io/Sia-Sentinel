const items = [
  {
    title: "Discover hosts",
    text: "Sentinel maintains a host registry and enriches each node with network metadata, pricing snapshots, and protocol visibility."
  },
  {
    title: "Monitor reliability",
    text: "Scheduled health checks feed uptime, latency, and incident signals into the system so the dashboard reflects live operational quality."
  },
  {
    title: "Score trust",
    text: "Every host receives a transparent score driven by uptime, latency, software freshness, price stability, and incident penalties."
  }
];

export function HowItWorksGrid() {
  return (
    <div className="cardsGrid">
      {items.map((item) => (
        <div key={item.title} className="detailCard">
          <div className="eyebrow">{item.title}</div>
          <h3 className="cardTitle" style={{ marginTop: 18 }}>{item.title}</h3>
          <p className="sectionText" style={{ marginBottom: 0 }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
