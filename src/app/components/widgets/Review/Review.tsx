import Image from "next/image"
import { FC } from "react"
import styles from "./Review.module.css"

type Props = {
  img: string
  text: string
  name: string
}

export const Review: FC<Props> = ({ img, text, name }) => {
  return (
    <div className="relative flex flex-col min-h-[400px]">
      <div className={styles.wrapper}>
        <Image
          className="absolute top-10 lg:top-6 left-1/2 -translate-x-1/2"
          src="/assets/images/kov.png"
          alt="kov"
          width={80}
          height={56}
        />

        <p className="text-base z-10">{text}</p>

        <h5 className="text-lg font-semibold mt-6 lg:text-xl z-10 md:mb-7">
          {name}
        </h5>

        <Image
          className="w-[110px] h-[110px] md:absolute md:-bottom-14 md:left-1/2 md:-translate-x-1/2 rounded-full overflow-hidden mx-auto bg-cover z-10 relative mt-4 md:mt-0"
          src={img}
          alt="review"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  )
}
