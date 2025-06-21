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

// Service icons mapping
const serviceIcons: { [key: string]: string } = {
  // Spanish services
  "Salud y Prevención": "shieldCheck",
  "Nutrición Básica": "apple",
  "Nutrición Deportiva": "barbell",
  "Talleres para Grupos": "users",
  "Coaching Personal 1 a 1": "target",
  // English services
  "Health and Prevention": "shieldCheck",
  "Basic Nutrition": "apple",
  "Sports Nutrition": "barbell",
  "Group Workshops": "users",
  "1-on-1 Personal Coaching": "target",
};

export default function Page() {
  const [language, setLanguage] = useState("es");
  const [currentContent, setCurrentContent] = useState(getContent("es"));

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    setCurrentContent(getContent(language));
  }, [language]);

  const { person, social, home, about, newsletter } = currentContent;

  return (
    <>
      <CursorEffect />
      <Flex
        position="fixed"
        top="16"
        horizontal="center"
        fillWidth
        zIndex={10}
      >
        <Flex
          background="page"
          border="neutral-alpha-weak"
          radius="m-4"
          shadow="l"
          padding="4"
          horizontal="center"
          zIndex={1}
        >
          <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
            <ThemeToggle />
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </Flex>
        </Flex>
      </Flex>
      <Flex as="main" horizontal="center" fillWidth>
        <div className="main-container">
          <Grid columns="12" mobileColumns="1" paddingY="40" gap="xl" className="hero-section">
            {/* Left Column (Sticky) - Avatar and Languages only */}
            <Column data-col-span="4" gap="m" vertical="start" horizontal="end" className="sticky-column">
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
            <Column data-col-span="8" gap="0">
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
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" gap="l" style={{ marginBottom: '32px' }}>
                {home.subline}
              </Text>

              {/* Featured Service */}
              <Column gap="l"></Column>
              {home.featured.display && (
                <Card padding="l">
                  <Column gap="s">
                    <Column horizontal="center" gap="l">
                      <Heading variant="display-strong-m">{home.featured.title}</Heading>
                      <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                        {home.featured.description}
                      </Text>
                      <Button
                        href={home.featured.href}
                        suffixIcon="arrowRight"
                        label={home.featured.button}
                        size="m"
                        weight="default"
                        variant="primary"
                        data-border="rounded"
                      />
                    </Column>
                  </Column>
                </Card>
              )}

              {/* Services Section */}
              {about.services.display && (
                <Column fillWidth gap="l" id="services" style={{ paddingTop: '32px' }}>
                  <Flex gap="m" vertical="center" style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
                    <Icon name="heart" size="xl" onBackground="brand-weak" style={{ flexShrink: 0 }} />
                    <Heading variant="display-strong-m" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {about.services.title}
                    </Heading>
                  </Flex>
                  <Grid columns="2" mobileColumns="2" gap="xl">
                    {about.services.services.map((service: { title: string; description: string; details?: string[] }, index: number) => (
                      <Card
                        key={index}
                        id={service.title === "Coaching Personal 1 a 1" || service.title === "1-on-1 Personal Coaching" ? "coaching-personal-1-a-1" : undefined}
                        padding="l"
                        gap="l"
                        radius="l"
                        border="neutral-alpha-weak"
                        background="neutral-alpha-weak"
                      >
                        <Flex gap="l" vertical="center" horizontal="center">
                          <Icon
                            name={serviceIcons[service.title as keyof typeof serviceIcons] || "star"}
                            size="xl"
                            onBackground="brand-weak"
                          />
                          <Column gap="m" horizontal="center" fillWidth>
                            <Heading variant="heading-strong-xl" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center' }}>{service.title}</Heading>
                            <Text variant="body-default-m" onBackground="neutral-weak">{service.description}</Text>
                            {service.details && (
                              <Column gap="s">
                                {service.details.map((detail: string, detailIndex: number) => (
                                  <Flex key={detailIndex} gap="s" vertical="center">
                                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ flexShrink: 0, width: '12px' }}>•</Text>
                                    <Text variant="body-default-s" onBackground="neutral-weak">{detail}</Text>
                                  </Flex>
                                ))}
                              </Column>
                            )}
                          </Column>
                        </Flex>
                      </Card>
                    ))}
                  </Grid>
                </Column>
              )}
            </Column>
          </Grid>
        </div>
      </Flex>
    </>
  );
}
