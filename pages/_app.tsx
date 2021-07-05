import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file
// import * as locales  from "../content/locale";
import { en, hu } from "../content/locale";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;

  const messages = {
    en: {
      BASIC: "Basic sentence",
      GREETING: "Hello {name}  <strong> strong</strong>",
      PLURAL:
        "This will be plural :{amount, plural, =0 {no languages} one {# one language}  other {# languages}}",
      FUNC: "függvény <b> tag-el",
      SWITCH:
        "Switc: {gender, select,male {He} female {She} other {They} } will respond shortly.",
    },
    hu: {
      BASIC: "Alap mondat",
      GREETING: "Szia {name} <strong> kiemelt</strong>",
      PLURAL:
        "Ez plural lesz {amount, plural, =0 {no languages} one {# egy nyelv} other {# nyelvek}}",
      FUNC: "Function with <b> tag",
      SWITCH:
        "Switc: {gender, select,male {Ő} female {Ő} other {Ő}} hamarosan válaszol.",
    },
  };

  return (
    <IntlProvider locale={"en"} defaultLocale={"en"} messages={messages["en"]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
