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

export default function TalleresGrupalesPage() {
  const { language, setLanguage } = useLanguage();
  const { openContact } = useContact();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social } = currentContent;

  const content = {
    es: {
      title: "Talleres Educativos para Grupos",
      subtitle: "Educación nutricional para todas las edades",
      description: "Diseño de sesiones dinámicas y participativas dirigidas a colectivos grandes, empresas, centros educativos y servicios de salud. Estos talleres combinan teoría clara con materiales visuales para garantizar una experiencia formativa adaptativa.",
      benefits: [
        "Nutrición pediátrica",
        "Nutrición en adolescencia",
        "Nutrición en edad adulta",
        "Nutrición en menopausia y andropausia",
        "Nutrición en la tercera edad"
      ],
      workshops: [
        {
          title: "Nutrición pediátrica",
          objectives: "Mostrar cómo cubrir las demandas nutritivas de bebés y niños pequeños, favorecer hábitos alimentarios saludables desde la etapa más temprana y prevenir alergias e intolerancias.",
          contents: "Introducción de sólidos, estrategias para aceptar nuevos sabores, pautas para comidas equilibradas.",
          methodology: "Role-play, demostraciones de recetas fáciles, análisis de etiquetas y debates en grupo."
        },
        {
          title: "Nutrición en adolescencia",
          objectives: "Educar sobre las necesidades cambiantes durante el crecimiento acelerado, fomentar una imagen corporal positiva y prevenir trastornos alimentarios.",
          contents: "Cómo afrontar las influencias de la cultura \"fast-food\" y las redes sociales, cómo reducir el consumo de ultraprocesados, cómo combinar deporte y nutrición y como evitar conductas autodestructivas.",
          methodology: "Role-play, análisis de etiquetas, debates en grupo, análisis de conductas alimentarias y sesiones de preguntas y respuestas."
        },
        {
          title: "Nutrición en edad adulta",
          objectives: "Ayudar a cubrir las exigencias energéticas y de recuperación, mantener un peso saludable y prevenir enfermedades crónicas.",
          contents: "Diseño de menús ejemplo, planificación de comidas para sesiones de trabajo intensas, estrategias para comer fuera sin descuidar la salud.",
          methodology: "Casos prácticos, planificación colaborativa de menús, Role-play, análisis de etiquetas y debates en grupo."
        },
        {
          title: "Nutrición en menopausia y andropausia",
          objectives: "Aliviar síntomas hormonales, proteger la masa ósea y controlar cambios en la composición corporal.",
          contents: "Análisis de alimentos ricos en fitoestrógenos, pautas para el manejo de sofocos y sudoraciones nocturnas, suplementación y ejercicio complementario.",
          methodology: "Ejemplos de ejercicios de bajo impacto que favorecen el apetito y aumentan la actividad diaria, material gráfico adaptado y sesiones de preguntas y respuestas."
        },
        {
          title: "Nutrición en la tercera edad",
          objectives: "Prevención y mejora de la sarcopenia, mejorar la digestión y mantener la independencia alimentaria.",
          contents: "Alimentos de fácil masticación y deglución, densidad nutricional para cubrir requerimientos de vitaminas y minerales, consejos para hidratarse adecuadamente.",
          methodology: "Ejemplos de ejercicios de bajo impacto que favorecen el apetito y aumentan la actividad diaria, material gráfico adaptado, suplementación para la tercera edad y sesiones de preguntas y respuestas."
        }
      ],
      pricing: {
        title: "PRECIOS",
        description: "En función del tamaño del grupo, duración y lugar. Cada taller debe contratarse con al menos 6 semanas de antelación.",
        contact: "Contactar directamente con Darío a través de:"
      },
      personalization: "Cada taller se adapta al perfil del grupo, sus intereses y necesidades específicas."
    },
    en: {
      title: "Educational Group Workshops",
      subtitle: "Nutritional education for all ages",
      description: "Design of dynamic and participatory sessions aimed at large groups, companies, educational centers and health services. These workshops combine clear theory with visual materials to guarantee an adaptive training experience.",
      benefits: [
        "Pediatric nutrition",
        "Adolescent nutrition",
        "Adult nutrition",
        "Menopause and andropause nutrition",
        "Senior nutrition"
      ],
      workshops: [
        {
          title: "Pediatric nutrition",
          objectives: "Show how to cover the nutritional demands of babies and young children, promote healthy eating habits from the earliest stage and prevent allergies and intolerances.",
          contents: "Introduction of solids, strategies to accept new flavors, guidelines for balanced meals.",
          methodology: "Role-play, easy recipe demonstrations, label analysis and group debates."
        },
        {
          title: "Adolescent nutrition",
          objectives: "Educate about changing needs during accelerated growth, promote a positive body image and prevent eating disorders.",
          contents: "How to face the influences of fast-food culture and social networks, how to reduce ultra-processed consumption, how to combine sports and nutrition and how to avoid self-destructive behaviors.",
          methodology: "Role-play, label analysis, group debates, eating behavior analysis and Q&A sessions."
        },
        {
          title: "Adult nutrition",
          objectives: "Help cover energy and recovery demands, maintain a healthy weight and prevent chronic diseases.",
          contents: "Sample menu design, meal planning for intense work sessions, strategies for eating out without neglecting health.",
          methodology: "Practical cases, collaborative menu planning, Role-play, label analysis and group debates."
        },
        {
          title: "Menopause and andropause nutrition",
          objectives: "Relieve hormonal symptoms, protect bone mass and control changes in body composition.",
          contents: "Analysis of foods rich in phytoestrogens, guidelines for managing hot flashes and night sweats, supplementation and complementary exercise.",
          methodology: "Examples of low-impact exercises that favor appetite and increase daily activity, adapted graphic material and Q&A sessions."
        },
        {
          title: "Senior nutrition",
          objectives: "Prevention and improvement of sarcopenia, improve digestion and maintain food independence.",
          contents: "Easy-to-chew and swallow foods, nutritional density to cover vitamin and mineral requirements, tips for adequate hydration.",
          methodology: "Examples of low-impact exercises that favor appetite and increase daily activity, adapted graphic material, senior supplementation and Q&A sessions."
        }
      ],
      pricing: {
        title: "PRICING",
        description: "Depending on group size, duration and location. Each workshop must be contracted with at least 6 weeks in advance.",
        contact: "Contact Darío directly through:"
      },
      personalization: "Each workshop adapts to the group's profile, their interests and specific needs."
    }
  };

  const currentPageContent = content[language as keyof typeof content];
  const t = translations[language] || translations.es;

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
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Tipos de Talleres' : 'Workshop Types'}</Heading>
                <Grid columns="2" mobileColumns="1" gap="l">
                  {currentPageContent.benefits.map((benefit, index) => {
                    const emojis = [
                      '👶', // Pediatric
                      '🧑‍🎓', // Adolescent
                      '🧑‍💼', // Adult
                      '👩‍🦳', // Menopause/Andropause
                      '🧓', // Senior
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

            {/* Workshops Details */}
            <Column gap="l" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
              <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{language === 'es' ? 'Talleres Detallados' : 'Detailed Workshops'}</Heading>
              <Grid columns="2" mobileColumns="1" gap="xl">
                {currentPageContent.workshops.map((workshop, index) => {
                  const emojis = [
                    '👶', // Pediatric
                    '🧑‍🎓', // Adolescent
                    '🧑‍💼', // Adult
                    '👩‍🦳', // Menopause/Andropause
                    '🧓', // Senior
                  ];
                  const emoji = emojis[index % emojis.length];
                  return (
                    <Card key={index} padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak" className="service-card">
                      <Column gap="l">
                        <Flex gap="s" vertical="center">
                          <span style={{ fontSize: '2.5em', marginRight: '6px' }}>{emoji}</span>
                          <Heading variant="display-strong-m" style={{ fontWeight: 600 }}>{workshop.title}</Heading>
                        </Flex>
                        <Column gap="m">
                          <Column gap="s">
                            <Text variant="heading-strong-m" onBackground="brand-weak">• Objetivos:</Text>
                            <Text variant="body-default-m" onBackground="neutral-weak">{workshop.objectives}</Text>
                          </Column>
                          <Column gap="s">
                            <Text variant="heading-strong-m" onBackground="brand-weak">• Contenidos clave:</Text>
                            <Text variant="body-default-m" onBackground="neutral-weak">{workshop.contents}</Text>
                          </Column>
                          <Column gap="s">
                            <Text variant="heading-strong-m" onBackground="brand-weak">• Metodología:</Text>
                            <Text variant="body-default-m" onBackground="neutral-weak">{workshop.methodology}</Text>
                          </Column>
                        </Column>
                      </Column>
                    </Card>
                  );
                })}
              </Grid>
            </Column>

            {/* Pricing */}
            <Card padding="xl" radius="l" border="neutral-alpha-weak" background="neutral-alpha-weak">
              <Column gap="l" horizontal="center">
                <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>{currentPageContent.pricing.title}</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ textAlign: 'center' }}>
                  {currentPageContent.pricing.description}
                </Text>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
                  {currentPageContent.pricing.contact}
                </Text>
                <Flex gap="m" wrap>
                  <Button
                    onClick={() => openContact('talleres-grupales')}
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