import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import cciBanner from '@/assets/cci-banner.png';

const CCI = () => {
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
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              CCI - CENTRO DE CONTROLE E INTERIORIZAÇÃO
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="mb-8 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={cciBanner} 
              alt="CCI - Centro de Controle e Interiorização" 
              className="w-full h-auto"
            />
          </div>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary">
                {t('whatIsInteriorization')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t('interiorizationDescription')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary">
                {t('howItWorks')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold">{t('voluntaryRelocation')}:</span> {t('voluntaryRelocationDesc')}</p>
                <p><span className="font-semibold">{t('humanitarianProcess')}:</span> {t('humanitarianProcessDesc')}</p>
                <p><span className="font-semibold">{t('supportActions')}:</span> {t('supportActionsDesc')}</p>
                <p><span className="font-semibold">{t('partnership')}:</span> {t('partnershipDesc')}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-accent/20">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
              <CardTitle className="text-accent">
                {t('interiorizationModalities')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('familyReunification')}</h3>
                  <p className="text-muted-foreground">{t('familyReunificationDesc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('socialReunion')}</h3>
                  <p className="text-muted-foreground">{t('socialReunionDesc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('ves')}</h3>
                  <p className="text-muted-foreground">{t('vesDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="text-muted-foreground">
              Os interessados podem buscar o CCI | Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CCI;
