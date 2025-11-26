import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Resume = () => {
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
              <FileText className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('resumeTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-secondary">
              <CardTitle className="text-secondary-foreground text-center">
                {t('resumeTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('resumeDescription')}
              </p>

              <div className="flex justify-center mt-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe5hDcsKw6GYkDLmxhxdl4a0GphFFRJiSaDSchv48e5jR5TKg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2" size="lg">
                    {t('registerResumeButton')}
                    <ExternalLink className="h-5 w-5" />
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

export default Resume;
