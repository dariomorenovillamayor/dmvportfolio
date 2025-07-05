"use client";

import { useState, useEffect } from "react";
import { Button, Column, Flex, Heading, Input, Text, Textarea } from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageProvider";

interface ContactFormProps {
  service?: string;
  onClose: () => void;
}

const translations = {
  es: {
    title: "Contactar con Darío",
    subtitle: "Completa el formulario y te responderemos en breve",
    name: "Nombre completo",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    service: "Servicio de interés",
    servicePlaceholder: "Selecciona un servicio",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu consulta...",
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    cancel: "Cancelar",
    successTitle: "¡Mensaje enviado!",
    successText: "Gracias por contactar con Darío. Te responderemos pronto.",
    error: "Error al enviar el formulario. Por favor intenta de nuevo.",
    required: "es requerido",
    invalidEmail: "Por favor ingresa un email válido",
    services: [
      { value: "salud-prevencion", label: "Salud, Prevención y Control de Peso" },
      { value: "nutricion-deporte", label: "Nutrición Deportiva Online" },
      { value: "coaching-personalizado", label: "Coaching Nutricional Personalizado" },
      { value: "talleres-grupales", label: "Talleres Grupales de Nutrición" },
      { value: "consulta-general", label: "Consulta General" },
    ],
  },
  en: {
    title: "Contact Darío",
    subtitle: "Fill out the form and we will get back to you soon",
    name: "Full Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    service: "Service of Interest",
    servicePlaceholder: "Select a service",
    message: "Message",
    messagePlaceholder: "Tell us about your inquiry...",
    submit: "Send Message",
    submitting: "Sending...",
    cancel: "Cancel",
    successTitle: "Message sent!",
    successText: "Thank you for contacting Darío. We will reply soon.",
    error: "Error sending the form. Please try again.",
    required: "is required",
    invalidEmail: "Please enter a valid email address",
    services: [
      { value: "salud-prevencion", label: "Health, Prevention and Weight Control" },
      { value: "nutricion-deporte", label: "Sports Nutrition Online" },
      { value: "coaching-personalizado", label: "Personalized Nutrition Coaching" },
      { value: "talleres-grupales", label: "Group Nutrition Workshops" },
      { value: "consulta-general", label: "General Inquiry" },
    ],
  },
};

export const ContactForm = ({ service, onClose }: ContactFormProps) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.es;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: service || "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update service when prop changes
  useEffect(() => {
    if (service) {
      setFormData(prev => ({ ...prev, service }));
    }
  }, [service]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = `${t.name} ${t.required}`;
    }

    if (!formData.email.trim()) {
      newErrors.email = `${t.email} ${t.required}`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.service) {
      newErrors.service = `${t.service} ${t.required}`;
    }

    if (!formData.message.trim()) {
      newErrors.message = `${t.message} ${t.required}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the real Formspree endpoint
      const response = await fetch("https://formspree.io/f/xdkzvawr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `New inquiry: ${formData.service}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: "", email: "", service: service || "", message: "" });
        }, 3000);
      } else {
        throw new Error("Error sending form");
      }
    } catch (error) {
      setErrors({ submit: t.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <Column gap="l" horizontal="center" style={{
        textAlign: "center",
        background: "rgba(255,255,255,0.85)",
        borderRadius: 24,
        padding: "2rem 1.5rem",
        boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        maxWidth: 420,
        margin: "0 auto"
      }}>
        <Heading variant="display-strong-m" style={{ color: "var(--brand-600)", fontSize: "2rem", marginBottom: 16 }}>
          {t.successTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ fontSize: "1.1rem" }}>
          {t.successText}
        </Text>
      </Column>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Column gap="xl" style={{ background: "rgba(255,255,255,0.85)", borderRadius: 24, padding: "2rem 1.5rem", boxShadow: "0 4px 32px rgba(0,0,0,0.08)", maxWidth: 420, margin: "0 auto" }}>
        <Column gap="m" horizontal="center">
          <Heading variant="display-strong-m" style={{ textAlign: "center", fontSize: "2rem" }}>
            {t.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "center", fontSize: "1.1rem" }}>
            {t.subtitle}
          </Text>
        </Column>

        <Column gap="l">
          <Input
            id="contact-name"
            label={t.name}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            errorMessage={errors.name}
            required
            style={{ fontSize: "1.1rem", height: 48, padding: "0 16px", lineHeight: "48px", boxSizing: "border-box" }}
          />

          <Input
            id="contact-email"
            label={t.email}
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            errorMessage={errors.email}
            required
            style={{ fontSize: "1.1rem", height: 48, padding: "0 16px", lineHeight: "48px", boxSizing: "border-box" }}
          />

          <Column gap="s">
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 500, fontSize: "1.1rem" }}>
              {t.service} *
            </Text>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange("service", e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "8px",
                border: errors.service ? "1.5px solid var(--danger-500)" : "1.5px solid var(--neutral-alpha-medium)",
                backgroundColor: "var(--surface-background)",
                color: "var(--neutral-on-background)",
                fontSize: "1.1rem",
                outline: "none",
                transition: "border-color 0.2s ease",
                marginBottom: errors.service ? 0 : 12,
              }}
            >
              <option value="" disabled hidden>
                {t.servicePlaceholder}
              </option>
              {t.services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <Text variant="body-default-s" onBackground="danger-weak" style={{ marginTop: "4px" }}>
                {errors.service}
              </Text>
            )}
          </Column>

          <Textarea
            id="contact-message"
            label={t.message}
            placeholder={t.messagePlaceholder}
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
            errorMessage={errors.message}
            rows={4}
            required
            style={{ fontSize: "1.1rem", padding: "14px 16px" }}
          />
        </Column>

        {errors.submit && (
          <Text variant="body-default-s" onBackground="danger-weak" style={{ textAlign: "center", marginTop: "8px", fontWeight: 600 }}>
            {errors.submit}
          </Text>
        )}

        <Flex gap="m" wrap style={{ marginTop: 8 }}>
          <Button
            type="submit"
            variant="primary"
            size="l"
            fillWidth
            disabled={isSubmitting}
            prefixIcon={isSubmitting ? "loading" : "send"}
            style={{ fontSize: "1.15rem", fontWeight: 700, padding: "1.1rem 0" }}
          >
            {isSubmitting ? t.submitting : t.submit}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="l"
            onClick={onClose}
            disabled={isSubmitting}
            style={{ fontSize: "1.1rem", padding: "1.1rem 0" }}
          >
            {t.cancel}
          </Button>
        </Flex>
      </Column>
    </form>
  );
}; 