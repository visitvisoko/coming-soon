import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import background from '@coming-soon/assets/background.png';
import bs from '@coming-soon/assets/bs.svg';
import gb from '@coming-soon/assets/gb.svg';
import us from '@coming-soon/assets/us.svg';
import de from '@coming-soon/assets/de.svg';

interface LanguageSwitcherProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  isOpened,
  setIsOpened,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
    setIsOpened(false);
  };
  return (
    <div className={`language-switcher ${isOpened ? 'is-opened' : ''}`}>
      <div
        className="language-switcher-bg"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <div className="language-switcher-overlay" />
      <div className="language-switcher-content">
        <div
          className="language-switcher-content-item"
          onClick={() => changeLanguage('bs')}
        >
          <div className="language-switcher-content-item-label">Bosanski</div>
          <div className="language-switcher-content-item-flag">
            <img src={bs} alt="Bosnia and Herzegovina flag" />
          </div>
        </div>
        <div
          className="language-switcher-content-item"
          onClick={() => changeLanguage('en')}
        >
          <div className="language-switcher-content-item-label">English</div>
          <div className="language-switcher-content-item-flag">
            <img src={gb} alt="United Kingdom flag" />
            <img src={us} alt="United States flag" />
          </div>
        </div>
        <div
          className="language-switcher-content-item"
          onClick={() => changeLanguage('de')}
        >
          <div className="language-switcher-content-item-label">Deutsch</div>
          <div className="language-switcher-content-item-flag">
            <img src={de} alt="Germany flag" />
          </div>
        </div>
      </div>
    </div>
  );
};
