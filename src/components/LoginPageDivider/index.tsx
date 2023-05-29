import React from "react";

import { Line, Text } from "components";

type LoginPageDividerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ or: string }>;

const LoginPageDivider: React.FC<LoginPageDividerProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-gray_700_3f h-0.5 w-[44%]" />
        <Text className="font-avenir text-gray_700 w-auto" as="h2" variant="h2">
          {props?.or}
        </Text>
        <Line className="bg-gray_700_3f h-0.5 w-[44%]" />
      </div>
    </>
  );
};

LoginPageDivider.defaultProps = { or: "OR" };

export default LoginPageDivider;
