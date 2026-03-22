import React, { useState } from "react";
import { Search, ChevronDown, Monitor, Users } from "lucide-react";
import ContractCard from "../components/ContractCard.jsx";
import { contracts } from "../data/contracts.js";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Solo");
  const [activeFilter, setActiveFilter] = useState("Active");
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("Recent activity");

  const filtered = contracts.filter((c) => {
    const matchTab = c.type === activeTab;
    const matchFilter = c.status === activeFilter;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchFilter && matchSearch;
  });

  return (
    <div className="page">
      <div className="header">
        <h1 className="heading">Active Projects</h1>
        <p className="sub">
          Track delivery work: milestones, deadlines, revisions, messages, files, and resolution.
        </p>
      </div>

      <div className="box">

        <div className="topRow">
          <span className="boxTitle">Contracts</span>
          <div className="controls">
   
            <div className="toggle">
              {[
                { label: "Solo", icon: <Monitor size={13} /> },
                { label: "Teams", icon: <Users size={13} /> },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`toggleBtn ${activeTab === label ? "toggleActive" : ""}`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>

      
            <div className="filters">
              {["Active", "Completed", "Disputed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`filterBtn ${activeFilter === f ? "filterActive" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>


        <div className="searchRow">
          <div className="searchWrap">
            <Search size={14} className="searchIcon" />
            <input
              type="text"
              placeholder="Search product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>
          <div className="sortWrap">
            <button
              className="sortBtn"
              onClick={() => setSortOpen(!sortOpen)}
            >
              {sortLabel} <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="dropdown">
                {["Recent activity", "Oldest first", "By deadline", "By milestone"].map((s) => (
                  <button
                    key={s}
                    className="dropItem"
                    onClick={() => { setSortLabel(s); setSortOpen(false); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {filtered.length > 0 ? (
            filtered.map((c) => <ContractCard key={c.id} contract={c} />)
          ) : (
            <div className="empty">No contracts found for this filter.</div>
          )}
        </div>
      </div>
    </div>
  );
}
