import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const CompletionStep = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="space-y-8 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
          <CheckCircle2 className="h-24 w-24 text-primary relative" />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">Obrigado!</h2>
        <p className="text-lg text-muted-foreground">
          Sua resposta foi registrada com sucesso.
        </p>
      </div>

      <Button
        onClick={onClose}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
      >
        Fechar
      </Button>
    </div>
  );
};
