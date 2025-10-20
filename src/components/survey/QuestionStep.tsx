import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Category } from "../SurveyModal";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const questions = {
  zipline: {
    text: "Em uma escala de 0 a 10, quanto você avalia ativações de adrenalina em ambientes como este?",
    type: "scale" as const,
  },
  pool: {
    text: "Qual destes fatores mais te motivou a participar desta ativação?",
    type: "choice" as const,
    options: [
      { id: "prize", label: "O Prêmio" },
      { id: "curiosity", label: "A curiosidade e diversão" },
      { id: "dont-know", label: "Não sei" },
    ],
  },
  wifi: {
    text: "Em uma escala de 0 a 10, qual é a sua expectativa para a experiência na Arena BRB hoje?",
    type: "scale" as const,
  },
  play: {
    text: "Em uma escala de 0 a 10, o quão alta está sua 'Vibe' para o evento de hoje?",
    type: "scale" as const,
  },
};

export const QuestionStep = ({ category, onSubmit }: { category: Category; onSubmit: () => void }) => {
  const question = questions[category];
  const [scaleValue, setScaleValue] = useState([5]);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleSubmit = () => {
    if (question.type === "scale" || (question.type === "choice" && selectedChoice)) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-foreground leading-tight">{question.text}</h2>
      </div>

      {question.type === "scale" ? (
        <div className="space-y-6 py-4">
          <div className="flex justify-center mb-6">
            <div className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              {scaleValue[0]}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                onClick={() => setScaleValue([num])}
                className={cn(
                  "aspect-square rounded-lg font-bold text-lg transition-all duration-200",
                  "border-2 hover:scale-105 active:scale-95",
                  scaleValue[0] === num
                    ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground border-transparent shadow-lg"
                    : "bg-card border-border text-foreground hover:border-primary/50"
                )}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <RadioGroup value={selectedChoice} onValueChange={setSelectedChoice} className="space-y-3">
          {question.options?.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-3 rounded-xl border-2 border-border p-4 cursor-pointer hover:border-primary transition-colors"
              onClick={() => setSelectedChoice(option.id)}
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer text-foreground font-medium">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}

      <Button
        onClick={handleSubmit}
        disabled={question.type === "choice" && !selectedChoice}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
      >
        Enviar Resposta
      </Button>
    </div>
  );
};
