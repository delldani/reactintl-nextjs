import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FormattedMessage,
  FormattedNumber,
  FormattedPlural,
  FormattedDate,
} from "react-intl";

export const Content = (props: any) => {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  return (
    <div>
      Content.tsx
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
    </div>
  );
};
