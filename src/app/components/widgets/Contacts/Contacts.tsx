"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Contacts.module.css";
import Link from "next/link";
import { Thumbs } from "..";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import cn from "clsx";

export const Contacts = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <div className="container !mb-[70px] sm:!mb-[90px]">
      {window.innerWidth >= 1024 && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-8">
          <Thumbs
            className="!py-0"
            way={[
              { title: t("Main"), href: "/" },
              { title: t("Contacts"), href: "/contacts" },
            ]}
          />
          <ul className="flex items-center flex-wrap gap-4 self-start sm:self-end">
            {/* <Link href={"/"}>
             <Image
               width={45}
               height={45}
               src="/assets/images/contacts/youtube.svg"
               alt="youtube"
             />
           </Link> */}
            <a
              className="w-10 h-10 rounded-full bg-blue-1 flex justify-center items-center"
              href={`https://t.me/+375291657575`}
              target="_blank"
            >
              <svg
                className="-translate-x-[1px]"
                width="20"
                height="20"
                viewBox="0 0 26 22"
                fill="none"
              >
                <path
                  d="M24.5089 0.154053L0.5 9.86621V11.2701L7.37644 13.3929L9.55118 20.3699L11.2872 20.3696L14.0862 17.5058L19.9947 21.8457L21.1447 21.4082L25.5 0.9859L24.5089 0.154053ZM19.9483 19.9939L12.1667 14.2783L11.2994 15.459L12.8937 16.63L10.6291 18.9047L8.85217 13.2041L19.1445 7.05876L18.3935 5.80089L7.94971 12.0366L2.89719 10.4768L23.7795 2.02949L19.9483 19.9939Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className="w-10 h-10 rounded-full bg-green-1 flex justify-center items-center"
              href={`https://wa.me/+375291657575`}
              target="_blank"
            >
              <svg
                className="-translate-y-[1px] translate-x-[1px]"
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M14.9988 28.6237C12.3926 28.6237 9.90481 27.9129 7.77246 26.4913L3.0339 28.0314C2.79697 28.1498 2.56004 28.0314 2.44158 27.9129C2.32312 27.7944 2.20465 27.5575 2.32312 27.3206L3.86315 22.8189C2.32312 20.5681 1.49387 17.8435 1.49387 15.1188C1.3754 7.53708 7.53553 1.37695 14.9988 1.37695C22.462 1.37695 28.6221 7.53708 28.6221 15.0003C28.6221 22.4636 22.462 28.6237 14.9988 28.6237ZM7.89093 25.3067C8.00939 25.3067 8.12785 25.3067 8.24632 25.4252C10.2602 26.7283 12.6295 27.439 15.1172 27.439C21.9881 27.439 27.556 21.8712 27.556 15.0003C27.556 8.1294 21.8697 2.56159 14.9988 2.56159C8.12785 2.56159 2.56004 8.1294 2.56004 15.0003C2.56004 17.6065 3.38929 20.2127 4.92933 22.3451C5.04779 22.4636 5.04779 22.7005 5.04779 22.9374L3.74468 26.7283L7.654 25.5436C7.77246 25.3067 7.77246 25.3067 7.89093 25.3067ZM19.2635 22.9374C18.3158 22.9374 17.1311 22.582 15.2357 21.8712C12.0372 20.5681 9.66789 17.6065 8.60171 16.0665L8.48325 15.948C7.89093 15.0003 6.82475 13.3418 6.82475 11.5649C6.82475 9.55097 7.89093 8.4848 8.24632 8.01094C8.72017 7.53708 9.3125 7.30016 10.0233 7.30016H10.3787C11.0895 7.30016 11.4448 7.53708 11.8002 8.36633L12.1556 9.07712C12.511 9.90636 12.9849 10.9725 12.9849 11.091C13.2218 11.5649 13.2218 11.9203 12.9849 12.2756C12.8664 12.5126 12.748 12.7495 12.511 12.9864C12.3926 13.1049 12.2741 13.2234 12.1556 13.3418C12.0372 13.4603 11.9187 13.5787 11.8002 13.6972C12.0372 13.8157 11.9187 13.8157 11.9187 13.8157C12.511 14.7634 13.2218 15.5926 13.9326 16.3034C15.2357 17.3696 16.1834 17.8435 16.6573 18.0804H16.7757C16.8942 18.0804 16.8942 18.1988 17.0127 18.0804C17.2496 17.8435 17.605 17.3696 17.8419 16.8957L17.9604 16.7773C18.3158 16.3034 18.7896 16.185 19.0265 16.185C19.145 16.185 19.3819 16.185 19.6189 16.3034C19.9743 16.4219 21.2774 17.0142 22.2251 17.6065L22.462 17.725C22.8174 17.8435 23.0543 17.9619 23.1728 18.3173C23.4097 18.7912 23.2913 19.8573 23.0543 20.5681C22.6989 21.6343 21.2774 22.582 20.0927 22.8189C19.8558 22.8189 19.6189 22.9374 19.2635 22.9374ZM10.1417 8.4848C9.78635 8.4848 9.43096 8.60326 9.19403 8.72172C8.83864 9.07712 8.00939 9.90637 8.00939 11.4464C8.00939 12.868 8.9571 14.408 9.43096 15.0003L9.54942 15.1188C11.3264 17.725 13.4587 19.6204 15.7096 20.5681C17.368 21.2789 18.5527 21.6343 19.2635 21.6343C19.5004 21.6343 19.7373 21.6343 19.8558 21.5158C20.685 21.2789 21.7512 20.6866 21.9881 20.0943C22.2251 19.502 22.2251 19.0281 22.2251 18.7912C22.1066 18.7912 22.1066 18.6727 21.9881 18.6727L21.7512 18.5542C20.4481 17.8435 19.3819 17.3696 19.2635 17.3696C19.145 17.3696 19.145 17.2511 19.0265 17.4881L18.9081 17.6065C18.5527 18.0804 18.1973 18.5542 17.9604 18.9096C17.605 19.265 16.8942 19.3835 16.4203 19.1466H16.3019C15.828 18.9096 14.6434 18.4358 13.2218 17.2511C12.3926 16.5404 11.6818 15.5926 10.971 14.5265C10.4971 13.8157 10.971 13.2234 11.2079 12.9864C11.2079 12.868 11.3264 12.631 11.4448 12.5126C11.5633 12.3941 11.5633 12.3941 11.6818 12.2756C11.9187 12.0387 11.9187 12.0387 12.0372 11.8018C12.0372 11.8018 12.0372 11.6833 12.0372 11.5649C11.9187 11.5649 11.4448 10.3802 11.0895 9.55097L10.8525 8.84019C10.7341 8.60326 10.6156 8.4848 10.6156 8.4848H10.4971C10.2602 8.4848 10.1417 8.4848 10.1417 8.4848Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className="w-10 h-10 rounded-full bg-purple-1 flex justify-center items-center"
              href={`viber://chat?number=+375291657575`}
              target="_blank"
            >
              <svg
                className="translate-x-[0.5px]"
                width="23"
                height="23"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.4401 7.88922V7.85229C30.1048 6.49433 29.2298 5.09092 28.0821 3.90911C26.7412 2.52274 25.0338 1.43468 23.4031 1.0824H23.369C18.5061 0.150592 13.5104 0.150592 8.64744 1.0824H8.61335C5.58494 1.73865 2.29801 4.90342 1.56505 7.85229V7.88922C0.664513 11.9775 0.664513 16.2128 1.56505 20.3012V20.3352C2.08778 22.4375 3.90596 24.6477 6.00256 25.983C6.68726 26.4292 7.43258 26.7746 8.21562 27.0085V30.2983C8.21673 30.5612 8.29609 30.8178 8.44359 31.0355C8.59109 31.2531 8.80005 31.4219 9.04384 31.5203C9.28763 31.6188 9.5552 31.6424 9.81246 31.5882C10.0697 31.534 10.305 31.4044 10.4883 31.2159L13.8236 27.75C14.5452 27.7898 15.2724 27.8125 15.994 27.8125C18.4642 27.8118 20.9287 27.5778 23.3548 27.1137H23.3889C26.4088 26.4546 29.6986 23.2898 30.4258 20.3409V20.3068C31.3319 16.2177 31.3368 11.9804 30.4401 7.88922ZM27.8008 19.6932C27.3122 21.6165 24.8179 24.0114 22.8321 24.4517C20.2528 24.9458 17.6278 25.1601 15.0026 25.0909C14.977 25.0894 14.9514 25.0937 14.9278 25.1035C14.9041 25.1134 14.8831 25.1285 14.8662 25.1477L12.4315 27.6477L9.84062 30.304C9.79918 30.3478 9.74553 30.3782 9.68664 30.3911C9.62774 30.4041 9.56631 30.3991 9.5103 30.3767C9.45428 30.3544 9.40627 30.3157 9.37247 30.2658C9.33867 30.2159 9.32065 30.1569 9.32074 30.0966V24.6421C9.3208 24.5982 9.30549 24.5557 9.27746 24.522C9.24943 24.4882 9.21046 24.4654 9.16733 24.4574C8.75313 24.3591 8.35381 24.2062 7.97983 24.0029C6.29233 23.1023 4.59062 21.2557 4.19858 19.6932C3.38653 15.9977 3.38653 12.1699 4.19858 8.47445C4.68437 6.55967 7.1929 4.17047 9.16449 3.72729C13.6794 2.86341 18.3172 2.86341 22.8321 3.72729C23.9259 3.97161 25.1758 4.80399 26.1531 5.82672C26.9571 6.65911 27.5736 7.61933 27.8008 8.48297C28.6116 12.1757 28.6116 16.0004 27.8008 19.6932Z"
                  fill="white"
                />
                <path
                  d="M22.9032 19.9773C22.5341 20.8196 21.8996 21.518 21.0964 21.9659C20.8444 22.0729 20.5828 22.1557 20.3151 22.2131C20.0112 22.1222 19.7214 22.0597 19.4629 21.9489C17.3093 21.1109 15.3046 19.932 13.5254 18.4574C12.9969 18.0067 12.5004 17.5197 12.0396 17C10.9016 15.6896 9.94599 14.2313 9.19866 12.6648C8.83503 11.9233 8.52821 11.1563 8.21571 10.3921C7.93162 9.69606 8.35207 8.97162 8.78389 8.45174C9.20657 7.96959 9.72648 7.58232 10.3095 7.31537C10.5146 7.21227 10.7494 7.18424 10.973 7.23613C11.1967 7.28802 11.3951 7.41657 11.5339 7.59946C12.2597 8.41497 12.8995 9.30319 13.443 10.25C13.6142 10.5253 13.6728 10.856 13.6067 11.1734C13.5406 11.4908 13.3548 11.7705 13.0879 11.9546C12.9458 12.054 12.8038 12.1676 12.6816 12.2784C12.5612 12.3676 12.4573 12.4772 12.3748 12.6023C12.3036 12.7194 12.2604 12.8513 12.2485 12.9878C12.2367 13.1243 12.2566 13.2617 12.3066 13.3892C12.8549 14.8978 13.6873 16.1563 14.9316 17.0398C15.3527 17.3376 15.8064 17.5863 16.2839 17.7813C16.5957 17.9509 16.946 18.037 17.3009 18.0313C17.9203 17.9574 18.1248 17.2728 18.5566 16.9205C18.7548 16.7582 19.0001 16.6642 19.256 16.6524C19.5119 16.6406 19.7648 16.7117 19.9771 16.8551C20.4373 17.1392 20.8805 17.4603 21.3237 17.7728C21.762 18.0719 22.184 18.3944 22.5879 18.7387C22.7767 18.8759 22.9117 19.0748 22.9693 19.301C23.0268 19.5273 23.0035 19.7665 22.9032 19.9773Z"
                  fill="white"
                />
                <path
                  d="M16.8148 6.36361H16.4512C16.5676 6.35793 16.6898 6.36361 16.8148 6.36361Z"
                  fill="white"
                />
                <path
                  d="M23.1018 14.8778C22.8177 14.8778 22.6785 14.6363 22.6586 14.3721C22.6216 13.8522 22.5932 13.3295 22.5222 12.8124C22.3994 11.9401 22.0956 11.103 21.6302 10.355C21.1518 9.57582 20.5152 8.90568 19.7616 8.38793C19.008 7.87018 18.1541 7.51637 17.2552 7.34936C16.8461 7.27549 16.4285 7.25845 16.0165 7.21583C15.7552 7.18743 15.4114 7.17038 15.3546 6.84652C15.3461 6.78361 15.3511 6.71963 15.3694 6.65883C15.3876 6.59803 15.4186 6.54181 15.4602 6.49395C15.5019 6.44608 15.5533 6.40766 15.6111 6.38126C15.6688 6.35485 15.7315 6.34107 15.7949 6.34083C15.8631 6.33691 15.9314 6.33691 15.9995 6.34083C17.2413 6.35134 18.4613 6.66794 19.5515 7.26259C20.6416 7.85724 21.5683 8.71158 22.2495 9.74992C22.7872 10.5869 23.1523 11.5228 23.3233 12.5028C23.4313 13.1164 23.4711 13.7471 23.5194 14.3721C23.5291 14.4333 23.5256 14.496 23.5093 14.5558C23.493 14.6156 23.4641 14.6713 23.4246 14.7191C23.3851 14.7669 23.3359 14.8058 23.2802 14.8331C23.2246 14.8605 23.1637 14.8757 23.1018 14.8778Z"
                  fill="white"
                />
                <path
                  d="M21.5647 13.5512C21.5631 13.6356 21.5517 13.7195 21.5306 13.8012C21.5058 13.8833 21.4563 13.9558 21.3888 14.0088C21.3213 14.0618 21.2392 14.0928 21.1535 14.0974C21.0678 14.1021 20.9828 14.0802 20.91 14.0348C20.8372 13.9895 20.7801 13.9228 20.7465 13.8438C20.7152 13.7291 20.7009 13.6104 20.7039 13.4915C20.7105 12.8561 20.5848 12.2262 20.3346 11.6421C20.2778 11.5171 20.2153 11.3893 20.1442 11.2671C19.7376 10.5662 19.134 10.0001 18.4085 9.63926C17.9707 9.43258 17.5058 9.2891 17.0278 9.21312C16.8175 9.17903 16.6073 9.15914 16.3971 9.13073C16.3424 9.12799 16.2888 9.11404 16.2397 9.08976C16.1906 9.06549 16.1469 9.03139 16.1115 8.98959C16.0761 8.94778 16.0497 8.89915 16.0338 8.84672C16.0179 8.79428 16.013 8.73914 16.0192 8.68471C16.0193 8.62903 16.0311 8.574 16.0539 8.5232C16.0767 8.47241 16.11 8.42702 16.1515 8.38999C16.1931 8.35297 16.2421 8.32516 16.2952 8.30839C16.3482 8.29161 16.4043 8.28626 16.4596 8.29266C17.2938 8.32486 18.111 8.53812 18.8545 8.91766C19.7624 9.37455 20.5031 10.1063 20.971 11.0086C21.2345 11.5354 21.411 12.1015 21.4937 12.6847C21.509 12.7608 21.5204 12.8376 21.5278 12.9148C21.542 13.0853 21.5477 13.2557 21.5619 13.466C21.5619 13.4858 21.5647 13.5114 21.5647 13.5512Z"
                  fill="white"
                />
                <path
                  d="M19.6193 13.1591C19.6032 13.2311 19.5659 13.2967 19.5123 13.3473C19.4586 13.3979 19.391 13.4313 19.3181 13.4432H19.2556C19.1626 13.4492 19.0701 13.4247 18.9921 13.3735C18.9142 13.3222 18.8551 13.2469 18.8238 13.1591C18.8062 13.1125 18.7947 13.0638 18.7897 13.0142C18.7748 12.823 18.7463 12.6332 18.7045 12.446C18.6201 12.0672 18.4048 11.7302 18.0966 11.4943C17.9475 11.3873 17.7813 11.3066 17.6051 11.2557C17.3806 11.1903 17.1448 11.2074 16.9233 11.1534C16.8137 11.134 16.7164 11.072 16.6525 10.9809C16.5886 10.8899 16.5634 10.7772 16.5823 10.6676C16.6035 10.5626 16.6622 10.4689 16.7474 10.4041C16.8326 10.3393 16.9386 10.3077 17.0454 10.3153C18.3466 10.4091 19.3181 11.0341 19.5681 12.429C19.5939 12.5585 19.6119 12.6894 19.6221 12.821C19.638 12.9332 19.6371 13.0472 19.6193 13.1591Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className="w-10 h-10"
              href={
                locale === "ru"
                  ? "https://www.instagram.com/drkitchen_by/"
                  : "https://www.instagram.com/drkitchen_pl/"
              }
              target="_blank"
            >
              <Image
                width={45}
                height={45}
                src="/assets/images/contacts/inst.svg"
                alt="inst"
              />
            </a>

            <a
              className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center"
              href={
                locale === "ru"
                  ? "https://www.facebook.com/profile.php?id=61562861199069"
                  : "https://www.facebook.com/profile.php?id=61563333673964"
              }
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                </g>
              </svg>
            </a>
            {/* <Link href={"/"}>
             <Image
               width={45}
               height={45}
               src="/assets/images/contacts/vk.svg"
               alt="vk"
             />
           </Link>
           <Link href={"/"}>
             <Image
               width={45}
               height={45}
               src="/assets/images/contacts/ok.svg"
               alt="ok"
             />
           </Link>
           <Link href={"/"}>
             <Image
               width={45}
               height={45}
               src="/assets/images/contacts/tiktok.svg"
               alt="tiktok"
             />
           </Link>
           <Link href={"/"}>
             <Image
               width={45}
               height={45}
               src="/assets/images/contacts/dzen.svg"
               alt="dzen"
             />
           </Link> */}
          </ul>
        </div>
      )}

      <div className="flex justify-between w-full gap-[30px] flex-col lg:flex-row">
        <div className="lg:w-[30%]">
          <h2 className={styles.heading}>{t("Contacts")}</h2>

          {window.innerWidth < 1024 && (
            <ul className="flex items-center flex-wrap gap-4 self-start sm:self-end pb-8">
              {/* <Link href={"/"}>
                 <Image
                   width={45}
                   height={45}
                   src="/assets/images/contacts/youtube.svg"
                   alt="youtube"
                 />
               </Link> */}
              <a
                className="w-10 h-10 rounded-full bg-blue-1 flex justify-center items-center"
                href={`https://t.me/+375291657575`}
                target="_blank"
              >
                <svg
                  className="-translate-x-[1px]"
                  width="20"
                  height="20"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M24.5089 0.154053L0.5 9.86621V11.2701L7.37644 13.3929L9.55118 20.3699L11.2872 20.3696L14.0862 17.5058L19.9947 21.8457L21.1447 21.4082L25.5 0.9859L24.5089 0.154053ZM19.9483 19.9939L12.1667 14.2783L11.2994 15.459L12.8937 16.63L10.6291 18.9047L8.85217 13.2041L19.1445 7.05876L18.3935 5.80089L7.94971 12.0366L2.89719 10.4768L23.7795 2.02949L19.9483 19.9939Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                className="w-10 h-10 rounded-full bg-green-1 flex justify-center items-center"
                href={`https://wa.me/+375291657575`}
                target="_blank"
              >
                <svg
                  className="-translate-y-[1px] translate-x-[1px]"
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M14.9988 28.6237C12.3926 28.6237 9.90481 27.9129 7.77246 26.4913L3.0339 28.0314C2.79697 28.1498 2.56004 28.0314 2.44158 27.9129C2.32312 27.7944 2.20465 27.5575 2.32312 27.3206L3.86315 22.8189C2.32312 20.5681 1.49387 17.8435 1.49387 15.1188C1.3754 7.53708 7.53553 1.37695 14.9988 1.37695C22.462 1.37695 28.6221 7.53708 28.6221 15.0003C28.6221 22.4636 22.462 28.6237 14.9988 28.6237ZM7.89093 25.3067C8.00939 25.3067 8.12785 25.3067 8.24632 25.4252C10.2602 26.7283 12.6295 27.439 15.1172 27.439C21.9881 27.439 27.556 21.8712 27.556 15.0003C27.556 8.1294 21.8697 2.56159 14.9988 2.56159C8.12785 2.56159 2.56004 8.1294 2.56004 15.0003C2.56004 17.6065 3.38929 20.2127 4.92933 22.3451C5.04779 22.4636 5.04779 22.7005 5.04779 22.9374L3.74468 26.7283L7.654 25.5436C7.77246 25.3067 7.77246 25.3067 7.89093 25.3067ZM19.2635 22.9374C18.3158 22.9374 17.1311 22.582 15.2357 21.8712C12.0372 20.5681 9.66789 17.6065 8.60171 16.0665L8.48325 15.948C7.89093 15.0003 6.82475 13.3418 6.82475 11.5649C6.82475 9.55097 7.89093 8.4848 8.24632 8.01094C8.72017 7.53708 9.3125 7.30016 10.0233 7.30016H10.3787C11.0895 7.30016 11.4448 7.53708 11.8002 8.36633L12.1556 9.07712C12.511 9.90636 12.9849 10.9725 12.9849 11.091C13.2218 11.5649 13.2218 11.9203 12.9849 12.2756C12.8664 12.5126 12.748 12.7495 12.511 12.9864C12.3926 13.1049 12.2741 13.2234 12.1556 13.3418C12.0372 13.4603 11.9187 13.5787 11.8002 13.6972C12.0372 13.8157 11.9187 13.8157 11.9187 13.8157C12.511 14.7634 13.2218 15.5926 13.9326 16.3034C15.2357 17.3696 16.1834 17.8435 16.6573 18.0804H16.7757C16.8942 18.0804 16.8942 18.1988 17.0127 18.0804C17.2496 17.8435 17.605 17.3696 17.8419 16.8957L17.9604 16.7773C18.3158 16.3034 18.7896 16.185 19.0265 16.185C19.145 16.185 19.3819 16.185 19.6189 16.3034C19.9743 16.4219 21.2774 17.0142 22.2251 17.6065L22.462 17.725C22.8174 17.8435 23.0543 17.9619 23.1728 18.3173C23.4097 18.7912 23.2913 19.8573 23.0543 20.5681C22.6989 21.6343 21.2774 22.582 20.0927 22.8189C19.8558 22.8189 19.6189 22.9374 19.2635 22.9374ZM10.1417 8.4848C9.78635 8.4848 9.43096 8.60326 9.19403 8.72172C8.83864 9.07712 8.00939 9.90637 8.00939 11.4464C8.00939 12.868 8.9571 14.408 9.43096 15.0003L9.54942 15.1188C11.3264 17.725 13.4587 19.6204 15.7096 20.5681C17.368 21.2789 18.5527 21.6343 19.2635 21.6343C19.5004 21.6343 19.7373 21.6343 19.8558 21.5158C20.685 21.2789 21.7512 20.6866 21.9881 20.0943C22.2251 19.502 22.2251 19.0281 22.2251 18.7912C22.1066 18.7912 22.1066 18.6727 21.9881 18.6727L21.7512 18.5542C20.4481 17.8435 19.3819 17.3696 19.2635 17.3696C19.145 17.3696 19.145 17.2511 19.0265 17.4881L18.9081 17.6065C18.5527 18.0804 18.1973 18.5542 17.9604 18.9096C17.605 19.265 16.8942 19.3835 16.4203 19.1466H16.3019C15.828 18.9096 14.6434 18.4358 13.2218 17.2511C12.3926 16.5404 11.6818 15.5926 10.971 14.5265C10.4971 13.8157 10.971 13.2234 11.2079 12.9864C11.2079 12.868 11.3264 12.631 11.4448 12.5126C11.5633 12.3941 11.5633 12.3941 11.6818 12.2756C11.9187 12.0387 11.9187 12.0387 12.0372 11.8018C12.0372 11.8018 12.0372 11.6833 12.0372 11.5649C11.9187 11.5649 11.4448 10.3802 11.0895 9.55097L10.8525 8.84019C10.7341 8.60326 10.6156 8.4848 10.6156 8.4848H10.4971C10.2602 8.4848 10.1417 8.4848 10.1417 8.4848Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                className="w-10 h-10 rounded-full bg-purple-1 flex justify-center items-center"
                href={`viber://chat?number=+375291657575`}
                target="_blank"
              >
                <svg
                  className="translate-x-[0.5px]"
                  width="23"
                  height="23"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.4401 7.88922V7.85229C30.1048 6.49433 29.2298 5.09092 28.0821 3.90911C26.7412 2.52274 25.0338 1.43468 23.4031 1.0824H23.369C18.5061 0.150592 13.5104 0.150592 8.64744 1.0824H8.61335C5.58494 1.73865 2.29801 4.90342 1.56505 7.85229V7.88922C0.664513 11.9775 0.664513 16.2128 1.56505 20.3012V20.3352C2.08778 22.4375 3.90596 24.6477 6.00256 25.983C6.68726 26.4292 7.43258 26.7746 8.21562 27.0085V30.2983C8.21673 30.5612 8.29609 30.8178 8.44359 31.0355C8.59109 31.2531 8.80005 31.4219 9.04384 31.5203C9.28763 31.6188 9.5552 31.6424 9.81246 31.5882C10.0697 31.534 10.305 31.4044 10.4883 31.2159L13.8236 27.75C14.5452 27.7898 15.2724 27.8125 15.994 27.8125C18.4642 27.8118 20.9287 27.5778 23.3548 27.1137H23.3889C26.4088 26.4546 29.6986 23.2898 30.4258 20.3409V20.3068C31.3319 16.2177 31.3368 11.9804 30.4401 7.88922ZM27.8008 19.6932C27.3122 21.6165 24.8179 24.0114 22.8321 24.4517C20.2528 24.9458 17.6278 25.1601 15.0026 25.0909C14.977 25.0894 14.9514 25.0937 14.9278 25.1035C14.9041 25.1134 14.8831 25.1285 14.8662 25.1477L12.4315 27.6477L9.84062 30.304C9.79918 30.3478 9.74553 30.3782 9.68664 30.3911C9.62774 30.4041 9.56631 30.3991 9.5103 30.3767C9.45428 30.3544 9.40627 30.3157 9.37247 30.2658C9.33867 30.2159 9.32065 30.1569 9.32074 30.0966V24.6421C9.3208 24.5982 9.30549 24.5557 9.27746 24.522C9.24943 24.4882 9.21046 24.4654 9.16733 24.4574C8.75313 24.3591 8.35381 24.2062 7.97983 24.0029C6.29233 23.1023 4.59062 21.2557 4.19858 19.6932C3.38653 15.9977 3.38653 12.1699 4.19858 8.47445C4.68437 6.55967 7.1929 4.17047 9.16449 3.72729C13.6794 2.86341 18.3172 2.86341 22.8321 3.72729C23.9259 3.97161 25.1758 4.80399 26.1531 5.82672C26.9571 6.65911 27.5736 7.61933 27.8008 8.48297C28.6116 12.1757 28.6116 16.0004 27.8008 19.6932Z"
                    fill="white"
                  />
                  <path
                    d="M22.9032 19.9773C22.5341 20.8196 21.8996 21.518 21.0964 21.9659C20.8444 22.0729 20.5828 22.1557 20.3151 22.2131C20.0112 22.1222 19.7214 22.0597 19.4629 21.9489C17.3093 21.1109 15.3046 19.932 13.5254 18.4574C12.9969 18.0067 12.5004 17.5197 12.0396 17C10.9016 15.6896 9.94599 14.2313 9.19866 12.6648C8.83503 11.9233 8.52821 11.1563 8.21571 10.3921C7.93162 9.69606 8.35207 8.97162 8.78389 8.45174C9.20657 7.96959 9.72648 7.58232 10.3095 7.31537C10.5146 7.21227 10.7494 7.18424 10.973 7.23613C11.1967 7.28802 11.3951 7.41657 11.5339 7.59946C12.2597 8.41497 12.8995 9.30319 13.443 10.25C13.6142 10.5253 13.6728 10.856 13.6067 11.1734C13.5406 11.4908 13.3548 11.7705 13.0879 11.9546C12.9458 12.054 12.8038 12.1676 12.6816 12.2784C12.5612 12.3676 12.4573 12.4772 12.3748 12.6023C12.3036 12.7194 12.2604 12.8513 12.2485 12.9878C12.2367 13.1243 12.2566 13.2617 12.3066 13.3892C12.8549 14.8978 13.6873 16.1563 14.9316 17.0398C15.3527 17.3376 15.8064 17.5863 16.2839 17.7813C16.5957 17.9509 16.946 18.037 17.3009 18.0313C17.9203 17.9574 18.1248 17.2728 18.5566 16.9205C18.7548 16.7582 19.0001 16.6642 19.256 16.6524C19.5119 16.6406 19.7648 16.7117 19.9771 16.8551C20.4373 17.1392 20.8805 17.4603 21.3237 17.7728C21.762 18.0719 22.184 18.3944 22.5879 18.7387C22.7767 18.8759 22.9117 19.0748 22.9693 19.301C23.0268 19.5273 23.0035 19.7665 22.9032 19.9773Z"
                    fill="white"
                  />
                  <path
                    d="M16.8148 6.36361H16.4512C16.5676 6.35793 16.6898 6.36361 16.8148 6.36361Z"
                    fill="white"
                  />
                  <path
                    d="M23.1018 14.8778C22.8177 14.8778 22.6785 14.6363 22.6586 14.3721C22.6216 13.8522 22.5932 13.3295 22.5222 12.8124C22.3994 11.9401 22.0956 11.103 21.6302 10.355C21.1518 9.57582 20.5152 8.90568 19.7616 8.38793C19.008 7.87018 18.1541 7.51637 17.2552 7.34936C16.8461 7.27549 16.4285 7.25845 16.0165 7.21583C15.7552 7.18743 15.4114 7.17038 15.3546 6.84652C15.3461 6.78361 15.3511 6.71963 15.3694 6.65883C15.3876 6.59803 15.4186 6.54181 15.4602 6.49395C15.5019 6.44608 15.5533 6.40766 15.6111 6.38126C15.6688 6.35485 15.7315 6.34107 15.7949 6.34083C15.8631 6.33691 15.9314 6.33691 15.9995 6.34083C17.2413 6.35134 18.4613 6.66794 19.5515 7.26259C20.6416 7.85724 21.5683 8.71158 22.2495 9.74992C22.7872 10.5869 23.1523 11.5228 23.3233 12.5028C23.4313 13.1164 23.4711 13.7471 23.5194 14.3721C23.5291 14.4333 23.5256 14.496 23.5093 14.5558C23.493 14.6156 23.4641 14.6713 23.4246 14.7191C23.3851 14.7669 23.3359 14.8058 23.2802 14.8331C23.2246 14.8605 23.1637 14.8757 23.1018 14.8778Z"
                    fill="white"
                  />
                  <path
                    d="M21.5647 13.5512C21.5631 13.6356 21.5517 13.7195 21.5306 13.8012C21.5058 13.8833 21.4563 13.9558 21.3888 14.0088C21.3213 14.0618 21.2392 14.0928 21.1535 14.0974C21.0678 14.1021 20.9828 14.0802 20.91 14.0348C20.8372 13.9895 20.7801 13.9228 20.7465 13.8438C20.7152 13.7291 20.7009 13.6104 20.7039 13.4915C20.7105 12.8561 20.5848 12.2262 20.3346 11.6421C20.2778 11.5171 20.2153 11.3893 20.1442 11.2671C19.7376 10.5662 19.134 10.0001 18.4085 9.63926C17.9707 9.43258 17.5058 9.2891 17.0278 9.21312C16.8175 9.17903 16.6073 9.15914 16.3971 9.13073C16.3424 9.12799 16.2888 9.11404 16.2397 9.08976C16.1906 9.06549 16.1469 9.03139 16.1115 8.98959C16.0761 8.94778 16.0497 8.89915 16.0338 8.84672C16.0179 8.79428 16.013 8.73914 16.0192 8.68471C16.0193 8.62903 16.0311 8.574 16.0539 8.5232C16.0767 8.47241 16.11 8.42702 16.1515 8.38999C16.1931 8.35297 16.2421 8.32516 16.2952 8.30839C16.3482 8.29161 16.4043 8.28626 16.4596 8.29266C17.2938 8.32486 18.111 8.53812 18.8545 8.91766C19.7624 9.37455 20.5031 10.1063 20.971 11.0086C21.2345 11.5354 21.411 12.1015 21.4937 12.6847C21.509 12.7608 21.5204 12.8376 21.5278 12.9148C21.542 13.0853 21.5477 13.2557 21.5619 13.466C21.5619 13.4858 21.5647 13.5114 21.5647 13.5512Z"
                    fill="white"
                  />
                  <path
                    d="M19.6193 13.1591C19.6032 13.2311 19.5659 13.2967 19.5123 13.3473C19.4586 13.3979 19.391 13.4313 19.3181 13.4432H19.2556C19.1626 13.4492 19.0701 13.4247 18.9921 13.3735C18.9142 13.3222 18.8551 13.2469 18.8238 13.1591C18.8062 13.1125 18.7947 13.0638 18.7897 13.0142C18.7748 12.823 18.7463 12.6332 18.7045 12.446C18.6201 12.0672 18.4048 11.7302 18.0966 11.4943C17.9475 11.3873 17.7813 11.3066 17.6051 11.2557C17.3806 11.1903 17.1448 11.2074 16.9233 11.1534C16.8137 11.134 16.7164 11.072 16.6525 10.9809C16.5886 10.8899 16.5634 10.7772 16.5823 10.6676C16.6035 10.5626 16.6622 10.4689 16.7474 10.4041C16.8326 10.3393 16.9386 10.3077 17.0454 10.3153C18.3466 10.4091 19.3181 11.0341 19.5681 12.429C19.5939 12.5585 19.6119 12.6894 19.6221 12.821C19.638 12.9332 19.6371 13.0472 19.6193 13.1591Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                className="w-10 h-10"
                href={
                  locale === "ru"
                    ? "https://www.instagram.com/drkitchen_by/"
                    : "https://www.instagram.com/drkitchen_pl/"
                }
                target="_blank"
              >
                <Image
                  width={45}
                  height={45}
                  src="/assets/images/contacts/inst.svg"
                  alt="inst"
                />
              </a>

              <a
                className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center"
                href={
                  locale === "ru"
                    ? "https://www.facebook.com/profile.php?id=61562861199069"
                    : "https://www.facebook.com/profile.php?id=61563333673964"
                }
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
              </a>
              {/* <Link href={"/"}>
                 <Image
                   width={45}
                   height={45}
                   src="/assets/images/contacts/vk.svg"
                   alt="vk"
                 />
               </Link>
               <Link href={"/"}>
                 <Image
                   width={45}
                   height={45}
                   src="/assets/images/contacts/ok.svg"
                   alt="ok"
                 />
               </Link>
               <Link href={"/"}>
                 <Image
                   width={45}
                   height={45}
                   src="/assets/images/contacts/tiktok.svg"
                   alt="tiktok"
                 />
               </Link>
               <Link href={"/"}>
                 <Image
                   width={45}
                   height={45}
                   src="/assets/images/contacts/dzen.svg"
                   alt="dzen"
                 />
               </Link> */}
            </ul>
          )}

          <ul
            className={cn("w-full flex flex-col", {
              "lg:grid lg:grid-cols-2 lg:w-[60%] lg:items-start":
                locale === "pl",
            })}
          >
            <li
              className={cn(
                "flex gap-5 items-start pb-[30px] border-b border-[#909090]",
              )}
            >
              <Image
                width={23}
                height={23}
                src="/assets/images/contacts/telephone.svg"
                alt="telephone"
              />
              <div className="flex flex-col gap-[11px]">
                <p className={styles.li__title}>{t("Phone")}</p>
                <p className={styles.li__desc}>
                  {t("company name")} <br />{" "}
                  {locale === "pl" && (
                    <p className={styles.li__desc}>NIP: 9522255376</p>
                  )}
                  <a href={`tel:${t("telLink")}`}>{t("tel")}</a>
                </p>
              </div>
            </li>
            <li
              className={cn(
                "flex gap-5 items-start py-[30px] border-b border-[#909090]",
                {
                  "lg:pt-0 lg:h-full": locale === "pl",
                },
              )}
            >
              <Image
                width={23}
                height={23}
                src="/assets/images/contacts/clock.svg"
                alt="clock"
              />
              <div className="flex flex-col gap-[11px]">
                <p className={styles.li__title}>{t("Working hours")}</p>
                <p className={styles.li__desc}>
                  {t("pn")}-{locale === "ru" ? t("vs") : t("sb")}:{" "}
                  {locale === "ru" ? "09:00–21:00" : "09:00–20:00"}
                </p>
              </div>
            </li>
            <li className="gap-5 items-start py-[30px] border-b border-[#909090] hidden sm:flex">
              <Image
                width={23}
                height={23}
                src="/assets/images/contacts/pin.svg"
                alt="pin"
              />
              <div className="flex flex-col gap-[11px]">
                <p className={styles.li__title}>{t("Address")}</p>
                <p className={styles.li__desc}>{t("address-way")}</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={cn(
            "flex flex-col w-full gap-[30px] sm:gap-[49px] lg:w-[70%]",
            {
              "lg:!w-[30%]": locale === "pl",
            },
          )}
        >
          {locale === "ru" && (
            <YMaps>
              <Map
                className="h-[624px] w-full rounded-[20px] overflow-hidden"
                defaultState={{ center: [53.949503, 27.618928], zoom: 17 }}
              >
                <Placemark defaultGeometry={[53.949503, 27.618928]} />
              </Map>
            </YMaps>
          )}
        </div>
        <div className="gap-5 items-start pb-[30px] sm:py-[30px] border-b border-[#909090] flex sm:hidden">
          <Image
            width={23}
            height={23}
            src="/assets/images/contacts/telephone.svg"
            alt="telephone"
          />
          <div className="flex flex-col gap-[11px]">
            <p className={styles.li__title}>{t("Address")}</p>
            <p className={styles.li__desc}>{t("address-way")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
