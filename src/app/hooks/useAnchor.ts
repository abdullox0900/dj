// @ts-nocheck

"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAnchor = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const HEADER_HEIGHT = 60;

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/#"]');

    const handleLinkClick = (e: MouseEvent) => {
      e.preventDefault();

      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href")?.substring(2);

      if (!targetId) return;

      const targetElement = document.getElementById(targetId);

      // Если элемент существует на странице
      if (targetElement) {
        // Получаем позицию элемента на странице
        const rect = targetElement.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;

        // Проверка, помещается ли элемент в окно с учетом высоты шапки
        if (elementHeight < windowHeight - HEADER_HEIGHT) {
          // Прокручиваем элемент в центр экрана

          if (targetId === "credit") {
            const scrollPosition =
              elementTop - (windowHeight - elementHeight) / 2 - HEADER_HEIGHT;
            window.location.hash = `#${targetId}`;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });

            return;
          }
          const scrollPosition =
            elementTop -
            (windowHeight - elementHeight) / 2 -
            HEADER_HEIGHT +
            15;
          window.location.hash = `#${targetId}`;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        } else {
          // Прокручиваем элемент в начало (с учетом шапки)
          const scrollToTop =
            elementTop - HEADER_HEIGHT - (window.innerWidth > 1024 ? 20 : 0);
          window.location.hash = `#${targetId}`;
          window.scrollTo({ top: scrollToTop, behavior: "smooth" });
        }
        return;
      }

      // Если элемент не найден, перенаправляем на главную с якорем
      router.push(`/#${targetId}`);
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Очистка обработчиков событий при изменении маршрута
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [pathname, router, HEADER_HEIGHT]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        requestAnimationFrame(() => {
          const rect = targetElement.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const elementHeight = targetElement.offsetHeight;
          const windowHeight = window.innerHeight;

          if (elementHeight < windowHeight - HEADER_HEIGHT) {
            // Прокрутка в центр экрана
            const scrollPosition =
              elementTop - (windowHeight - elementHeight) / 2 - 60;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
          } else {
            // Прокрутка к началу блока
            const scrollToTop =
              elementTop - HEADER_HEIGHT - (window.innerWidth > 1024 ? 20 : 0);
            window.scrollTo({
              top: scrollToTop,
              behavior: "smooth",
            });
          }
        });
      }
    }
  }, [pathname]);
};
