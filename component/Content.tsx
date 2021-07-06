import React from "react";
import { useRouter } from "next/router";

import { FormattedMessage } from "react-intl";

export const Content = (props: any) => {
  return (
    <div>
      Ez a Content.tsx
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
