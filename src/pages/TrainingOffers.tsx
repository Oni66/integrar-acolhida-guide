import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Footer from '@/components/Footer';
import cursoPortuguesIntermediario from '@/assets/curso-portugues-intermediario.jpeg';
import cursoGastronomia from '@/assets/curso-gastronomia.jpeg';
import cursoPortuguesBasico from '@/assets/curso-portugues-basico.jpeg';

const TrainingOffers = () => {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      image: cursoPortuguesIntermediario,
      alt: 'Curso de Língua Portuguesa de Nível Intermediário'
    },
    {
      id: 2,
      image: cursoGastronomia,
      alt: 'Curso de Gastronomia Confeitaria'
    },
    {
      id: 3,
      image: cursoPortuguesBasico,
      alt: 'Curso de Língua Portuguesa de Nível Básico'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/area-migrante">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backHome')}
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              OFERTAS DE CAPACITAÇÃO
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Aqui serão disponibilizados os cursos de capacitação oferecidos, com todas as informações necessárias para sua inscrição e participação.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Fique atento à documentação exigida e siga cuidadosamente as instruções para garantir sua vaga. Aproveite essa oportunidade de crescimento e aprendizado – a capacitação é a porta para um novo futuro, repleto de possibilidades e conquistas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Dialog key={course.id}>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer group">
                        <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                          <img
                            src={course.image}
                            alt={course.alt}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Card>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={course.image}
                          alt={course.alt}
                          className="w-full h-auto object-contain max-h-[85vh]"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TrainingOffers;
