import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Megaphone, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Announcements = () => {
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

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
              <Megaphone className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('announcementsTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-secondary">
              <CardTitle className="flex items-center gap-2 text-secondary-foreground">
                <AlertCircle className="h-6 w-6" />
                {t('announcementsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <p className="text-lg text-muted-foreground font-medium">
                {t('announcementsIntro')}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('announcement1')}</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('announcement2')}</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('announcement3')}</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mt-6">
                <p className="text-foreground font-medium text-center">
                  {t('announcementFooter')}
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

export default Announcements;
