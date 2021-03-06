import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();
  return (
    <h3>
      {t('Fetching from database and decrypting in browser, please hold...')}
    </h3>
  );
};

export default Loading;
