import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

const CONTENT = {
  en: {
    brandName: "Mahinur Technologies",
    brandTagline: "AI & Business Solutions",
    nav: {
      home: "Home",
      solutions: "Solutions",
      caseStudies: "Case Studies",
      about: "About",
      contact: "Contact",
    },
    ctaPrimary: "Book Strategy Audit",
    ctaSecondary: "Explore Solutions",
    hero: {
      badge: "Bangladesh Roots · Global Delivery",
      titleLine1: "Intelligent AI & Growth Systems",
      titleLine2: "Built for Modern Businesses",
      subtitle:
        "We design practical AI workflows, custom web platforms, and performance growth architectures that help ambitious companies scale without operational bloat.",
      primaryBtn: "Start a Conversation",
      secondaryBtn: "View Case Studies",
      stats: [
        { value: "3.4x", label: "Average Lead-to-Pipeline Lift" },
        { value: "65%", label: "Manual Ops Time Reduced" },
        { value: "24/7", label: "Automated Customer Response" },
        { value: "100%", label: "Bilingual & Global Ready" },
      ],
    },
    trustStrip: {
      label: "Trusted across high-velocity sectors",
      sectors: [
        "Healthcare & Life Sciences",
        "B2B SaaS & Tech",
        "Retail & E-Commerce",
        "EdTech & Training",
        "Logistics & Operations",
        "Financial Services",
      ],
    },
    pillars: {
      eyebrow: "Core Capabilities",
      title: "Three Focused Pillars for Measurable Scale",
      subtitle:
        "Instead of fragmented tools and bloated retainers, we build cohesive systems around revenue, automation, and customer experience.",
      items: [
        {
          icon: "ai",
          title: "AI Workflow & Agent Systems",
          desc: "Deploy custom AI assistants, knowledge retrieval pipelines, and automated CRM/reporting workflows that eliminate repetitive bottlenecks.",
          points: [
            "SOP & internal knowledge copilot",
            "Automated lead qualification & routing",
            "Executive reporting & data synthesis",
          ],
        },
        {
          icon: "web",
          title: "High-Conversion Web & Product Engineering",
          desc: "Launch fast, responsive, bilingual web applications and conversion-focused landing ecosystems engineered for speed and clarity.",
          points: [
            "React & modern frontend architecture",
            "Bilingual English & Bangla interfaces",
            "SEO-ready structure & analytics tracking",
          ],
        },
        {
          icon: "growth",
          title: "Revenue Operations & Growth Systems",
          desc: "Align positioning, outbound/inbound funnels, and conversion tracking so every campaign compounds into predictable pipeline.",
          points: [
            "Offer & positioning architecture",
            "Multi-channel funnel & CRM automation",
            "Conversion rate & pipeline telemetry",
          ],
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "From Audit to Live Production in Four Clear Phases",
      subtitle:
        "Structured execution with transparent milestones—built to deliver early wins while establishing long-term technical equity.",
      steps: [
        {
          step: "01",
          title: "Discovery & Bottleneck Audit",
          desc: "We map your current workflows, customer journey, and tooling gaps to identify high-ROI automation and growth opportunities.",
          duration: "Week 1",
        },
        {
          step: "02",
          title: "System Architecture & Blueprint",
          desc: "We define the exact technical stack, bilingual UX flows, data touchpoints, and success metrics before writing production code.",
          duration: "Week 2",
        },
        {
          step: "03",
          title: "Agile Build & Integration",
          desc: "We build, connect APIs/CRM/messaging channels, and test edge cases with real operational scenarios.",
          duration: "Weeks 3–5",
        },
        {
          step: "04",
          title: "Launch, Handover & Optimization",
          desc: "We deploy to production, train your team, monitor performance metrics, and iterate continuously for stronger ROI.",
          duration: "Ongoing",
        },
      ],
    },
    caseStudies: {
      eyebrow: "Selected Outcomes",
      title: "Practical Engineering & Growth Case Studies",
      subtitle:
        "Representative engagements showing how structured AI systems and clear digital execution solve real business constraints.",
      filterAll: "All",
      filterAI: "AI & Automation",
      filterWeb: "Web & Systems",
      filterGrowth: "Growth & Ops",
      items: [
        {
          id: "ops-copilot",
          category: "AI & Automation",
          client: "Regional Distribution & Field Operations",
          title: "Automated Field Reporting & Knowledge Assistant",
          challenge:
            "Field teams spent hours compiling daily updates and searching scattered guidelines, delaying management visibility.",
          solution:
            "Built a structured reporting workflow paired with an instant policy & product Q&A assistant that summarizes daily field insights.",
          metrics: [
            { label: "Report Turnaround", value: "-72%" },
            { label: "Query Resolution", value: "< 15 sec" },
            { label: "Weekly Hours Saved", value: "40+ hrs" },
          ],
          tags: ["AI Assistant", "Workflow Automation", "Reporting"],
        },
        {
          id: "bilingual-platform",
          category: "Web & Systems",
          client: "Cross-Border Service & Advisory Brand",
          title: "Bilingual Enterprise Web Presence & Audit Funnel",
          challenge:
            "Prospects in both English-speaking markets and Bangla-speaking teams needed clear service framing and frictionless inquiry capture.",
          solution:
            "Engineered a fast bilingual React web platform with instant English/Bangla switching, interactive service architecture, and guided audit booking.",
          metrics: [
            { label: "Page Load Feel", value: "Instant" },
            { label: "Audit Bookings", value: "+2.6x" },
            { label: "Mobile Usability", value: "99/100" },
          ],
          tags: ["React", "Bilingual UX", "Lead Funnel"],
        },
        {
          id: "lead-engine",
          category: "Growth & Ops",
          client: "B2B & High-Ticket Service Providers",
          title: "Multi-Stage Qualification & Follow-Up Engine",
          challenge:
            "Inbound inquiries arrived across channels without structured qualification, leading to slow response times and lost leads.",
          solution:
            "Implemented automated inquiry triage, tailored proposal pathways, and structured follow-up sequences aligned with buyer intent.",
          metrics: [
            { label: "First Response", value: "< 5 min" },
            { label: "Qualified Calls", value: "+145%" },
            { label: "Pipeline Clarity", value: "100%" },
          ],
          tags: ["Funnel Architecture", "CRM Logic", "Conversion"],
        },
      ],
    },
    about: {
      eyebrow: "About Mahinur Technologies",
      title: "Rooted in Bangladesh. Engineered for Global Standards.",
      p1: "Mahinur Technologies was founded with a clear conviction: businesses don't need hype-driven experiments—they need dependable systems that save time, sharpen positioning, and generate measurable revenue.",
      p2: "Operating from Bangladesh with global delivery standards, we bridge practical operational understanding with modern AI and web engineering. Every solution is built to be maintainable, transparent, and adaptable as your organization grows.",
      principlesTitle: "Operating Principles",
      principles: [
        {
          title: "Clarity Over Complexity",
          desc: "Every feature, workflow, and screen earns its place by moving a real business metric.",
        },
        {
          title: "Human-in-the-Loop Reliability",
          desc: "AI accelerates execution while keeping critical decisions, accuracy, and accountability in human hands.",
        },
        {
          title: "Bilingual & Inclusive Reach",
          desc: "Seamless communication across English and Bangla so local roots and global ambition reinforce each other.",
        },
        {
          title: "Ownership & Long-Term Value",
          desc: "Clean architecture, documented handoffs, and systems your team can actually run and scale.",
        },
      ],
    },
    faq: {
      eyebrow: "Common Questions",
      title: "Answers Before We Get Started",
      items: [
        {
          q: "Can we switch between English and Bangla across the entire website?",
          a: "Yes. Use the EN / বাংলা toggle in the top navigation bar at any time to switch interface copy and key sections between English and Bangla.",
        },
        {
          q: "How quickly can a typical project or MVP go live?",
          a: "Focused landing ecosystems and initial workflow automations typically launch within 1 to 2 weeks, while multi-part web applications and custom AI pipelines take 3 to 6 weeks depending on scope.",
        },
        {
          q: "Do you work with both local businesses in Bangladesh and international clients?",
          a: "Yes. Our workflows, communication cadence, and technical delivery support teams in Dhaka/Bangladesh as well as clients across North America, Europe, APAC, and the Middle East.",
        },
        {
          q: "What happens if we already have existing tools, sheets, or CRMs?",
          a: "We audit what you currently use first and integrate or streamline around it wherever possible so you avoid unnecessary migration friction.",
        },
      ],
    },
    contact: {
      eyebrow: "Start a Project",
      title: "Book a Focused Strategy & Systems Audit",
      subtitle:
        "Share where your business is today and what bottleneck you want to solve next. We will respond with a clear action plan—no generic sales fluff.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "e.g., Mahinur Islam",
        emailLabel: "Work Email",
        emailPlaceholder: "name@company.com",
        companyLabel: "Company / Brand",
        companyPlaceholder: "Mahinur Technologies",
        serviceLabel: "Primary Focus Area",
        services: [
          "AI Workflow & Agent Systems",
          "Bilingual Web & Product Build",
          "Growth Funnel & Ops Automation",
          "Full-Stack Advisory & Audit",
        ],
        budgetLabel: "Estimated Timeline",
        timelines: ["ASAP (Within 2 Weeks)", "This Month", "Next 1–2 Months", "Exploring Options"],
        messageLabel: "Project Goals & Current Bottlenecks",
        messagePlaceholder:
          "Tell us what you are building, what feels slow or manual right now, and what success looks like in 60 days...",
        submitBtn: "Request Strategy Audit",
        successTitle: "Audit Request Prepared",
        successBody:
          "Thank you. Your project brief is ready—you can also reach out directly via email or WhatsApp for faster coordination.",
        resetBtn: "Send Another Brief",
      },
      directCard: {
        title: "Direct Channels",
        locationLabel: "Location",
        locationValue: "Dhaka, Bangladesh (Serving Global Clients)",
        emailLabel: "Email",
        emailValue: "hello@mahinurtech.com",
        hoursLabel: "Response Window",
        hoursValue: "Within 24 business hours",
        whatsappCta: "Chat on WhatsApp",
        emailCta: "Send Direct Email",
      },
    },
    footer: {
      desc: "Practical AI workflows, modern web engineering, and growth systems built for measurable business impact.",
      colProduct: "Solutions",
      colCompany: "Company",
      colConnect: "Connect",
      rights: "All rights reserved.",
    },
  },
  bn: {
    brandName: "Mahinur Technologies",
    brandTagline: "AI ও বিজনেস সলিউশনস",
    nav: {
      home: "হোম",
      solutions: "সলিউশনস",
      caseStudies: "কেস স্টাডিজ",
      about: "সম্পর্কে",
      contact: "যোগাযোগ",
    },
    ctaPrimary: "স্ট্র্যাটেজি অডিট বুক করুন",
    ctaSecondary: "সলিউশনস দেখুন",
    hero: {
      badge: "বাংলাদেশ থেকে শুরু · বৈশ্বিক মানদণ্ডে ডেলিভারি",
      titleLine1: "আধুনিক ব্যবসার জন্য স্মার্ট AI",
      titleLine2: "ও গ্রোথ সিস্টেমস",
      subtitle:
        "আমরা কার্যকর AI ওয়ার্কফ্লো, কাস্টম ওয়েব প্ল্যাটফর্ম এবং গ্রোথ আর্কিটেকচার তৈরি করি—যা অপ্রয়োজনীয় জটিলতা ছাড়াই আপনার ব্যবসাকে দ্রুত স্কেল করতে সাহায্য করে।",
      primaryBtn: "কথা বলুন",
      secondaryBtn: "কেস স্টাডিজ দেখুন",
      stats: [
        { value: "3.4x", label: "লিড থেকে পাইপলাইন বৃদ্ধি" },
        { value: "65%", label: "ম্যানুয়াল কাজের সময় সাশ্রয়" },
        { value: "24/7", label: "অটোমেটেড রেসপন্স সিস্টেম" },
        { value: "100%", label: "ইংরেজি ও বাংলা সাপোর্ট" },
      ],
    },
    trustStrip: {
      label: "বিভিন্ন খাতের প্রতিষ্ঠানের জন্য উপযোগী",
      sectors: [
        "হেলথকেয়ার ও লাইফ সায়েন্সেস",
        "B2B SaaS ও টেক",
        "রিটেইল ও ই-কমার্স",
        "এডটেক ও ট্রেনিং",
        "লজিস্টিকস ও অপারেশনস",
        "ফাইন্যান্সিয়াল সার্ভিসেস",
      ],
    },
    pillars: {
      eyebrow: "মূল সক্ষমতা",
      title: "পরিমাপযোগ্য প্রবৃদ্ধির জন্য তিনটি সুনির্দিষ্ট ভিত্তি",
      subtitle:
        "এলোমেলো টুল বা অকার্যকর কাজের বদলে আমরা রেভিনিউ, অটোমেশন এবং কাস্টমার এক্সপেরিয়েন্সকে কেন্দ্র করে সমন্বিত সিস্টেম গড়ে তুলি।",
      items: [
        {
          icon: "ai",
          title: "AI ওয়ার্কফ্লো ও এজেন্ট সিস্টেমস",
          desc: "কাস্টম AI অ্যাসিস্ট্যান্ট, নলেজ সার্চ এবং অটোমেটেড রিপোর্টিং ওয়ার্কফ্লো তৈরি করুন যা পুনরাবৃত্তিমূলক কাজ কমিয়ে আনে।",
          points: [
            "SOP ও অভ্যন্তরীণ নলেজ কো-পাইলট",
            "অটোমেটেড লিড যাচাই ও রাউটিং",
            "দ্রুত সামারি ও ডেটা রিপোর্টিং",
          ],
        },
        {
          icon: "web",
          title: "হাই-কনভার্সন ওয়েব ও প্রোডাক্ট ইঞ্জিনিয়ারিং",
          desc: "দ্রুতগতির, রেসপন্সিভ ও বাংলা-ইংরেজি ওয়েব অ্যাপ্লিকেশন এবং ল্যান্ডিং সিস্টেম তৈরি করুন যা ভিজিটরকে গ্রাহকে রূপান্তর করে।",
          points: [
            "React ও আধুনিক ফ্রন্টএন্ড আর্কিটেকচার",
            "দ্বিভাষিক ইংরেজি ও বাংলা ইন্টারফেস",
            "SEO উপযোগী কাঠামো ও অ্যানালিটিক্স",
          ],
        },
        {
          icon: "growth",
          title: "রেভিনিউ অপারেশনস ও গ্রোথ সিস্টেমস",
          desc: "অফার পজিশনিং, ফানেল এবং কনভার্সন ট্র্যাকিং এমনভাবে সাজান যাতে প্রতিটি উদ্যোগ ধারাবাহিক ব্যবসায়িক ফলাফল দেয়।",
          points: [
            "অফার ও পজিশনিং স্ট্রাকচার",
            "ফানেল ও ফলো-আপ অটোমেশন",
            "কনভার্সন ও পাইপলাইন মনিটরিং",
          ],
        },
      ],
    },
    process: {
      eyebrow: "কাজের ধারা",
      title: "অডিট থেকে লাইভ প্রোডাকশন—চারটি স্পষ্ট ধাপে",
      subtitle:
        "স্বচ্ছ মাইলস্টোন ও কাঠামোবদ্ধ কাজের মাধ্যমে দ্রুত ফলাফল এবং দীর্ঘমেয়াদী টেকনিক্যাল সক্ষমতা নিশ্চিত করা হয়।",
      steps: [
        {
          step: "01",
          title: "ডিসকভারি ও বটলনেক অডিট",
          desc: "আপনার বর্তমান ওয়ার্কফ্লো, কাস্টমার জার্নি এবং টুলসের ঘাটতি বিশ্লেষণ করে সবচেয়ে লাভজনক অটোমেশন ও গ্রোথ সুযোগ চিহ্নিত করা হয়।",
          duration: "সপ্তাহ ১",
        },
        {
          step: "02",
          title: "সিস্টেম আর্কিটেকচার ও ব্লুপ্রিন্ট",
          desc: "কোড লেখার আগেই টেক স্ট্যাক, বাংলা-ইংরেজি UX ফ্লো, ডেটা কানেকশন এবং সাফল্যের মাপকাঠি চূড়ান্ত করা হয়।",
          duration: "সপ্তাহ ২",
        },
        {
          step: "03",
          title: "অ্যাজাইল বিল্ড ও ইন্টিগ্রেশন",
          desc: "প্রয়োজনীয় ফিচার তৈরি, API/মেসেজিং/CRM সংযুক্তকরণ এবং বাস্তব কাজের দৃশ্যপটে নিবিড়ভাবে যাচাই করা হয়।",
          duration: "সপ্তাহ ৩–৫",
        },
        {
          step: "04",
          title: "লঞ্চ, হ্যান্ডওভার ও অপটিমাইজেশন",
          desc: "লাইভ ডিপ্লয়মেন্ট, টিম গাইডেন্স এবং পারফরম্যান্স বিশ্লেষণের মাধ্যমে সিস্টেমকে আরও কার্যকর করা হয়।",
          duration: "ধারাবাহিক",
        },
      ],
    },
    caseStudies: {
      eyebrow: "নির্বাচিত ফলাফল",
      title: "বাস্তবসম্মত ইঞ্জিনিয়ারিং ও গ্রোথ কেস স্টাডিজ",
      subtitle:
        "সঠিক AI সিস্টেম এবং সুপরিকল্পিত ডিজিটাল এক্সিকিউশন কীভাবে ব্যবসায়িক চ্যালেঞ্জ সমাধান করে তার কিছু উদাহরণ।",
      filterAll: "সবগুলো",
      filterAI: "AI ও অটোমেশন",
      filterWeb: "ওয়েব ও সিস্টেমস",
      filterGrowth: "গ্রোথ ও অপস",
      items: [
        {
          id: "ops-copilot",
          category: "AI ও অটোমেশন",
          client: "রিজিওনাল ডিস্ট্রিবিউশন ও ফিল্ড অপারেশনস",
          title: "অটোমেটেড ফিল্ড রিপোর্টিং ও নলেজ অ্যাসিস্ট্যান্ট",
          challenge:
            "ফিল্ড টিমের দৈনিক রিপোর্ট তৈরি ও তথ্য খুঁজতে অনেক সময় ব্যয় হতো, ফলে ব্যবস্থাপনায় আপডেট পৌঁছাতে দেরি হতো।",
          solution:
            "স্ট্রাকচার্ড রিপোর্টিং ফ্লো এবং তাৎক্ষণিক গাইডলাইন/তথ্য সহায়ক AI অ্যাসিস্ট্যান্ট যুক্ত করা হয় যা দৈনিক তথ্য দ্রুত সারসংক্ষেপ করে।",
          metrics: [
            { label: "রিপোর্ট সময় সাশ্রয়", value: "-72%" },
            { label: "তথ্য পাওয়ার গতি", value: "< 15 সেকেন্ড" },
            { label: "সাপ্তাহিক সময় সাশ্রয়", value: "40+ ঘণ্টা" },
          ],
          tags: ["AI অ্যাসিস্ট্যান্ট", "ওয়ার্কফ্লো অটোমেশন", "রিপোর্টিং"],
        },
        {
          id: "bilingual-platform",
          category: "ওয়েব ও সিস্টেমস",
          client: "দেশীয় ও আন্তর্জাতিক সার্ভিস ব্র্যান্ড",
          title: "দ্বিভাষিক ওয়েব প্ল্যাটফর্ম ও অডিট ফানেল",
          challenge:
            "ইংরেজি ও বাংলা উভয় ভাষার ভিজিটর ও টিমের জন্য পরিষ্কার সার্ভিস তথ্য এবং সহজ যোগাযোগ মাধ্যম প্রয়োজন ছিল।",
          solution:
            "দ্রুতগতির বাংলা-ইংরেজি React ওয়েবসাইট তৈরি করা হয় যেখানে এক ক্লিকে ভাষা বদলানো এবং সহজে অডিট রিকোয়েস্ট পাঠানো যায়।",
          metrics: [
            { label: "পেজ লোড অভিজ্ঞতা", value: "তাৎক্ষণিক" },
            { label: "অডিট বুকিং বৃদ্ধি", value: "+2.6x" },
            { label: "মোবাইল স্কোর", value: "99/100" },
          ],
          tags: ["React", "দ্বিভাষিক UX", "লিড ফানেল"],
        },
        {
          id: "lead-engine",
          category: "গ্রোথ ও অপস",
          client: "B2B ও সার্ভিস প্রতিষ্ঠানসমূহ",
          title: "কোয়ালিফিকেশন ও ফলো-আপ ইঞ্জিন",
          challenge:
            "বিভিন্ন মাধ্যম থেকে আসা inquiry সঠিকভাবে যাচাই না হওয়ায় রেসপন্স দিতে দেরি হতো এবং সম্ভাব্য ক্লায়েন্ট হাতছাড়া হতো।",
          solution:
            "প্রাথমিক তথ্য যাচাই, উপযুক্ত প্রস্তাবনা ধাপ এবং নিয়মতান্ত্রিক ফলো-আপ ফ্লো চালু করা হয়।",
          metrics: [
            { label: "প্রথম রেসপন্স", value: "< 5 মিনিট" },
            { label: "কোয়ালিফাইড কল", value: "+145%" },
            { label: "পাইপলাইন স্বচ্ছতা", value: "100%" },
          ],
          tags: ["ফানেল আর্কিটেকচার", "CRM লজিক", "কনভার্সন"],
        },
      ],
    },
    about: {
      eyebrow: "Mahinur Technologies সম্পর্কে",
      title: "বাংলাদেশের শেকড়ে গড়া। বৈশ্বিক মানে তৈরি।",
      p1: "Mahinur Technologies প্রতিষ্ঠিত হয়েছে একটি স্পষ্ট লক্ষ্য নিয়ে—ব্যবসায়ের প্রয়োজন অকার্যকর ট্রেন্ড নয়, বরং নির্ভরযোগ্য সিস্টেম যা সময় বাঁচায়, অবস্থান শক্ত করে এবং বাস্তব রেভিনিউ বাড়ায়।",
      p2: "বাংলাদেশ থেকে আন্তর্জাতিক মানদণ্ডে কাজ করার অভিজ্ঞতা নিয়ে আমরা বাস্তব অপারেশনাল চাহিদা এবং আধুনিক AI ও ওয়েব ইঞ্জিনিয়ারিংয়ের মধ্যে সেতুবন্ধন তৈরি করি।",
      principlesTitle: "আমাদের কাজের মূলনীতি",
      principles: [
        {
          title: "জটিলতার বদলে স্পষ্টতা",
          desc: "প্রতিটি ফিচার, ওয়ার্কফ্লো ও সেকশন বাস্তব ব্যবসায়িক লক্ষ্য পূরণে ভূমিকা রাখে।",
        },
        {
          title: "মানবিক তত্ত্বাবধানে নির্ভরযোগ্যতা",
          desc: "AI কাজকে দ্রুততর করে, আর গুরুত্বপূর্ণ সিদ্ধান্ত ও দায়বদ্ধতা থাকে মানুষের হাতে।",
        },
        {
          title: "বাংলা ও ইংরেজিতে সাবলীল যোগাযোগ",
          desc: "স্থানীয় বাস্তবতা ও বৈশ্বিক সম্ভাবনাকে যুক্ত রেখে উভয় ভাষায় কার্যকর সমাধান দেওয়া হয়।",
        },
        {
          title: "স্বচ্ছতা ও দীর্ঘমেয়াদী মালিকানা",
          desc: "পরিচ্ছন্ন কাঠামো ও স্পষ্ট হ্যান্ডওভার যাতে আপনার টিম সহজেই সিস্টেম পরিচালনা করতে পারে।",
        },
      ],
    },
    faq: {
      eyebrow: "সাধারণ জিজ্ঞাসা",
      title: "শুরু করার আগে প্রয়োজনীয় তথ্য",
      items: [
        {
          q: "পুরো ওয়েবসাইটে কি ইংরেজি ও বাংলা ভাষার মধ্যে পরিবর্তন করা যাবে?",
          a: "হ্যাঁ। উপরের নেভিগেশন বারে থাকা EN / বাংলা বাটনে ক্লিক করে যেকোনো সময় ভাষা পরিবর্তন করা যাবে।",
        },
        {
          q: "একটি প্রজেক্ট বা MVP লাইভ হতে সাধারণত কত সময় লাগে?",
          a: "নির্দিষ্ট ল্যান্ডিং সিস্টেম বা প্রাথমিক অটোমেশন সাধারণত ১ থেকে ২ সপ্তাহে এবং বড় ওয়েব অ্যাপ বা কাস্টম AI সিস্টেম ৩ থেকে ৬ সপ্তাহে সম্পন্ন হয়।",
        },
        {
          q: "আপনারা কি দেশীয় ও আন্তর্জাতিক উভয় ধরনের ক্লায়েন্টের সাথে কাজ করেন?",
          a: "হ্যাঁ। ঢাকা/বাংলাদেশের পাশাপাশি বিশ্বের বিভিন্ন অঞ্চলের ব্যবসার প্রয়োজন অনুযায়ী আমরা সলিউশন তৈরি ও সাপোর্ট দিই।",
        },
        {
          q: "আমাদের আগে থেকে ব্যবহৃত টুলস, শিট বা সিস্টেম থাকলে কী হয়?",
          a: "আমরা প্রথমে আপনার বর্তমান সেটআপ পর্যালোচনা করি এবং অপ্রয়োজনীয় ঝামেলা না বাড়িয়ে সেগুলোর সাথেই সমন্বয় করার চেষ্টা করি।",
        },
      ],
    },
    contact: {
      eyebrow: "প্রজেক্ট শুরু করুন",
      title: "একটি স্ট্র্যাটেজি ও সিস্টেমস অডিট বুক করুন",
      subtitle:
        "আপনার ব্যবসার বর্তমান অবস্থা এবং কোন জায়গাটি দ্রুত উন্নত করতে চান তা জানান। আমরা একটি স্পষ্ট কর্মপরিকল্পনা নিয়ে সাড়া দেব।",
      form: {
        nameLabel: "আপনার নাম",
        namePlaceholder: "যেমন: Mahinur Islam",
        emailLabel: "ইমেইল ঠিকানা",
        emailPlaceholder: "name@company.com",
        companyLabel: "প্রতিষ্ঠান বা ব্র্যান্ডের নাম",
        companyPlaceholder: "Mahinur Technologies",
        serviceLabel: "মূল আগ্রহের ক্ষেত্র",
        services: [
          "AI ওয়ার্কফ্লো ও এজেন্ট সিস্টেমস",
          "দ্বিভাষিক ওয়েব ও প্রোডাক্ট বিল্ড",
          "গ্রোথ ফানেল ও অপস অটোমেশন",
          "ফুল-স্ট্যাক অ্যাডভাইজরি ও অডিট",
        ],
        budgetLabel: "সম্ভাব্য সময়সীমা",
        timelines: ["দ্রুত প্রয়োজন (২ সপ্তাহের মধ্যে)", "এই মাসের মধ্যে", "পরবর্তী ১–২ মাস", "পর্যালোচনা পর্যায়ে"],
        messageLabel: "প্রজেক্টের লক্ষ্য ও বর্তমান চ্যালেঞ্জ",
        messagePlaceholder:
          "আপনি কী তৈরি করতে চাচ্ছেন, কোথায় সময় বা কাজের গতি আটকে আছে এবং আগামী ৬০ দিনে কী ফলাফল চান তা সংক্ষেপে লিখুন...",
        submitBtn: "অডিট রিকোয়েস্ট পাঠান",
        successTitle: "অডিট রিকোয়েস্ট প্রস্তুত হয়েছে",
        successBody:
          "ধন্যবাদ। আপনার ব্রিফটি তৈরি হয়েছে—দ্রুত যোগাযোগের জন্য সরাসরি ইমেইল বা WhatsApp-এও মেসেজ পাঠাতে পারেন।",
        resetBtn: "নতুন ব্রিফ লিখুন",
      },
      directCard: {
        title: "সরাসরি যোগাযোগ",
        locationLabel: "অবস্থান",
        locationValue: "ঢাকা, বাংলাদেশ (দেশীয় ও বৈশ্বিক সেবা)",
        emailLabel: "ইমেইল",
        emailValue: "hello@mahinurtech.com",
        hoursLabel: "সাড়া দেওয়ার সময়",
        hoursValue: "সাধারণত ২৪ কর্মঘণ্টার মধ্যে",
        whatsappCta: "WhatsApp-এ কথা বলুন",
        emailCta: "সরাসরি ইমেইল করুন",
      },
    },
    footer: {
      desc: "কার্যকর AI ওয়ার্কফ্লো, আধুনিক ওয়েব ইঞ্জিনিয়ারিং এবং পরিমাপযোগ্য গ্রোথ সিস্টেমস।",
      colProduct: "সলিউশনস",
      colCompany: "কোম্পানি",
      colConnect: "যোগাযোগ",
      rights: "সর্বস্বত্ব সংরক্ষিত।",
    },
  },
};

function PillarIcon({ type }) {
  if (type === "ai") {
    return <Bot className="h-6 w-6 text-emerald-400" />;
  }
  if (type === "web") {
    return <Layers className="h-6 w-6 text-sky-400" />;
  }
  return <TrendingUp className="h-6 w-6 text-amber-400" />;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      service: prev.service || t.contact.form.services[0],
      timeline: prev.timeline || t.contact.form.timelines[0],
    }));
  }, [lang, t]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, [activePage]);

  const navigateTo = (page) => {
    setActivePage(page);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;
    setSubmitted(true);
  };

  const filteredCaseStudies =
    selectedCategory === "ALL"
      ? t.caseStudies.items
      : t.caseStudies.items.filter((item) => item.category === selectedCategory);

  const categoryTabs = [
    { key: "ALL", label: t.caseStudies.filterAll },
    { key: t.caseStudies.items[0].category, label: t.caseStudies.filterAI },
    { key: t.caseStudies.items[1].category, label: t.caseStudies.filterWeb },
    { key: t.caseStudies.items[2].category, label: t.caseStudies.filterGrowth },
  ];

  const whatsappUrl = `https://wa.me/8801734786855?text=${encodeURIComponent(
    lang === "bn"
      ? "হ্যালো Mahinur Technologies, আমি একটি প্রজেক্ট ও স্ট্র্যাটেজি অডিট নিয়ে কথা বলতে চাই।"
      : "Hello Mahinur Technologies, I would like to discuss a project and strategy audit."
  )}`;

  const mailtoUrl = `mailto:hello@mahinurtech.com?subject=${encodeURIComponent(
    "Strategy & Systems Audit — Mahinur Technologies"
  )}&body=${encodeURIComponent(
    `Name: ${formState.name || "-"}\nCompany: ${formState.company || "-"}\nFocus: ${
      formState.service || "-"
    }\nTimeline: ${formState.timeline || "-"}\n\nDetails:\n${formState.message || "-"}`
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
              MT
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {t.brandName}
              </div>
              <div className="text-[11px] text-slate-400">{t.brandTagline}</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {[
              { id: "home", label: t.nav.home },
              { id: "solutions", label: t.nav.solutions },
              { id: "case-studies", label: t.nav.caseStudies },
              { id: "about", label: t.nav.about },
              { id: "contact", label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(item.id)}
                className={`transition-colors ${
                  activePage === item.id
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Language Toggle + Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  lang === "en"
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  lang === "bn"
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                বাংলা
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="inline-flex md:hidden items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
            {[
              { id: "home", label: t.nav.home },
              { id: "solutions", label: t.nav.solutions },
              { id: "case-studies", label: t.nav.caseStudies },
              { id: "about", label: t.nav.about },
              { id: "contact", label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(item.id)}
                className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {(activePage === "home" || activePage === "solutions") && (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-800/70 pt-14 pb-16 sm:pt-20 sm:pb-24">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="pointer-events-none absolute top-32 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300 mb-6">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{t.hero.badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                    {t.hero.titleLine1}{" "}
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                      {t.hero.titleLine2}
                    </span>
                  </h1>

                  <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                    {t.hero.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => navigateTo("contact")}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <span>{t.hero.primaryBtn}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateTo("case-studies")}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-800 transition-colors"
                    >
                      <span>{t.hero.secondaryBtn}</span>
                      <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                    </button>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {t.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 backdrop-blur-sm"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sectors Strip */}
            <section className="border-b border-slate-800/70 bg-slate-900/35 py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3.5">
                  {t.trustStrip.label}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {t.trustStrip.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-16 sm:py-24 border-b border-slate-800/70">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    {t.pillars.eyebrow}
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    {t.pillars.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {t.pillars.subtitle}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.pillars.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-500/40 transition-colors"
                    >
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950 mb-5">
                          <PillarIcon type={item.icon} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                        <ul className="mt-5 space-y-2.5 border-t border-slate-800/80 pt-4">
                          {item.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                            >
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigateTo("contact")}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                      >
                        <span>{t.ctaPrimary}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-24 bg-slate-900/25">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    {t.process.eyebrow}
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    {t.process.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {t.process.subtitle}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {t.process.steps.map((st) => (
                    <div
                      key={st.step}
                      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-black text-emerald-400/90">{st.step}</span>
                          <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                            {st.duration}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{st.title}</h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Case Studies Section */}
        {(activePage === "home" || activePage === "case-studies") && (
          <section className="py-16 sm:py-24 border-t border-slate-800/70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    {t.caseStudies.eyebrow}
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    {t.caseStudies.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {t.caseStudies.subtitle}
                  </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categoryTabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setSelectedCategory(tab.key)}
                      className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                        selectedCategory === tab.key
                          ? "bg-emerald-500 text-slate-950"
                          : "border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredCaseStudies.map((cs) => (
                  <article
                    key={cs.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-emerald-300 font-medium mb-3">
                        <span>{cs.category}</span>
                        <span className="text-slate-400">{cs.client}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{cs.title}</h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl bg-slate-950/80 p-2.5 border border-slate-800/70">
                            <div className="text-sm sm:text-base font-extrabold text-emerald-400">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About & FAQ Section */}
        {(activePage === "home" || activePage === "about") && (
          <section className="py-16 sm:py-24 border-t border-slate-800/70 bg-slate-900/25">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  {t.about.eyebrow}
                </div>
                <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  {t.about.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.about.p1}
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.about.p2}
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {t.about.principles.map((pr) => (
                    <div
                      key={pr.title}
                      className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                    >
                      <div className="text-sm font-bold text-white">{pr.title}</div>
                      <div className="mt-1 text-xs text-slate-400 leading-relaxed">{pr.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  {t.faq.eyebrow}
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">{t.faq.title}</h3>

                <div className="mt-5 space-y-3">
                  {t.faq.items.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={item.q}
                        className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white hover:bg-slate-800/40"
                        >
                          <span>{item.q}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-emerald-400 shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {(activePage === "home" || activePage === "contact") && (
          <section className="py-16 sm:py-24 border-t border-slate-800/70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  {t.contact.eyebrow}
                </div>
                <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  {t.contact.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
                  {submitted ? (
                    <div className="py-6 space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{t.contact.form.successTitle}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t.contact.form.successBody}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-emerald-400"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span>{t.contact.directCard.whatsappCta}</span>
                        </a>
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800"
                        >
                          <Mail className="h-4 w-4 text-emerald-400" />
                          <span>{t.contact.directCard.emailCta}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormState({
                              name: "",
                              email: "",
                              company: "",
                              service: t.contact.form.services[0],
                              timeline: t.contact.form.timelines[0],
                              message: "",
                            });
                          }}
                          className="rounded-xl border border-slate-800 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white"
                        >
                          {t.contact.form.resetBtn}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.contact.form.nameLabel} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            placeholder={t.contact.form.namePlaceholder}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.contact.form.emailLabel} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            placeholder={t.contact.form.emailPlaceholder}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.contact.form.companyLabel}
                          </label>
                          <input
                            type="text"
                            value={formState.company}
                            onChange={(e) =>
                              setFormState({ ...formState, company: e.target.value })
                            }
                            placeholder={t.contact.form.companyPlaceholder}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.contact.form.budgetLabel}
                          </label>
                          <select
                            value={formState.timeline}
                            onChange={(e) =>
                              setFormState({ ...formState, timeline: e.target.value })
                            }
                            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                          >
                            {t.contact.form.timelines.map((tl) => (
                              <option key={tl} value={tl}>
                                {tl}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.contact.form.serviceLabel}
                        </label>
                        <select
                          value={formState.service}
                          onChange={(e) =>
                            setFormState({ ...formState, service: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                        >
                          {t.contact.form.services.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.contact.form.messageLabel}
                        </label>
                        <textarea
                          rows={4}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          placeholder={t.contact.form.messagePlaceholder}
                          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
                      >
                        <span>{t.contact.form.submitBtn}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-white">{t.contact.directCard.title}</h3>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400">{t.contact.directCard.locationLabel}</div>
                        <div className="text-sm font-medium text-white">
                          {t.contact.directCard.locationValue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400">{t.contact.directCard.emailLabel}</div>
                        <div className="text-sm font-medium text-white">
                          {t.contact.directCard.emailValue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400">{t.contact.directCard.hoursLabel}</div>
                        <div className="text-sm font-medium text-white">
                          {t.contact.directCard.hoursValue}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/25"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{t.contact.directCard.whatsappCta}</span>
                    </a>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-800"
                    >
                      <Mail className="h-4 w-4 text-emerald-400" />
                      <span>{t.contact.directCard.emailCta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">{t.brandName}</div>
            <p className="mt-1 text-xs text-slate-400 max-w-md">{t.footer.desc}</p>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} {t.brandName}. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
