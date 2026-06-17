export interface FAQItem {
  id: string;
  label: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "turnaround-times",
    label: "01. Delivery & Turnaround",
    question: "What are the video turnaround times?",
    answer: "Our turnaround times are structured as follows:\n• First Draft: Within 48 hours\n• Revisions: 16 – 24 hours\n• Fastest Possible Delivery: Less than 5 hours\n• Average Turnaround: 24 hours\n\nThe above timelines are for short form videos (60–90 seconds). Video turnaround times to be decided based on complexity of the edit for Medium-length (90s to 10 mins) and long form videos (10 mins to 1 hour +).",
    category: "delivery"
  },
  {
    id: "faulty-footage",
    label: "02. Faulty Footage Process",
    question: "What happens if provided footage is incorrect or faulty?",
    answer: "If the provided footage is incorrect or faulty, the editor will notify the client immediately on Slack. The client is then responsible for resubmitting high-quality assets to resume editing work.",
    category: "delivery"
  },
  {
    id: "revision-counts",
    label: "03. Revisions Definition",
    question: "What counts as a revision?",
    answer: "Any change requested by the client after receiving a draft is counted as a revision. We offer unlimited revisions.",
    category: "revisions"
  },
  {
    id: "rates-and-scope",
    label: "04. Editing Scope & Rates",
    question: "What are the rates for video editing services?",
    answer: "Our standard rates are:\n• Short Form (Lofi): $100 per video (minimum booking of 10 videos)\n• Short Form (HiFi): $100 per video (minimum booking of 10 videos)\n• Long Form (Simple): $780 per video (can do even 1 video, no worries)\n• Long Form (Complex): $1,160 per video (can do even 1 video, no worries)",
    category: "pricing"
  },
  {
    id: "content-requirements",
    label: "05. Client Resource Needs",
    question: "What must the client provide to initiate a project?",
    answer: "To initiate a project, the client must provide a Google Drive link containing:\n1. Raw or B-roll footage\n2. Inspiration material (Mandatory)\n3. Style guide (such as fonts or color palettes, if available)",
    category: "requirements"
  },
  {
    id: "video-length-def",
    label: "06. Video Length",
    question: "How do you define video length?",
    answer: "We define video lengths as follows:\n• Short-form: between 60 to 90 seconds\n• Medium-length: 90 seconds to 10 minutes ($150 per video)\n• Long-form: 10 minutes to 1 hour +",
    category: "limits"
  },
  {
    id: "asset-submission",
    label: "07. Raw Clips Limits",
    question: "Can a client submit 50 clips and request only 10 edits?",
    answer: "Yes, this is fully permitted.",
    category: "limits"
  },
  {
    id: "project-work-flow",
    label: "08. Project Workflow Sequence",
    question: "What does the standard project workflow look like?",
    answer: "Our workflow follows 5 simple sequential steps:\n1. Client uploads assets ➜ 2. Editoz confirms ETA ➜ 3. Delivery ➜ 4. Review ➜ 5. Completion.",
    category: "workflow"
  },
  {
    id: "upfront-invest-rule",
    label: "09. Upfront Payment",
    question: "What is the upfront payment policy?",
    answer: "Clients pay the full amount upfront to begin. We offer a one-week trial period with a money-back guarantee if the client is not fully satisfied with the service.",
    category: "pricing"
  },
  {
    id: "discounts-bulk",
    label: "10. Bulk Editing Discounts",
    question: "Do you offer bulk discounts or tiered pricing?",
    answer: "Not at the moment, but we can check with the team and get back to you.",
    category: "pricing"
  },
  {
    id: "track-progress-info",
    label: "11. Tracking Progress",
    question: "How can clients track progress?",
    answer: "All progress updates, feedback loops, and assets are communicated directly via Slack.",
    category: "workflow"
  },
  {
    id: "sales-process",
    label: "12. Sales Process",
    question: "What is the Editing Product – Sales process?",
    answer: "Our standard sales and closer pipeline follows a clear qualification and call structure:\n\nAd → WhatsApp → Qualification → 15-Minute Strategy Call → Close → Payment → Onboarding Form →\n\n1. Meta Ad → WhatsApp (Qualify)\n\nInitial Questions\n1. What type of business do you run?\n2. Are you currently posting short-form content?\n3. How many videos are you posting per week?\n4. Who is currently editing your content?\n\nStep 2: Decide Call vs No Call\nExamples:\n● Coaches\n● Consultants\n● Agency owners\n● Founders\n● Personal brands, etc…\n\nThen:\n\"Looks like we can help. Let me show you exactly how we'd handle your content. Are you free for a quick 15-minute strategy call?\"\nBook Google Meet.\n\n2. The Call Structure\n1. Current Situation\n● What content are you creating now?\n● How often?\n● Who edits?\n● What's working?\n\n2. Problems\n● Time?\n● Consistency?\n● Quality?\n● Volume?\n\n4. Offer\n5. Close",
    category: "workflow"
  }
];
