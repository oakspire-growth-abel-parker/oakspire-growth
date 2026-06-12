export interface Lead {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  timestamp: string;
  status: 'New' | 'Reviewed' | 'Contacted' | 'Booked';
  scheduledDate?: string;
  scheduledTime?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemSolutionItem {
  id: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

export interface SystemStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface DeliverableItem {
  title: string;
  outcome: string;
  description: string;
  iconName: string;
}

export interface ResultCard {
  metric: string;
  highlight: string;
  context: string;
  label: string;
}
