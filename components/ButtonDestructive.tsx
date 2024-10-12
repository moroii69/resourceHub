import { Button } from "@/components/ui/button";

const ButtonDestructive = ({ label, onClick }) => (
  <Button variant="destructive" onClick={onClick}>
    {label}
  </Button>
);

export default ButtonDestructive; // Ensure you're using default export
