import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
const PTRIG = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
              <MapPin className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('ptrigMainTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uEtGlmAi7_1PFmiaH7SHoNN" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="gap-2 w-full" size="lg">
                CONHEÇA O PTRIG
              </Button>
            </a>
            
            <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uFoX2_jfbXu5Zeh7RV09X-P" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="gap-2 w-full" size="lg">
                DEPOIMENTOS
              </Button>
            </a>

            <a href="https://www.youtube.com/playlist?list=PLinZSIiL28uHEZCT40iZs4NRANBzhTxgz" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="gap-2 w-full" size="lg">REGRAS DE CONVIVÊNCIA</Button>
            </a>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p className="font-semibold text-foreground">{t('ptrigAttention')}</p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-bold text-foreground">📄 Não espere, documente-se! Seu passaporte para a dignidade começa aqui.</p>
                </div>
                
                <p>{t('ptrigText1')}</p>
                
                <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                  <p className="font-bold text-foreground">🤝 Documentar é integrar. Integrar é construir o seu futuro no Brasil.</p>
                </div>
                
                <p>{t('ptrigText2')}</p>
                
                <p>{t('ptrigText3')}</p>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                  <p className="font-bold text-foreground">🔑 Regularizar é pertencer. Um documento abre portas e transforma sua história.</p>
                </div>
                
                <p>{t('ptrigText4')}</p>
                
                <p>{t('ptrigText5')}</p>
                
                <p>{t('ptrigText6')}</p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-bold text-foreground">🇧🇷 Documentação é cidadania. Um passo para a integração, um salto para novas oportunidades.</p>
                </div>
                
                <p className="font-semibold text-foreground">{t('ptrigText7')}</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-semibold text-foreground mb-2">💡 Importante:</p>
                <p className="text-muted-foreground">
                  Todos os serviços oferecidos no PTRIG são gratuitos. Não aceite ajuda de pessoas não identificadas e nunca faça qualquer tipo de pagamento por atendimentos, documentos ou orientações. Em caso de dúvida, procure sempre um profissional identificado da Operação Acolhida.
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('location')}</p>
                    <p className="text-muted-foreground">
                      Endereço: Av. Brasil, 551 - Treze de Setembro, Boa Vista - RR, 69308-050
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>;
};
export default PTRIG;