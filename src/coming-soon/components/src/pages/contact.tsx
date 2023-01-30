import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h1>{t('CONTACT')}</h1>
      <div>
        <p>{t('CONTACT_1_1_P')}</p>
        <p>{t('CONTACT_1_2_P')}</p>
        <h3>{t('CONTACT_1_H3')}</h3>
        <ul>
          <li>
            {t('CONTACT_1_1_LI')}
            <a href="mailto:info@visitvisoko.ba"> info@visitvisoko.ba</a>
          </li>
          <li>{t('CONTACT_1_2_LI')} +387 61 572 137</li>
        </ul>
        <p>{t('CONTACT_2_1_P')}</p>
        <h3>{t('CONTACT_2_H3')}</h3>
        <p>{t('CONTACT_3_1_P')}</p>
        <p>{t('CONTACT_3_2_P')}</p>
        <ul>
          <li>{t('CONTACT_2_1_LI')}</li>
          <li>{t('CONTACT_2_2_LI')}</li>
          <li>{t('CONTACT_2_3_LI')}</li>
          <li>{t('CONTACT_2_4_LI')}</li>
        </ul>
        <p>
          {t('CONTACT_4_1_P')}
          <a href="mailto:info@visitvisoko.ba"> info@visitvisoko.ba</a>.{' '}
          {t('CONTACT_4_2_P')}
        </p>
      </div>
    </div>
  );
};
