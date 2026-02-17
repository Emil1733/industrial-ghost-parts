import { Cpu, Activity, Terminal as TerminalIcon } from 'lucide-react';

export type CategoryID = 'control' | 'motion' | 'interface';

export interface CategoryMetadata {
  id: CategoryID;
  title: string;
  count: string;
  icon: any;
  desc: string;
  keywords: string[];
  seoTitle: string;
  seoDesc: string;
}

export const CATEGORIES: Record<CategoryID, CategoryMetadata> = {
  control: {
    id: 'control',
    title: "Control Systems",
    count: "312 Nodes",
    icon: Cpu,
    desc: "PLCs, PACs & CPUs",
    keywords: ['plc', 'cpu', 's7', 'logix', '1756', '1747', '1746', 'controller', 'processor', 'module', 'logic'],
    seoTitle: "Discontinued Control Systems Audit | PLC & PAC Recovery",
    seoDesc: "Live recovery database for legacy ControlLogix, SLC 500, and S7 control systems. Monitor scarcity and downtime risk for critical industrial processors."
  },
  motion: {
    id: 'motion',
    title: "Motion & Drives",
    count: "184 Nodes",
    icon: Activity,
    desc: "Servo & VFD Systems",
    keywords: ['drive', 'servo', 'kinetix', 'vfd', 'powerflex', 'motor', '2094', '2198', 'ultra3000', 'flexex', 'kinetix'],
    seoTitle: "Industrial Motion & Drive Audit | Servo & VFD Recovery",
    seoDesc: "Search and audit discontinued servo drives and VFDs. Real-time availability tracking for Kinetix, PowerFlex, and Ultra3000 systems."
  },
  interface: {
    id: 'interface',
    title: "Interface / HMI",
    count: "117 Nodes",
    icon: TerminalIcon,
    desc: "Terminals & Displays",
    keywords: ['hmi', 'panelview', 'terminal', 'display', 'touch', '2711', 'monitor', 'screen', 'plus 6', 'plus 7'],
    seoTitle: "HMI & Interface Terminal Audit | PanelView Recovery",
    seoDesc: "Registry of discontinued HMI terminals and operator interfaces. Inventory monitoring for PanelView Plus and legacy industrial displays."
  }
};
