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

export default function CoachingPersonalizadoPage() {
  const { language, setLanguage } = useLanguage();
  const { openContact } = useContact();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social } = currentContent;

  const content = {
    es: {
      title: "Salud, Nutrición y Coaching 1 a 1",
      subtitle: "Acompañamiento integral y personalizado",
      description: "Atención y seguimiento constante con entrenamiento personal presencial, nutrición de precisión y coaching de desarrollo personal adaptado a objetivos específicos.",
      benefits: [
        "Acompañamiento integral y personalizado",
        "Atención y seguimiento constante",
        "Entrenamiento personal presencial",
        "Nutrición de precisión",
        "Coaching de desarrollo personal",
        "Adaptación a objetivos específicos"
      ],
      features: [
        "Programa semanal de nutrición personalizado, modificado y revisado cada 2 semanas",
        "Planes adaptados a tus gustos e intolerancias",
        "Resolución de dudas, contacto y seguimiento constante con Darío a través de Chat WhatsApp y/o llamada telefónica para cualquier urgencia o duda",
        "Reportes de seguimiento cada semana con medidas, fotos y sensaciones",
        "Desplazamiento a sesiones de entrenamiento presenciales en gimnasio de preferencia",
        "Plan de suplementación a medida",
        "En mujeres, el programa nutricional será estructurados en función del periodo menstrual (fase folicular, fase lútea)",
        "Nutrición de precisión, adaptada a ritmos de vida frenéticos y cambiantes",
        "Recomendaciones, pautas y guía especializada de actividad física diaria",
        "Videollamada cada 2 semanas para analizar juntos el proceso"
      ],
      pricing: {
        title: "Plan de Nutrición y Coaching mensual",
        note: "En función de los objetivos",
        status: "Servicio temporalmente no disponible",
        description: "Este servicio incluye todos los servicios del plan Salud, Nutrición y Deporte INTEGRAL y además:"
      },
      commitment: "El cuerpo necesita tiempo para adaptarse y poder mostrar resultados sólidos. Por ello, para lograr transformaciones reales y duraderas, es imprescindible comprometerse con un plan mínimo de 3 meses, solo así puedo asegurar el nivel de calidad, dedicación y calidez que mereces.",
      personalization: "Este programa es 100 % personalizado: aquí no encontrarás plantillas genéricas, soluciones \"copia-pega\" o dietas de cajón. Trabajo con un número muy limitado de plazas para poder dedicarte la atención exclusiva que mereces, tratando de que cada paso que des te encuentre siempre arropado por un profesional, de principio a fin, garantizando seguimiento, ajuste y apoyo constante.",
      support: "Tu compromiso de 3 meses incluye soporte continuo con revisiones y ajustes periódicos, exclusividad y plazas limitadas para que recibas un trato cercano y humano.",
      cta: "Si buscas un cambio real, este es tu momento."
    },
    en: {
      title: "Health, Nutrition and 1-on-1 Coaching",
      subtitle: "Comprehensive and personalized accompaniment",
      description: "Constant attention and follow-up with in-person personal training, precision nutrition and personal development coaching adapted to specific objectives.",
      benefits: [
        "Comprehensive and personalized accompaniment",
        "Constant attention and follow-up",
        "In-person personal training",
        "Precision nutrition",
        "Personal development coaching",
        "Adaptation to specific objectives"
      ],
      features: [
        "Weekly personalized nutrition program, modified and reviewed every 2 weeks",
        "Plans adapted to your tastes and intolerances",
        "Doubt resolution, contact and constant follow-up with Darío via WhatsApp Chat and/or phone call for any emergency or doubt",
        "Weekly follow-up reports with measurements, photos and sensations",
        "Travel to in-person training sessions at preferred gym",
        "Custom supplementation plan",
        "In women, the nutritional program will be structured according to the menstrual period (follicular phase, luteal phase)",
        "Precision nutrition, adapted to hectic and changing life rhythms",
        "Specialized recommendations, guidelines and daily physical activity guide",
        "Video call every 2 weeks to analyze the process together"
      ],
      pricing: {
        title: "Monthly Nutrition and Coaching Plan",
        note: "Depending on objectives",
        status: "Service temporarily unavailable",
        description: "This service includes all services from the COMPREHENSIVE Health, Nutrition and Sports plan and additionally:"
      },
      commitment: "The body needs time to adapt and be able to show solid results. Therefore, to achieve real and lasting transformations, it is essential to commit to a minimum 3-month plan, only then can I ensure the level of quality, dedication and warmth you deserve.",
      personalization: "This program is 100% personalized: here you won't find generic templates, copy-paste solutions or cookie-cutter diets. I work with a very limited number of spots to be able to give you the exclusive attention you deserve, ensuring that every step you take is always supported by a professional, from start to finish, guaranteeing follow-up, adjustment and constant support.",
      support: "Your 3-month commitment includes continuous support with periodic reviews and adjustments, exclusivity and limited spots so you receive close and human treatment.",
      cta: "If you're looking for real change, this is your moment."
    }
  };

  const currentPageContent = content[language as keyof typeof content];
  const t = translations[language as 'es' | 'en'] || translations.es;

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

            {/* Benefits */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card" style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <Column gap="l">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? '¿Qué incluye este plan?' : 'What does this plan include?'}</Heading>
                <Grid columns="2" mobileColumns="1" gap="l">
                  {currentPageContent.benefits.map((benefit, index) => {
                    const emojis = [
                      '🧑‍🤝‍🧑', // Accompaniment
                      '📞', // Attention
                      '🏋️‍♂️', // Training
                      '🥗', // Nutrition
                      '🧠', // Coaching
                      '🎯', // Objectives
                    ];
                    const emoji = emojis[index % emojis.length];
                    return (
                      <Flex key={index} gap="s" vertical="center">
                        <span style={{ fontSize: '2.5em', marginRight: '6px' }}>{emoji}</span>
                        <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontWeight: 600 }}>{benefit}</Text>
                      </Flex>
                    );
                  })}
                </Grid>
              </Column>
            </Card>

            {/* Service Details / Features */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              <Column gap="l">
                <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{currentPageContent.pricing.description}</Text>
                <Column gap="m">
                  {currentPageContent.features.map((feature, index) => (
                    <Flex key={index} gap="s" vertical="center" style={{ width: '100%' }}>
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ flexShrink: 0, width: '12px' }}>•</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontWeight: 600, lineHeight: '1.4', width: '100%' }}>{feature}</Text>
                    </Flex>
                  ))}
                </Column>
              </Column>
            </Card>

            {/* Pricing */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak">
              <Column gap="l" horizontal="center">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>PRECIO</Heading>
                <Column gap="m" horizontal="center">
                  <Heading variant="display-strong-l" style={{ textAlign: 'center' }}>{currentPageContent.pricing.title}</Heading>
                  <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }}>{currentPageContent.pricing.note}</Text>
                  <Tag size="l" variant="danger" style={{ marginTop: '1rem' }}>
                    {currentPageContent.pricing.status}
                  </Tag>
                </Column>
              </Column>
            </Card>

            {/* Commitment Section */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak">
              <Column gap="l">
                <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{currentPageContent.commitment}</Text>
                <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{currentPageContent.personalization}</Text>
                <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{currentPageContent.support}</Text>
                <Text variant="display-strong-m" onBackground="brand-weak" style={{ textAlign: 'center' }}>{currentPageContent.cta}</Text>
              </Column>
            </Card>

            {/* Contact CTA */}
            <Card padding="xl" radius="l" border="brand-alpha-medium" background="brand-weak">
              <Column gap="l" horizontal="center">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{t.coachingCtaTitle}</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }} wrap="balance">
                  {t.coachingCtaSubtitle}
                </Text>
                <Flex gap="m" wrap>
                  <Button
                    onClick={() => openContact('coaching-personalizado')}
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