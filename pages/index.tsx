import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Content } from "../component/Content";
import {
  FormattedMessage,
  FormattedNumber,
  FormattedPlural,
  FormattedDate,
} from "react-intl";

export default function IndexPage(props: any) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  return (
    <div>
      <h2> INDEX.tsx</h2>
      <Link href="/" locale={locale === "en" ? "hu" : "en"}>
        <button>Change language</button>
      </Link>
      <br />
      <Link href="/about" locale={locale}>
        <button>To about page</button>
      </Link>
      <br />
      <FormattedMessage id="BASIC" defaultMessage="Lenguage" />
      <br />
      <FormattedMessage
        id="GREETING"
        defaultMessage="Hello D!"
        values={{
          name: "Dani",
          strong: (word: string) => {
            <strong>{word}</strong>;
          },
        }}
      />
      <br />

      <FormattedNumber value={19} style="currency" currency="EUR" />
      <br />
      <FormattedPlural value={1} one="message" other="messages" />
      <br />
      <FormattedMessage
        id="PLURAL"
        defaultMessage="ez plral  :{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong format}}"
        values={{ amount: 2 }}
      />
      <br />
      <FormattedMessage id="FUNC">{(txt) => <b>{txt}</b>}</FormattedMessage>
      <br />
      <FormattedMessage id="SWITCH" values={{ gender: "female" }} />
      <br />
      <FormattedDate
        value={new Date("2013, 03, 09")}
        year="numeric"
        month="long"
        day="2-digit"
      />
      <Content />
    </div>
  );
}
