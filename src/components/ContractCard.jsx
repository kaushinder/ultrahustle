import React from "react";
import {
  MessageCircle,
  CheckSquare,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import StatusBadge from "./StatusBadge.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function ContractCard({ contract }) {
  return (
    <div className="card">
      <div className="left">
        <div className="titleRow">
          <span className="title">{contract.title}</span>
          <StatusBadge status={contract.status} />
          {contract.extension && (
            <span className="extensionBadge">Extension</span>
          )}
        </div>
        <div className="meta">
          {contract.type} &nbsp;•&nbsp; {contract.client} &nbsp;•&nbsp;{" "}
          {contract.contractId}
        </div>
        <div className="milestonesRow">
          <span className="mlLabel">Milestones</span>
          <span className="mlCount">
            {contract.milestones.done}/{contract.milestones.total}
          </span>
        </div>
        <ProgressBar
          done={contract.milestones.done}
          total={contract.milestones.total}
        />
        <div className="next">
          Next: {contract.next} &nbsp;•&nbsp; {contract.nextDue}
        </div>
      </div>
      <div className="middle">
        <div className="sectionLabel">Due</div>
        <div className="dueDate">
          <Calendar size={13} className="accentIcon" />
          {contract.due}
        </div>
        <div className="daysLeft">
          <Clock size={12} className="dimIcon" />
          {contract.daysLeft}
        </div>
      </div>

      <div className="right">
        <div className="sectionLabel">Collaboration</div>
        <div className="chips">
          <span className="chip">
            <MessageCircle size={12} /> {contract.messages}
          </span>
          <span className="chip">
            <CheckSquare size={12} /> {contract.files}
          </span>
        </div>
        <button className="btn">
          Open Workroom <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
