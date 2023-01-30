import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { navigation } from '@coming-soon/constants';

interface NavigationProps {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const Navigation: FC<NavigationProps> = ({ tab, setTab }) => {
  const { t } = useTranslation();
  return (
    <div className="navigation">
      {navigation.map((navigationItem) => (
        <div
          className={`navigation-item ${
            navigationItem.title === tab ? 'is-opened' : ''
          }`}
          key={navigationItem.id}
          onClick={() => setTab(navigationItem.title)}
        >
          {t(navigationItem.title)}
        </div>
      ))}
    </div>
  );
};
