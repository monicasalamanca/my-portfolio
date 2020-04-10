import Head from 'next/head';
import useTranslation from '../hooks/useTranslations';

const Page = ({ titleKey, children }) => {

  const { t } = useTranslation()

  return(
    <div>
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <>{children}</>
    </div>
  )

}

export default Page;
