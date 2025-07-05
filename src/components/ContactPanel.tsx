"use client";

import { useEffect, useRef } from "react";
import { Flex, IconButton, Background } from "@once-ui-system/core";
import { ContactForm } from "./ContactForm";

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export const ContactPanel = ({ isOpen, onClose, service }: ContactPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when panel is open
      document.body.style.overflow = "hidden";
      
      // Focus the first input when panel opens
      const firstInput = panelRef.current?.querySelector("input, textarea, select") as HTMLElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9998,
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "var(--surface-background)",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          padding: "24px",
          zIndex: 9999,
          maxHeight: "90vh",
          overflowY: "auto",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"
      >
        {/* Close button */}
        <Flex horizontal="end" style={{ marginBottom: "16px" }}>
          <IconButton
            icon="close"
            variant="ghost"
            size="m"
            onClick={onClose}
            aria-label="Cerrar formulario de contacto"
          />
        </Flex>

        {/* Form content */}
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <ContactForm service={service} onClose={onClose} />
        </div>
      </div>
    </>
  );
}; 