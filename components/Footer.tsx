export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerRow">
        <div>
          <div className="smallCaps">Powered by Mushee</div>
          <div style={{ marginTop: 10 }}>Sia Sentinel is a host reliability intelligence layer for the Sia ecosystem.</div>
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="https://mushee.xyz/" target="_blank" rel="noreferrer">mushee.xyz</a>
          <a href="https://x.com/mushee_io" target="_blank" rel="noreferrer">x.com/mushee_io</a>
        </div>
      </div>
    </footer>
  );
}
