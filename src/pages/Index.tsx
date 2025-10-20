import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SurveyModal } from "@/components/SurveyModal";
import { QrCode, Sparkles } from "lucide-react";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Arena BRB Experience
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              Compartilhe sua
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experiência
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escaneie o QR Code ou clique no botão abaixo para participar da nossa pesquisa de satisfação
            </p>
          </div>

          {/* QR Code Visual */}
          <div className="flex justify-center my-12 animate-in fade-in zoom-in-95 duration-1000" style={{ animationDelay: "200ms" }}>
            <div className="relative group cursor-pointer" onClick={() => setModalOpen(true)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-card p-8 rounded-3xl border-2 border-border shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <QrCode className="h-48 w-48 text-foreground" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: "400ms" }}>
            <Button
              onClick={() => setModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-7 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <QrCode className="mr-2 h-6 w-6" />
              Iniciar Pesquisa
            </Button>
          </div>

          {/* Info */}
          <p className="text-sm text-muted-foreground mt-8 animate-in fade-in duration-1000" style={{ animationDelay: "600ms" }}>
            Leva apenas 2 minutos • Suas respostas são importantes para nós
          </p>
        </div>
      </div>

      <SurveyModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
