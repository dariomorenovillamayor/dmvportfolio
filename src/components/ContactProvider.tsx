"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ContactPanel } from "./ContactPanel";

interface ContactContextType {
  openContact: (service?: string) => void;
  closeContact: () => void;
  isContactOpen: boolean;
  currentService?: string;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentService, setCurrentService] = useState<string | undefined>();

  const openContact = (service?: string) => {
    setCurrentService(service);
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    setCurrentService(undefined);
  };

  return (
    <ContactContext.Provider
      value={{
        openContact,
        closeContact,
        isContactOpen,
        currentService,
      }}
    >
      {children}
      <ContactPanel
        isOpen={isContactOpen}
        onClose={closeContact}
        service={currentService}
      />
    </ContactContext.Provider>
  );
}; 