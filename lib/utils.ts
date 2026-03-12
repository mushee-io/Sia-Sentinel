export function statusTone(status: "online" | "degraded" | "offline") {
  if (status === "online") return "statusOnline";
  if (status === "degraded") return "statusDegraded";
  return "statusOffline";
}

export function incidentTone(severity: "low" | "medium" | "high") {
  if (severity === "high") return "critical";
  if (severity === "medium") return "warning";
  return "calm";
}
