import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Briefcase, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Jobs = () => {
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
            <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
              <Briefcase className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('jobsTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-secondary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-sm">
              📅 Atualizado em: 8/11/2025 – 9h
            </p>
          </div>

          <Card className="shadow-elegant border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('jobsIntro')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 SAKATA SEED SUDAMERICA LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Serviços Gerais</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 4</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros</p>
                <p><span className="font-semibold">Faixa Etária:</span> 20 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Bragança Paulista/SP</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 VIGIE MEAT ALIMENTOS EIRELI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 20</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros</p>
                <p><span className="font-semibold">Faixa Etária:</span> 20 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Ponte Nova/SP</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 ESPÍRITO SANTO AMBIENTAL LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 2</p>
                <p><span className="font-semibold">Gênero:</span> Homens ou Mulheres Solteiros, Família (criança a partir de 14 anos)</p>
                <p><span className="font-semibold">Local:</span> Linhares/ES</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 PREMOCON PRÉ-MOLDADOS DE CONCRETO NUNES LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Ajudante de Fabricação de Peças Premoldadas de Concreto</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 3</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros</p>
                <p><span className="font-semibold">Faixa Etária:</span> 20 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Conselheiro Lafaiete/MG</p>
                <p><span className="font-semibold">Experiência:</span> Desejável</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 ROYAL COMÉRCIO E DISTRIBUIDORA LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Operador de Loja, Jovem Aprendiz, Trainee de Caixa e Ajudante de Depósito</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 102</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros, Família/Jovem Aprendiz</p>
                <p><span className="font-semibold">Faixa Etária:</span> 14 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Volta Redonda/RJ</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 ROYAL COMÉRCIO E DISTRIBUIDORA LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Operador de Loja, Jovem Aprendiz, Trainee de Caixa e Ajudante de Depósito</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 120</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros, Família/Jovem Aprendiz</p>
                <p><span className="font-semibold">Faixa Etária:</span> 14 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Resende/RJ</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 ROYAL CENTER COMERCIAL LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Operador de Loja, Jovem Aprendiz, Trainee de Caixa e Ajudante de Depósito</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 120</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros, Família/Jovem Aprendiz</p>
                <p><span className="font-semibold">Faixa Etária:</span> 14 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Resende/RJ</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 KETEK ATACADISTA DE ALIMENTOS LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Operador de Loja, Jovem Aprendiz, Trainee de Caixa e Ajudante de Depósito</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 120</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros, Família/Jovem Aprendiz</p>
                <p><span className="font-semibold">Faixa Etária:</span> 14 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Volta Redonda/RJ; Três Rios/RJ</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 NATURAFRIG ALIMENTOS LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Trabalhadores de Produção de Bens e Serviços Industriais</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 30</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros</p>
                <p><span className="font-semibold">Faixa Etária:</span> 20 a 55 anos</p>
                <p><span className="font-semibold">Local:</span> Rochedo/MS</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 REDE MILHÃO
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Atendente de Lanchonete</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 5</p>
                <p><span className="font-semibold">Gênero:</span> Familiar</p>
                <p><span className="font-semibold">Faixa Etária:</span> 18 a 45 anos</p>
                <p><span className="font-semibold">Local:</span> Florestal/MG</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 BRACELL SP CELULOSE LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Serviços Gerais / Mecânico(a) Automotivo</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 60</p>
                <p><span className="font-semibold">Gênero:</span> Não informado</p>
                <p><span className="font-semibold">Local:</span> Lençóis Paulistas/SP</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 ALIBEM ALIMENTOS AS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 20</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros</p>
                <p><span className="font-semibold">Local:</span> Estação/RS</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 ALIBEM ALIMENTOS AS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 2</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros (18–55 anos)</p>
                <p><span className="font-semibold">Local:</span> Santa Rosa/RS</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 GUARAVES GUARABIRA AVES LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Criadouro de Aves</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 40</p>
                <p><span className="font-semibold">Gênero:</span> Familiar e Solteiros</p>
                <p><span className="font-semibold">Local:</span> Guarabira/PB</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 MGM MÓVEIS LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Expedição</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 6</p>
                <p><span className="font-semibold">Gênero:</span> Familiar, Homens Solteiros, Casais</p>
                <p><span className="font-semibold">Local:</span> Linhares/ES</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 CARROCERIA NACIONAL LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Montador, Ajudante de Produção, Pintor a Pincel, Soldador</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 4</p>
                <p><span className="font-semibold">Gênero:</span> Familiar e Solteiros</p>
                <p><span className="font-semibold">Local:</span> Colatina/ES</p>
                <p><span className="font-semibold">Experiência:</span> Necessária em todos os cargos</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 PRIME SHOP LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Depósito</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 1</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros</p>
                <p><span className="font-semibold">Local:</span> Arapongas/PR</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 ALIBEM ALIMENTOS S.A
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 10</p>
                <p><span className="font-semibold">Gênero:</span> Homens Solteiros</p>
                <p><span className="font-semibold">Local:</span> Santo Ângelo/RS</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 COLINA DAS AMORAS EMPREEN IMOB SPE LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Obras</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 10</p>
                <p><span className="font-semibold">Gênero:</span> Familiar e Solteiros</p>
                <p><span className="font-semibold">Local:</span> Vila Velha/ES</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 GABRIEL NAKAHARADA CAMELO ME
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Serviços Gerais</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 2</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres Solteiros sem filhos (18–40 anos)</p>
                <p><span className="font-semibold">Local:</span> Tibau/RN</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 ALIMENTOS TRIGOMAIS INDÚSTRIA E COMÉRCIO LTDA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Serviços Gerais</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 3</p>
                <p><span className="font-semibold">Gênero:</span> Homens com família ou solteiros</p>
                <p><span className="font-semibold">Local:</span> Serra/ES</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 FRISA – FRIGORÍFICO RIO DOCE S/A
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Frigorífico</p>
                <p><span className="font-semibold">Vagas Restantes:</span> Não informado</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres com ou sem família</p>
                <p><span className="font-semibold">Faixa Etária:</span> 18 a 50 anos</p>
                <p><span className="font-semibold">Local:</span> Colatina/ES</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Sim</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 FLORA INUI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Produção Rural</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 5</p>
                <p><span className="font-semibold">Gênero:</span> Familiar</p>
                <p><span className="font-semibold">Faixa Etária:</span> 18 a 50 anos</p>
                <p><span className="font-semibold">Local:</span> São Paulo/SP</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="text-secondary flex items-center gap-2">
                🟩 GOLDE IMEX
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Operador de Produção</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 35</p>
                <p><span className="font-semibold">Gênero:</span> Familiar</p>
                <p><span className="font-semibold">Faixa Etária:</span> A partir de 18 anos</p>
                <p><span className="font-semibold">Local:</span> Paranaíba/MS</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-primary flex items-center gap-2">
                🟩 JAPAN SUSHI FOOD DELIVERY
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Cargo:</span> Auxiliar de Cozinha</p>
                <p><span className="font-semibold">Vagas Restantes:</span> 10</p>
                <p><span className="font-semibold">Gênero:</span> Homens e Mulheres sem filhos</p>
                <p><span className="font-semibold">Faixa Etária:</span> A partir de 18 anos</p>
                <p><span className="font-semibold">Local:</span> Belo Horizonte/MG</p>
                <p><span className="font-semibold">Experiência:</span> Não informada</p>
                <p><span className="font-semibold">PCD:</span> Não</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                {t('jobsFooter')}
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Jobs;
