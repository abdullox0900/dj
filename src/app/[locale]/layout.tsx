import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Montserrat } from "next/font/google"
import { Suspense } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ScrollBtn } from "../components"
import { Footer, Header } from "../components/layout"
import { FacebookPixelEvents } from "../components/pixel-events"
import { CallButton } from "../components/ui"
import {
  CallbackModal,
  FindCostModal,
  FreeConsultationModal,
  PromotionsQuiz,
} from "../components/widgets"
import "../globals.css"
import StoreProvider from "../StoreProvider"
import Loading from "./loading"

const montserrat = Montserrat({ subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: "DrKitchen",
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-TTWQQH7B" />
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>
            <StoreProvider>
              <Header locale={locale} />

              {children}

              <Suspense fallback={null}>
                <FacebookPixelEvents />
              </Suspense>

              <Footer />

              <CallbackModal />
              <FindCostModal />
              <FreeConsultationModal />
              <PromotionsQuiz />
            </StoreProvider>
          </Suspense>

          <ScrollBtn />

          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={"dark"}
          />

          <CallButton />

          {/* <script src="//code.jivosite.com/widget/9ZJn5AcW8Q" async></script> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
