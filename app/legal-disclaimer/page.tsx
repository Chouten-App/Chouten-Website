const email = '<a class="text-blue-500" href="mailto:WIP@chouten.app">WIP</a>';
const disclaimer: Array<{title: string, content: string}> = [
    {
        title: "1. Introduction",
        content: "The purpose of Chouten is to provide an open-source multi-media consumption app. This Legal Disclaimer (\"Disclaimer\") outlines important information regarding the use of Chouten and the responsibilities of users. By using Chouten, you agree to comply with this Disclaimer. If you do not agree with this Disclaimer, please refrain from using the app."
    },
    {
        title: "2. Functionality and Modules",
        content: "<b>a. Module Functionality:</b> Modules contain instructions that enable Chouten to retrieve data from websites and present it in the Chouten app format. The layout and functionality of Chouten may vary depending on the specific website a module is designed for.<br /><br /><b>b. Module Availability:</b> Chouten neither provides nor promotes modules. It is important to note that Chouten does not include any pre-installed modules.<br /><br /><b>c. Module Format:</b> Modules are provided in JSON format with a javascript file that executes code in a sandboxed way and are responsible for giving the functionality of the Chouten app.<br /><br /><b>d. Chouten Features:</b> Modules can take advantage of Chouten's video player, image viewer, and text reader to enhance user interactions."
    },
    {
        title: "3. User Responsibilities",
        content: "<b>a. Module Usage:</b> Chouten is designed to be used with modules provided or created by users who comply with all legal aspects of intellectual property and applicable terms of service.<br /><br /><b>b. Content Rights:</b> Users are responsible for verifying that the modules they choose to load, create, or adapt work with websites that provide legal content. Users must also ensure that they possess all the necessary rights for the content or utilities provided by third-party websites through the modules.<br /><br /><b>c. User Accountability:</b> Users are responsible for the modules they decide to load, create, or adapt within Chouten. The Chouten team is not liable for the modules' functionality or content."
    },
    {
        title: "4. Content Hosting and Affiliation",
        content: "<b>a. No Content Hosting:</b> Chouten does not host or provide any type of content to users. The modules that users choose to load are responsible for displaying data from third-party websites not affiliated with Chouten. The displayed content depends on the specific module loaded or created by the user.<br /><br /><b>b. Affiliation:</b> Chouten has no affiliation with any website or third-party content provider that a module may be adapted to."
    },
    {
        title: "5. Copyright and Legal Compliance",
        content: "<b>a. Module Ownership:</b> Users must provide their own modules, as Chouten does not supply any modules. The Chouten team does not endorse accessing copyrighted materials without permission from the copyright holder."
    },
    {
        title: "6. Acceptance of Terms",
        content: "By using Chouten, you acknowledge and accept the terms and conditions outlined in this Disclaimer."
    },
    {
        title: "7. Contact Us",
        content: "If you have any questions about this Disclaimer, please contact us at" + " " + email,
    }
];

export default function LegalDisclaimer() {
    return (
        <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-12">
                <img className="w-32 rounded-[24px] mb-6" src="/Icon.png" alt="Chouten Icon" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Legal Disclaimer</h1>
            </div>
            
            <div className="space-y-12">
                {disclaimer.map((section, index) => (
                    <Section key={index} title={section.title}>
                        {section.content.includes(email) ? (
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                        )}
                    </Section>
                ))}
            </div>
        </main>
    )
}

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="text-gray-600">{children}</div>
        </section>
    )
}
