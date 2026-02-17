"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { PARTS_DATABASE } from "@/lib/parts";

// Extend the Window interface to include the AI/Model Context API
declare global {
  interface Window {
    ai?: any;
    modelContext?: any;
  }
  interface Navigator {
    modelContext?: any;
  }
}

type WebMCPStatus = "disconnected" | "connected" | "active";

interface WebMCPContextType {
  status: WebMCPStatus;
  lastAction: string | null;
}

const WebMCPContext = createContext<WebMCPContextType>({
  status: "disconnected",
  lastAction: null,
});

export const useWebMCP = () => useContext(WebMCPContext);

export function WebMCPProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<WebMCPStatus>("disconnected");
  const [lastAction, setLastAction] = useState<string | null>(null);

  useEffect(() => {
    const initializeWebMCP = async () => {
      // Check for Model Context Protocol support (Chrome Canary/Dev)
      const modelContext = window.modelContext || navigator.modelContext;

      if (!modelContext) {
        console.log("WebMCP: Neural Uplink not detected (Requires Chrome 146+)");
        return;
      }

      try {
        setStatus("connected");
        console.log("WebMCP: Neural Uplink Established");

        // Tool 1: Part Search
        modelContext.registerTool({
          name: "search_parts",
          description: "Search the Industrial Ghost Parts inventory for automation assets by SKU or description.",
          parameters: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description: "The part number, manufacturer, or description to search for (e.g., '1756-L61', 'ControlLogix CPU').",
              },
            },
            required: ["query"],
          },
          execute: async ({ query }: { query: string }) => {
            setLastAction(`Searching: ${query}`);
            setStatus("active");
            
            const results = Object.values(PARTS_DATABASE).filter((part) => 
              part.id.toLowerCase().includes(query.toLowerCase()) ||
              part.name.toLowerCase().includes(query.toLowerCase()) ||
              part.system.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5); // Limit connection bandwidth

            setTimeout(() => setStatus("connected"), 2000); // Reset status
            return results;
          },
        });

        // Tool 2: Price Check
        modelContext.registerTool({
          name: "check_price",
          description: "Get the estimated replacement cost and downtime impact for a specific part ID.",
          parameters: {
            type: "object",
            properties: {
              partId: {
                type: "string",
                description: "The exact ID of the part (e.g., '1756-L61').",
              },
            },
            required: ["partId"],
          },
          execute: async ({ partId }: { partId: string }) => {
            setLastAction(`Pricing: ${partId}`);
            setStatus("active");

            const part = PARTS_DATABASE[partId];
            setTimeout(() => setStatus("connected"), 2000);

            if (part) {
              return {
                id: part.id,
                replacement_cost: part.replacementCost,
                downtime_cost_per_hour: part.downtimeCostPerHour,
                criticality: part.criticality
              };
            }

            // Fallback: Trigger Moltworker Deep Scan
            console.log("WebMCP: Initiating Deep Scan via Moltworker...");
            setLastAction(`Deep Scanning: ${partId}`);
            setStatus("active"); // Keep active during scan

            try {
              const response = await fetch('/api/moltworker/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ partId }),
              });

              const data = await response.json();
              setTimeout(() => setStatus("connected"), 2000);

              if (data.success) {
                return {
                  ...data.part,
                  note: "Recovered from archival PDFs via Moltworker."
                };
              }
              
              return { error: "Part not found in Ghost Registry or Deep Archives." };
            } catch (err) {
              setTimeout(() => setStatus("connected"), 2000);
              return { error: "Moltworker connection failed." };
            }
          },
        });

        console.log("WebMCP: Inventory Protocols Registered");

      } catch (error) {
        console.error("WebMCP: Uplink Failed", error);
        setStatus("disconnected");
      }
    };

    initializeWebMCP();
  }, []);

  return (
    <WebMCPContext.Provider value={{ status, lastAction }}>
      {children}
    </WebMCPContext.Provider>
  );
}
