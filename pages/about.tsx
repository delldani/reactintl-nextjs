import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

export default function About(props: any) {
  const router = useRouter();
  const { locale } = router;
  return (
    <div>
      <h2> ABOUT.tsx</h2>
      <Link href="/about" locale={locale === "en" ? "hu" : "en"}>
        <button>Change language</button>
      </Link>
      <br />
      <Link href="/" locale={locale}>
        <button>index page</button>
      </Link>
      <br />
      <br />
      <FormattedMessage id="BASIC" />
      <br />
    </div>
  );
}
