import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-operacao-acolhida.png';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Operação Acolhida Logo" className="h-12 w-12" />
            <h1 className="text-xl font-bold text-foreground">
              {t('appTitle')}
            </h1>
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Languages className="h-4 w-4" />
            <span className="font-medium">{language === 'pt' ? 'ES' : 'PT'}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
