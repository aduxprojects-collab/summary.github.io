import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Philosophers } from "@/components/philosophers";
import { QRCode } from "@/components/qr-code";
import { Conclusion } from "@/components/conclusion";
import { CandleBackground } from "@/components/candle-background";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <CandleBackground />
      
      {/* Content container with z-index to appear above background */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Principles />
        <Philosophers />
        <QRCode />
        <Conclusion />
      </div>
    </main>
  );
}
