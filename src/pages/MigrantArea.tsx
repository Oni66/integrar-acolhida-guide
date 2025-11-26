import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import NavigationCard from '@/components/NavigationCard';
import { ArrowLeft, GraduationCap, Briefcase, Building2, MapPin, Heart, BookOpen, Map, ExternalLink, MessageCircle, Instagram, Facebook, Youtube, FileText, Phone, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Footer from '@/components/Footer';

const MigrantArea = () => {
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

        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('migrantArea')}
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bem-vindo! Aqui você encontra informações essenciais sobre cada etapa do processo de acolhimento. Este espaço foi criado para ajudar você a se orientar e conhecer tudo o que a Operação Acolhida pode oferecer. Aqui, é possível acessar serviços, descobrir oportunidades e dar os primeiros passos nessa nova jornada. Navegue pelo aplicativo e conte com o apoio da Operação Acolhida para o seu recomeço no Brasil. Seu novo começo começa aqui!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          <NavigationCard
            to="/ptrig"
            icon={MapPin}
            title="PTRIG - POSTO DE TRIAGEM"
          />
          
          <NavigationCard
            to="/vagas-emprego"
            icon={Briefcase}
            title="VAGAS DE EMPREGO"
          />
          
          <NavigationCard
            to="/cadastro-curriculo"
            icon={FileText}
            title="CADASTRE SEU CURRÍCULO"
          />
          
          <NavigationCard
            to="/cci"
            icon={Building2}
            title="CCI - CENTRO DE CONTROLE E INTERIORIZAÇÃO"
          />
          
          <NavigationCard
            to="/cce"
            icon={BookOpen}
            title="CCE - CENTRO DE CAPACITAÇÃO E EDUCAÇÃO"
          />
          
          <NavigationCard
            to="/ofertas-capacitacao"
            icon={GraduationCap}
            title="OFERTAS DE CAPACITAÇÃO"
          />
          
          <NavigationCard
            to="/saude"
            icon={Heart}
            title="SAÚDE"
          />
          
          <NavigationCard
            to="/abrigos"
            icon={Home}
            title="ABRIGOS"
          />
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <Card className="h-full transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full transition-all duration-300 group-hover:scale-110 bg-[hsl(var(--accent-yellow))]">
                      <Phone className="h-8 w-8 text-[hsl(var(--accent-yellow-foreground))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">TELEFONES ÚTEIS</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">Telefones Úteis</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] pr-4">
                <div className="space-y-6">
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-semibold text-foreground mb-2">⚠️ Atenção, migrantes e refugiados!</p>
                    <p className="text-sm text-muted-foreground">
                      Em situações de emergência ou sempre que precisar de ajuda, é importante saber a quem recorrer. Os números abaixo reúnem os principais serviços de atendimento do Governo de Roraima e do Governo Federal. Eles podem ser usados para solicitar apoio médico, denunciar casos de violência, pedir ajuda em situações de risco ou esclarecer dúvidas sobre serviços públicos.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Esses contatos estão disponíveis gratuitamente, e muitos funcionam 24 horas por dia. Guarde esta lista, compartilhe com outras pessoas e, em caso de necessidade, não hesite em ligar. A segurança e o bem-estar de todos são prioridade.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 border-b pb-2">📞 Telefones Federais de Emergência (válidos em todo o Brasil)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Polícia Militar</span>
                        <span className="font-bold text-secondary">190</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Corpo de Bombeiros</span>
                        <span className="font-bold text-secondary">193</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>SAMU</span>
                        <span className="font-bold text-secondary">192</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Defesa Civil</span>
                        <span className="font-bold text-secondary">199</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Polícia Rodoviária Federal</span>
                        <span className="font-bold text-secondary">191</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Polícia Federal</span>
                        <span className="font-bold text-secondary">194</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Disque Direitos Humanos</span>
                        <span className="font-bold text-secondary">100</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Disque Denúncia Nacional</span>
                        <span className="font-bold text-secondary">181</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Central de Atendimento à Mulher</span>
                        <span className="font-bold text-secondary">180</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Emergência em Rodovias Estaduais</span>
                        <span className="font-bold text-secondary">198</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Central de Atendimento à Mulher (Ligue 180)</span>
                        <span className="font-bold text-secondary">180</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 border-b pb-2">📱 Telefones Úteis – Estado de Roraima</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Superintendência Regional da Polícia Federal em Roraima</span>
                        <span className="font-bold text-secondary">(95) 3621-1519</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Ouvidoria Geral do Governo de Roraima</span>
                        <span className="font-bold text-secondary">(95) 4009-4250</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Secretaria de Estado da Saúde de Roraima (SESAU/RR)</span>
                        <span className="font-bold text-secondary">(95) 98410-6188</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Defensoria Pública do Estado de Roraima</span>
                        <span className="font-bold text-secondary">(95) 2121-4750</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Ministério Público de Roraima</span>
                        <span className="font-bold text-secondary">0800 095 3621</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 border-b pb-2">🏢 Serviços Públicos e de Infraestrutura</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Roraima Energia (Call Center)</span>
                        <span className="font-bold text-secondary">0800 70 19 120</span>
                      </li>
                      <li className="flex justify-between p-2 hover:bg-accent/50 rounded">
                        <span>Prefeitura de Boa Vista (Serviço de Informações)</span>
                        <span className="font-bold text-secondary">156</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="mt-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-foreground">
              {t('citiesWithJobs')}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {t('citiesWithJobsDescription')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Vila Velha', url: 'https://www.youtube.com/watch?v=qA1n-DIGeXA' },
                { name: 'Rio Grande do Norte', url: 'https://www.youtube.com/watch?v=8ShcnBOjlV0' },
                { name: 'São Paulo', url: 'https://www.youtube.com/watch?v=UGIy7mDxo1c' },
                { name: 'Belo Horizonte', url: 'https://www.youtube.com/watch?v=OQOT-FQQ2y0' },
                { name: 'Vitória - ES', url: 'https://www.youtube.com/watch?v=hLrNckEmcAc&t=21s' },
                { name: 'Santa Catarina', url: 'https://www.youtube.com/watch?v=RQA2SYrhwQc' },
                { name: 'Manaus', url: 'https://www.youtube.com/watch?v=haSbuTBuBKc' },
              ].map((city) => (
                <a
                  key={city.name}
                  href={city.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className="w-full h-auto py-4 px-6 flex items-center justify-between gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
                  >
                    <span className="font-semibold">{city.name}</span>
                    <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-12 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Canal de Informações no WhatsApp
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Entre no canal e fique por dentro das atualizações, serviços e comunicados oficiais da Operação Acolhida.
            </p>
            <div className="flex justify-center">
              <a
                href="https://whatsapp.com/channel/0029Vb5zwNGJZg42iOTlA22A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Acesse o canal
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
              Rede Social
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.instagram.com/opacolhida/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Button>
              </a>
              <a
                href="https://www.facebook.com/opacolhida/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Facebook className="h-5 w-5" />
                  Facebook
                </Button>
              </a>
              <a
                href="https://www.youtube.com/@d7-opacolhida827"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Youtube className="h-5 w-5" />
                  Youtube
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  );
};

export default MigrantArea;
