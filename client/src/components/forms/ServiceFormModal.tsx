import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ServiceForm } from "./ServiceForm";

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  title: string;
  description: string;
  includePropertyAddress?: boolean;
  includeLoanAmount?: boolean;
  initialMessage?: string;
}

export function ServiceFormModal({
  isOpen,
  onClose,
  serviceName,
  title,
  description,
  includePropertyAddress = false,
  includeLoanAmount = false,
  initialMessage = "",
}: ServiceFormModalProps) {
  const handleSuccess = () => {
    // Close the modal after successful form submission
    setTimeout(onClose, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ServiceForm
            serviceName={serviceName}
            includePropertyAddress={includePropertyAddress}
            includeLoanAmount={includeLoanAmount}
            initialMessage={initialMessage}
            onSuccess={handleSuccess}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}