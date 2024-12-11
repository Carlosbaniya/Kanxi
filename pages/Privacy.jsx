import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Kanxi.co ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li><strong>Personal Data:</strong> We may collect personally identifiable information, such as your name, address, email address, phone number, and payment information, when you make a booking or contact us.</li>
            <li><strong>Non-Personal Data:</strong> We may collect non-personal information about you, such as your IP address, browser type, and operating system, which does not identify you personally.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect in the following ways:</p>
          <ul className="list-disc list-inside">
            <li><strong>To Provide Services:</strong> To manage bookings, process payments, and provide our cleaning services.</li>
            <li><strong>To Communicate:</strong> To send you updates, confirmations, and other relevant information related to your bookings and our services.</li>
            <li><strong>To Improve Our Services:</strong> To understand how our website and services are used and to improve them.</li>
            <li><strong>For Marketing:</strong> To send you promotional materials, offers, and other information that may be of interest to you (you can opt-out of marketing communications at any time).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
          <ul className="list-disc list-inside">
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and providing our services, as long as those parties agree to keep this information confidential.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside">
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request that we correct or update any inaccurate information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
            <li><strong>Objection:</strong> You can object to the processing of your personal information.</li>
            <li><strong>Data Portability:</strong> You can request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the contact details provided below.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to read the privacy policies of any third-party websites you visit.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p>For any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p>Kanxi.co</p>
          <p>[Your Address]</p>
          <p>[Your Email]</p>
          <p>[Your Phone Number]</p>
        </section>

        <section className="text-center mt-12">
          <p>By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
