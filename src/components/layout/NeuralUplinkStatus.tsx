"use client";

import { useWebMCP } from "@/components/providers/WebMCPProvider";

export default function NeuralUplinkStatus() {
  const { status } = useWebMCP();

  return (
    <div className="flex items-center gap-2">
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-green-500 animate-ping' : status === 'connected' ? 'bg-green-500' : 'bg-red-500/50'} transition-all`} />
      <span>{status === 'active' ? 'Status: Data Transmission' : status === 'connected' ? 'Status: Neural Uplink' : 'Status: Offline'}</span>
    </div>
  );
}
