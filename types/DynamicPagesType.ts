// types.ts
export interface FieldConfig {
    name: string;
    type: "text" | "textarea" | "image";
    label: string;
  }
  
  export interface SectionConfig {
    sectionName: string;
    fields: FieldConfig[];
    defaultImage?: string;
  }
  
  export interface DynamicSectionProps {
    sections: SectionConfig[];
    initialData?: { [key: string]: { [fieldName: string]: any } };
    onSave?: (data: FormData) => void;
    defaultImage?: string;
  }
  
  export interface SectionData {
    [fieldName: string]: string | File | null;
  }