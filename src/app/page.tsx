"use client";

import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  IconButton,
  Tag,
  Line
} from "@once-ui-system/core";
import { CursorEffect, Footer, LanguageToggle, ThemeToggle } from "@/components";
import { getContent } from "../resources/content";
import Link from 'next/link';
import { useLanguage } from "@/components/LanguageProvider";

// Service icons mapping
const serviceIcons: { [key: string]: string } = {
  // Spanish services
  "Salud, Prevención, Pérdida y Control de Peso": "shieldCheck",
  "Nutrición Deportiva": "barbell",
  "Talleres para Grupos": "users",
  "Coaching Personal 1 a 1": "target",
  // English services
  "Health, Prevention, Weight Loss and Weight Control": "shieldCheck",
  "Sports Nutrition": "barbell",
  "Group Workshops": "users",
  "1-on-1 Personal Coaching": "target",
};

// Service route mapping
const serviceRoutes: { [key: string]: string } = {
  // Spanish services
  "Salud, Prevención, Pérdida y Control de Peso": "/salud-prevencion-control-peso",
  "Nutrición Deportiva": "/nutricion-deporte-online",
  "Coaching Personal 1 a 1": "/coaching-nutricional-personalizado",
  "Talleres para Grupos": "/talleres-grupales-nutricion",
  // English services
  "Health, Prevention, Weight Loss and Weight Control": "/salud-prevencion-control-peso",
  "Sports Nutrition": "/nutricion-deporte-online",
  "1-on-1 Personal Coaching": "/coaching-nutricional-personalizado",
  "Group Workshops": "/talleres-grupales-nutricion",
};

export default function Page() {
  const { language, setLanguage } = useLanguage();
  const [currentContent, setCurrentContent] = useState(getContent(language));

  useEffect(() => {
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social, home, about, newsletter } = currentContent;

  return (
    <>
      <CursorEffect />
      <Flex as="main" horizontal="center" fillWidth>
        <div className="main-container">
          <Grid columns="12" mobileColumns="1" paddingY="40" gap="xl" className="hero-section">
            {/* Left Column (Sticky) - Avatar and Languages only */}
            <Column data-col-span="4" gap="m" vertical="start" horizontal="end" className="sticky-column mobile-center">
              <Avatar src={person.avatar} size="xl" />
              {person.location && (
                <Flex gap="s" vertical="center">
                  <Icon name="globe" size="l" onBackground="danger-weak" />
                  <Text>{person.location}</Text>
                </Flex>
              )}
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((lang: string) => (
                    <Tag key={lang} size="l">
                      {lang}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Column>

            {/* Right Column (Scrollable) - All content */}
            <Column data-col-span="8" gap="0" className="mobile-text-center">
              {/* Name */}
              <Heading variant="display-strong-l">{person.name}</Heading>

              <Column gap="s" style={{ marginBottom: '32px' }}>
                {/* Role */}
                <Text variant="display-default-s" onBackground="neutral-weak">
                  {person.role}
                </Text>

                {/* Social Links */}
                <Flex gap="s">
                  {social.map((item) => (
                    <Button
                      key={item.name} 
                      href={item.link}
                      target="_blank"
                      variant="secondary"
                      prefixIcon={item.icon}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Flex>
              </Column>

              {/* Biography */}
              <Text
                variant="body-default-xl"
                onBackground="neutral-weak"
                wrap="balance"
                gap="l"
                style={{
                  marginBottom: '32px',
                  maxWidth: '1200px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'inline-block',
                  textAlign: 'left'
                }}
              >
                {home.subline}
              </Text>

              {/* Services Section */}
              {about.services.display && (
                <Column fillWidth gap="l" id="services" style={{ paddingTop: '32px' }}>
                  <Flex gap="m" vertical="center" horizontal="center" style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
                    <Icon name="heart" size="xl" onBackground="brand-weak" style={{ flexShrink: 0 }} />
                    <Heading variant="display-strong-m" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {about.services.title}
                    </Heading>
                  </Flex>
                  <Flex horizontal="center" fillWidth>
                    <Grid 
                      columns="2" 
                      mobileColumns="1" 
                      tabletColumns="1"
                      gap="xl" 
                      maxWidth="l"
                      style={{ 
                        width: '100%',
                        maxWidth: 'var(--responsive-width-l)',
                        margin: '0 auto',
                        alignItems: 'stretch',
                      }}
                    >
                      {about.services.services.map((service: { title: string; description: string; details?: string[] }, index: number) => {
                        const route = serviceRoutes[service.title];
                        const isClickable = !!route;
                        
                        const cardContent = (
                          <Card
                            key={index}
                            id={service.title === "Coaching Personal 1 a 1" || service.title === "1-on-1 Personal Coaching" ? "coaching-personal-1-a-1" : undefined}
                            padding="l"
                            gap="l"
                            radius="l"
                            border="neutral-alpha-weak"
                            background="neutral-alpha-weak"
                            style={{
                              cursor: isClickable ? 'pointer' : 'default',
                              transition: 'all 0.2s ease-in-out',
                              minHeight: '600px',
                              maxHeight: '600px',
                              width: '100%',
                              maxWidth: '480px',
                              minWidth: '320px',
                              display: 'flex',
                              flexDirection: 'column',
                              boxSizing: 'border-box',
                              overflow: 'hidden',
                            }}
                          >
                            <Flex gap="0" vertical="center" horizontal="center" style={{ flex: '0 1 90%', flexDirection: 'column', overflow: 'hidden', width: '100%' }}>
                              <Icon
                                name={serviceIcons[service.title as keyof typeof serviceIcons] || "star"}
                                size="xl"
                                onBackground="brand-weak"
                              />
                              <Column gap="m" horizontal="center" fillWidth style={{ flex: '0 1 100%', justifyContent: 'center', width: '100%', marginTop: '0px' }}>
                                <Heading 
                                  variant="heading-strong-xl" 
                                  style={{ 
                                    textAlign: 'center',
                                    lineHeight: '1.2',
                                    marginBottom: 0,
                                    whiteSpace: 'normal',
                                    overflow: 'visible',
                                    textOverflow: 'unset',
                                    width: '100%'
                                  }}
                                >
                                  {service.title}
                                </Heading>
                                <Text 
                                  variant="body-default-m" 
                                  onBackground="neutral-weak"
                                  style={{ 
                                    textAlign: 'center',
                                    lineHeight: '1.5',
                                    display: 'block',
                                    WebkitLineClamp: 'unset',
                                    WebkitBoxOrient: 'unset',
                                    overflow: 'visible',
                                    width: '100%'
                                  }}
                                >
                                  {service.description}
                                </Text>
                                {service.details && (
                                  <Column gap="s" style={{ width: '100%' }}>
                                    {service.details.slice(0, 3).map((detail: string, detailIndex: number) => (
                                      <Flex key={detailIndex} gap="s" vertical="center" style={{ width: '100%' }}>
                                        <Text variant="body-default-s" onBackground="neutral-weak" style={{ flexShrink: 0, width: '12px' }}>•</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: '1.4', display: 'block', overflow: 'visible', width: '100%' }}>{detail}</Text>
                                      </Flex>
                                    ))}
                                  </Column>
                                )}
                                {isClickable && (
                                  <Flex gap="s" vertical="center" horizontal="center" style={{ marginTop: '16px' }}>
                                    <Text variant="body-default-s" onBackground="brand-weak" style={{ fontSize: '14px' }}>
                                      {language === "es" ? "Haz clic para más información" : "Click for more information"}
                                    </Text>
                                    <Icon name="arrowRight" size="s" onBackground="brand-weak" />
                                  </Flex>
                                )}
                              </Column>
                            </Flex>
                          </Card>
                        );

                        return isClickable ? (
                          <Link key={index} href={route} style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'block' }}>
                            {cardContent}
                          </Link>
                        ) : (
                          cardContent
                        );
                      })}
                    </Grid>
                  </Flex>
                  
                  {/* FAQ Link */}
                  <Flex horizontal="center" style={{ marginTop: '24px' }}>
                    <Link href="/preguntas-frecuentes" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="secondary"
                        size="l"
                        prefixIcon="help"
                        style={{ fontSize: '1.25rem', padding: '20px 40px' }}
                      >
                        {language === "es" ? "Preguntas Frecuentes" : "FAQ"}
                      </Button>
                    </Link>
                  </Flex>
                </Column>
              )}
            </Column>
          </Grid>
        </div>
      </Flex>
    </>
  );
}
