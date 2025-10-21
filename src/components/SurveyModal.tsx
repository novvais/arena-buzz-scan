import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PersonalInfoStep } from "./survey/PersonalInfoStep";
import { CategorySelection } from "./survey/CategorySelection";
import { QuestionStep } from "./survey/QuestionStep";
import { CompletionStep } from "./survey/CompletionStep";
import { StepIndicator } from "./survey/StepIndicator";
import { api } from "@/services/api";
import { toast } from "sonner";

export type Category = "pool" | "zipline" | "wifi" | "play";

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export const SurveyModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePersonalInfoSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
    setStep(2);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setStep(3);
  };

  const handleQuestionSubmit = async (answer: string) => {
    if (!selectedCategory) return;

    setIsSubmitting(true);

    try {
      // Definir a pergunta baseada na categoria
      const questions = {
        zipline:
          "Em uma escala de 0 a 10, quanto você avalia ativações de adrenalina em ambientes como este?",
        pool: "Qual destes fatores mais te motivou a participar desta ativação?",
        wifi: "Em uma escala de 0 a 10, qual é a sua expectativa para a experiência na Arena BRB hoje?",
        play: "Em uma escala de 0 a 10, o quão alta está sua 'Vibe' para o evento de hoje?",
      };

      const surveyData = {
        personalInfo,
        category: selectedCategory,
        question: questions[selectedCategory],
        answer,
      };

      await api.submitSurvey(surveyData);

      toast.success("Resposta enviada com sucesso!");
      setStep(4);
    } catch (error) {
      console.error("Erro ao enviar pesquisa:", error);
      toast.error("Erro ao enviar resposta. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setPersonalInfo({ name: "", email: "", phone: "" });
    setSelectedCategory(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
        <div className="p-6 sm:p-8">
          {step < 4 && <StepIndicator currentStep={step} totalSteps={3} />}

          {step === 1 && (
            <PersonalInfoStep onSubmit={handlePersonalInfoSubmit} />
          )}
          {step === 2 && <CategorySelection onSelect={handleCategorySelect} />}
          {step === 3 && selectedCategory && (
            <QuestionStep
              category={selectedCategory}
              onSubmit={handleQuestionSubmit}
              isSubmitting={isSubmitting}
            />
          )}
          {step === 4 && <CompletionStep onClose={handleReset} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
