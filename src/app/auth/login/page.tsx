"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import LoadingCircle from "@/app/components/LoadingCircle";
import InputField from "@/app/components/InputField";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [requestError, setRequestError] = useState<string | null>(null);


  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    
    if (!email) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!validEmail) {
      newErrors.email = "Digite um e-mail válido.";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória.";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestError(null);

    if (!validateForm()) return;

    setSubmitted(true);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      setRequestError("E-mail ou senha inválidos.");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full lg:w-1/2 flex flex-col items-center p-6 sm:p-12">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md my-10">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="Login Art" width={160} height={68} priority />
          </div>

          <InputField
            label="E-mail"
            type="email"
            value={email}
            onChange={setEmail}
            error={errors.email}
            placeholder="seuemail@exemplo.com"
          />

          <InputField
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
            error={errors.password}
          />

          <div>
            <span className="block text-xs text-color-red my-3 hover:text-red-300 cursor-pointer">
              Esqueci a senha
            </span>
          </div>

 
          {requestError && <p className="text-red-500 text-sm text-center">{requestError}</p>}

          <button
            type="submit"
            className="flex justify-center w-full bg-red-custom-100 text-white p-3 rounded-8 text-sm font-medium hover:bg-red-400"
          >
            {submitted ? <LoadingCircle /> : "Entrar"}
          </button>
        </form>
      </div>

      <div className="static">
        <span className="absolute bottom-10 left-10 text-color text-sm">
          ® Desenvolvido por Azape
        </span>
      </div>

      <div className="hidden lg:flex w-1/2 h-full items-center justify-center">
        <Image
          src="/img-art-login.svg"
          alt="Login Art"
          width={600}
          height={600}
          priority
          className="w-full object-cover img-custom"
        />
      </div>
    </div>
  );
}
