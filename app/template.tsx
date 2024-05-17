import Footer from "@/components/wrapper/Footer"
import { Navbar } from "@/components/wrapper/Navbar"


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar />
        {children}
        <Footer />
      </section>
    )
  }