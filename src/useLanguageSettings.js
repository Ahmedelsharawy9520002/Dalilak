import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguageSettings = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    
    document.documentElement.lang = i18n.language;
    if (i18n.language === 'ar') {
      document.body.style.fontFamily = "'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    } else {
      document.body.style.fontFamily = "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }

  }, [i18n, i18n.language]);
};

export default useLanguageSettings;