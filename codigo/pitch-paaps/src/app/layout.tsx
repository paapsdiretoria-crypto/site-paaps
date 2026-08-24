import type { Metadata } from "next";

import "./globals.css";
import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PAAPS : Pitch Impulsiona Startups",
  description: "A Rede de Saude Mental para as Politicas Publicas do futuro.",
};

/* Fonte secundaria da PAAPS. Entra SO nos numeros e nos rotulos de canto.
   Fica exposta como --font-spartan, e o tailwind.config aponta `font-mono`
   para ela: assim todo `font-mono` herdado da Midday vira League Spartan
   sem que nenhuma secao precise mudar de classe. */
const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-spartan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn("min-h-screen font-sans antialiased", spartan.variable)}
      >
        {children}
      </body>
    </html>
  );
}
