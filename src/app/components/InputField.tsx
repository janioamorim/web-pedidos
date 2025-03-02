import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface InputFieldProps {
  label: string;
  type: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export default function InputField({ label, type, value, onChange, error, placeholder }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-color-red my-2">{label}</label>
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        className={`w-full p-2 border ${error ? "border-red-500" : "border-gray"} rounded-8 text-color-input`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {isPassword && (
        <button
          type="button"
          className="absolute top-10 right-3 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeSlashIcon className="h-5 w-5 color-gray-100" /> : <EyeIcon className="h-5 w-5 color-gray-100" />}
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
