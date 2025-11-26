import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Training = () => {
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
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('trainingTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t('portugueseCourse')}
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-4" />
                <p className="text-muted-foreground">
                  Aprenda português para melhor integração no Brasil
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t('electricianCourse')}
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-4" />
                <p className="text-muted-foreground">
                  Desenvolva habilidades profissionais em elétrica
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Training;
