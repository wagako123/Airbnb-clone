import {Nunito} from "next/font/google";

import './globals.css'
import Navbar from "./components/navbar/Navbar";
import Modals from "./components/modals/Modals";

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
        <Modals actionLabel='submit' isOpen />
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
