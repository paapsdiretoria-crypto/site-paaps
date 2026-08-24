import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "./ui";

export function SectionBook() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Book a meeting</span>
        <Link href="https://app.midday.ai">
          <Button variant="outline">Sign up</Button>
        </Link>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="h-[400px] md:h-[600px] px-4 md:px-0 text-center flex flex-col items-center justify-center">
          {/* Aqui a Midday embutia a agenda do Cal.com. O embed foi removido:
              este espaco fica livre para o fechamento do pitch da PAAPS. */}
          <Card className="w-full max-w-[620px] h-full">
            <h2 className="text-2xl">Fechamento</h2>
            <p className="text-[#878787] text-sm text-center">
              Espaco reservado para o ultimo slide do pitch da PAAPS.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
