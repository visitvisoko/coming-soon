import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="features">
      <h1>{t('FEATURES')}</h1>
      <div>
        <p>{t('FEATURES_P')}</p>
        <ul>
          <li>{t('FEATURES_1_LI')}</li>
          <li>{t('FEATURES_2_LI')}</li>
          <li>{t('FEATURES_3_LI')}</li>
          <li>{t('FEATURES_4_LI')}</li>
          <li>{t('FEATURES_5_LI')}</li>
        </ul>
      </div>
    </div>
  );
};
