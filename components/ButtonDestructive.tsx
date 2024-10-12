import { Button } from "@/components/ui/button";

interface ButtonDestructiveProps {
  label: string;        
  onClick: () => void;
}

const ButtonDestructive: React.FC<ButtonDestructiveProps> = ({ label, onClick }) => (
  <Button variant="destructive" onClick={onClick}>
    {label}
  </Button>
);

export default ButtonDestructive;
