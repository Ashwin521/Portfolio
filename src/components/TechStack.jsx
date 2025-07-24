"use client";
import React, { useState } from "react";
import {
  frontendStack,
  backendStack,
  databaseStack,
  toolsStack,
} from "../data/TechStack";

const tabs = [
  { key: "frontend", label: "Frontend", stack: frontendStack },
  { key: "backend", label: "Backend", stack: backendStack },
  { key: "database", label: "Database", stack: databaseStack },
  { key: "tools", label: "Tools", stack: toolsStack },
];

const TechSection = ({ stack }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {stack.map(({ name, src }) => (
      <div
        key={name}
        className="bg-gray-900 p-4 rounded-xl shadow-lg flex flex-col items-center"
      >
        <img src={src} alt={name} className="h-16 w-16 object-contain mb-2" />
        <p className="text-lg font-medium text-center">{name}</p>
      </div>
    ))}
  </div>
);

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        🛠️ Tech Stack
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab.key
                ? "bg-white text-black font-semibold"
                : "border-gray-500 text-white hover:bg-gray-800"
            } transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <TechSection stack={currentTab.stack} />
      </div>
    </section>
  );
}
