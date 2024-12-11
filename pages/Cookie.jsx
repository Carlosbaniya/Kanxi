import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Cookie Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Kanxi.co ("we," "our," or "us") uses cookies on our website to enhance your user experience. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their usage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They help the website recognize your device and store information about your preferences or past actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <p>We use cookies for various purposes, including:</p>
          <ul className="list-disc list-inside">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function correctly. They enable you to navigate our website and use its features.</li>
            <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often. This helps us improve the functionality of the site.</li>
            <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make (such as your language or region) and provide enhanced features.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They also help us measure the effectiveness of our advertising campaigns.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Cookie Choices</h2>
          <p>
            You can manage your cookie preferences through your web browser settings. Most browsers allow you to control cookies through their settings preferences. However, if you choose to disable cookies, some features of our website may not function properly.
          </p>
          <p>
            To learn more about cookies and how to manage them, you can visit <a href="https://www.allaboutcookies.org" className="text-blue-500">www.allaboutcookies.org</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Changes to This Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on our website. You are advised to review this Cookie Policy periodically for any changes.
          </p>
        </section>


        <section className="text-center mt-12">
          <p>By using our website, you acknowledge that you have read and understood this Cookie Policy and agree to its terms.</p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
