import i18n from 'sveltekit-i18n';

type Config = import('sveltekit-i18n').Config;

const config: Config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/translations.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);