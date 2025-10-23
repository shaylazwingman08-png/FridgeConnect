import { CheckCircle2 } from "lucide-react";

interface GuidelinesListProps {
  guidelines: string[];
  title?: string;
}

export default function GuidelinesList({ guidelines, title = "Community Guidelines" }: GuidelinesListProps) {
  return (
    <div>
      {title && <h3 className="font-heading text-xl font-semibold mb-4">{title}</h3>}
      <ul className="space-y-3">
        {guidelines.map((guideline, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3"
            data-testid={`guideline-${index + 1}`}
          >
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{guideline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
