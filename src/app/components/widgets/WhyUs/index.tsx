// "use client";

// import { useTranslations } from "next-intl";
// import { BoxWrapper } from "../../BoxWrapper/BoxWrapper";
// import { Privilege } from "../../entities";

// export const WhyUs = () => {
//   const t = useTranslations("Index");

//   return (
//     <BoxWrapper
//       title={t("Why us?")}
//       className="gap-[41px] sm:gap-[71px] items-center sm:items-start [&>div>h2]:!text-center lg:[&>div>h2]:!text-left"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-stretch gap-10 sm:gap-9 mt-5 lg:mt-8">
//         <Privilege
//           img="/assets/images/privilege-7.svg"
//           title={t("Why us title 1")}
//           desc={t("Why us text 1")}
//         />
//         <Privilege
//           img="/assets/images/privilege-3.svg"
//           title={t("Why us title 2")}
//           desc={t("Why us text 2")}
//         />
//         <Privilege
//           img="/assets/images/privilege-4.svg"
//           title={t("Why us title 3")}
//           desc={t("Why us text 3")}
//         />
//         <Privilege
//           img="/assets/images/privilege-2.svg"
//           title={t("Why us title 4")}
//           desc={t("Why us text 4")}
//         />

//         <Privilege
//           img="/assets/images/privilege-5.svg"
//           title={t("Why us title 5")}
//           desc={t("Why us text 5")}
//         />

//         <Privilege
//           img="/assets/images/privilege-6.svg"
//           title={t("Why us title 6")}
//           desc={t("Why us text 6")}
//         />
//       </div>
//     </BoxWrapper>
//   );
// };
"use client";

import { useTranslations } from "next-intl";
import { BoxWrapper } from "../../BoxWrapper/BoxWrapper";
import { Privilege } from "../../entities";

export const WhyUs = () => {
  const t = useTranslations("Index");

  return (
    <BoxWrapper
      title={t("Why us?")}
      className="gap-[41px] sm:gap-[71px] items-center sm:items-start [&>div>h2]:!text-center lg:[&>div>h2]:!text-left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-10 sm:gap-9 mt-5 lg:mt-8">
        <Privilege
          img="/assets/images/why-us/6.svg"
          title={t("Why us title 1")}
          desc={t("Why us text 1")}
        />
        <Privilege
          img="/assets/images/why-us/3.svg"
          title={t("Why us title 6")}
          desc={t("Why us text 6")}
        />

        <Privilege
          img="/assets/images/why-us/4.svg"
          title={t("Why us title 5")}
          desc={t("Why us text 5")}
        />
        <Privilege
          img="/assets/images/why-us/1.svg"
          title={t("Why us title 2")}
          desc={t("Why us text 2")}
        />
        <Privilege
          img="/assets/images/why-us/5.svg"
          title={t("Why us title 3")}
          desc={t("Why us text 3")}
        />
        <Privilege
          img="/assets/images/why-us/2.svg"
          title={t("Why us title 4")}
          desc={t("Why us text 4")}
        />
      </div>
    </BoxWrapper>
  );
};
