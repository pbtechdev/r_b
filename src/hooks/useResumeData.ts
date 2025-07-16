import { useState, useCallback } from 'react';
import type { ResumeData, ResumeSection, Employment, Education, Website, Skill, CustomSection } from '../types/resume';

const initialResumeData: ResumeData = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    jobTitle: '',
    profilePic:''
  },
  professionalSummary: {
    summary: ''
  },
  sections: [
    { id: 'employment', type: 'employment', title: 'Employment History', isVisible: true, order: 0 },
    { id: 'education', type: 'education', title: 'Education', isVisible: true, order: 1 },
    { id: 'websites', type: 'websites', title: 'Websites & Social Links', isVisible: true, order: 2 },
    { id: 'skills', type: 'skills', title: 'Skills', isVisible: true, order: 3 }
  ],
  employment: [],
  education: [],
  websites: [],
  skills: [],
  customSections: []
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

  const updatePersonalDetails = useCallback((field: keyof ResumeData['personalDetails'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value
      }
    }));
  }, []);

  const updateProfessionalSummary = useCallback((summary: string) => {
    setResumeData(prev => ({
      ...prev,
      professionalSummary: { summary }
    }));
  }, []);

  const updateSectionTitle = useCallback((sectionId: string, newTitle: string) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, title: newTitle } : section
      )
    }));
  }, []);

  const reorderSections = useCallback((sections: ResumeSection[]) => {
    setResumeData(prev => ({
      ...prev,
      sections: sections.map((section, index) => ({ ...section, order: index }))
    }));
  }, []);

  const addSection = useCallback((type: ResumeSection['type'], title: string) => {
    const newSection: ResumeSection = {
      id: `${type}-${Date.now()}`,
      type,
      title,
      isVisible: true,
      order: resumeData.sections.length
    };
    
    setResumeData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));

    if (type === 'custom') {
      const newCustomSection: CustomSection = {
        id: newSection.id,
        title,
        content: ''
      };
      setResumeData(prev => ({
        ...prev,
        customSections: [...prev.customSections, newCustomSection]
      }));
    }
  }, [resumeData.sections.length]);

  const addEmployment = useCallback((employment: Omit<Employment, 'id'>) => {
    const newEmployment: Employment = {
      ...employment,
      id: `emp-${Date.now()}`
    };
    setResumeData(prev => ({
      ...prev,
      employment: [...prev.employment, newEmployment]
    }));
  }, []);

  const updateEmployment = useCallback((id: string, updates: Partial<Employment>) => {
    setResumeData(prev => ({
      ...prev,
      employment: prev.employment.map(emp =>
        emp.id === id ? { ...emp, ...updates } : emp
      )
    }));
  }, []);

  const deleteEmployment = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      employment: prev.employment.filter(emp => emp.id !== id)
    }));
  }, []);

  const addEducation = useCallback((education: Omit<Education, 'id'>) => {
    const newEducation: Education = {
      ...education,
      id: `edu-${Date.now()}`
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  }, []);

  const updateEducation = useCallback((id: string, updates: Partial<Education>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, ...updates } : edu
      )
    }));
  }, []);

  const deleteEducation = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  }, []);

  const addWebsite = useCallback((website: Omit<Website, 'id'>) => {
    const newWebsite: Website = {
      ...website,
      id: `web-${Date.now()}`
    };
    setResumeData(prev => ({
      ...prev,
      websites: [...prev.websites, newWebsite]
    }));
  }, []);

  const updateWebsite = useCallback((id: string, updates: Partial<Website>) => {
    setResumeData(prev => ({
      ...prev,
      websites: prev.websites.map(web =>
        web.id === id ? { ...web, ...updates } : web
      )
    }));
  }, []);

  const deleteWebsite = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      websites: prev.websites.filter(web => web.id !== id)
    }));
  }, []);

  const addSkill = useCallback((skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skill,
      id: `skill-${Date.now()}`
    };
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  }, []);

  const updateSkill = useCallback((id: string, updates: Partial<Skill>) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, ...updates } : skill
      )
    }));
  }, []);

  const deleteSkill = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  }, []);

  const updateCustomSection = useCallback((id: string, updates: Partial<CustomSection>) => {
    setResumeData(prev => ({
      ...prev,
      customSections: prev.customSections.map(section =>
        section.id === id ? { ...section, ...updates } : section
      )
    }));
  }, []);

  return {
    resumeData,
    updatePersonalDetails,
    updateProfessionalSummary,
    updateSectionTitle,
    reorderSections,
    addSection,
    addEmployment,
    updateEmployment,
    deleteEmployment,
    addEducation,
    updateEducation,
    deleteEducation,
    addWebsite,
    updateWebsite,
    deleteWebsite,
    addSkill,
    updateSkill,
    deleteSkill,
    updateCustomSection
  };
};