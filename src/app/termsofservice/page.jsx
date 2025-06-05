"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaRegFileAlt } from "react-icons/fa";

export default function page() {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);

    const handleAccept = () => {
        localStorage.setItem('termsAccepted', 'true');
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex flex-col gap-y-3 items-center justify-center">
            <div className="gap-y-1 text-center"> {/* Added text-center here */}
                <h2 className='flex flex-row justify-center text-3xl gap-x-1  font-bold'>
                    <FaRegFileAlt className='h-8 w-6' />
                    Terms and Conditions
                </h2>
                <h3>

                </h3>
                <p className='text-gray-700 leading-relaxed max-w-2xl mx-auto'> {/* Added styling to p tag */}
                    <h2 className='ml-2'>1. Acceptance of Terms</h2>

                    Welcome to Doorbell ("Doorbell," "we," "us," or "our"), a web application that provides a platform for random video chatting with strangers. By accessing or using Doorbell (the "Service"), you ("you" or "User") agree to be bound by these Terms and Conditions of Use (the "Terms"). If you do not agree to these Terms, you may not access or use the Service.

                    <h2>2. Description of Service</h2>

                    Doorbell is a web application that allows users to connect with other users randomly for video conversations. The Service is designed to facilitate social interaction and entertainment. We strive to maintain a safe and respectful environment for all users.

                    <h2>3. Eligibility</h2>

                    Age Requirement: You must be at least 18 years of age to use Doorbell. By using the Service, you represent and warrant that you are at least 18 years old. If you are under 18, you are strictly prohibited from using Doorbell.
                    Legal Capacity: You must have the legal capacity to enter into a binding agreement in your jurisdiction.
                    Compliance with Laws: You agree to comply with all applicable laws and regulations in your jurisdiction while using Doorbell.
                    <h2>4. Account Creation and Use  </h2>

                    Account Registration: [Describe the account creation process, if any. For example: "To use certain features of Doorbell, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."]
                    Account Security: You are responsible for maintaining the confidentiality of your account credentials (username and password, if applicable) and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account. We are not liable for any loss or damage arising from your failure to protect your account information.
                    One Account Per User: You are only allowed to create one account. Creating multiple accounts may result in termination of all your accounts.
                    Account Termination: We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to violation of these Terms.
                    <h2>5. User Conduct and Acceptable Use</h2>

                    You agree to use Doorbell in a responsible and respectful manner. You are solely responsible for your interactions with other users and for any content you transmit or display while using the Service. You agree not to:

                    Illegal Activities: Use Doorbell for any illegal or unlawful purpose, including but not limited to:
                    Distributing or promoting illegal content.
                    Engaging in any form of harassment, stalking, or threats.
                    Violating any intellectual property rights.
                    Promoting or engaging in any form of child exploitation.
                    Harmful Content: Transmit or display any content that is:
                    Defamatory, libelous, or slanderous.
                    Obscene, pornographic, or sexually explicit.
                    Hate speech, discriminatory, or promotes violence.
                    Racist, xenophobic, or offensive to any group or individual.
                    Harmful, threatening, or abusive.
                    Impersonation: Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.
                    Spam and Solicitation: Send unsolicited messages, advertisements, or promotional materials to other users.
                    Technical Interference: Interfere with or disrupt the operation of Doorbell or the servers or networks used to make the Service available, including but not limited to:
                    Uploading viruses or other malicious code.
                    Attempting to gain unauthorized access to the Service or its systems.
                    Using any robot, spider, scraper, or other automated means to access the Service.
                    Data Collection: Collect or harvest any personally identifiable information from other users without their consent.
                    Circumventing Security Measures: Attempt to circumvent any security measures implemented by Doorbell to protect the Service or its users.
                    Recording or Sharing Conversations: Record, share, or distribute any video conversations without the explicit consent of all participants. This includes screenshots, screen recordings, and any other form of capturing the conversation.
                    Commercial Use: Use Doorbell for any commercial purpose without our express written consent. This includes advertising, marketing, or selling products or services.
                    Misleading Information: Provide false or misleading information to other users.
                    Violation of Privacy: Violate the privacy of other users, including sharing their personal information without their consent.
                    6. Moderation and Enforcement

                    Monitoring: We reserve the right, but are not obligated, to monitor user activity and content on Doorbell to ensure compliance with these Terms.
                    Reporting: We encourage users to report any violations of these Terms to us. You can report inappropriate behavior through [Specify reporting mechanism, e.g., a reporting button, email address].
                    Enforcement Actions: We may take any action we deem necessary to enforce these Terms, including but not limited to:
                    Issuing warnings.
                    Removing content.
                    Suspending or terminating accounts.
                    Reporting illegal activities to law enforcement.
                    No Liability for User Content: We are not responsible for the content posted or transmitted by users on Doorbell. We do not endorse any user content, and we disclaim all liability for any content that violates these Terms.
                    Right to Investigate: We have the right to investigate and prosecute violations of these Terms to the fullest extent of the law.
                    7. Intellectual Property

                    Doorbell's Intellectual Property: The Service and its original content, features, and functionality are owned by Doorbell and are protected by copyright, trademark, and other intellectual property laws. You may not use our trademarks, logos, or other proprietary information without our express written consent.
                    User Content: By using Doorbell, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display any content you transmit or display on the Service for the purpose of providing and improving the Service. You represent and warrant that you have all the rights necessary to grant us this license.
                    Copyright Infringement: If you believe that your copyrighted work has been infringed on Doorbell, please notify us at [Designated Copyright Agent Email Address] and provide the following information:
                    A description of the copyrighted work that you claim has been infringed.
                    A description of where the infringing material is located on Doorbell.
                    Your contact information, including your address, telephone number, and email address.
                    A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.
                    A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
                    8. Privacy Policy

                    Your privacy is important to us. Please review our Privacy Policy [Link to Privacy Policy], which explains how we collect, use, and disclose your personal information. By using Doorbell, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.

                    9. Disclaimers

                    No Warranty: THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                    No Guarantee of Compatibility: We do not guarantee that Doorbell will be compatible with all devices or operating systems.
                    User Interactions: You understand that your use of Doorbell involves interacting with other users, and that we are not responsible for the conduct of other users. You are solely responsible for your interactions with other users. We do not screen users or conduct background checks. Use caution and common sense when interacting with strangers online.
                    No Liability for Content: We are not responsible for any content posted or transmitted by users on Doorbell. We do not endorse any user content, and we disclaim all liability for any content that violates these Terms.
                    Third-Party Links: Doorbell may contain links to third-party websites or resources. We are not responsible for the content or availability of these third-party websites or resources.
                    10. Limitation of Liability

                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DOORBELL, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED [Specify a monetary amount, e.g., $100].

                    11. Indemnification

                    You agree to indemnify, defend, and hold harmless Doorbell, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your use of the Service, your violation of these Terms, or your violation of any rights of another.

                    12. Termination

                    We may terminate your access to Doorbell at any time, with or without cause, with or without notice. You may terminate your use of the Service at any time. Upon termination, all rights and licenses granted to you under these Terms will immediately terminate.

                    13. Governing Law and Dispute Resolution

                    Governing Law: These Terms shall be governed by and construed in accordance with the laws of [State/Jurisdiction], without regard to its conflict of law principles.
                    Dispute Resolution: Any dispute arising out of or relating to these Terms or the Service shall be resolved through [Specify dispute resolution method, e.g., binding arbitration in accordance with the rules of the American Arbitration Association]. The venue for any such arbitration shall be [City, State].
                    14. Changes to These Terms

                    We may modify these Terms at any time by posting the revised Terms on Doorbell. Your continued use of the Service after the posting of revised Terms constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically for changes.

                    15. Severability

                    If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.

                    16. Waiver

                    Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.

                    17. Entire Agreement

                    These Terms constitute the entire agreement between you and Doorbell relating to the Service and supersede all prior or contemporaneous communications and proposals, whether oral or written.

                    18. Contact Us

                    If you have any questions about these Terms, please contact us at:

                    Your Email Address

                    Your Physical Address Optional

                    By using Doorbell, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions of Use.

                    Important Considerations and Customization Notes:

                    Legal Review: This is a template. A lawyer specializing in internet law and privacy is essential to review and adapt this to your specific situation and jurisdiction. They can ensure compliance with laws like GDPR, CCPA, COPPA (if applicable), and other relevant regulations.
                    Privacy Policy: A separate, detailed Privacy Policy is crucial. It should explain exactly what data you collect, how you use it, how you protect it, and how users can exercise their rights (e.g., access, deletion).
                    Reporting Mechanism: Make the reporting process easy and accessible. A clear "Report" button on the video chat screen is ideal. Ensure you have a system in place to promptly review and address reports.
                    Moderation: Consider how you will moderate the platform. Will you use human moderators, AI-based moderation, or a combination? Clearly state your moderation policies.
                    Safety Tips: Consider adding a section with safety tips for users, such as:
                    "Be cautious about sharing personal information."
                    "If you feel uncomfortable, end the conversation immediately."
                    "Report any inappropriate behavior."
                    Age Verification: Implementing a robust age verification system is highly recommended to prevent underage users from accessing the platform. This could involve ID verification or other methods.
                    Jurisdiction: Carefully consider which jurisdiction's laws will govern the Terms. This is often where your company is based, but it can have significant implications.
                    Accessibility: Make sure your Terms and Conditions are easily accessible on your website and within the app.
                    Updates: Regularly review and update your Terms and Conditions to reflect changes in the law or your business practices. Notify users of significant changes.
                    Enforcement: Be prepared to enforce your Terms and Conditions consistently. Failure to do so can create legal risks.
                    Record Keeping: Keep records of user agreements to the terms and conditions.
                </p>
            </div>


            <div className='flex flex-col items-center'> {/* Centered the checkbox and button */}
                <div className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        id="accept-terms"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="mr-2 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded accent-red-600"
                    />
                    <label htmlFor="accept-terms" className="text-gray-700">
                        I agree to the Terms and Conditions
                    </label>
                </div>

                <button
                    onClick={handleAccept}
                    disabled={!isChecked}
                    className={`w-full py-3 px-4 rounded-lg font-medium ${isChecked
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
