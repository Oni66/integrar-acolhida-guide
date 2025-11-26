import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Sparkles, Shield, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import agsusLogo from '@/assets/logo-agsus.png';

const Health = () => {
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
            <div className="inline-flex p-4 rounded-full bg-background mb-4">
              <img src={agsusLogo} alt="AGSUS Logo" className="h-24 w-24 object-contain" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('healthTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              {t('agsusDescription')}
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                {t('hygieneTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('hygiene1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('hygiene2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('hygiene3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('hygiene4')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Shield className="h-5 w-5" />
                {t('healthCareTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                  <span className="text-muted-foreground">{t('healthCare1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                  <span className="text-muted-foreground">{t('healthCare2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                  <span className="text-muted-foreground">{t('healthCare3')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-primary">
              <CardTitle className="flex items-center gap-2 text-primary-foreground">
                <AlertCircle className="h-5 w-5" />
                {t('recommendationsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('recommendation1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('recommendation2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('recommendation3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{t('recommendation4')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Health;
