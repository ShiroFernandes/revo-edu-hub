
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async () => {
    try {
      await login();
      toast({
        title: 'Login realizado com sucesso!',
        description: 'Bem-vindo(a) de volta ao REVO.',
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Erro ao fazer login',
        description: 'Ocorreu um problema ao tentar fazer login. Tente novamente.',
        variant: 'destructive',
      });
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      await register();
      toast({
        title: 'Registro realizado com sucesso!',
        description: 'Bem-vindo(a) ao REVO! Estamos felizes em tê-lo(a) conosco.',
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Erro ao registrar',
        description: 'Ocorreu um problema ao tentar se registrar. Tente novamente.',
        variant: 'destructive',
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-5xl font-bold text-gray-800 tracking-tight">
          <span className="text-revo-purple">REVO</span>
        </h1>
        <h2 className="mt-2 text-center text-2xl font-medium text-gray-600">
          Plataforma Educacional
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-revo-purple-light">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 text-center mb-6">
                Entre ou registre-se para começar
              </h3>
            </div>

            <div>
              <Button
                onClick={handleLogin}
                className="w-full flex justify-center items-center py-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-revo-purple hover:bg-revo-purple-dark"
              >
                Entrar na Plataforma
              </Button>
            </div>

            <div>
              <Button
                onClick={handleRegister}
                className="w-full flex justify-center items-center py-6 border border-revo-purple rounded-md shadow-sm text-base font-medium text-revo-purple bg-white hover:bg-gray-50"
              >
                Registrar-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
