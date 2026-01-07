import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 md:justify-center md:py-0">
      <div className="mb-16 max-w-3xl w-full">
        <h1 className="text-4xl font-bold md:text-5xl">FAQ</h1>
        <p className="mt-4 text-gray-400">
          Frequently Asked Questions
        </p>
        <Accordion type="single" collapsible className="mt-8 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Cobalt?</AccordionTrigger>
            <AccordionContent>
              Cobalt is a mod for Minecraft 1.21.10 which speeds up
              the slow progression of Hypixel Skyblock; it is
              currently in development and is now open source! Check out{' '}
              <a
                href="https://github.com/CobaltScripts/Cobalt"
                className="text-blue-400 hover:underline"
              >
                github.com/CobaltScripts/Cobalt
              </a>{' '}
              for more information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is a Cobalt Addon?
            </AccordionTrigger>
            <AccordionContent>
              An addon is a plugin for Cobalt which extends
              Cobalt&apos;s functionality by adding new features and
              commands.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Does Cobalt have a discord?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Cobalt has a discord server which can be found at{' '}
              <a
                href="https://discord.com/invite/GAhS8UfDyy"
                className="text-blue-400 hover:underline"
              >
                discord.gg/GAhS8UfDyy
              </a>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is Cobalt safe to use?
            </AccordionTrigger>
            <AccordionContent>
              The base mod and approved addons are safe from malware. (IF AN ADDON IS NOT APPROVED BY US THAT MEANS THAT IT HAS NOT BE CHECKED FOR MALWARE)
              However, Cobalt violates Hypixel&apos;s rules therefore
              we try our best to prevent bans, we cannot ensure that
              Cobalt will not cause you to get banned.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I install Cobalt?
            </AccordionTrigger>
            <AccordionContent>
              First, install{' '}
              <a
                href="https://fabricmc.net/use/"
                className="text-blue-400 hover:underline"
              >
                Fabric Loader
              </a>{' '}
              for Minecraft 1.21.10. Then, download the Cobalt mod
              file and place it in your{' '}
              <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">
                mods
              </code>{' '}
              folder located in your{' '}
              <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">
                .minecraft
              </code>{' '}
              directory. Launch Minecraft with the Fabric profile and
              you&apos;re ready to go.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is Cobalt free?</AccordionTrigger>
            <AccordionContent>
              Yes, Cobalt is free to use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Can I contribute to Cobalt?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We are now open source meaning that contributions are welcome!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Will I get banned for using Cobalt?
            </AccordionTrigger>
            <AccordionContent>
              While we work hard to prevent bans, we cannot ensure
              that Cobalt will not cause you to get banned.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
