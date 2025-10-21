import { Trophy, Zap, Gamepad2 } from "lucide-react";
import { Category } from "../SurveyModal";

const categories = [
  {
    id: "pool" as Category,
    icon: Trophy,
    title: "Piscina de Prêmios",
    color: "from-accent to-orange-500",
  },
  {
    id: "zipline" as Category,
    icon: Zap,
    title: "Tirolesa",
    color: "from-primary to-purple-500",
  },
  {
    id: "play" as Category,
    icon: Gamepad2,
    title: "Arena Play",
    color: "from-secondary to-pink-500",
  },
];

export const CategorySelection = ({ onSelect }: { onSelect: (category: Category) => void }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Escolha uma opção</h2>
        <p className="text-muted-foreground">Selecione a atividade que você participou</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card border-2 border-border hover:border-primary"
            >
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-center text-foreground group-hover:text-primary transition-colors">
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
