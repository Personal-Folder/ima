export default interface NewsBoxProps {
    image: string;
    title: string;
    description: string;
    headline?: string; // Optional
    footHeadline?: string; // Optional
    isArabic: boolean; // Flag to determine the language
    dashboard?: boolean; // Flag to determine if this is being used in the dashboard
    onEdit?: () => void; // Function to handle edit action
    onDelete?: () => void; // Function to handle delete action
  }