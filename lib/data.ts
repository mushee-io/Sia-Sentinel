export type HostStatus = "online" | "degraded" | "offline";

export type Host = {
  id: string;
  rank: number;
  name: string;
  hostKey: string;
  address: string;
  region: string;
  status: HostStatus;
  version: string;
  protocol: string;
  score: number;
  trend: number;
  uptime7d: number;
  avgLatencyMs: number;
  storagePrice: string;
  uploadPrice: string;
  downloadPrice: string;
  collateral: string;
  risk: "low" | "moderate" | "high";
  notes: string[];
  incidents: {
    id: string;
    type: string;
    severity: "low" | "medium" | "high";
    status: "open" | "resolved";
    time: string;
    description: string;
  }[];
  checks: { day: string; uptime: number; latency: number }[];
};

export const hosts: Host[] = [
  {
    id: "atlas-vault",
    rank: 1,
    name: "Atlas Vault",
    hostKey: "ed25519:atlas8f1...91c",
    address: "atlas-vault.host:9982",
    region: "Frankfurt, DE",
    status: "online",
    version: "2.0.1",
    protocol: "1.6.0",
    score: 96.4,
    trend: 2.3,
    uptime7d: 99.98,
    avgLatencyMs: 82,
    storagePrice: "118 SC / TB / Mo",
    uploadPrice: "5 SC / TB",
    downloadPrice: "19 SC / TB",
    collateral: "4,200 SC",
    risk: "low",
    notes: [
      "Strong uptime consistency across the last 7 days.",
      "Low latency and stable price settings.",
      "No unresolved incidents currently affecting service."
    ],
    incidents: [
      {
        id: "i1",
        type: "Latency spike",
        severity: "low",
        status: "resolved",
        time: "2026-03-09 14:12 UTC",
        description: "Short latency increase resolved within 8 minutes."
      }
    ],
    checks: [
      { day: "Mon", uptime: 100, latency: 81 },
      { day: "Tue", uptime: 100, latency: 79 },
      { day: "Wed", uptime: 99, latency: 90 },
      { day: "Thu", uptime: 100, latency: 83 },
      { day: "Fri", uptime: 100, latency: 80 },
      { day: "Sat", uptime: 100, latency: 78 },
      { day: "Sun", uptime: 100, latency: 82 }
    ]
  },
  {
    id: "northstar-node",
    rank: 2,
    name: "Northstar Node",
    hostKey: "ed25519:nstar21...ab7",
    address: "northstar.storage:9982",
    region: "Amsterdam, NL",
    status: "online",
    version: "2.0.1",
    protocol: "1.6.0",
    score: 93.1,
    trend: 0.8,
    uptime7d: 99.62,
    avgLatencyMs: 101,
    storagePrice: "123 SC / TB / Mo",
    uploadPrice: "6 SC / TB",
    downloadPrice: "22 SC / TB",
    collateral: "3,980 SC",
    risk: "low",
    notes: [
      "Healthy uptime trend sustained through the monitoring window.",
      "Version matches current network expectations.",
      "Minor latency variance does not materially affect reliability."
    ],
    incidents: [],
    checks: [
      { day: "Mon", uptime: 100, latency: 108 },
      { day: "Tue", uptime: 100, latency: 102 },
      { day: "Wed", uptime: 98, latency: 121 },
      { day: "Thu", uptime: 100, latency: 99 },
      { day: "Fri", uptime: 100, latency: 97 },
      { day: "Sat", uptime: 100, latency: 94 },
      { day: "Sun", uptime: 100, latency: 101 }
    ]
  },
  {
    id: "emerald-host",
    rank: 3,
    name: "Emerald Host",
    hostKey: "ed25519:emer91...22f",
    address: "emerald.hosting:9982",
    region: "London, UK",
    status: "degraded",
    version: "2.0.0",
    protocol: "1.6.0",
    score: 81.7,
    trend: -4.1,
    uptime7d: 97.43,
    avgLatencyMs: 168,
    storagePrice: "110 SC / TB / Mo",
    uploadPrice: "7 SC / TB",
    downloadPrice: "25 SC / TB",
    collateral: "3,760 SC",
    risk: "moderate",
    notes: [
      "Latency climbed meaningfully over the last 48 hours.",
      "Two degraded windows triggered a moderate risk flag.",
      "Still accepting contracts, but operator attention is advised."
    ],
    incidents: [
      {
        id: "i2",
        type: "Regional degradation",
        severity: "medium",
        status: "open",
        time: "2026-03-12 09:05 UTC",
        description: "Intermittent slow responses observed during health checks."
      }
    ],
    checks: [
      { day: "Mon", uptime: 99, latency: 119 },
      { day: "Tue", uptime: 99, latency: 131 },
      { day: "Wed", uptime: 98, latency: 149 },
      { day: "Thu", uptime: 97, latency: 176 },
      { day: "Fri", uptime: 96, latency: 183 },
      { day: "Sat", uptime: 96, latency: 191 },
      { day: "Sun", uptime: 97, latency: 168 }
    ]
  },
  {
    id: "redline-archive",
    rank: 4,
    name: "Redline Archive",
    hostKey: "ed25519:redl77...5ff",
    address: "redline.archive:9982",
    region: "Virginia, US",
    status: "offline",
    version: "1.9.8",
    protocol: "1.5.9",
    score: 48.6,
    trend: -12.8,
    uptime7d: 89.22,
    avgLatencyMs: 420,
    storagePrice: "97 SC / TB / Mo",
    uploadPrice: "9 SC / TB",
    downloadPrice: "31 SC / TB",
    collateral: "2,900 SC",
    risk: "high",
    notes: [
      "Repeated failed checks caused a critical score drop.",
      "Host software is behind the dominant network version.",
      "Open incident remains unresolved and operator response is pending."
    ],
    incidents: [
      {
        id: "i3",
        type: "Host unreachable",
        severity: "high",
        status: "open",
        time: "2026-03-12 11:41 UTC",
        description: "Sentinel could not reach the host during repeated checks."
      },
      {
        id: "i4",
        type: "Outdated version",
        severity: "medium",
        status: "open",
        time: "2026-03-11 18:03 UTC",
        description: "Host version lags the current observed network baseline."
      }
    ],
    checks: [
      { day: "Mon", uptime: 96, latency: 210 },
      { day: "Tue", uptime: 93, latency: 241 },
      { day: "Wed", uptime: 91, latency: 286 },
      { day: "Thu", uptime: 88, latency: 330 },
      { day: "Fri", uptime: 85, latency: 410 },
      { day: "Sat", uptime: 84, latency: 452 },
      { day: "Sun", uptime: 87, latency: 420 }
    ]
  }
];

export const networkSummary = {
  hostsTracked: 248,
  hostsOnline: 221,
  onlineRatio: 89.1,
  openIncidents: 17,
  averageScore: 84.8,
  networkHeadline: "Live reliability intelligence for Sia storage hosts.",
  lastRefresh: "Updated 2 minutes ago"
};

export const activeIncidents = hosts.flatMap((host) =>
  host.incidents.map((incident) => ({ ...incident, hostId: host.id, hostName: host.name, address: host.address }))
);

export function getHost(id: string) {
  return hosts.find((host) => host.id === id);
}
