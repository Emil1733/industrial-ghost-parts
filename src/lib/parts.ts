export type PartAuditData = {
  id: string;
  name: string;
  manufacturer: string;
  system: string;
  discontinuedYear: number;
  criticality: "CRITICAL" | "HIGH" | "MEDIUM";
  replacementCost: string;
  downtimeCostPerHour: string;
  commonFailures: string[];
  specs: { label: string; value: string }[];
};

export const PARTS_DATABASE: Record<string, PartAuditData> = {
  "2198-H008-ERS": {
    id: "2198-H008-ERS",
    name: "Kinetix 5500 Servo Drive",
    manufacturer: "Allen-Bradley / Rockwell Automation",
    system: "Kinetix 5500",
    discontinuedYear: 2021, // Trending scarcity
    criticality: "CRITICAL",
    replacementCost: "$4,500 - $8,200",
    downtimeCostPerHour: "$25,000",
    commonFailures: [
      "Bus Overvoltage Faults",
      "Encoder Feedback Loss",
      "Thermal Sensor Degradation",
    ],
    specs: [
      { label: "Voltage", value: "200-480V AC" },
      { label: "Output Current", value: "8A" },
      { label: "Safety", value: "Hardwired / Integrated" },
    ],
  },
  "1746-NI8": {
    id: "1746-NI8",
    name: "SLC 500 Analog Input Module",
    manufacturer: "Allen-Bradley",
    system: "SLC 500",
    discontinuedYear: 2014,
    criticality: "HIGH",
    replacementCost: "$1,800 - $3,500",
    downtimeCostPerHour: "$12,000",
    commonFailures: [
      "Input Channel Isolation Failure",
      "A/D Converter Drift",
      "Backplane Communication Error",
    ],
    specs: [
      { label: "Channels", value: "8 High Density" },
      { label: "Input Type", value: "Current/Voltage" },
      { label: "Resolution", value: "16-bit" },
    ],
  },
  "UDC2500": {
    id: "UDC2500",
    name: "Universal Digital Controller",
    manufacturer: "Honeywell",
    system: "Thermal Processing",
    discontinuedYear: 2018,
    criticality: "MEDIUM",
    replacementCost: "$900 - $2,400",
    downtimeCostPerHour: "$5,000",
    commonFailures: [
      "Display Pixel Failure",
      "Relay Contact Pitting",
      "EEPROM Corruption",
    ],
    specs: [
      { label: "Control", value: "Dual Loop PID" },
      { label: "Input", value: "Universal" },
      { label: "Accuracy", value: "0.25%" },
    ],
  },
};
