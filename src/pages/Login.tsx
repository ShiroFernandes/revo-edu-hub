
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
                className="w-full flex justify-center items-center py-6 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-800 bg-revo-purple hover:bg-revo-purple-dark"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 48 48"
                >
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Entrar com Gmail
              </Button>
            </div>

            <div>
              <Button
                onClick={handleRegister}
                className="w-full flex justify-center items-center py-6 border border-revo-purple rounded-md shadow-sm text-base font-medium text-gray-800 bg-white hover:bg-gray-50"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 48 48"
                >
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Registrar com Gmail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
