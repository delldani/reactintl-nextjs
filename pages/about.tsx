import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

export default function About(props: any) {
  const router = useRouter();
  const { locale } = router;
  return (
    <div>
      ABOUT.tsx
      <Link href="/" locale={locale === "en" ? "hu" : "en"}>
        <button>Change language</button>
      </Link>
      <br />
      <FormattedMessage
        id="BASIC"
        defaultMessage="Hello D!"
        values={{
          name: "Dani",
          strong: (word: string) => {
            <strong>{word}</strong>;
          },
        }}
      />
      <br />
    </div>
  );
}
