"use client";

import React, { useEffect, useState } from "react";
import { ToggleButton, Flex } from "@once-ui-system/core";

interface LanguageToggleProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <Flex gap="4" vertical="center">
      <ToggleButton
        onClick={() => handleLanguageChange("es")}
        data-active={language === "es"}
        variant="ghost"
        size="s"
      >
        ES
      </ToggleButton>
      <ToggleButton
        onClick={() => handleLanguageChange("en")}
        data-active={language === "en"}
        variant="ghost"
        size="s"
      >
        EN
      </ToggleButton>
    </Flex>
  );
}; 