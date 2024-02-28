import React from "react";
import Section2Cmp from "./ui/Section2Cmp";

const Section2 = () => {
    const chatBot = {
        para: [
            ` Our A.I. Chatbots ${"are'nt"} like the ones ${"you're"} used to seeing. `,
            "They have a JOB ...and that job is to turn a stranger into a lead, answer their questions, overcome their objections, and help you make the sale ...FAST.",
            "Simply give the bot your website and it'll train itself automatically ...so it'll know exactly what to say."
        ],
        checkPara: [
            "Works over SMS.",
            "Works over Messenger. ",
            "Works over WebChat.",
            "Works over DMs. ",
        ]
    }
    const leads = {
        para: [
            'You know how they say "the fortune is in the follow up?"',
            "They say it because it's TRUE.",
            "RainmakerAI has 26 pre-built, fully automated, template based follow up campaigns you can start using immediately.",
            "Email and SMS campaigns specifically built to ..."
        ],
        checkPara: [
            "Turn new leads into sales or appointments ASAP.",
            "Turn abandoned carts into sales within four hours.",
            'Turn old "dead" leads into customers or appointments within 24 hours.'
        ]
    }
    return (
        <>
            <Section2Cmp customClass="flex-col-reverse md:flex-row lg:mt-28 mt-8 xl:mt-16  sm:gap-12" data={chatBot} h1={`A.I. Chat Bots Get Leads & `} italic=" Sales Fast" imgSrc="/chatBot.png" />
            <div className="bgCurve w-full h-56 hidden sm:flex"></div>
            <Section2Cmp customClass="flex-col-reverse md:flex-row-reverse sm:gap-12  sm:mt-0 mt-8" data={leads} h1=" Turn Leads into Sales NOW. " imgSrc="/turnLeads.png" />
            <div className="bgCurve1 w-full h-56 hidden sm:flex"></div>
        </>
    );
};

export default Section2;