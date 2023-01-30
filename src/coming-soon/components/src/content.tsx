import { FC } from 'react';
import {
  About,
  Contact,
  Features,
  HowSoon,
} from '@coming-soon/components/pages';

interface ContentProps {
  tab: string;
}

export const Content: FC<ContentProps> = ({ tab }) => {
  const renderContent = () => {
    if (tab === 'how soon') {
      return <HowSoon />;
    } else if (tab === 'about') {
      return <About />;
    } else if (tab === 'features') {
      return <Features />;
    } else if (tab === 'contact') {
      return <Contact />;
    }
  };

  return <div className="content">{renderContent()}</div>;
};
