import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-96px)] w-full items-center justify-center bg-black px-4 sm:min-h-[calc(100dvh-112px)] sm:px-6">
      <Terminal className="-translate-y-12 max-w-md border-white/10 bg-black text-white sm:-translate-y-14 sm:max-w-2xl [&_pre]:whitespace-pre-wrap [&_code]:overflow-visible [&_code]:break-words">
        <TypingAnimation
          duration={35}
          className="text-[13px] text-blue-200 sm:text-sm"
        >
          [user@hackshack ~]$ ./launch
        </TypingAnimation>

        <AnimatedSpan className="mt-6 text-center text-xl font-semibold tracking-normal text-blue-500 sm:text-2xl md:text-5xl">
          HACK SHACK
        </AnimatedSpan>

        <AnimatedSpan className="mt-4 text-[13px] leading-relaxed text-zinc-300 sm:text-lg">
          <p>
            Hack Shack is a weekend-long builder retreat for Columbia&apos;s
            highest signal founders and most technical builders. The challenge
            is to see who can make the most money over a weekend, with
            participants including a Forbes 30u30 founder, YC founders, founders
            who have raised millions, IOI medalists, and more.
          </p>
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}