type Props = {
  label: string;
  value: string;
  hint: string;
};

export function MetricCard({ label, value, hint }: Props) {
  return (
    <div className="metricCard">
      <div className="metricLabel">{label}</div>
      <div className="metricValue">{value}</div>
      <div className="metricHint">{hint}</div>
    </div>
  );
}
