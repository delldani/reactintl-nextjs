import React from "react";

import { FormattedMessage } from "react-intl";

export const Content = (props: any) => {
  return (
    <div>
      <h2>Ez a Content.tsx</h2>
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
