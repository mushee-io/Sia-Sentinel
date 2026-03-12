import Link from "next/link";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="container navInner">
        <div className="brandBlock">
          <div className="brandMark" />
          <div>
            <div className="brandEyebrow">Powered by Mushee</div>
            <div className="brandTitle">Sia Sentinel</div>
          </div>
        </div>
        <div className="navLinks">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/incidents">Incidents</Link>
          <a href="https://mushee.xyz/" target="_blank" rel="noreferrer">Mushee</a>
          <a href="https://x.com/mushee_io" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </div>
  );
}
