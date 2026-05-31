export interface Service {
  title: string;
  slug: string;
  image: string;
  description: string;
  services: string[];
}

export interface ServiceDivision {
  title: string;
  description: string;
  accent: 'primary' | 'secondary';
  services: Service[];
}

export const divisions: ServiceDivision[] = [
  {
    title: 'IT Division: Software & Services',
    description: 'Custom software development, web applications, UI/UX design, and SaaS solutions.',
    accent: 'primary',
    services: [
      {
        title: 'Web Development',
        slug: 'web-development',
        image: '/services/web-development.png',
        description: 'Modern, responsive web applications built with latest frameworks.',
        services: ['React & Next.js', 'Vue.js development', 'Full-stack solutions', 'Progressive Web Apps'],
      },
      {
        title: 'Custom Software',
        slug: 'custom-software',
        image: '/services/custom-software.png',
        description: 'Tailored software solutions for desktop, mobile, and enterprise.',
        services: ['Desktop applications', 'Mobile development', 'Business software', 'Automation tools'],
      },
      {
        title: 'API Development',
        slug: 'api-development',
        image: '/services/api-development.png',
        description: 'Robust APIs and integrations connecting systems seamlessly.',
        services: ['REST APIs', 'GraphQL APIs', 'Third-party integrations', 'Webhook systems'],
      },
      {
        title: 'SaaS Products',
        slug: 'saas-products',
        image: '/services/saas-products.png',
        description: 'Complete SaaS platform development and deployment.',
        services: ['Architecture design', 'Multi-tenant systems', 'Deployment & scaling', 'Maintenance'],
      },
      {
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        image: '/services/ui-ux-design.png',
        description: 'User-centered design for engaging digital experiences.',
        services: ['Design systems', 'Prototyping', 'Figma to code', 'Responsive layouts'],
      },
      {
        title: 'Database Design',
        slug: 'database-design',
        image: '/services/database-design.png',
        description: 'Scalable database solutions for any data requirements.',
        services: ['SQL databases', 'NoSQL solutions', 'Cloud-hosted DBs', 'Performance optimization'],
      },
    ],
  },
  {
    title: 'AI Division: Machine Learning',
    description: 'AI model development, LLM integration, and intelligent automation solutions.',
    accent: 'secondary',
    services: [
      {
        title: 'AI/ML Models',
        slug: 'ai-ml-models',
        image: '/services/ai-ml-models.png',
        description: 'Custom trained models for classification, regression, and prediction.',
        services: ['Model training', 'Fine-tuning', 'Custom datasets', 'Performance optimization'],
      },
      {
        title: 'LLM Integration',
        slug: 'llm-integration',
        image: '/services/llm-integration.png',
        description: 'Integrate cutting-edge language models into your applications.',
        services: ['OpenAI GPT', 'Anthropic Claude', 'Open-source LLMs', 'RAG systems'],
      },
      {
        title: 'Computer Vision',
        slug: 'computer-vision',
        image: '/services/computer-vision.png',
        description: 'Image processing and visual understanding solutions.',
        services: ['Object detection', 'Image classification', 'OCR systems', 'Video analytics'],
      },
      {
        title: 'NLP & Chatbots',
        slug: 'nlp-chatbots',
        image: '/services/nlp-chatbots.png',
        description: 'Intelligent conversational interfaces and text analysis.',
        services: ['Chatbot development', 'Text classification', 'Sentiment analysis', 'Q&A systems'],
      },
      {
        title: 'ML Pipelines',
        slug: 'ml-pipelines',
        image: '/services/ml-pipelines.png',
        description: 'Complete end-to-end machine learning infrastructure.',
        services: ['Data preprocessing', 'Pipeline automation', 'Model deployment', 'Monitoring'],
      },
      {
        title: 'Edge AI',
        slug: 'edge-ai',
        image: '/services/edge-ai.png',
        description: 'Deploy AI models on embedded devices and edge hardware.',
        services: ['TinyML deployment', 'TensorFlow Lite', 'Raspberry Pi/ESP32', 'Optimization'],
      },
    ],
  },
  {
    title: 'Project Division: Engineering Projects',
    description: 'End-to-end engineering project execution across all disciplines and academic levels.',
    accent: 'primary',
    services: [
      {
        title: 'Academic Projects',
        slug: 'academic-projects',
        image: '/services/academic-projects.png',
        description: 'Complete support for academic project submissions.',
        services: ['PhD research support', 'MTech projects', 'BE/BTech projects', 'Diploma projects'],
      },
      {
        title: 'Research & Publishing',
        slug: 'research-publishing',
        image: '/services/research-publishing.png',
        description: 'Research implementation and academic paper publishing support.',
        services: ['Paper writing', 'IEEE/Springer submission', 'Journal publication', 'Research design'],
      },
      {
        title: 'Hardware Projects',
        slug: 'hardware-projects',
        image: '/services/hardware-projects.png',
        description: 'Embedded systems and hardware prototyping across disciplines.',
        services: ['Embedded systems', 'Analog circuits', 'RF engineering', 'Instrumentation'],
      },
      {
        title: 'MATLAB Projects',
        slug: 'matlab-projects',
        image: '/services/matlab-projects.png',
        description: 'Simulation and modeling projects using MATLAB and Simulink.',
        services: ['Signal processing', 'Control systems', 'Power systems', 'Communications'],
      },
      {
        title: 'IoT Projects',
        slug: 'iot-projects',
        image: '/services/iot-projects.png',
        description: 'Internet of Things systems spanning sensors, connectivity, and cloud.',
        services: ['Sensor integration', 'Edge computing', 'Cloud platforms', 'Data analytics'],
      },
      {
        title: 'All Branches',
        slug: 'all-branches',
        image: '/services/all-branches.png',
        description: 'Support across all engineering disciplines and specializations.',
        services: ['CSE & AI/ML', 'ECE & Embedded', 'EE & Power', 'Mechanical & Robotics', 'Civil Engineering'],
      },
    ],
  },
];

export const allServices = divisions.flatMap((division) => division.services);
