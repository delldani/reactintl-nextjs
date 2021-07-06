import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file
// import * as locales  from "../content/locale";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;

  const messages: { [key: string]: { [key: string]: string } } = {
    en: {
      BASIC: "ENGLISH",
      GREETING: "Hello {name}  <strong> strong</strong>",
      PLURAL:
        "This will be plural :{amount, plural, =0 {no languages} one {# one language}  other {# languages}}",
      FUNC: "Function with <b> tag",
      SWITCH:
        "Switc: {gender, select,male {He} female {She} other {They} } will respond shortly.",
    },
    hu: {
      BASIC: "MAGYAR",
      GREETING: "Szia {name} <strong> kiemelt</strong>",
      PLURAL:
        "Ez plural lesz {amount, plural, =0 {no languages} one {# egy nyelv} other {# nyelvek}}",
      FUNC: "függvény <b> tag-el",
      SWITCH:
        "Switc: {gender, select,male {Ő} female {Ő} other {Ő}} hamarosan válaszol.",
    },
  };

  const local = locale ? locale : "hu";
  console.log(local);
  const mess = messages[local.toString()];
  return (
    <IntlProvider locale={local} defaultLocale={"hu"} messages={mess}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
