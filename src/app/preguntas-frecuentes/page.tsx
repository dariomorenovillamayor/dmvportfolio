"use client";

import { useState, useEffect } from "react";
import {
  Flex,
  Column,
  Heading,
  Text,
  Card,
  Button,
  Icon,
  Grid,
  Tag,
  Line
} from "@once-ui-system/core";
import { CursorEffect, Footer, LanguageToggle, ThemeToggle, useContact } from "@/components";
import { getContent } from "../../resources/content";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "../../resources/translations";

export default function FAQPage() {
  const { language, setLanguage } = useLanguage();
  const { openContact } = useContact();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social } = currentContent;

  const t = translations[language] || translations.es;

  const content = {
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Resolvemos tus dudas sobre nuestros servicios",
      description: "Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de nutrición y coaching personalizado.",
      faqs: [
        {
          question: "¿Para qué personas están orientados estos servicios?",
          answer: "Cada asesoría se adapta a cualquier persona, sin importar la edad, la condición física o el objetivo. El plan se diseña de forma completamente personalizada para que encaje con tu estilo de vida y necesidades."
        },
        {
          question: "Si NO voy al gimnasio, ¿puedo seguir estos servicios?",
          answer: "Sí. Además del plan de nutrición, todos los servicios incluyen una planificación individual que se ajusta a tu rutina, preferencias y nivel de actividad. Cada persona recibe una guía de actividad física adaptada a lo que le gusta y puede realizar, con o sin gimnasio."
        },
        {
          question: "Si tengo que comer fuera de casa o viajar, ¿puedo seguir estos servicios?",
          answer: "Sí. Todos los programas son 100 % personalizados y se ajustan a tus circunstancias, incluso si comes fuera o viajas con frecuencia. La clave está en la organización y la planificación anticipada, para que puedas mantener tu progreso sin complicaciones."
        },
        {
          question: "¿Puedo contratar un servicio de manera mensual?",
          answer: "No. Dado que el seguimiento es totalmente personalizado y el número de plazas es muy limitado, se requiere un compromiso mínimo de tres meses. Cada persona necesita un tiempo de adaptación distinto, por lo que las plazas se reservan para quienes realmente estén comprometidos a trabajar con Darío durante al menos un trimestre, garantizando así la calidad, la dedicación y la cercanía que mereces."
        },
        {
          question: "¿La comunicación y seguimiento es con Darío?",
          answer: "Sí. Todo el seguimiento y la comunicación, durante todo el proceso, serán realizados directamente por Darío, garantizando un trato cercano, personalizado y constante."
        },
        {
          question: "¿Puedo contratar los servicios si vivo fuera de España?",
          answer: "Sí. Puedes trabajar con Darío desde cualquier parte del mundo, ya que todos los servicios se realizan de forma online a excepción del plan \"Salud, Nutrición y Coaching 1 a 1\" que incluye sesiones presenciales."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "We answer your questions about our services",
      description: "Here you will find answers to the most common questions about our nutrition and personalized coaching services.",
      faqs: [
        {
          question: "What type of people are these services aimed at?",
          answer: "Each consultation adapts to any person, regardless of age, physical condition or objective. The plan is designed in a completely personalized way to fit your lifestyle and needs."
        },
        {
          question: "If I DON'T go to the gym, can I follow these services?",
          answer: "Yes. In addition to the nutrition plan, all services include individual planning that adjusts to your routine, preferences and activity level. Each person receives a physical activity guide adapted to what they like and can do, with or without a gym."
        },
        {
          question: "If I have to eat out or travel, can I follow these services?",
          answer: "Yes. All programs are 100% personalized and adapt to your circumstances, even if you eat out or travel frequently. The key is organization and advance planning, so you can maintain your progress without complications."
        },
        {
          question: "Can I hire a service monthly?",
          answer: "No. Since the follow-up is completely personalized and the number of spots is very limited, a minimum commitment of three months is required. Each person needs a different adaptation time, so spots are reserved for those who are truly committed to working with Darío for at least a quarter, thus ensuring the quality, dedication and closeness you deserve."
        },
        {
          question: "Is communication and follow-up with Darío?",
          answer: "Yes. All follow-up and communication, throughout the entire process, will be carried out directly by Darío, guaranteeing close, personalized and constant treatment."
        },
        {
          question: "Can I hire services if I live outside Spain?",
          answer: "Yes. You can work with Darío from anywhere in the world, since all services are carried out online except for the \"Health, Nutrition and 1-on-1 Coaching\" plan which includes in-person sessions."
        }
      ]
    }
  };

  const currentPageContent = content[language as keyof typeof content];

  return (
    <>
      <CursorEffect />
      <Flex as="main" horizontal="center" fillWidth>
        <div className="main-container" style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <Column gap="xl" paddingY="40" horizontal="center" style={{ width: '100%' }}>
            {/* Header */}
            <Column gap="l" horizontal="center" style={{ textAlign: 'center' }}>
              <Heading variant="display-strong-xl">{currentPageContent.title}</Heading>
              <Text variant="display-default-l" onBackground="neutral-weak">{currentPageContent.subtitle}</Text>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {currentPageContent.description}
              </Text>
            </Column>

            {/* FAQ Section */}
            <Column gap="l">
              <Grid columns="1" gap="l">
                {currentPageContent.faqs.map((faq, index) => (
                  <Card key={index} padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card">
                    <Column gap="l">
                      <Flex gap="s" vertical="center">
                        <span style={{ fontSize: '2.2em', marginRight: '8px' }}>❓</span>
                        <Heading variant="heading-strong-m" style={{ color: 'var(--brand-400)', fontWeight: 600 }}>
                          {faq.question}
                        </Heading>
                      </Flex>
                      <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                        {faq.answer}
                      </Text>
                    </Column>
                  </Card>
                ))}
              </Grid>
            </Column>

            {/* Contact CTA */}
            <Card padding="xl" radius="l" border="brand-alpha-medium" background="brand-weak">
              <Column gap="l" horizontal="center">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{t.faqCtaTitle}</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }} wrap="balance">
                  {t.faqCtaSubtitle}
                </Text>
                <Flex gap="m" wrap>
                  <Button
                    onClick={() => openContact('consulta-general')}
                    variant="primary"
                    size="l"
                    prefixIcon="email"
                  >
                    {t.contactButton}
                  </Button>
                  <Button
                    href="/"
                    variant="secondary"
                    size="l"
                    prefixIcon="arrowLeft"
                  >
                    {t.backButton}
                  </Button>
                </Flex>
              </Column>
            </Card>
          </Column>
        </div>
      </Flex>
    </>
  );
} 