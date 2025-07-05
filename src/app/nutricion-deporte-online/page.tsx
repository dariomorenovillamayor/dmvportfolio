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

export default function NutricionDeporteOnlinePage() {
  const { language, setLanguage } = useLanguage();
  const { openContact } = useContact();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social } = currentContent;

  const content = {
    es: {
      title: "Salud, Nutrición y Deporte Online",
      subtitle: "Optimiza tu rendimiento deportivo y composición corporal",
      description: "Mejora tu composición corporal, aumenta masa muscular y optimiza tu rendimiento deportivo con coaching nutricional y deportivo personalizado.",
      benefits: [
        "Mejora de la composición corporal",
        "Aumento de masa muscular",
        "Coaching nutricional y deportivo personalizado",
        "Protocolo a medida detallado y específico"
      ],
      plans: [
        {
          title: "Plan de Salud, Nutrición y Deporte Online",
          price: "240€",
          period: "cada 3 meses",
          monthlyPrice: "80€",
          features: [
            "Programa semanal de nutrición personalizado, modificado y revisado cada mes",
            "Planes adaptados a tus gustos e intolerancias",
            "Resolución de dudas, contacto y seguimiento constante con Darío a través de email prioritario",
            "Reportes de seguimiento cada 4 semanas con medidas, fotos y sensaciones",
            "Plan de suplementación a medida",
            "Recomendaciones, pautas y guía especializada de actividad física diaria",
            "Videollamada cada mes para analizar juntos el proceso"
          ]
        },
        {
          title: "Plan de Salud, Nutrición y Deporte Online INTEGRAL",
          price: "270€",
          period: "cada 3 meses",
          monthlyPrice: "90€",
          features: [
            "Programa semanal de nutrición personalizado, modificado cada 4 semanas y revisado cada 2",
            "Planes adaptados a tus gustos e intolerancias",
            "Resolución de dudas, contacto y seguimiento constante con Darío a través de email prioritario y Chat WhatsApp para cualquier urgencia",
            "Reportes de seguimiento cada 15 días con medidas, fotos y sensaciones",
            "Plan de suplementación a medida",
            "En mujeres, el programa nutricional será estructurados en función del periodo menstrual (fase folicular, fase lútea)",
            "Recomendaciones, pautas y guía especializada de actividad física diaria",
            "Videollamada cada 4 semanas para analizar juntos el proceso"
          ]
        }
      ],
      details: [
        {
          title: "Mejora de la composición corporal",
          description: "Evaluaremos tu porcentaje de masa grasa y masa grasa para diseñar un plan nutricional que promueva la quema de grasa, incremente el músculo y mejore la fuerza, la resistencia y/o nuestra capacidad atlética."
        },
        {
          title: "Protocolo nutricional detallado",
          description: "Nutrición de precisión con alimentos y cantidades específicas destinados a no solo mejorar tu salud y composición sino también tu rendimiento deportivo."
        },
        {
          title: "Guía de actividad personalizada",
          description: "Enfocada a tus objetivos, adaptada a tu día a día para que sea esta la que encaje en tu día y no al revés. Vídeos ilustrativos sobre el entrenamiento para no sentirte perdido."
        },
        {
          title: "Seguimiento y coaching personalizado",
          description: "Videollamadas para analizar juntos sensaciones, progreso, objetivos, metas, comidas y entrenamientos."
        }
      ],
      commitment: "El cuerpo necesita tiempo para adaptarse y poder mostrar resultados sólidos. Por ello, para lograr transformaciones reales y duraderas, es imprescindible comprometerse con un plan mínimo de 3 meses, solo así puedo asegurar el nivel de calidad, dedicación y calidez que mereces.",
      personalization: "Este programa es 100 % personalizado: aquí no encontrarás plantillas genéricas, soluciones \"copia-pega\" o dietas de cajón. Trabajo con un número muy limitado de plazas para poder dedicarte la atención exclusiva que mereces, tratando de que cada paso que des te encuentre siempre arropado por un profesional, de principio a fin, garantizando seguimiento, ajuste y apoyo constante.",
      support: "Tu compromiso de 3 meses incluye soporte continuo con revisiones y ajustes periódicos, exclusividad y plazas limitadas para que recibas un trato cercano y humano.",
      cta: "Si buscas un cambio real, este es tu momento."
    },
    en: {
      title: "Health, Nutrition and Online Sports",
      subtitle: "Optimize your sports performance and body composition",
      description: "Improve your body composition, increase muscle mass and optimize your sports performance with personalized nutritional and sports coaching.",
      benefits: [
        "Body composition improvement",
        "Muscle mass increase",
        "Personalized nutritional and sports coaching",
        "Detailed and specific custom protocol"
      ],
      plans: [
        {
          title: "Health, Nutrition and Online Sports Plan",
          price: "240€",
          period: "every 3 months",
          monthlyPrice: "80€",
          features: [
            "Weekly personalized nutrition program, modified and reviewed monthly",
            "Plans adapted to your tastes and intolerances",
            "Doubt resolution, contact and constant follow-up with Darío via priority email",
            "Follow-up reports every 4 weeks with measurements, photos and sensations",
            "Custom supplementation plan",
            "Specialized recommendations, guidelines and daily physical activity guide",
            "Monthly video call to analyze the process together"
          ]
        },
        {
          title: "COMPREHENSIVE Health, Nutrition and Online Sports Plan",
          price: "270€",
          period: "every 3 months",
          monthlyPrice: "90€",
          features: [
            "Weekly personalized nutrition program, modified every 4 weeks and reviewed every 2",
            "Plans adapted to your tastes and intolerances",
            "Doubt resolution, contact and constant follow-up with Darío via priority email and WhatsApp Chat for any emergency",
            "Follow-up reports every 15 days with measurements, photos and sensations",
            "Custom supplementation plan",
            "In women, the nutritional program will be structured according to the menstrual period (follicular phase, luteal phase)",
            "Specialized recommendations, guidelines and daily physical activity guide",
            "Video call every 4 weeks to analyze the process together"
          ]
        }
      ],
      details: [
        {
          title: "Body composition improvement",
          description: "We will evaluate your fat mass and fat percentage to design a nutritional plan that promotes fat burning, increases muscle and improves strength, endurance and/or our athletic capacity."
        },
        {
          title: "Detailed nutritional protocol",
          description: "Precision nutrition with specific foods and quantities aimed at not only improving your health and composition but also your sports performance."
        },
        {
          title: "Personalized activity guide",
          description: "Focused on your objectives, adapted to your daily life so that it fits into your day and not the other way around. Illustrative videos about training so you don't feel lost."
        },
        {
          title: "Personalized follow-up and coaching",
          description: "Video calls to analyze together sensations, progress, objectives, goals, meals and training."
        }
      ],
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
                      '⚖️', // Health/Body composition
                      '💪', // Muscle
                      '🧑‍⚕️', // Coaching
                      '📋', // Protocol
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

            {/* Plans Section */}
            <Grid columns="2" mobileColumns="1" gap="xl" style={{ width: '100%', justifyContent: 'center', margin: '0 auto', maxWidth: '1000px' }}>
              {currentPageContent.plans.map((plan, idx) => (
                <Card key={idx} padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card" style={{ minHeight: '320px', minWidth: '320px', maxWidth: '480px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto' }}>
                  <Column gap="m" horizontal="center" style={{ width: '100%' }}>
                    <Heading variant="heading-strong-xl" style={{ textAlign: 'center', marginBottom: '8px', width: '100%' }}>{plan.title}</Heading>
                    <Text variant="display-default-l" style={{ textAlign: 'center', color: 'var(--brand-600)', fontWeight: 700 }}>{plan.price} <span style={{ fontWeight: 400, color: 'var(--neutral-600)' }}>/ {plan.period}</span></Text>
                    <Text variant="body-default-l" style={{ textAlign: 'center', color: 'var(--neutral-600)', fontWeight: 600 }}>({plan.monthlyPrice} {language === 'es' ? 'por mes' : 'per month'})</Text>
                    <Column gap="s" style={{ marginTop: '16px', width: '100%' }}>
                      {plan.features.map((feature, fidx) => (
                        <Flex key={fidx} gap="s" vertical="center" style={{ width: '100%' }}>
                          <Text variant="body-default-s" onBackground="neutral-weak" style={{ flexShrink: 0, width: '12px' }}>•</Text>
                          <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: '1.4', width: '100%', fontWeight: 600 }}>{feature}</Text>
                        </Flex>
                      ))}
                    </Column>
                  </Column>
                </Card>
              ))}
            </Grid>

            {/* Detailed Services */}
            <Column gap="l" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
              <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Servicios Detallados' : 'Detailed Services'}</Heading>
              <Grid columns="2" mobileColumns="1" gap="xl">
                {currentPageContent.details.map((detail, index) => {
                  const emojis = [
                    '⚖️', // Body composition
                    '📋', // Protocol
                    '🏃‍♂️', // Activity
                    '🧑‍⚕️', // Coaching
                  ];
                  const emoji = emojis[index % emojis.length];
                  return (
                    <Card key={index} padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card" style={{ minHeight: '220px', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
                      <Column gap="m">
                        <Flex gap="s" vertical="center">
                          <span style={{ fontSize: '2.5em', marginRight: '6px' }}>{emoji}</span>
                          <Heading variant="heading-strong-m" style={{ fontWeight: 600 }}>{detail.title}</Heading>
                        </Flex>
                        <Text variant="body-default-m" onBackground="neutral-weak">{detail.description}</Text>
                      </Column>
                    </Card>
                  );
                })}
              </Grid>
            </Column>

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
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{t.sportsCtaTitle}</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }} wrap="balance">
                  {t.sportsCtaSubtitle}
                </Text>
                <Flex gap="m" wrap>
                  <Button
                    onClick={() => openContact('nutricion-deporte')}
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