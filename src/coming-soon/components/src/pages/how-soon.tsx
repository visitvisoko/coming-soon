import { useTranslation } from 'react-i18next';
import logo from '@coming-soon/assets/logo.png';

export const HowSoon = () => {
  const { t } = useTranslation();

  return (
    <div className="how-soon">
      <div className="logo">
        <img src={logo} alt="Visit Visoko logo" />
      </div>
      <h1 className="heading" data-text={t('COMING_SOON')}>
        {t('COMING_SOON')}
      </h1>
      <div className="percentage">45%</div>
    </div>
  );
};
