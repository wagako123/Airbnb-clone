import {Nunito} from "next/font/google";

import './globals.css'
import Navbar from "./components/navbar/Navbar";
import Modals from "./components/modals/Modals";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToastProvider";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
