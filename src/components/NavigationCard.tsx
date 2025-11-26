import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: 'default' | 'highlight';
}

const NavigationCard = ({ to, icon: Icon, title, description, variant = 'default' }: NavigationCardProps) => {
  return (
    <Link to={to} className="group">
      <Card 
        className={cn(
          "h-full transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 cursor-pointer",
          variant === 'highlight' && "border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5"
        )}
      >
        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
          <div className={cn(
            "p-4 rounded-full transition-all duration-300 group-hover:scale-110",
            variant === 'highlight' 
              ? "bg-gradient-primary" 
              : "bg-[hsl(var(--accent-yellow))]"
          )}>
            <Icon className={cn(
              "h-8 w-8",
              variant === 'highlight' ? "text-primary-foreground" : "text-[hsl(var(--accent-yellow-foreground))]"
            )} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavigationCard;
