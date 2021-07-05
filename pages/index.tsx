import { useRouter } from "next/router";

export default function IndexPage(props: any) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your internationalised page!</p>
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </div>
  );
}
