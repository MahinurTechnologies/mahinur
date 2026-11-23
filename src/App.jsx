import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cpu,
  ExternalLink,
  FileText,
  Globe,
  Headphones,
  Instagram,
  Layers,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  PhoneCall,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

const SITE_CONFIG = {
  brandName: 'Mahinur Technologies',
  websiteTitle: 'Mahinur Technologies | AI & Business Solutions',
  positioningEn: 'Bangladesh-Based, Global Service Provider',
  positioningBn: 'বাংলাদেশভিত্তিক, গ্লোবাল সার্ভিস প্রোভাইডার',
  sloganEn: 'Automate Smart. Grow Faster. Lead Tomorrow.',
  sloganBn: 'স্মার্টলি অটোমেট করুন। দ্রুত এগিয়ে যান। আগামীর নেতৃত্ব দিন।',
  secondaryMessageEn: 'We Automate. We Integrate. We Accelerate Your Growth.',
  secondaryMessageBn: 'আমরা অটোমেট করি। আমরা ইন্টিগ্রেট করি। আমরা আপনার গ্রোথ ত্বরান্বিত করি।',
  email: 'moinul855@gmail.com',
  whatsappUrl: 'https://wa.me/message/LE3ZQRBJVHD4F1',
  instagramUrl: 'https://www.instagram.com/mahinurtechnologies?fqnt=dnZldHcwaGp5MXo1',
  linkedInStatus: 'To be added later.',
  facebookStatus: 'Official page URL to be added later.',
  messengerStatus: 'Integration to be configured when the official Facebook page is available.',
  officeAddressStatus: 'To be added later.',
  domainStatus: 'Not purchased yet.',
  analytics: {
    ga4MeasurementId: 'G-XXXXXXXXXX',
    searchConsoleVerification: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_PLACEHOLDER',
  },
  colors: {
    deepMidnightNavy: '#07111F',
    darkNavy: '#0B1628',
    electricBlue: '#2563EB',
    brightCyan: '#22D3EE',
    champagneGold: '#D6B56D',
    softWhite: '#F8FAFC',
    mutedGray: '#94A3B8',
  },
};

const NAV_ITEMS = [
  { id: 'home', en: 'Home', bn: 'হোম' },
  { id: 'about', en: 'About', bn: 'আমাদের সম্পর্কে' },
  { id: 'services', en: 'Services', bn: 'সার্ভিসসমূহ' },
  { id: 'solutions', en: 'Solutions', bn: 'সলিউশনস' },
  { id: 'portfolio', en: 'Portfolio', bn: 'পোর্টফোলিও' },
  { id: 'pricing', en: 'Pricing', bn: 'প্রাইসিং' },
  { id: 'blog', en: 'Blog', bn: 'ব্লগ' },
  { id: 'contact', en: 'Contact', bn: 'যোগাযোগ' },
];

const SERVICES_DATA = [
  {
    slug: 'ai-lead-capture-whatsapp-chatbot',
    icon: MessageSquare,
    titleEn: 'AI Lead Capture & WhatsApp Chatbot',
    titleBn: 'AI লিড ক্যাপচার ও WhatsApp চ্যাটবট',
    summaryEn:
      'Capture incoming inquiries 24/7, qualify prospective buyers automatically, and guide prospects smoothly toward meaningful conversations.',
    summaryBn:
      '২৪/৭ ইনকামিং ইনকোয়ারি ক্যাপচার করুন, সম্ভাব্য কাস্টমার স্বয়ংক্রিয়ভাবে কোয়ালিফাই করুন এবং সঠিক ফলো-আপের মাধ্যমে কনভার্সেশন এগিয়ে নিন।',
    benefitEn: 'Faster response times without missing inquiries after hours.',
    benefitBn: 'অফিস সময়ের বাইরেও কোনো ইনকোয়ারি মিস না করে দ্রুত সাড়া দিন।',
    overviewEn:
      'Modern buyers expect immediate answers across messaging channels. We design structured AI lead capture and WhatsApp conversational flows tailored to your business rules, qualification questions, and escalation paths.',
    overviewBn:
      'আধুনিক কাস্টমাররা মেসেজিং চ্যানেলে দ্রুত সাড়া প্রত্যাশা করেন। আপনার ব্যবসার নিয়ম, লিড কোয়ালিফিকেশন প্রশ্ন এবং হ্যান্ডঅফ প্রক্রিয়া অনুযায়ী আমরা সাজানো AI লিড ক্যাপচার ও WhatsApp ফ্লো তৈরি করি।',
    problemsEn: [
      'Delayed replies causing high drop-off among interested leads',
      'Repetitive basic questions consuming team hours',
      'Disorganized lead details across chats and notes',
    ],
    problemsBn: [
      'দেরিতে রিপ্লাই দেওয়ার কারণে আগ্রহী লিড হাতছাড়া হওয়া',
      'একই ধরনের প্রাথমিক প্রশ্নের উত্তর দিতে টিমের মূল্যবান সময় নষ্ট হওয়া',
      'বিভিন্ন চ্যাটে লিডের তথ্য ছড়িয়ে-ছিটিয়ে থাকা',
    ],
    featuresEn: [
      'Structured lead qualification questions and intent routing',
      'Pre-filled contextual WhatsApp inquiry workflows',
      'Clean lead summary capture for sales follow-up',
      'Clear human handoff rules for complex discussions',
    ],
    featuresBn: [
      'লিড কোয়ালিফিকেশন প্রশ্ন ও ইনটেন্ট অনুযায়ী রাউটিং',
      'প্রসঙ্গ অনুযায়ী প্রি-ফিল্ড WhatsApp ইনকোয়ারি ফ্লো',
      'সেলস ফলো-আপের জন্য গোছানো লিড সামারি সংগ্রহ',
      'জটিল আলোচনায় হিউম্যান হ্যান্ডঅফের স্পষ্ট নিয়ম',
    ],
    benefitsEn: [
      'Consistent 24/7 initial engagement across time zones',
      'Better-qualified leads reaching your team',
      'Reduced manual screening effort',
    ],
    benefitsBn: [
      'বিভিন্ন টাইমজোনেও ২৪/৭ ধারাবাহিক প্রাথমিক সাড়া',
      'আপনার টিমের কাছে আরও উপযুক্ত ও কোয়ালিফাইড লিড পৌঁছানো',
      'ম্যানুয়াল বাছাইয়ের বাড়তি চাপ কমে যাওয়া',
    ],
    workflowEn: [
      'Map customer entry points, questions, and qualification criteria',
      'Design conversational paths and fallback responses',
      'Connect notification and lead logging channels',
      'Test edge cases, refine prompts, and monitor real usage',
    ],
    workflowBn: [
      'কাস্টমার এন্ট্রি পয়েন্ট, প্রশ্ন ও কোয়ালিফিকেশন শর্ত নির্ধারণ',
      'কথোপকথনের ধাপ ও ফলব্যাক রেসপন্স ডিজাইন',
      'নোটিফিকেশন ও লিড লগিং চ্যানেল সংযুক্ত করা',
      'পরীক্ষা, ফাইন-টিউনিং এবং বাস্তব ব্যবহার পর্যবেক্ষণ',
    ],
    useCasesEn: [
      'Service agencies qualifying project scope and budget range',
      'E-commerce and retail brands handling product and order inquiries',
      'Consultants booking discovery and audit conversations',
    ],
    useCasesBn: [
      'সার্ভিস এজেন্সির প্রজেক্ট স্কোপ ও বাজেট যাচাই',
      'ই-কমার্স ও রিটেইল ব্র্যান্ডের প্রোডাক্ট ও অর্ডার ইনকোয়ারি',
      'কনসালট্যান্টদের ডিসকভারি ও অডিট আলোচনা নির্ধারণ',
    ],
    faqsEn: [
      {
        q: 'Can the bot hand over complex leads to a real person?',
        a: 'Yes. Workflows can be structured so high-priority or complex inquiries route directly to your team or WhatsApp contact channel.',
      },
      {
        q: 'Does it replace our sales team?',
        a: 'No. It handles repetitive initial capture and qualification so your team focuses on meaningful conversations and closing.',
      },
    ],
    faqsBn: [
      {
        q: 'জটিল বা গুরুত্বপূর্ণ লিড কি সরাসরি মানুষের কাছে পাঠানো যায়?',
        a: 'হ্যাঁ। গুরুত্বপূর্ণ বা জটিল প্রশ্নগুলো সরাসরি আপনার টিম বা নির্ধারিত WhatsApp যোগাযোগ চ্যানেলে পাঠানোর ব্যবস্থা রাখা যায়।',
      },
      {
        q: 'এটি কি সেলস টিমের বিকল্প হিসেবে কাজ করে?',
        a: 'না। এটি প্রাথমিক তথ্য সংগ্রহ ও কোয়ালিফিকেশনের কাজ সহজ করে, যাতে আপনার টিম মূল আলোচনা ও সিদ্ধান্তে মনোযোগ দিতে পারে।',
      },
    ],
  },
  {
    slug: 'custom-business-workflow-automation',
    icon: Workflow,
    titleEn: 'Custom Business Workflow Automation',
    titleBn: 'কাস্টম বিজনেস ওয়ার্কফ্লো অটোমেশন',
    summaryEn:
      'Eliminate repetitive manual tasks, connect disconnected tools, and keep operational data synchronized across your business.',
    summaryBn:
      'পুনরাবৃত্তিমূলক ম্যানুয়াল কাজ কমান, আলাদা থাকা টুলগুলো সংযুক্ত করুন এবং ব্যবসার অপারেশনাল ডেটা নির্ভুল রাখুন।',
    benefitEn: 'Fewer manual errors and smoother daily operations.',
    benefitBn: 'ম্যানুয়াল ভুল কমে আসে এবং দৈনন্দিন কাজ আরও সুশৃঙ্খল হয়।',
    overviewEn:
      'Growing teams often lose hours copying data between forms, spreadsheets, email, and messaging apps. We design reliable, documented workflow automations built around your exact operational process.',
    overviewBn:
      'ব্যবসা বাড়ার সাথে সাথে ফর্ম, স্প্রেডশিট, ইমেইল এবং মেসেজিং অ্যাপের মাঝে ডেটা কপি করতে অনেক সময় চলে যায়। আপনার বাস্তব কাজের ধারা অনুযায়ী আমরা নির্ভরযোগ্য ও ডকুমেন্টেড ওয়ার্কফ্লো অটোমেশন তৈরি করি।',
    problemsEn: [
      'Manual copy-pasting of leads, bookings, and status updates',
      'Missed internal notifications when new requests arrive',
      'Data mismatches across disconnected apps',
    ],
    problemsBn: [
      'লিড, বুকিং ও স্ট্যাটাস আপডেট ম্যানুয়ালি কপি-পেস্ট করা',
      'নতুন রিকোয়েস্ট এলে ভেতরের টিমে সময়মতো নোটিফিকেশন না যাওয়া',
      'আলাদা থাকা অ্যাপগুলোর মাঝে ডেটার অসামঞ্জস্য',
    ],
    featuresEn: [
      'Event-triggered multi-step operational workflows',
      'Automated team alerts, task creation, and status routing',
      'Input validation and error-handling checkpoints',
      'Clear process documentation for easy maintenance',
    ],
    featuresBn: [
      'ইভেন্ট-ভিত্তিক মাল্টি-স্টেপ অপারেশনাল ওয়ার্কফ্লো',
      'স্বয়ংক্রিয় টিম অ্যালার্ট, টাস্ক তৈরি ও স্ট্যাটাস রাউটিং',
      'ইনপুট ভ্যালিডেশন ও এরর হ্যান্ডলিং চেকপয়েন্ট',
      'সহজ রক্ষণাবেক্ষণের জন্য স্পষ্ট প্রসেস ডকুমেন্টেশন',
    ],
    benefitsEn: [
      'Saves recurring weekly administrative hours',
      'Improves operational speed and consistency',
      'Scales smoothly as transaction volume grows',
    ],
    benefitsBn: [
      'সাপ্তাহিক পুনরাবৃত্তিমূলক প্রশাসনিক সময় সাশ্রয় করে',
      'কাজের গতি ও ধারাবাহিকতা বাড়ায়',
      'কাজের চাপ বাড়লেও সিস্টেম সহজে মানিয়ে নিতে পারে',
    ],
    workflowEn: [
      'Audit existing manual steps, tools, and bottlenecks',
      'Architect clean triggers, data mappings, and fail-safes',
      'Build, test with realistic sample data, and verify logs',
      'Hand over documentation and optimize after launch',
    ],
    workflowBn: [
      'বর্তমান ম্যানুয়াল ধাপ, ব্যবহৃত টুল ও বাধাগুলো চিহ্নিত করা',
      'ট্রিগার, ডেটা ম্যাপিং ও সেইফ-গার্ড কাঠামো তৈরি',
      'নমুনা ডেটা দিয়ে পরীক্ষা ও লগ যাচাই',
      'ডকুমেন্টেশন হস্তান্তর এবং চালু করার পর অপটিমাইজেশন',
    ],
    useCasesEn: [
      'Routing website inquiries and strategy audit requests to action queues',
      'Automating onboarding checklists and internal follow-up reminders',
      'Synchronizing inquiry records across communication channels',
    ],
    useCasesBn: [
      'ওয়েবসাইট ইনকোয়ারি ও স্ট্র্যাটেজি অডিট রিকোয়েস্ট অ্যাকশন কিউতে পাঠানো',
      'অনবোর্ডিং চেকলিস্ট ও অভ্যন্তরীণ ফলো-আপ রিমাইন্ডার অটোমেট করা',
      'যোগাযোগ চ্যানেলগুলোর মাঝে ইনকোয়ারি রেকর্ড সামঞ্জস্য রাখা',
    ],
    faqsEn: [
      {
        q: 'Do we need to replace all our current software to automate workflows?',
        a: 'Not necessarily. We start by evaluating your current tools and connecting or automating where it creates clear operational value.',
      },
      {
        q: 'What happens if an automated step encounters an issue?',
        a: 'We build clear fallback and alert mechanisms so failures are visible and handled safely rather than silently lost.',
      },
    ],
    faqsBn: [
      {
        q: 'ওয়ার্কফ্লো অটোমেট করতে কি বর্তমান সব সফটওয়্যার বদলাতে হবে?',
        a: 'সবসময় নয়। আমরা প্রথমে আপনার বর্তমান টুলগুলো যাচাই করি এবং যেখানে স্পষ্ট সুবিধা পাওয়া যায় সেখানে অটোমেশন যুক্ত করি।',
      },
      {
        q: 'কোনো অটোমেটেড ধাপে সমস্যা হলে কী হয়?',
        a: 'আমরা ফলব্যাক ও অ্যালার্ট ব্যবস্থা রাখি, যাতে কোনো ডেটা নীরবে হারিয়ে না গিয়ে সহজে নজরে আসে ও সমাধান করা যায়।',
      },
    ],
  },
  {
    slug: 'ai-content-social-media-pipeline',
    icon: Sparkles,
    titleEn: 'AI Content & Social Media Pipeline',
    titleBn: 'AI কনটেন্ট ও সোশ্যাল মিডিয়া পাইপলাইন',
    summaryEn:
      'Build a repeatable content planning, drafting, and publishing workflow that maintains brand voice without creative burnout.',
    summaryBn:
      'ধারাবাহিক কনটেন্ট পরিকল্পনা, ড্রাফটিং ও প্রকাশনার একটি সাজানো পাইপলাইন তৈরি করুন, যা ব্র্যান্ড ভয়েস ঠিক রেখে কাজ সহজ করে।',
    benefitEn: 'Consistent publishing cadence with structured human review.',
    benefitBn: 'হিউম্যান রিভিউসহ নিয়মিত কনটেন্ট প্রকাশের ধারাবাহিকতা।',
    overviewEn:
      'Consistent content builds authority and trust, yet producing ideas, drafts, and schedules manually every week can stall. We establish an AI-assisted content pipeline with editorial guardrails and brand alignment.',
    overviewBn:
      'নিয়মিত কনটেন্ট ব্র্যান্ডের বিশ্বাসযোগ্যতা বাড়ায়, কিন্তু প্রতি সপ্তাহে আইডিয়া, ড্রাফট ও শিডিউল তৈরি করা কঠিন হয়ে পড়ে। এডিটোরিয়াল গাইডলাইন ও ব্র্যান্ড সামঞ্জস্য রেখে আমরা AI-সহায়তাপ্রাপ্ত কনটেন্ট পাইপলাইন তৈরি করি।',
    problemsEn: [
      'Irregular posting due to time constraints or idea blocks',
      'Inconsistent tone across posts and campaigns',
      'Fragmented planning between topic research, drafts, and calendars',
    ],
    problemsBn: [
      'সময়ের অভাব বা আইডিয়া সংকটে অনিয়মিত পোস্ট করা',
      'বিভিন্ন পোস্ট ও ক্যাম্পেইনে ভাষার টোনে অসামঞ্জস্য',
      'টপিক রিসার্চ, ড্রাফট ও ক্যালেন্ডারের মধ্যে সমন্বয়ের অভাব',
    ],
    featuresEn: [
      'Topic ideation frameworks aligned with audience pain points',
      'Brand-voice prompt templates and structured content briefs',
      'Content calendar organization and review checkpoints',
      'Repurposing workflows across formats and channels',
    ],
    featuresBn: [
      'অডিয়েন্সের চাহিদা অনুযায়ী টপিক আইডিয়েশন ফ্রেমওয়ার্ক',
      'ব্র্যান্ড ভয়েস অনুযায়ী প্রম্পট টেমপ্লেট ও কনটেন্ট ব্রিফ',
      'কনটেন্ট ক্যালেন্ডার সাজানো ও রিভিউ চেকপয়েন্ট',
      'বিভিন্ন ফরম্যাট ও চ্যানেলে কনটেন্ট পুনর্ব্যবহারের ধারা',
    ],
    benefitsEn: [
      'Faster draft preparation while preserving brand authenticity',
      'Clearer alignment between content topics and business goals',
      'Less last-minute scrambling before campaign dates',
    ],
    benefitsBn: [
      'ব্র্যান্ডের নিজস্বতা বজায় রেখে দ্রুত ড্রাফট তৈরি',
      'কনটেন্ট টপিক ও ব্যবসার লক্ষ্যের মধ্যে স্পষ্ট সমন্বয়',
      'ক্যাম্পেইনের আগে শেষ মুহূর্তের তাড়াহুড়ো কমানো',
    ],
    workflowEn: [
      'Define brand voice, target audience pillars, and content rules',
      'Set up repeatable ideation, drafting, and formatting templates',
      'Establish human editing and approval steps before publishing',
      'Review engagement insights to refine upcoming topics',
    ],
    workflowBn: [
      'ব্র্যান্ড ভয়েস, টার্গেট অডিয়েন্স পিলার ও কনটেন্ট নিয়ম নির্ধারণ',
      'পুনরাবৃত্তিযোগ্য আইডিয়েশন, ড্রাফটিং ও ফরম্যাটিং টেমপ্লেট তৈরি',
      'প্রকাশের আগে এডিটিং ও অনুমোদনের ধাপ নির্ধারণ',
      'পরবর্তী টপিক উন্নত করতে এনগেজমেন্ট পর্যবেক্ষণ',
    ],
    useCasesEn: [
      'Founders and personal brands building consistent thought leadership',
      'Businesses sharing educational tips, updates, and solution guides',
      'Teams coordinating multi-channel social media calendars',
    ],
    useCasesBn: [
      'ফাউন্ডার ও পার্সোনাল ব্র্যান্ডের নিয়মিত থট লিডারশিপ',
      'শিক্ষামূলক টিপস, আপডেট ও সলিউশন গাইড শেয়ার করা ব্যবসা',
      'একাধিক চ্যানেলের সোশ্যাল মিডিয়া ক্যালেন্ডার সমন্বয় করা টিম',
    ],
    faqsEn: [
      {
        q: 'Are posts published automatically without review?',
        a: 'We recommend and structure a human review step so accuracy, brand tone, and context remain under your control.',
      },
      {
        q: 'Can this support both English and Bengali content workflows?',
        a: 'Yes. We can structure guidelines and templates tailored to the language and audience you serve.',
      },
    ],
    faqsBn: [
      {
        q: 'রিভিউ ছাড়াই কি পোস্ট স্বয়ংক্রিয়ভাবে পাবলিশ হবে?',
        a: 'আমরা সাধারণত হিউম্যান রিভিউ ধাপ রাখার পরামর্শ দিই, যাতে নির্ভুলতা, ব্র্যান্ড টোন ও প্রাসঙ্গিকতা আপনার নিয়ন্ত্রণে থাকে।',
      },
      {
        q: 'এটি কি ইংরেজি ও বাংলা উভয় কনটেন্ট ওয়ার্কফ্লোতে কাজ করতে পারে?',
        a: 'হ্যাঁ। আপনার টার্গেট অডিয়েন্স ও ভাষা অনুযায়ী গাইডলাইন ও টেমপ্লেট সাজানো সম্ভব।',
      },
    ],
  },
  {
    slug: 'meta-ads-management',
    icon: Target,
    titleEn: 'Meta Ads Management',
    titleBn: 'মেটা অ্যাডস ম্যানেজমেন্ট (Meta Ads)',
    summaryEn:
      'Plan, launch, and refine targeted acquisition campaigns focused on clear audience intent, compelling messaging, and lead quality.',
    
