// SignUpPage.tsx
"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Date } from "@/components/home/Date";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { Sezione } from "@/components/home/Sezione";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import fetchData from "@/public/supabase/signupReqeusts/fetchData";

const SignUpPage = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    if (!nome || !cognome || !selectedSection || !password || !cpassword || !selectedDate) {
      setErrorMessage("Tutti i campi devono essere compilati.");
      return false;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Inserisci un'email valida.");
      return false;
    }

    if (password !== cpassword) {
      setErrorMessage("Le password non coincidono.");
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const handleDataSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    const fDate = format(selectedDate!, "dd MMMM yyyy", { locale: it });

    console.log("Nome:", nome);
    console.log("Cognome:", cognome);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Sezione:", selectedSection);
    console.log("Data di nascita:", fDate);

    // Fetch data from supabase
    const data = await fetchData(email);
    if (data) {
      setErrorMessage("Account già esistente");
    } else {
      
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      {errorMessage && (
        <span className="text-red-500 mb-4">{errorMessage}</span>
      )}

      <div className="form-section grid grid-cols-2 gap-2">
        <Input
          type="text"
          placeholder="Nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Cognome"
          id="cognome"
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Conferma Password"
          id="cpassword"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <Date onSelect={setSelectedDate} />
        <Sezione onSelect={setSelectedSection} />
      </div>
      <div className="email m-2">
        <Input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="button-section">
        <Button onClick={handleDataSignUp} className="m-5">
          <IoSend />
          Invia
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
