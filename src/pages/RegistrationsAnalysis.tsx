import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Users, Calendar, Globe, FileText } from 'lucide-react';
import Footer from '@/components/Footer';

interface Registration {
  id: string;
  full_name: string;
  birth_date: string;
  nationality: string;
  cpf: string | null;
  created_at: string;
}

const RegistrationsAnalysis = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [nationalityFilter, setNationalityFilter] = useState('all');
  const [nationalities, setNationalities] = useState<string[]>([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    filterRegistrations();
  }, [searchTerm, nationalityFilter, registrations]);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('migrant_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRegistrations(data || []);
      
      const uniqueNationalities = Array.from(
        new Set((data || []).map((r) => r.nationality))
      ).sort();
      setNationalities(uniqueNationalities);
    } catch (error) {
      toast({
        title: t('errorTitle'),
        description: t('errorLoadingData'),
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterRegistrations = () => {
    let filtered = registrations;

    if (searchTerm) {
      filtered = filtered.filter((reg) =>
        reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.cpf?.includes(searchTerm)
      );
    }

    if (nationalityFilter !== 'all') {
      filtered = filtered.filter((reg) => reg.nationality === nationalityFilter);
    }

    setFilteredRegistrations(filtered);
  };

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const stats = {
    total: registrations.length,
    thisMonth: registrations.filter((r) => {
      const created = new Date(r.created_at);
      const now = new Date();
      return created.getMonth() === now.getMonth() && 
             created.getFullYear() === now.getFullYear();
    }).length,
    topNationality: nationalities.length > 0 ? 
      nationalities.reduce((a, b) => 
        registrations.filter(r => r.nationality === a).length >
        registrations.filter(r => r.nationality === b).length ? a : b
      ) : '-',
    withCPF: registrations.filter(r => r.cpf).length
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
        <p className="text-lg text-muted-foreground">{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-2">{t('registrationsAnalysisTitle')}</h1>
          <p className="text-muted-foreground">{t('registrationsAnalysisDescription')}</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('totalRegistrations')}
              </CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('thisMonth')}
              </CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.thisMonth}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('topNationality')}
              </CardTitle>
              <Globe className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.topNationality}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('withCPF')}
              </CardTitle>
              <FileText className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.withCPF}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('filters')}</CardTitle>
            <CardDescription>{t('filterDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder={t('searchByName')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-secondary/20 focus:border-secondary"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={nationalityFilter} onValueChange={setNationalityFilter}>
                <SelectTrigger className="border-secondary/20 focus:border-secondary">
                  <SelectValue placeholder={t('filterByNationality')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('allNationalities')}</SelectItem>
                  {nationalities.map((nat) => (
                    <SelectItem key={nat} value={nat}>
                      {nat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>{t('registrationsList')}</CardTitle>
            <CardDescription>
              {t('showingResults').replace('{{count}}', filteredRegistrations.length.toString())}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('fullName')}</TableHead>
                    <TableHead>{t('age')}</TableHead>
                    <TableHead>{t('nationality')}</TableHead>
                    <TableHead>{t('cpf')}</TableHead>
                    <TableHead>{t('registrationDate')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRegistrations.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        {t('noResults')}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredRegistrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.full_name}</TableCell>
                        <TableCell>{calculateAge(reg.birth_date)} {t('years')}</TableCell>
                        <TableCell>{reg.nationality}</TableCell>
                        <TableCell>{reg.cpf || '-'}</TableCell>
                        <TableCell>
                          {format(new Date(reg.created_at), "dd/MM/yyyy 'às' HH:mm")}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationsAnalysis;
