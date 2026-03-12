import Link from "next/link";
import { hosts } from "@/lib/data";
import { statusTone } from "@/lib/utils";

export function HostTable() {
  return (
    <div className="tableWrap panel">
      <table className="table">
        <thead>
          <tr>
            <th>Host</th>
            <th>Address</th>
            <th>Status</th>
            <th>Version</th>
            <th>Score</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {hosts.map((host) => (
            <tr key={host.id}>
              <td>
                <Link className="hostNameCell" href={`/hosts/${host.id}`}>
                  <strong>{host.name}</strong>
                  <span>{host.hostKey}</span>
                </Link>
              </td>
              <td>
                <div className="hostNameCell">
                  <strong>{host.address}</strong>
                  <span>{host.region}</span>
                </div>
              </td>
              <td><span className={statusTone(host.status)}>{host.status}</span></td>
              <td>
                <div className="hostNameCell">
                  <strong>{host.version}</strong>
                  <span>Protocol {host.protocol}</span>
                </div>
              </td>
              <td className="scoreValue">{host.score.toFixed(1)}</td>
              <td className={host.trend >= 0 ? "trendUp" : "trendDown"}>
                {host.trend >= 0 ? "+" : ""}{host.trend.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
