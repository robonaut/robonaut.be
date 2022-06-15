import { useEffect } from 'react';

const Page = ({ title, children }: { title: string; children: JSX.Element }): JSX.Element => {
  useEffect((): void => {
    document.title = title;
  }, []);

  return children;
};

export default Page;
