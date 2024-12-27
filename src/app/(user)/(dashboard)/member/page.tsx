"use client";
import { useState } from "react";

export default function Event() {
  const [activeTab, setActiveTab] = useState("home");

  //   tabs dan isi konten
  const tabs = [
    { name: "deskripsi", label: "Deskripsi", content: "lorem" },
    { name: "tiket", label: "Tiket", content: "This is Tiket" },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? "font-semibold" : ""}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {tabs
          .filter((tab) => tab.name === activeTab)
          .map((tab) => (
            <div key={tab.name} className="grid lg:grid-cols-2">
              {/* ticket info */}
              <div className="bg-purple-200">
                <h1 className="font-semibold text-3xl">{tab.label}</h1>
                <p>{tab.content}</p>
              </div>
              {/* ticket price */}
              <div className="bg-zinc-400">This is ticket price</div>
            </div>
          ))}
      </div>
    </div>
  );
}
