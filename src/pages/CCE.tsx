import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import cceBanner from '@/assets/cce-banner.png';

const CCE = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/area-migrante">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backHome')}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              CCE - CENTRO DE CAPACITAÇÃO E EDUCAÇÃO
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="mb-8 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={cceBanner} 
              alt="CCE - Centro de Capacitação e Educação" 
              className="w-full h-auto"
            />
          </div>

          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-primary">
              <CardTitle className="text-primary-foreground">
                {t('cceTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('cceDescription')}
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t('address')}:</strong> Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CCE;
