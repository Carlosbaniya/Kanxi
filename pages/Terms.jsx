import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Kanxi.co. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully. If you do not agree to these terms, you should not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
          <ul className="list-disc list-inside">
            <li><strong>Client:</strong> The person or entity who purchases services from Kanxi.co.</li>
            <li><strong>Service Provider:</strong> Kanxi.co, including its employees and subcontractors.</li>
            <li><strong>Services:</strong> Cleaning services provided by Kanxi.co as described in the booking confirmation.</li>
            <li><strong>Booking Confirmation:</strong> The written confirmation from Kanxi.co outlining the details of the services to be provided.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
          <p><strong>Scope of Services:</strong> The services to be provided will be detailed in the booking confirmation. Any changes or additional services must be agreed upon in writing.</p>
          <p><strong>Performance of Services:</strong> Kanxi.co will provide the services in a professional manner using reasonable skill and care.</p>
          <p><strong>Access:</strong> The Client must provide access to the premises at the agreed times to enable Kanxi.co to provide the services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p><strong>Pricing:</strong> The cost of the services will be as quoted in the booking confirmation.</p>
          <p><strong>Payment:</strong> Payment is due as specified in the booking confirmation. Kanxi.co reserves the right to suspend services if payment is not received on time.</p>
          <p><strong>Late Payments:</strong> Late payments may incur additional charges.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cancellations and Refunds</h2>
          <p><strong>Cancellation by Client:</strong> The Client may cancel the services by giving at least 24 hours’ notice. Cancellations made with less than 24 hours’ notice may incur a cancellation fee.</p>
          <p><strong>Cancellation by Kanxi.co:</strong> Kanxi.co reserves the right to cancel the services at any time and will provide a full refund for any services not performed.</p>
          <p><strong>Refunds:</strong> Refunds will be issued at the discretion of Kanxi.co.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
          <p><strong>Damage to Property:</strong> Kanxi.co will take reasonable care when providing the services. However, Kanxi.co is not responsible for any damage to property unless caused by the negligence of Kanxi.co.</p>
          <p><strong>Personal Items:</strong> The Client is responsible for securing any personal items. Kanxi.co is not liable for any loss or damage to personal items.</p>
          <p><strong>Limit of Liability:</strong> Kanxi.co’s liability is limited to the cost of the services provided.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Insurance</h2>
          <p>Kanxi.co holds public liability insurance. Details of the coverage can be provided upon request.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Complaints</h2>
          <p>Any complaints about the services should be reported to Kanxi.co within 24 hours of the services being provided. Kanxi.co will work to resolve any issues promptly.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
          <p>Kanxi.co will keep any personal information about the Client confidential and will not disclose it to any third party without the Client’s consent, except as required by law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p>Kanxi.co reserves the right to modify these terms and conditions at any time. The most current version will always be available on our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>These terms and conditions are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Country/State].</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p>For any questions or concerns about these terms and conditions, please contact us at:</p>
          <p>Kanxi.co</p>
          <p>Kupondole,Lalitpur</p>
          <p>TimroKanxi@MYHOUSE.com</p>
          <p>9876251732</p>
        </section>

        <section className="text-center mt-12">
          <p>By using the services of Kanxi.co, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
