import React from "react";

import { Img, Text } from "components";

type LoginPageInputfieldProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ label_One: string; icon: string; hide: string }>;

const LoginPageInputfield: React.FC<LoginPageInputfieldProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-start justify-between pr-2 w-full">
          <Text
            className="font-poppins mt-0.5 text-gray_700"
            as="h3"
            variant="h3"
          >
            {props?.label_One}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-center">
            {!!props?.icon ? (
              <Img src={props?.icon} className="h-6 mt-[3px] w-6" alt="icon" />
            ) : null}
            {!!props?.hide ? (
              <Text
                className="font-poppins text-gray_700_cc text-right"
                as="h2"
                variant="h2"
              >
                {props?.hide}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="border border-gray_700_59 border-solid h-14 rounded-[12px] w-full"></div>
      </div>
    </>
  );
};

LoginPageInputfield.defaultProps = { label_One: "Your password" };

export default LoginPageInputfield;
