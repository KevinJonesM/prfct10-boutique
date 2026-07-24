import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { translations } from "./translations";
import { detectStorefrontLocale } from "./marketLocaleAdapter";

const I18nContext = createContext(null);

function readKey(dictionary, key) {
  return key.split(".").reduce((value, segment) => value?.[segment], dictionary);
}

function interpolate(value, variables = {}) {
  if (typeof value !== "string") return value;
  return String(value).replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`);
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(detectStorefrontLocale);

  const setLocale = useCallback((nextLocale) => {
    const safeLocale = nextLocale === "es" ? "es" : "en";
    window.localStorage.setItem("prfct10-locale", safeLocale);
    setLocaleState(safeLocale);
  }, []);

  const t = useCallback((key, variables) => {
    const value = readKey(translations[locale], key) ?? readKey(translations.en, key) ?? key;
    return interpolate(value, variables);
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
