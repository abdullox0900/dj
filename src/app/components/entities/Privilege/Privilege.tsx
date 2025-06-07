// import { FC } from "react";
// import Image from "next/image";
// type Props = {
//   img: string;
//   title: string;
//   desc: string;
// };

// export const Privilege: FC<Props> = ({ img, title, desc }) => {
//   return (
//     <div className="flex flex-col w-full items-center">
//       <div className="shadow-[0_6px_13px_0_rgba(0, 0, 0, 0.18)] mb-[25px] bg-[#FFDD2D] w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center">
//         <Image
//           width={0}
//           height={0}
//           sizes="100vw"
//           src={img}
//           alt={title}
//           className="max-w-[40px] lg:max-w-[30px] w-full"
//         />
//       </div>

//       <h5 className="font-bold sm:font-semibold text-xl lg:text-lg text-center text-[#292929] mb-4">
//         {title}
//       </h5>
//       <h6 className="font-medium text-base lg:text-sm text-center sm:leading-[150%] text-[#000]">
//         {desc}
//       </h6>
//     </div>
//   );
// };

import { FC } from "react";
import Image from "next/image";
type Props = {
  img: string;
  title: string;
  desc: string;
};

export const Privilege: FC<Props> = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="shadow-[0_6px_13px_0_rgba(0, 0, 0, 0.18)] mb-[25px] bg-[#FFDD2D] w-[100px] h-[100px] rounded-full flex items-center justify-center">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={img}
          alt={title}
          className="max-w-[40px] w-full"
        />
      </div>

      <h5 className="font-bold sm:font-semibold text-xl text-center text-[#292929] mb-5 max-w-[290px] w-full mx-auto">
        {title}
      </h5>
      <h6 className="font-medium text-base text-center sm:leading-[150%] text-black">
        {desc}
      </h6>
    </div>
  );
};
