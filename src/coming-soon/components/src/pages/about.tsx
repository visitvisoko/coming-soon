import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t('ABOUT')}</h1>
      <p>{t('ABOUT_1_P')}</p>
      <p>{t('ABOUT_2_P')}</p>
      <p>{t('ABOUT_3_P')}</p>
    </div>
  );
};
