export interface Project {
  id: string;
  title: string;
  domain: string;
  category: 'software' | 'ai' | 'hardware' | 'matlab' | 'iot' | 'research';
  techStack: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'phd';
  description: string;
  branch: string;
}

export const projects: Project[] = [
  // Electronics & Communication Engineering
  {
    id: '1',
    title: 'Smart Soil Moisture & Crop Advisory System',
    domain: 'ECE / IoT',
    category: 'iot',
    techStack: ['ESP32', 'ML', 'Firebase', 'Flutter'],
    level: 'intermediate',
    description: 'Real-time soil moisture monitoring with ML-based crop recommendations.',
    branch: 'ECE/ENTC',
  },
  {
    id: '2',
    title: 'Industrial Power Factor Correction with IoT Monitoring',
    domain: 'Electrical Engineering',
    category: 'hardware',
    techStack: ['PLC', 'Capacitor Banks', 'Arduino', 'MQTT'],
    level: 'advanced',
    description: 'Automated reactive power compensation with real-time cloud monitoring.',
    branch: 'EE',
  },
  {
    id: '3',
    title: 'Autonomous Crop Spraying Robot',
    domain: 'Robotics / Mechanical',
    category: 'hardware',
    techStack: ['ROS', 'Computer Vision', 'CNC', 'ESP32'],
    level: 'advanced',
    description: 'GPS-guided autonomous agricultural sprayer with obstacle detection.',
    branch: 'Mechanical',
  },
  {
    id: '4',
    title: 'AI-Powered Medical Image Analysis Dashboard',
    domain: 'CSE / AI',
    category: 'ai',
    techStack: ['TensorFlow', 'React', 'Python', 'FastAPI'],
    level: 'advanced',
    description: 'ML model for X-ray/CT scan classification with web interface.',
    branch: 'CSE',
  },
  {
    id: '5',
    title: 'Real-Time Traffic Flow Optimization using RL',
    domain: 'CSE / IoT',
    category: 'ai',
    techStack: ['Reinforcement Learning', 'Python', 'OpenAI Gym', 'Node.js'],
    level: 'phd',
    description: 'Multi-agent reinforcement learning for traffic light control.',
    branch: 'CSE',
  },
  {
    id: '6',
    title: 'Embedded Gesture Recognition System',
    domain: 'ECE / Embedded',
    category: 'hardware',
    techStack: ['STM32', 'Accelerometer', 'TinyML', 'Edge Impulse'],
    level: 'intermediate',
    description: 'Hand gesture recognition on microcontroller with edge ML.',
    branch: 'ECE/ENTC',
  },
  {
    id: '7',
    title: 'Predictive Maintenance System for Industrial Machinery',
    domain: 'IoT / ML',
    category: 'iot',
    techStack: ['MQTT', 'Python', 'Scikit-Learn', 'InfluxDB', 'Grafana'],
    level: 'advanced',
    description: 'Anomaly detection in machine vibration and temperature data.',
    branch: 'EE',
  },
  {
    id: '8',
    title: 'MATLAB-Based Power System Stability Analysis',
    domain: 'Electrical Engineering',
    category: 'matlab',
    techStack: ['MATLAB', 'Simulink', 'Power System Toolbox'],
    level: 'intermediate',
    description: 'Transient stability assessment and fault analysis in multi-machine systems.',
    branch: 'EE',
  },
  {
    id: '9',
    title: 'Civil Engineering Structure Health Monitoring System',
    domain: 'Civil / IoT',
    category: 'iot',
    techStack: ['Wireless Sensor Networks', 'IoT', 'Cloud Analytics', 'Python'],
    level: 'advanced',
    description: 'Real-time monitoring of building displacement and vibrations.',
    branch: 'Civil',
  },
  {
    id: '10',
    title: 'NLP-Based Document Classification & Summarization',
    domain: 'CSE / AI',
    category: 'ai',
    techStack: ['Transformers', 'Python', 'HuggingFace', 'FastAPI', 'React'],
    level: 'advanced',
    description: 'End-to-end document categorization and automatic summarization system.',
    branch: 'CSE',
  },
  {
    id: '11',
    title: 'Blockchain-Based Supply Chain Tracking',
    domain: 'CSE / Blockchain',
    category: 'software',
    techStack: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
    level: 'advanced',
    description: 'Immutable product journey tracking from manufacturer to consumer.',
    branch: 'CSE',
  },
  {
    id: '12',
    title: 'Real-Time Object Detection on Edge Devices',
    domain: 'ECE / AI',
    category: 'hardware',
    techStack: ['YOLO', 'TensorFlow Lite', 'Raspberry Pi', 'OpenCV'],
    level: 'intermediate',
    description: 'Optimized computer vision inference on embedded platforms.',
    branch: 'ECE/ENTC',
  },
  {
    id: '13',
    title: 'Chatbot with Retrieval-Augmented Generation (RAG)',
    domain: 'CSE / AI',
    category: 'ai',
    techStack: ['LangChain', 'OpenAI', 'ChromaDB', 'Flask', 'React'],
    level: 'intermediate',
    description: 'Context-aware chatbot powered by document retrieval and LLMs.',
    branch: 'CSE',
  },
  {
    id: '14',
    title: 'Smart Home Automation with Voice Control',
    domain: 'IoT / Embedded',
    category: 'iot',
    techStack: ['ESP32', 'MQTT', 'Home Assistant', 'Google Cloud STT'],
    level: 'intermediate',
    description: 'Integrated smart home platform with voice and mobile control.',
    branch: 'ECE/ENTC',
  },
  {
    id: '15',
    title: 'Time Series Forecasting for Financial Markets',
    domain: 'CSE / ML',
    category: 'ai',
    techStack: ['LSTM', 'PyTorch', 'Pandas', 'FastAPI', 'React'],
    level: 'advanced',
    description: 'Deep learning model for stock price prediction with confidence intervals.',
    branch: 'CSE',
  },
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'software', label: 'Software' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'hardware', label: 'Hardware' },
  { value: 'matlab', label: 'MATLAB' },
  { value: 'iot', label: 'IoT' },
  { value: 'research', label: 'Research' },
];

export const branches = [
  'CSE',
  'ECE/ENTC',
  'EE',
  'Mechanical',
  'Civil',
  'IoT',
  'AI-ML',
];

export const levels = [
  { value: 'beginner', label: 'Beginner (Diploma)' },
  { value: 'intermediate', label: 'Intermediate (BTech)' },
  { value: 'advanced', label: 'Advanced (MTech)' },
  { value: 'phd', label: 'PhD' },
];
