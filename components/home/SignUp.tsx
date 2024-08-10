"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Date } from "@/components/home/Date";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { Sezione } from "@/components/home/Sezione";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const SignUpPage = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    if (!nome || !cognome || !selectedSection || !password || !cpassword || !selectedDate) {
      alert("Tutti i campi devono essere compilati.");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Inserisci un'email valida.");
      return false;
    }

    if (password !== cpassword) {
      alert("Le password non coincidono.");
      return false;
    }

    return true;
  };

  const handleDataSignUp = () => {
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

    
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
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