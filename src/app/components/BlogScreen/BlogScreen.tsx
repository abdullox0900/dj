"use client";

import { Anchor } from "../Anchor/Anchor";
import { BoxWrapper } from "../BoxWrapper/BoxWrapper";
import { blogData, blogPlData } from "@/app/data";
import { Product } from "../entities";
import { Thumbs } from "../widgets";
import { useLocale, useTranslations } from "next-intl";

export const BlogScreen = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Anchor>
        <div>
          <div className="container">
            <Thumbs
              way={[
                { title: t("Main"), href: `/` },
                { title: t("Blog"), href: `/blog` },
              ]}
            />
          </div>

          <BoxWrapper className="!pt-5 lg:!pt-0" title={t("Blog")}>
            {/* <div className="flex flex-wrap mb-[40px] w-full gap-[20px]">
              <Tab
                className="!min-w-[168px] !px-[36px]"
                isActive={activeTab === 0}
                activeTab={activeTab}
                setActiveTab={() => setActiveTab(0)}
                name="Все"
              />
              <Tab
                className="!min-w-[168px] !px-[36px]"
                isActive={activeTab === 1}
                activeTab={activeTab}
                setActiveTab={() => setActiveTab(1)}
                name="Название категории"
              />
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] lg:gap-y-[40px] 2xl:lg:grid-cols-3 gap-x-[28px] mb-[40px]">
              {locale === "ru"
                ? blogData.map((blog) => {
                    return (
                      <Product
                        key={blog.id}
                        type="blog"
                        img={blog.images[0]}
                        title={blog.title.slice(0, 50) + "..."}
                        date={blog.date}
                        desc={blog.description.slice(0, 100) + "..."}
                        linkText={t("More detailed")}
                        productHref={`/blog-details/${blog.id}`}
                      />
                    );
                  })
                : blogPlData.map((blog) => {
                    return (
                      <Product
                        key={blog.id}
                        type="blog"
                        img={blog.images[0]}
                        title={blog.title.slice(0, 50) + "..."}
                        date={blog.date}
                        desc={blog.description.slice(0, 100) + "..."}
                        linkText={t("More detailed")}
                        productHref={`/blog-details/${blog.id}`}
                      />
                    );
                  })}
            </div>
          </BoxWrapper>
        </div>
      </Anchor>
    </main>
  );
};
