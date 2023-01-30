import { useState } from 'react';
import { Content, LanguageSwitcher, Navigation } from '@coming-soon/components';
import { NAVIGATION_SLUG } from '@coming-soon/constants';

export const App = () => {
  const [tab, setTab] = useState<string>(NAVIGATION_SLUG.HOW_SOON);
  const [isLanguageSwitcherOpened, setIsLanguageSwitcherOpened] =
    useState<boolean>(true);
  return (
    <div className="coming-soon">
      <Navigation tab={tab} setTab={setTab} />
      <Content tab={tab} />
      {isLanguageSwitcherOpened && (
        <LanguageSwitcher
          isOpened={isLanguageSwitcherOpened}
          setIsOpened={setIsLanguageSwitcherOpened}
        />
      )}
    </div>
  );
};
