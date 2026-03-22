import React from "react";

export default function ProgressBar({ done, total }) {
  const pct = total > 0 ? (done / total) * 100 : 0;
  return (
    <div className="track">
      <div className="fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
