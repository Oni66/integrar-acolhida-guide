import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Shelters = () => {
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

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
              <Home className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('sheltersMainTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>{t('sheltersIntro')}</p>
                
                <p>{t('sheltersText1')}</p>
                
                <p>{t('sheltersText2')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uF3SLMRRpNYnhL4w4GzV5sH" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="gap-2 w-full" size="lg">
                    {t('knowSheltersButton')}
                  </Button>
                </a>
                
                <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uGan0TGYgWZqRdl9lLgNmMP" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="gap-2 w-full" size="lg">
                    {t('sheltersHealthButton')}
                  </Button>
                </a>

                <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uHEZCT40iZs4NRANBzhTxgz" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="gap-2 w-full" size="lg">
                    {t('sheltersRulesButton')}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shelters;
