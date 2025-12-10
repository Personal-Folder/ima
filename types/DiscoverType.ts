export default interface DiscoverBoxProps {
    logo: string;
    number: string;
    message: string;
    dashboard?: boolean; 
    onEdit?: () => void; 
    onDelete?: () => void;
  }