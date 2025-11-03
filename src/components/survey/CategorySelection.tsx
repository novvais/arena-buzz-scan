import { Trophy, Zap, Gamepad2 } from "lucide-react";
import { Category } from "../SurveyModal";

const categories = [
  {
    id: "pool" as Category,
    icon: Trophy,
    title: "Piscina de Prêmios",
    color: "from-primary to-primary-glow",
  },
  {
    id: "zipline" as Category,
    icon: Zap,
    title: "Tirolesa",
    color: "from-secondary to-primary",
  },
  {
    id: "play" as Category,
    icon: Gamepad2,
    title: "Arena Play",
    color: "from-accent to-primary",
  },
];

export const CategorySelection = ({ onSelect }: { onSelect: (category: Category) => void }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Escolha uma opção</h2>
        <p className="text-muted-foreground">Selecione a atividade que você participou</p>
      </div>

      <div className="flex flex-col gap-4 mt-6 max-w-md mx-auto">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-card border-2 border-border hover:border-primary"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
