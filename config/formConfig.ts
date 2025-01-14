export type QuestionType = "text" | "email" | "tel" | "url" | "textarea" | "date" | "number";

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  required: boolean;
  placeholder?: string;
  helperText?: string;
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export const formConfig: Section[] = [
  {
    id: "personal-contact-info",
    title: "Personal & Contact Information",
    questions: [
      { id: "full-name", text: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
      { id: "email", text: "Email Address", type: "email", required: true, placeholder: "Enter your email address" },
      { id: "phone", text: "Phone Number", type: "tel", required: true, placeholder: "Enter your phone number" },
      {
        id: "location",
        text: "Location (City, State, Country)",
        type: "text",
        required: true,
        placeholder: "Enter your location",
      },
      {
        id: "linkedin",
        text: "LinkedIn Profile URL",
        type: "url",
        required: false,
        placeholder: "Enter your LinkedIn profile URL",
      },
      {
        id: "portfolio",
        text: "Portfolio/Website URL",
        type: "url",
        required: false,
        placeholder: "Enter your portfolio or website URL",
      },
    ],
  },
  {
    id: "professional-summary",
    title: "Professional Objective / Summary",
    questions: [
      {
        id: "current-job-title",
        text: "What is your current or most recent job title, and how many total years of experience do you have?",
        type: "textarea",
        required: true,
        placeholder: "Describe your current role and experience",
        helperText:
          "Include any closely related roles. If you pivoted from another area into your current role, mention how long you’ve been specifically doing Program/Category Management or Business Leadership.",
      },
      {
        id: "industries",
        text: "What industries or domains have you worked in, and which do you consider your strongest?",
        type: "textarea",
        required: true,
        placeholder: "Describe the industries you have worked in",
        helperText:
          "Mention key industries, such as e-commerce, retail, finance, tech, FMCG, or healthcare. If you’ve worked across multiple sectors, highlight the one you feel most comfortable or successful in.",
      },
      {
        id: "top-achievements",
        text: "What are the top 2–3 achievements or milestones that define your career so far?",
        type: "textarea",
        required: true,
        placeholder: "Describe your top achievements",
        helperText:
          "These achievements can include launching new product categories, saving millions in costs, increasing revenue by double digits, or leading a complex program to success.",
      },
      {
        id: "specialized-skills",
        text: "Are there any unique or specialized skills you bring to the table?",
        type: "textarea",
        required: false,
        placeholder: "List your unique skills",
        helperText:
          "Think of software/tools (e.g., JIRA, SAP, Tableau), methodologies (Agile, Lean Six Sigma), or niche expertise (Omnichannel strategies, global expansion, vendor management).",
      },
      {
        id: "work-motivation",
        text: "What drives you or motivates you most in your work?",
        type: "textarea",
        required: false,
        placeholder: "Explain your motivation",
        helperText:
          "Do you love solving complex problems, mentoring teams, or building new lines of business from scratch? This helps showcase your passion.",
      },
      {
        id: "impact",
        text: "How have you impacted the organizations you've worked for, in terms of ROI, efficiency, or innovation?",
        type: "textarea",
        required: true,
        placeholder: "Describe your impact",
        helperText:
          "Mention if you increased revenue by X%, reduced costs by Y%, improved operational efficiency, or launched innovative solutions that gave a competitive edge.",
      },
      {
        id: "next-role-goals",
        text: "What are you looking to achieve in your next role or project?",
        type: "textarea",
        required: true,
        placeholder: "Describe your future goals",
        helperText:
          "Are you focused on driving digital transformation, scaling a business from Series A to IPO, or expanding a product line globally?",
      },
      {
        id: "additional-info",
        text: "Anything else you believe is crucial to emphasize in your summary that hasn’t been covered?",
        type: "textarea",
        required: false,
        placeholder: "Add any additional information",
        helperText:
          "If there’s a unique angle, such as experience in a niche market, language proficiency, or a personal mission statement, mention it here.",
      },
    ],
  },
  {
    id: "work-experiences",
    title: "Past Work Experiences",
    questions: [
      {
        id: "num-companies",
        text: "Number of companies/organizations worked for",
        type: "text",
        required: true,
        placeholder: "Enter the number of companies",
      },
      {
        id: "experience-details",
        text: "For each experience, provide role/title, company, and dates.",
        type: "textarea",
        required: true,
        placeholder: "Describe your past experiences",
        helperText: "Share your official title, the organization’s name, and the timeframe you worked there.",
      },
      {
        id: "responsibilities",
        text: "Primary responsibilities in one or two sentences.",
        type: "textarea",
        required: true,
        placeholder: "Summarize your core duties",
        helperText:
          "Summarize the core duties: e.g., 'I was responsible for planning, budgeting, stakeholder alignment, and risk management of multiple projects across the organization.'",
      },
      {
        id: "projects-objectives",
        text: "Which programs or projects did you oversee, and what was their primary objective?",
        type: "textarea",
        required: true,
        placeholder: "Describe your projects and objectives",
        helperText:
          "Think of the biggest or most strategic programs you led. Were they aimed at digital transformation, product launches, or organizational change? Describe the scope of each initiative.",
      },
      {
        id: "input-metrics",
        text: "What were the key input metrics you managed?",
        type: "textarea",
        required: false,
        placeholder: "Describe the key metrics",
        helperText:
          "Examples: budget (in $), number of concurrent projects, sprint velocity, number of stakeholders, timeline constraints.",
      },
      {
        id: "outcomes",
        text: "What measurable outcomes did you achieve?",
        type: "textarea",
        required: true,
        placeholder: "Provide measurable outcomes",
        helperText:
          "Mention metrics like on-time delivery rate, cost savings, ROI improvements, defect reduction, or stakeholder satisfaction scores. Provide specific numbers or percentages if possible.",
      },
      {
        id: "innovations",
        text: "What were your biggest contributions or innovations in these programs?",
        type: "textarea",
        required: false,
        placeholder: "Describe your contributions and innovations",
        helperText:
          "Did you introduce a new project management tool, streamline a process, reduce wasteful steps, or create a new reporting system?",
      },
      {
        id: "challenges",
        text: "What major challenges did you face, and how did you overcome them?",
        type: "textarea",
        required: true,
        placeholder: "Describe challenges and solutions",
        helperText:
          "E.g., budget cuts, scope creep, inter-department conflicts, changing priorities. Mention your problem-solving approach.",
      },
      {
        id: "company-impact",
        text: "How did your work directly impact company goals or KPIs?",
        type: "textarea",
        required: true,
        placeholder: "Describe the impact on company goals",
        helperText:
          "If your results contributed to an overall corporate objective (e.g., hitting quarterly targets, capturing market share), highlight that connection.",
      },
      {
        id: "feedback",
        text: "What feedback or recognition did you receive for your work?",
        type: "textarea",
        required: false,
        placeholder: "Provide feedback or recognition details",
        helperText: "Mention awards, performance reviews, stakeholder testimonials, or promotions.",
      },
    ],
  },
];
