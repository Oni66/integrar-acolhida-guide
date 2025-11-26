import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backHome')}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                {t('aboutTitle')}
              </h1>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {t('aboutText1')}
                </p>

                <p className="text-lg">
                  {t('aboutText2')}
                </p>

                <p className="text-lg">
                  {t('aboutText3')}
                </p>

                <p className="text-lg">
                  {t('aboutText4')}
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {t('aboutLegislation')}
                </h2>
                <p className="text-lg">
                  {t('aboutText5')}
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {t('aboutGovernance')}
                </h2>
                <p className="text-lg">
                  {t('aboutText6')}
                </p>

                <p className="text-lg">
                  {t('aboutText7')}
                </p>

                <p className="text-lg">
                  {t('aboutText8')}
                </p>

                <p className="text-lg">
                  {t('aboutText9')}
                </p>

                <p className="text-lg">
                  {t('aboutText10')}
                </p>

                <p className="text-lg">
                  {t('aboutText11')}
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {t('aboutAxesTitle')}
                </h2>
                <p className="text-lg">
                  {t('aboutText12')}
                </p>

                <ul className="list-disc list-inside space-y-3 text-lg ml-4">
                  <li>{t('aboutAxis1')}</li>
                  <li>{t('aboutAxis2')}</li>
                  <li>{t('aboutAxis3')}</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                  {t('aboutModalitiesTitle')}
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg ml-4">
                  <li><strong>{t('aboutModality1Title')}:</strong> {t('aboutModality1')}</li>
                  <li><strong>{t('aboutModality2Title')}:</strong> {t('aboutModality2')}</li>
                  <li><strong>{t('aboutModality3Title')}:</strong> {t('aboutModality3')}</li>
                  <li><strong>{t('aboutModality4Title')}:</strong> {t('aboutModality4')}</li>
                </ul>

                <div className="flex justify-center mt-8">
                  <a
                    href="https://www.gov.br/mds/pt-br/acoes-e-programas/operacao-acolhida"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2">
                      Saiba mais
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
