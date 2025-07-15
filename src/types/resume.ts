export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  jobTitle: string;
}

export interface ProfessionalSummary {
  summary: string;
}

export interface Employment {
  id: string;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  currentJob: boolean;
  city: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
}

export interface Website {
  id: string;
  label: string;
  url: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface CustomSection {
  id: string;
  title: string;
  content: string;
}

export interface ResumeSection {
  id: string;
  type: 'employment' | 'education' | 'websites' | 'skills' | 'custom' | 'courses' | 'extracurricular' | 'internships' | 'hobbies' | 'languages' | 'references';
  title: string;
  isVisible: boolean;
  order: number;
}

export interface ResumeData {
  personalDetails: PersonalDetails;
  professionalSummary: ProfessionalSummary;
  sections: ResumeSection[];
  employment: Employment[];
  education: Education[];
  websites: Website[];
  skills: Skill[];
  customSections: CustomSection[];
}