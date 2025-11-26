import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Trophy, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const SuccessStories = () => {
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

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('successTitle')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('successIntro')}
            </p>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <Card className="shadow-elegant border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Star className="h-6 w-6" />
                {t('story1Title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('story1Text')}
              </p>
              <a
                href="https://www.instagram.com/p/DOg4xcdkWx6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline" className="gap-2">
                  {t('watchVideo')}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Star className="h-6 w-6" />
                {t('story2Title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('story2Text')}
              </p>
              <a
                href="https://www.instagram.com/p/DLF-Tu-xgFC/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline" className="gap-2">
                  {t('watchVideo')}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center shadow-elegant">
            <p className="text-primary-foreground text-lg font-medium">
              Essas histórias inspiram e mostram que é possível reconstruir uma vida com dignidade através do acolhimento e oportunidades.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SuccessStories;
