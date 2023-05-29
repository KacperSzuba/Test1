import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Text } from "components";
import LoginPageDivider from "components/LoginPageDivider";
import LoginPageInputfield from "components/LoginPageInputfield";

const LoginpagePage: React.FC = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-center justify-center mx-auto w-auto sm:w-full md:w-full"
        onClick={() => navigate(-1)}
      >
        <div className="flex flex-col items-center justify-center md:px-5 w-auto md:w-full">
          <div className="flex flex-col items-center justify-center p-12 md:px-10 sm:px-5 w-auto">
            <div className="flex flex-col gap-11 items-center justify-start w-full">
              <Text
                className="text-blue_gray_900 text-center"
                as="h1"
                variant="h1"
              >
                Sign in
              </Text>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <LoginPageInputfield
                    className="flex flex-col font-poppins gap-1 h-[87px] md:h-auto items-start justify-start w-[568px] sm:w-full"
                    label_One="User name or email address"
                  />
                  <div className="flex flex-col font-poppins gap-2.5 items-end justify-start mt-[15px] w-full">
                    <LoginPageInputfield
                      className="flex flex-col gap-1 items-start justify-start w-[568px] sm:w-full"
                      label_One="Your password"
                      icon="images/img_icon.svg"
                      hide="Hide"
                    />
                    <Text
                      className="text-gray_900 text-right underline"
                      as="h3"
                      variant="h3"
                    >
                      Forget your password
                    </Text>
                  </div>
                  <LoginPageDivider
                    className="flex flex-row font-avenir gap-[23px] h-[25px] md:h-auto items-center justify-start mt-[13px] w-[568px] sm:w-full"
                    or="OR"
                  />
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[568px] sm:min-w-full mt-4"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        src="images/img_social_media_logo.svg"
                        className="mt-0.5 mb-1 mr-4"
                        alt="Social media logo"
                      />
                    }
                    shape="CircleBorder32"
                    size="sm"
                    variant="OutlineBluegray900"
                  >
                    <div className="font-avenir font-normal leading-[normal] md:text-xl sm:text-lg text-[22px] text-blue_gray_900 text-left">
                      Continue with Google
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[568px] sm:min-w-full mt-4"
                    leftIcon={
                      <Img
                        src="images/img_facebook.svg"
                        className="mt-px mr-4"
                        alt="facebook"
                      />
                    }
                    shape="CircleBorder32"
                    size="sm"
                    variant="OutlineBluegray900"
                  >
                    <div className="font-avenir font-normal leading-[normal] md:text-[22px] sm:text-xl text-2xl text-blue_gray_900 text-left">
                      Continue with Facebook
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[568px] sm:min-w-full text-center text-white_A700 text-xl"
                      shape="CircleBorder32"
                      size="sm"
                      variant="FillBlueA200"
                    >
                      Sign in
                    </Button>
                    <div className="flex flex-col items-center justify-center p-0.5 w-[568px] sm:w-full">
                      <Text
                        className="text-center text-gray_700 underline w-auto"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-blue_gray_900 text-base font-poppins font-normal">
                          Don’t have an acount?
                        </span>
                        <span className="text-gray_700 text-base font-poppins font-normal">
                          {" "}
                        </span>
                        <span className="text-indigo_800 text-base font-poppins font-normal">
                          Sign up{" "}
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_jakobowenssa0_1024x720.png"
          className="h-[1024px] sm:h-auto object-cover w-[720px] md:w-full"
          alt="jakobowenssaZero"
        />
      </div>
    </>
  );
};

export default LoginpagePage;
