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

export default function SaludPrevencionPage() {
  const { language, setLanguage } = useLanguage();
  const { openContact } = useContact();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social } = currentContent;

  const content = {
    es: {
      title: "Salud, Prevención, Pérdida y Control de Peso",
      subtitle: "Enfoque integral en la prevención y mejora de la salud",
      description: "Transforma tu salud con un enfoque integral que aborda la prevención, mejora de la composición corporal y optimización de tu bienestar general.",
      benefits: [
        "Prevención de obesidad y sobrepeso",
        "Reducción de inflamaciones intestinales",
        "Mejora de digestiones",
        "Mejora de la salud cardiovascular",
        "Síndrome metabólico",
        "Nutrición personalizada",
        "Pautas y recomendaciones deportivas"
      ],
      plans: [
        {
          title: "Plan de Salud y Prevención",
          price: "180€",
          period: "cada 3 meses",
          features: [
            "Programa semanal de nutrición personalizado, modificado y revisado cada mes",
            "Planes adaptados a tus gustos e intolerancias",
            "Resolución de dudas, contacto y seguimiento constante con Darío a través de email",
            "Reportes de seguimiento cada mes con medidas y sensaciones",
            "Recomendaciones y pautas de actividad física diaria"
          ]
        },
        {
          title: "Plan de Salud y Prevención INTEGRAL",
          price: "210€",
          period: "cada 3 meses",
          features: [
            "Programa semanal de nutrición personalizado, modificado cada 4 semanas y revisado cada 2",
            "Planes adaptados a tus gustos e intolerancias",
            "Resolución de dudas, contacto y seguimiento constante con Darío a través de email prioritario",
            "Reportes de seguimiento cada 4 semanas con medidas, fotos y sensaciones",
            "Plan de suplementación, recomendaciones, pautas y guía de actividad física diaria",
            "Videollamada cada mes para analizar juntos el proceso"
          ]
        }
      ],
      details: [
        {
          title: "Prevención de obesidad y sobrepeso y/o mejora de la composición corporal",
          description: "Evaluaremos tu porcentaje de grasa para diseñar un plan nutricional que promueva la quema de grasa, preserve o incremente músculo y mejore la firmeza de tu piel."
        },
        {
          title: "Reducción de problemas intestinales",
          description: "Molestias digestivas, fatiga, digestiones pesadas, estreñimiento, diarrea, incontinencia, inflamaciones y alteraciones en el estado de ánimo relacionadas con una inflamación persistente en el intestino que condicionan nuestro día a día."
        },
        {
          title: "Mejora de las digestiones",
          description: "Los gases, hinchazón, acidez y pesadez no tienen por qué formar parte de tu día a día. Analizaremos posibles intolerancias, desequilibrios enzimáticos o hábitos alimentarios poco adecuados para diseñar una estrategia que favorezca digestiones más ligeras, eficientes y sin molestias."
        },
        {
          title: "Salud cardiovascular",
          description: "La salud de tu corazón depende en gran medida de lo que comes. Si tienes colesterol elevado, padeces hipertensión u otros factores de riesgo, abordaremos tu alimentación para mejorar estos parámetros y proteger tu sistema cardiovascular."
        },
        {
          title: "Manejo del síndrome metabólico",
          description: "El síndrome metabólico engloba una serie de alteraciones (resistencia a la insulina, acumulación de gras abdominal…) que aumentan el riesgo de enfermedades. Con una intervención nutricional bien diseñada, podemos ayudar a revertir progresivamente estos desequilibrios, mejorar tu composición corporal, recuperar la sensibilidad a la insulina y reducir los riesgos a largo plazo."
        }
      ],
      commitment: "El cuerpo necesita tiempo para adaptarse y poder mostrar resultados sólidos. Por ello, para lograr transformaciones reales y duraderas, es imprescindible comprometerse con un plan mínimo de 3 meses, solo así puedo asegurar el nivel de calidad, dedicación y calidez que mereces.",
      personalization: "Este programa es 100 % personalizado: aquí no encontrarás plantillas genéricas, soluciones \"copia-pega\" o dietas de cajón. Trabajo con un número muy limitado de plazas para poder dedicarte la atención exclusiva que mereces, tratando de que cada paso que des te encuentre siempre arropado por un profesional, de principio a fin, garantizando seguimiento, ajuste y apoyo constante.",
      support: "Tu compromiso de 3 meses incluye soporte continuo con revisiones y ajustes periódicos, exclusividad y plazas limitadas para que recibas un trato cercano y humano.",
      cta: "Si buscas un cambio real, este es tu momento."
    },
    en: {
      title: "Health, Prevention, Weight Loss and Control",
      subtitle: "Comprehensive approach to health prevention and improvement",
      description: "Transform your health with a comprehensive approach that addresses prevention, body composition improvement and optimization of your overall well-being.",
      benefits: [
        "Obesity and overweight prevention",
        "Reduction of intestinal inflammations",
        "Digestion improvement",
        "Cardiovascular health improvement",
        "Metabolic syndrome",
        "Personalized nutrition",
        "Sports guidelines and recommendations"
      ],
      plans: [
        {
          title: "Health and Prevention Plan",
          price: "180€",
          period: "every 3 months",
          features: [
            "Weekly personalized nutrition program, modified and reviewed monthly",
            "Plans adapted to your tastes and intolerances",
            "Doubt resolution, contact and constant follow-up with Darío via email",
            "Monthly follow-up reports with measurements and sensations",
            "Daily physical activity recommendations and guidelines"
          ]
        },
        {
          title: "COMPREHENSIVE Health and Prevention Plan",
          price: "210€",
          period: "every 3 months",
          features: [
            "Weekly personalized nutrition program, modified every 4 weeks and reviewed every 2",
            "Plans adapted to your tastes and intolerances",
            "Doubt resolution, contact and constant follow-up with Darío via priority email",
            "Follow-up reports every 4 weeks with measurements, photos and sensations",
            "Supplementation plan, recommendations, guidelines and daily physical activity guide",
            "Monthly video call to analyze the process together"
          ]
        }
      ],
      details: [
        {
          title: "Obesity and overweight prevention and/or body composition improvement",
          description: "We will evaluate your fat percentage to design a nutritional plan that promotes fat burning, preserves or increases muscle and improves skin firmness."
        },
        {
          title: "Reduction of intestinal problems",
          description: "Digestive discomfort, fatigue, heavy digestion, constipation, diarrhea, incontinence, inflammation and mood alterations related to persistent inflammation in the intestine that condition our daily lives."
        },
        {
          title: "Digestion improvement",
          description: "Gas, bloating, heartburn and heaviness don't have to be part of your daily life. We will analyze possible intolerances, enzymatic imbalances or inadequate eating habits to design a strategy that favors lighter, efficient and discomfort-free digestion."
        },
        {
          title: "Cardiovascular health",
          description: "Your heart health depends largely on what you eat. If you have high cholesterol, suffer from hypertension or other risk factors, we will address your diet to improve these parameters and protect your cardiovascular system."
        },
        {
          title: "Metabolic syndrome management",
          description: "Metabolic syndrome encompasses a series of alterations (insulin resistance, abdominal fat accumulation...) that increase the risk of diseases. With a well-designed nutritional intervention, we can help progressively reverse these imbalances, improve your body composition, recover insulin sensitivity and reduce long-term risks."
        }
      ],
      commitment: "The body needs time to adapt and be able to show solid results. Therefore, to achieve real and lasting transformations, it is essential to commit to a minimum 3-month plan, only then can I ensure the level of quality, dedication and warmth you deserve.",
      personalization: "This program is 100% personalized: here you won't find generic templates, copy-paste solutions or cookie-cutter diets. I work with a very limited number of spots to be able to give you the exclusive attention you deserve, ensuring that every step you take is always supported by a professional, from start to finish, guaranteeing follow-up, adjustment and constant support.",
      support: "Your 3-month commitment includes continuous support with periodic reviews and adjustments, exclusivity and limited spots so you receive close and human treatment.",
      cta: "If you're looking for real change, this is your moment."
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

            {/* Benefits */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card" style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <Column gap="l">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? '¿Qué incluye este plan?' : 'What does this plan include?'}</Heading>
                <Grid columns="2" mobileColumns="1" gap="l">
                  {currentPageContent.benefits.map((benefit, index) => {
                    // Emoji mapping for benefits (customize as needed)
                    const emojis = [
                      '⚖️', // Health/Prevention
                      '🦠', // Inflammation
                      '🍽️', // Digestion
                      '❤️', // Cardiovascular
                      '🧬', // Metabolic
                      '🥗', // Nutrition
                      '🏃‍♂️', // Sports
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
                  // Emoji mapping for detailed services (customize as needed)
                  const emojis = [
                    '⚖️', // Body composition
                    '🦠', // Intestinal problems
                    '🍽️', // Digestion
                    '❤️', // Cardiovascular
                    '🧬', // Metabolic syndrome
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

            {/* Beautiful Divider */}
            <hr style={{
              width: '60%',
              height: '4px',
              border: 'none',
              borderRadius: '4px',
              background: 'rgba(0,0,0,0.08)',
              margin: '8px auto 0 auto'
            }} />

            {/* Commitment, Personalization, Support */}
            <Column gap="l" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card">
                <Column gap="m">
                  <Heading variant="heading-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Compromiso' : 'Commitment'}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">{currentPageContent.commitment}</Text>
                </Column>
              </Card>
              <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card">
                <Column gap="m">
                  <Heading variant="heading-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Personalización' : 'Personalization'}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">{currentPageContent.personalization}</Text>
                </Column>
              </Card>
              <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card">
                <Column gap="m">
                  <Heading variant="heading-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Soporte' : 'Support'}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">{currentPageContent.support}</Text>
                </Column>
              </Card>
            </Column>

            {/* Call to Action */}
            <Column gap="m" horizontal="center" style={{ marginTop: '32px' }}>
              <Text variant="display-strong-m" style={{ textAlign: 'center', color: 'var(--brand-600)' }}>{currentPageContent.cta}</Text>
              <Button 
                onClick={() => openContact('salud-prevencion')}
                size="l" 
                variant="primary" 
                style={{ fontSize: '1.25rem', padding: '1rem 2.5rem', margin: '0 auto' }}
              >
                {language === 'es' ? 'Contactar' : 'Contact'}
              </Button>
            </Column>
          </Column>
        </div>
      </Flex>
    </>
  );
} 