const email = '<a class="text-blue-500" href="mailto:WIP@chouten.app">WIP</a>';
const tos: Array<{title: string, content: string}> = [
    {
        title: "1. Introduction",
        content: "Welcome to Chouten. These Terms of Service (\"Terms\") govern your use of our open-source mobile and desktop applications (the \"Service\"). By using the Service, you agree to these Terms. If you disagree with any part of the terms, then you may not access the Service."
    },
    {
        title: "2. Use of the Service",
        content: "Chouten is an open-source multi-media consumption app available on the App Store, Play Store, winget, and Microsoft Store. You may use this Service for personal, non-commercial purposes only. You must not use the Service for any illegal or unauthorized purpose."
    },
    {
        title: "3. Content",
        content: "Our Service allows you to access content from various third-party sources. We do not host or control this content. You understand that you are solely responsible for the content you access through our Service."
    },
    {
        title: "4. Intellectual Property",
        content: "The Service and its original content, features, and functionality are owned by the Chouten open-source project and its contributors. The project is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
    },
    {
        title: "5. Privacy and Data Protection",
        content: "We are committed to protecting your personal data and complying with data protection laws, including the General Data Protection Regulation (GDPR). Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and share information about you when you use our Service."
    },
    {
        title: "6. User Rights (GDPR Compliance)",
        content: "In accordance with GDPR, you have the right to access, rectify, erase, restrict processing, object to processing, and data portability of your personal data. To exercise these rights, please contact us at" + " " + email,
    },
    {
        title: "7. Third-Party Services",
        content: "Our Service uses Supabase for data storage and management, and Discord for authentication. By using our Service, you also agree to Supabase's Terms of Service and Privacy Policy, as well as Discord's Terms of Service and Privacy Policy."
    },
    {
        title: "8. Disclaimer",
        content: "Your use of the Service is at your sole risk. The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The Service is provided without warranties of any kind, whether express or implied."
    },
    {
        title: "9. Limitation of Liability",
        content: "In no event shall the Chouten open-source project, nor its contributors, be liable for any indirect or incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
    },
    {
        title: "10. Changes",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms."
    },
    {
        title: "11. Termination",
        content: "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately."
    },
    {
        title: "12. Indemnification",
        content: "You agree to defend, indemnify, and hold harmless the Chouten open-source project and its contributors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service, or a breach of these Terms."
    },
    {
        title: "13. Distribution and App Stores",
        content: "The Chouten app is distributed through various platforms, including the App Store, Play Store, winget, and Microsoft Store (collectively, \"App Stores\"). Your use of the Service is also subject to the terms and conditions of these App Stores. We are not responsible for any App Store's actions or omissions. If you download the Chouten app from an App Store, you must comply with that App Store's terms and policies."
    },
    {
        title: "14. Contact Us",
        content: "If you have any questions about these Terms, please contact us at" + " " + email,
    }
];

export default function TermsOfService() {
    return (
        <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-12">
                <a href="/">
                    <img className="w-32 rounded-[24px] mb-6" src="/Icon.png" alt="Chouten Icon" />
                </a>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Terms of Service</h1>
            </div>
            
            <div className="space-y-12">
                {tos.map((section, index) => (
                    <Section key={index} title={section.title}>
                        {section.content.includes(email) ? (
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        ) : (
                            <p>{section.content}</p>
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
