import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: "About Dario Moreno V.",
    description: "Meet Dario Moreno V., nutritionist specialized in health and wellness",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("About Dario Moreno V.")}`,
    path: "/about",
  });
}

export default function About() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="About Dario Moreno V."
        description="Meet Dario Moreno V., nutritionist specialized in health and wellness"
        path="/about"
        image={`/api/og/generate?title=${encodeURIComponent("About Dario Moreno V.")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column
          className={styles.avatar}
          position="sticky"
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Flex>
          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language: string, index: number) => (
                <Tag key={language} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
