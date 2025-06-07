"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BoxWrapper } from "../../../components";
import { Anchor } from "../../../components/Anchor/Anchor";
import { BlogDetailsContent, Thumbs } from "../../../components/widgets";
import { blogData, blogPlData } from "@/app/data";
import { Article } from "@/app/types";
import { useLocale, useTranslations } from "next-intl";

export default function Page({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article>();
  const locale = useLocale();
  const t = useTranslations("Index");

  useEffect(() => {
    const currentBlog =
      locale === "ru"
        ? blogData.find((el) => el.id === Number(params.id))
        : blogPlData.find((el) => el.id === Number(params.id));

    setArticle(currentBlog);
  }, [locale, params.id]);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Anchor>
        <div>
          {article && (
            <div className="container">
              <Thumbs
                way={[
                  { title: t("Main"), href: `/` },
                  { title: t("Blog"), href: `/blog` },
                  { title: article.title, href: `/blog-details/${article.id}` },
                ]}
              />
            </div>
          )}

          <BoxWrapper className="!pt-5 lg:!pt-0" title={article?.title}>
            <div className="flex flex-col">
              {article?.images && article.images.length > 0 && (
                <div className="pt-5 mb-5 lg:mb-10">
                  <div className="rounded-[10px] overflow-hidden max-h-[500px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={article.images[0]}
                      alt="kitchen"
                      className="w-full max-h-[450px] object-cover"
                    />
                  </div>
                </div>
              )}

              {article && <BlogDetailsContent content={article.content} />}
            </div>
          </BoxWrapper>
        </div>
      </Anchor>
    </main>
  );
}
