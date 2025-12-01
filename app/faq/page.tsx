import Accordion from '../_components/Accordion';

export default function FAQ() {
    return (
        <main className="flex flex-1 flex-col items-center px-4 py-20 md:justify-center md:py-0">
            <div className="mb-16 max-w-3xl w-full">
                <h1 className="text-4xl font-bold md:text-5xl">FAQ</h1>
                <p className="mt-4 text-gray-400">Frequently Asked Questions</p>
                <div className="mt-8 space-y-4">
                    <Accordion question="What is Cobalt?">
                        Cobalt is a mod for Minecraft 1.21.10 which speeds up the slow progression of Hypixel Skyblock; it is currently in development and is not yet available for download.
                    </Accordion>
                    <Accordion question="What is a Cobalt Addon?">
                        An addon is a plugin for Cobalt which extends Cobalt's functionality by adding new features and commands.
                    </Accordion>
                    <Accordion question="Does Cobalt have a discord?">
                        Yes, Cobalt has a discord server which can be found at <a href="https://discord.com/invite/GAhS8UfDyy" className="text-blue-400 hover:underline">discord.gg/GAhS8UfDyy</a>.
                    </Accordion>
                    <Accordion question="Is Cobalt safe to use?">
                        The base mod and approved addons are safe from malware. However, Cobalt violates Hypixel's rules therefore we try our best to prevent bans, we cannot ensure that Cobalt will not cause you to get banned.
                    </Accordion>
                    <Accordion question="How do I install Cobalt?">
                        As of right now, Cobalt is not available for download, once it is released, you can find the installation instructions here: First, install <a href="https://fabricmc.net/use/" className="text-blue-400 hover:underline">Fabric Loader</a> for Minecraft 1.21.10. Then, download the Cobalt mod file and place it in your <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">mods</code> folder located in your <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">.minecraft</code> directory. Launch Minecraft with the Fabric profile and you're ready to go.
                    </Accordion>
                    <Accordion question="Is Cobalt free?">
                        Yes, Cobalt is free to use.
                    </Accordion>
                    <Accordion question="Can I contribute to Cobalt?">
                        Not currently, after the mod is open source we will be open for contributions.
                    </Accordion>
                    <Accordion question="Will I get banned for using Cobalt?">
                        While we work hard to prevent bans, we cannot ensure that Cobalt will not cause you to get banned.
                    </Accordion>
                </div>
            </div>
        </main>
    )
}
