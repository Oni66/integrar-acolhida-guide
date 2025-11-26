import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

interface MigrantRegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MigrantRegistrationForm = ({ open, onOpenChange }: MigrantRegistrationFormProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    nationality: '',
    cpf: ''
  });

  const registrationSchema = z.object({
    fullName: z.string().trim().min(3, { message: t('formErrorFullName') }).max(100),
    birthDate: z.string().refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      return selectedDate <= today;
    }, { message: t('formErrorBirthDate') }),
    nationality: z.string().trim().min(2, { message: t('formErrorNationality') }).max(50),
    cpf: z.string().optional()
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = registrationSchema.parse(formData);

      const { error } = await supabase
        .from('migrant_registrations')
        .insert({
          full_name: validatedData.fullName,
          birth_date: validatedData.birthDate,
          nationality: validatedData.nationality,
          cpf: validatedData.cpf || null
        });

      if (error) throw error;

      toast({
        title: t('registrationSuccess'),
        description: t('registrationSuccessDescription'),
      });

      // Salvar no localStorage que o usuário já se cadastrou
      localStorage.setItem('migrant_registered', 'true');
      localStorage.setItem('migrant_registration_date', new Date().toISOString());

      onOpenChange(false);
      navigate('/area-migrante');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t('formError'),
          description: error.errors[0].message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: t('errorTitle'),
          description: t('errorDescription'),
          variant: 'destructive'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary">{t('registrationFormTitle')}</DialogTitle>
          <DialogDescription className="text-base">
            {t('registrationFormDescription')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground font-semibold">
              {t('fullName')} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              maxLength={100}
              className="border-secondary/20 focus:border-secondary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-foreground font-semibold">
              {t('birthDate')} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              required
              max={new Date().toISOString().split('T')[0]}
              className="border-secondary/20 focus:border-secondary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality" className="text-foreground font-semibold">
              {t('nationality')} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nationality"
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              required
              maxLength={50}
              className="border-secondary/20 focus:border-secondary"
              placeholder={t('nationalityPlaceholder')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-foreground font-semibold">
              {t('cpf')} <span className="text-muted-foreground text-sm">({t('optional')})</span>
            </Label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              maxLength={14}
              className="border-secondary/20 focus:border-secondary"
              placeholder="000.000.000-00"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={loading}
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={loading}
            >
              {loading ? t('saving') : t('submit')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MigrantRegistrationForm;
