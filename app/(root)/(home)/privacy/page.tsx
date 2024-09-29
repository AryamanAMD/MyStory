import SnowEffect from '@/components/SnowEffect';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      <SnowEffect />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: 3rd July 2024</p>
      
      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">Interpretation and Definitions</h2>
      
      <h3 className="text-xl font-bold mb-2">Interpretation</h3>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      
      <h3 className="text-xl font-bold mb-2">Definitions</h3>
      <p className="mb-4">For the purposes of this Privacy Policy:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
        </li>
        <li>
          <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to AryaExam.
        </li>
        <li>
          <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
        </li>
        <li>
          <strong>Service</strong> refers to the Website.
        </li>
        <li>
          <strong>Website</strong> refers to My Story, accessible from <a href="http://localhost:3000/">http://localhost:3000//</a>.
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
        </li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-2">Collecting and Using Your Personal Data</h2>
      <p className="mb-4">
        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-2">Use of Your Personal Data</h2>
      <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
        </li>
        <li>
          <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
        </li>
        <li>
          <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
        </li>
        <li>
          <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
        </li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
