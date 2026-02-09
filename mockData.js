export const kpiStats = {
  totalFeedback: 1247,
  avgSentimentScore: 3.7,
  unresolvedCriticalIssues: 23,
  avgResolutionTime: 4.2, // in hours
};

export const sentimentTrend = [
  {
    date: "2024-01-15",
    positive: 142,
    negative: 38,
    neutral: 21,
  },
  {
    date: "2024-01-16",
    positive: 158,
    negative: 45,
    neutral: 19,
  },
  {
    date: "2024-01-17",
    positive: 134,
    negative: 52,
    neutral: 24,
  },
  {
    date: "2024-01-18",
    positive: 167,
    negative: 41,
    neutral: 18,
  },
  {
    date: "2024-01-19",
    positive: 151,
    negative: 48,
    neutral: 22,
  },
  {
    date: "2024-01-20",
    positive: 139,
    negative: 55,
    neutral: 20,
  },
  {
    date: "2024-01-21",
    positive: 173,
    negative: 39,
    neutral: 16,
  },
];

export const overviewTopCategories = [
  { name: "Nursing", count: 546, trend: "+12%", sentiment: "positive", change: "up" },
  { name: "Billing", count: 416, trend: "-5%", sentiment: "negative", change: "down" },
  { name: "Wait Time", count: 285, trend: "+8%", sentiment: "negative", change: "up" },
  { name: "Facilities", count: 142, trend: "+3%", sentiment: "neutral", change: "up" },
  { name: "Staff Attitude", count: 98, trend: "-2%", sentiment: "positive", change: "down" },
];

export const overviewByDepartment = [
  { department: "ER", feedbackCount: 312, avgSentiment: 3.2, criticalAlerts: 4, status: "critical" },
  { department: "ICU", feedbackCount: 198, avgSentiment: 3.8, criticalAlerts: 1, status: "warning" },
  { department: "Ward A", feedbackCount: 245, avgSentiment: 4.1, criticalAlerts: 0, status: "normal" },
  { department: "Ward B", feedbackCount: 228, avgSentiment: 4.0, criticalAlerts: 0, status: "normal" },
  { department: "Cafeteria", feedbackCount: 164, avgSentiment: 3.9, criticalAlerts: 0, status: "normal" },
];

export const overviewRecentHighlights = [
  {
    id: 1,
    quote: "The cardiac care unit staff was phenomenal. Very professional and attentive.",
    author: "Thomas W.",
    department: "ICU",
    date: "Today",
  },
  {
    id: 2,
    quote: "Maternity ward experience was wonderful. Thank you to all the nurses!",
    author: "Jessica T.",
    department: "Ward A",
    date: "Yesterday",
  },
  {
    id: 3,
    quote: "ER team was efficient despite the wait. Dr. Smith took time to explain everything.",
    author: "Ryan M.",
    department: "ER",
    date: "2 days ago",
  },
];

export const overviewTrendingIssues = [
  { id: 1, issue: "ER wait time > 4 hrs", count: 24, trend: "up", department: "ER" },
  { id: 2, issue: "Billing discrepancy", count: 18, trend: "stable", department: "Billing" },
  { id: 3, issue: "Appointment delay communication", count: 12, trend: "down", department: "Scheduling" },
  { id: 4, issue: "Insurance pre-auth delays", count: 9, trend: "up", department: "Billing" },
];

export const overviewResponseMetrics = [
  { label: "First Contact Resolution", value: "78%", target: "80%", status: "below" },
  { label: "Avg Response Time", value: "2.4 hrs", target: "< 3 hrs", status: "ok" },
  { label: "Patient Follow-up Rate", value: "92%", target: "90%", status: "ok" },
  { label: "Escalation Rate", value: "4.2%", target: "< 5%", status: "ok" },
];

export const overviewNeedsAttention = [
  { id: 1, title: "ER wait time spike", location: "ER", priority: "critical", age: "5 min" },
  { id: 2, title: "Billing complaint – unassigned", location: "Billing", priority: "high", age: "18 min" },
  { id: 3, title: "High-severity feedback", location: "Ward A", priority: "high", age: "32 min" },
  { id: 4, title: "Survey negative – no follow-up", location: "ICU", priority: "medium", age: "1 hr" },
];

export const overviewSourceBreakdown = [
  { source: "Google Review", count: 520, percentage: 42, color: "bg-blue-500" },
  { source: "Survey", count: 398, percentage: 32, color: "bg-purple-500" },
  { source: "Call Center", count: 329, percentage: 26, color: "bg-green-500" },
];

export const overviewWeekSummary = {
  thisWeek: { feedback: 186, negative: 42, resolved: 89, positive: 98 },
  lastWeek: { feedback: 172, negative: 48, resolved: 84, positive: 91 },
  change: { feedback: "+8%", negative: "-12%", resolved: "+6%", positive: "+8%" },
};

export const overviewResolutionFunnel = [
  { stage: "Received", count: 1247, label: "Total feedback" },
  { stage: "In Progress", count: 156, label: "Being addressed" },
  { stage: "Resolved", count: 1089, label: "Closed this period" },
  { stage: "Escalated", count: 23, label: "Needs escalation" },
];

export const overviewActivityByHour = [
  { hour: "6–9", count: 89 },
  { hour: "9–12", count: 312 },
  { hour: "12–15", count: 278 },
  { hour: "15–18", count: 245 },
  { hour: "18–21", count: 198 },
  { hour: "21–24", count: 125 },
];

export const overviewWorkflowsToday = [
  { id: 1, ticket: "#402", department: "Billing", time: "10:24 AM", status: "assigned" },
  { id: 2, ticket: "#401", department: "ER", time: "9:15 AM", status: "in progress" },
  { id: 3, ticket: "#400", department: "Ward A", time: "8:42 AM", status: "resolved" },
  { id: 4, ticket: "#399", department: "Billing", time: "8:10 AM", status: "resolved" },
];

export const overviewNpsSummary = {
  score: 62,
  promoters: 58,
  passives: 28,
  detractors: 14,
  trend: "+4",
};

export const recentFeedback = [
  {
    id: 1,
    patientName: "Sarah Mitchell",
    source: "Google Review",
    category: "Nursing",
    sentiment: "Positive",
    text: "The nursing staff on the 3rd floor was absolutely exceptional. Nurse Jennifer went above and beyond to ensure my comfort during my recovery. She was patient, attentive, and truly cared about my well-being. The entire team made a difficult time much more bearable.",
    severity: "Low",
    timestamp: "2024-01-21T14:32:00Z",
  },
  {
    id: 2,
    patientName: "Robert Chen",
    source: "Call Center",
    category: "Billing",
    sentiment: "Negative",
    text: "I've been trying to resolve a billing discrepancy for over two weeks. I was charged for services I never received, and every time I call, I'm transferred to a different department. No one seems to have access to my complete records. This is extremely frustrating and unprofessional.",
    severity: "High",
    timestamp: "2024-01-21T11:15:00Z",
  },
  {
    id: 3,
    patientName: "Maria Rodriguez",
    source: "Survey",
    category: "Wait Time",
    sentiment: "Negative",
    text: "I had an appointment scheduled for 2:00 PM but wasn't seen until 3:45 PM. There was no communication about the delay, and the waiting room was overcrowded. I understand emergencies happen, but better communication would have been appreciated.",
    severity: "Medium",
    timestamp: "2024-01-20T16:20:00Z",
  },
  {
    id: 4,
    patientName: "James Thompson",
    source: "Google Review",
    category: "Nursing",
    sentiment: "Positive",
    text: "Outstanding care from the night shift nursing team. They were responsive to my needs and kept me informed throughout my stay. The level of professionalism and compassion shown was remarkable.",
    severity: "Low",
    timestamp: "2024-01-20T09:45:00Z",
  },
  {
    id: 5,
    patientName: "Emily Watson",
    source: "Call Center",
    category: "Billing",
    sentiment: "Negative",
    text: "Received a bill for $2,400 that should have been covered by my insurance. I've submitted all the necessary documentation three times, but the billing department keeps saying they haven't received it. This is causing significant financial stress.",
    severity: "High",
    timestamp: "2024-01-19T13:30:00Z",
  },
  {
    id: 6,
    patientName: "David Park",
    source: "Survey",
    category: "Wait Time",
    sentiment: "Neutral",
    text: "The wait time was longer than expected, but once I was seen, the care was excellent. The staff apologized for the delay and explained there was an emergency that required immediate attention. While I wish the wait was shorter, I appreciate the transparency.",
    severity: "Low",
    timestamp: "2024-01-19T10:12:00Z",
  },
];

export const liveFeedData = [
  {
    id: 101,
    patientName: "Jennifer Martinez",
    source: "Google Review",
    category: "Nursing",
    sentiment: "Positive",
    text: "Just left the hospital and had an amazing experience! The ER staff was incredibly efficient and caring.",
    severity: "Low",
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(), // 2 minutes ago
    isNew: true,
  },
  {
    id: 102,
    patientName: "Michael Brown",
    source: "Call Center",
    category: "Billing",
    sentiment: "Negative",
    text: "Still waiting for my insurance claim to be processed. It's been 3 weeks now.",
    severity: "High",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
    isNew: true,
  },
  {
    id: 103,
    patientName: "Lisa Anderson",
    source: "Survey",
    category: "Wait Time",
    sentiment: "Negative",
    text: "Waited over 2 hours for my appointment. The front desk staff wasn't very helpful.",
    severity: "Medium",
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(), // 8 minutes ago
    isNew: true,
  },
  {
    id: 104,
    patientName: "Thomas Wilson",
    source: "Google Review",
    category: "Nursing",
    sentiment: "Positive",
    text: "The cardiac care unit staff was phenomenal. Very professional and attentive.",
    severity: "Low",
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(), // 12 minutes ago
    isNew: false,
  },
  {
    id: 105,
    patientName: "Patricia Davis",
    source: "Call Center",
    category: "Billing",
    sentiment: "Negative",
    text: "Received duplicate bills for the same service. Need this resolved immediately.",
    severity: "High",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
    isNew: false,
  },
  {
    id: 106,
    patientName: "Christopher Lee",
    source: "Survey",
    category: "Nursing",
    sentiment: "Positive",
    text: "Excellent care during my recovery. The physical therapy team was outstanding.",
    severity: "Low",
    timestamp: new Date(Date.now() - 18 * 60 * 1000).toISOString(), // 18 minutes ago
    isNew: false,
  },
  {
    id: 107,
    patientName: "Amanda White",
    source: "Google Review",
    category: "Wait Time",
    sentiment: "Neutral",
    text: "The wait was reasonable. Staff was friendly once I was seen.",
    severity: "Low",
    timestamp: new Date(Date.now() - 22 * 60 * 1000).toISOString(), // 22 minutes ago
    isNew: false,
  },
  {
    id: 108,
    patientName: "Daniel Garcia",
    source: "Call Center",
    category: "Billing",
    sentiment: "Negative",
    text: "Insurance coverage issue - need urgent help with pre-authorization.",
    severity: "High",
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(), // 25 minutes ago
    isNew: false,
  },
  {
    id: 109,
    patientName: "Jessica Taylor",
    source: "Survey",
    category: "Nursing",
    sentiment: "Positive",
    text: "Maternity ward experience was wonderful. Thank you to all the nurses!",
    severity: "Low",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    isNew: false,
  },
  {
    id: 110,
    patientName: "Ryan Moore",
    source: "Google Review",
    category: "Wait Time",
    sentiment: "Negative",
    text: "Emergency room wait time was unacceptable. Over 3 hours before being seen.",
    severity: "High",
    timestamp: new Date(Date.now() - 35 * 60 * 1000).toISOString(), // 35 minutes ago
    isNew: false,
  },
];

export const analyticsData = {
  categoryBreakdown: [
    { name: "Nursing", positive: 412, negative: 89, neutral: 45, total: 546 },
    { name: "Billing", positive: 156, negative: 198, neutral: 62, total: 416 },
    { name: "Wait Time", positive: 98, negative: 167, neutral: 20, total: 285 },
  ],
  sourceBreakdown: [
    { name: "Google Review", count: 520, percentage: 42 },
    { name: "Survey", count: 398, percentage: 32 },
    { name: "Call Center", count: 329, percentage: 26 },
  ],
  resolutionMetrics: {
    avgResolutionTimeHours: 4.2,
    resolvedThisWeek: 89,
    escalatedCount: 12,
    satisfactionAfterResolution: 4.1,
  },
  monthlyTrend: [
    { month: "Aug", feedback: 980, resolved: 92 },
    { month: "Sep", feedback: 1050, resolved: 88 },
    { month: "Oct", feedback: 1120, resolved: 91 },
    { month: "Nov", feedback: 1180, resolved: 89 },
    { month: "Dec", feedback: 1210, resolved: 90 },
    { month: "Jan", feedback: 1247, resolved: 89 },
  ],
};

export const hospitalAlerts = [
  {
    id: 1,
    location: "ER",
    title: "Wait Time Spike",
    message: "ER wait time exceeds 4 hours. Negative sentiment spike detected.",
    severity: "critical",
    timeAgo: "2 min ago",
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 2,
    location: "ICU",
    title: "Moderate Activity",
    message: "ICU feedback volume elevated. 3 negative comments in last hour.",
    severity: "warning",
    timeAgo: "15 min ago",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 3,
    location: "Ward A",
    title: "Billing Complaint",
    message: "High-severity billing complaint from Ward A patient. Requires follow-up.",
    severity: "high",
    timeAgo: "28 min ago",
    timestamp: new Date(Date.now() - 28 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 4,
    location: "Cafeteria",
    title: "Positive Feedback",
    message: "Cafeteria received 5 positive reviews in the last 24 hours.",
    severity: "info",
    timeAgo: "1 hr ago",
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    read: true,
  },
];

export const settingsDefaults = {
  notifications: {
    criticalAlerts: true,
    dailyDigest: true,
    workflowAssigned: true,
    emailDigest: "daily",
  },
  dashboard: {
    defaultView: "overview",
    itemsPerPage: 10,
    showFacilityHeatmap: true,
  },
  integrations: [
    { id: "google", name: "Google Reviews", enabled: true },
    { id: "survey", name: "Patient Surveys", enabled: true },
    { id: "callcenter", name: "Call Center CRM", enabled: true },
  ],
  organization: {
    name: "Metro General Hospital",
    timezone: "America/New_York",
    language: "en",
  },
};
