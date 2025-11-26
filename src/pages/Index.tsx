import { useLanguage } from '@/contexts/LanguageContext';
import NavigationCard from '@/components/NavigationCard';
import { Info, Users, Trophy, Megaphone } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.png';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="w-full max-w-6xl animate-fade-in">
            <img 
              src={heroBanner} 
              alt="Integrar App - Conectando pessoas, oportunidades e novos começos" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <NavigationCard
            to="/sobre"
            icon={Info}
            title={t('knowOperation')}
          />
          
          <NavigationCard
            to="/area-migrante"
            icon={Users}
            title={t('migrantArea')}
            variant="highlight"
          />
          
          <NavigationCard
            to="/casos-sucesso"
            icon={Trophy}
            title={t('successStories')}
          />
          
          <NavigationCard
            to="/avisos"
            icon={Megaphone}
            title={t('announcements')}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
