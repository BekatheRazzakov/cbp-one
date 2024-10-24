import React from 'react';
import './termsAndConditions.css';
import { useNavigate } from "react-router-dom";
import RippleButton from "../../components/RippleButton/RippleButton";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  
  return (
    <div className='terms-and-conditions'>
      <div className='terms-and-conditions-header'>
        <button
          className='terms-and-conditions-page-back'
          onClick={() => navigate('/unauthorized')}
        />
        <h1 className='text-md font-medium text-center'>Terms & Conditions</h1>
      </div>
      <div className='terms-and-conditions-header-info flex flex-col'>
        <div className='terms-and-conditions-info-text'>
          The CBP One Mobile app is an official mobile application provided by
          U.S.
          Customs and Border Protection (CBP) that is intended to act as an
          intuitive single point of access to multiple CBP mobile application
          capabilities.
          CBP One will help each type of user to the appropriate application,
          based on their needs.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Information
          collected</h3>
        <div className='terms-and-conditions-info-text'>
          After downloading the CBP One Mobile app, users will register with the
          General Services Administration's Login.gov to securely authenticate
          into the
          application. Login.gov will enable you to save your information for
          future use. In
          order to register with Login.gov, you will need to provide your email
          address
          and phone number, and you will need to create a password that you will
          use for login.
          Depending on your user profile, you will be asked to enter specific
          information,
          including, but not limited to, Personally Identifiable Information
          (PII) into the app:
          First Name (Given Name), Last Name (Surname), Date of Birth, Gender,
          Country of Residence,
          Country of Citizenship, SEVIS number, Trusted Traveler Program Number,
          Petition Number,
          Travel Document (including, Document Type (Passport/BCC), Document
          Number, Issue Date,
          Issue Country, and Expiration Date), Visa (including Visa Number,
          Issue Date, and Issue
          Country), Photo of Documents, Email address, Carrier Name, Broker
          Name, Importer Name,
          Importer ID/Filer Code, Phone Number, GPS Location and face image for
          verification.
          Your Device ID, including your operating system and version number, is
          also collected
          in order to send you push notifications.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Uses of
          information</h3>
        <div className='terms-and-conditions-info-text'>
          Information gathered through the CBP One Mobile App can be used to
          conduct an inspection, document arrivals into, and departures out of,
          the United States. The mobile application allows users to apply for an
          1-94
          permit, trusted traveler programs or landing rights, search for
          existing -94
          permits, view travel history, view cargo holds and request
          inspections.
          The CBP One Mobile App passes the data entered by a user to CBP
          Agricultural
          Specialists or CBP Officers, who may correspond with the user
          throughout the
          inspection process. Within the application itself, the correspondence
          may
          consist of chat messages or an interview between Officers and users.
          Information collected by the CBP One Mobile App may be entered into a
          CBP database.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Information
          sharing</h3>
        <div className='terms-and-conditions-info-text'>
          CBP One Mobile App does not share information with
          entities outside the Department of Homeland Security (DHS).
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Application
          security</h3>
        <div className='terms-and-conditions-info-text'>
          CBP takes the security of your personal information very seriously
          and has implemented precautions to maintain the confidentiality,
          integrity, and availability of the information contained in CBP
          systems.
          The CBP One Mobile App complies with security standards in both iOS
          Security for iOS 13 and Google Play, to be downloaded on mobile
          devices
          such as tablets or phones. Additionally, the App is reviewed by the
          DHS Office of the Chief Information Officer to ensure app security and
          privacy.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>How to access or
          correct your information</h3>
        <div className='terms-and-conditions-info-text'>
          CBP does not use CBP One Mobile App itself to directly share
          biographic or biometric information with entities outside the
          Department of
          Homeland Security (DHS). However, information provided to the CBP One
          Mobile
          App may be shared outside of DHS consistent with CBP's Systems of
          Records
          Notices and Privacy Impact Assessments. For more information, please
          see the
          Privacy Impact Assessment
          <a
            href='https://www.dhs.gov/
          publication/dhscbppia-068-cbp-one-mobile-application'
          > https://www.dhs.gov/publication/dhscbppia-068-cbp-one-mobile-application</a>.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Privacy policy
          contact information</h3>
        <div className='terms-and-conditions-info-text'>
          This application reserves the right to make changes to the Privacy
          Policy by giving notice to its users on this page, and by ensuring
          protection of PlI in all cases.
          For further information regarding CB
          Privacy Policies, please visit:
          <a> https://www.cbp.gov/site-policy-notices/privacy-overview</a>
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Paperwork
          reduction act statement</h3>
        <div className='terms-and-conditions-info-text'>
          An agency may not conduct or sponsor an information collection and a
          person is not required to respond to this information unless it
          displays a current valid OMB control number and an expiration date.
          <br/><br/>The OMB control number for the CBP
          One™ collection is 1651-0140. The expiration date for this collection
          is 05/31/2026. The estimated average time to complete this collection
          is 16 minutes.
          <br/><br/>The OMB control number for the Advance Travel Authorization
          collection
          is
          1651-0143. The expiration date for this collection is 04/30/2024. The
          estimated average time to complete this collection is 10 minutes.
          <br/><br/>If you have any comments regarding the burden estimate, you
          can write
          to U.S.
          Customs and Border Protection, Office of Regulations and Rulings, 90K
          Street, NE.,
          Washington DC 20002.
        </div>
        <h3 className='terms-and-conditions-header-info-title'>Additional terms
          and conditions</h3>
        <div className='terms-and-conditions-info-text'>
          The use of this App is voluntary.
          <br/><br/>I certify that, to the best of my knowledge and belief, all
          of the
          information submitted through this App is true, correct, and provided
          in good faith.
          <br/><br/>I certity that all of the information I am providing is
          about myself,
          or about an individual for whom I am acting as an authorized agent.
          <br/><br/>I understand that if I make an intentional false statement,
          or commit
          deception or fraud through data submitted through this App, I may be
          fined or imprisoned (18
          U.S.C. Section 1001).
          <br/><br/>I understand that I may not, under any circumstances, submit
          information
          through CBP One™ "Submit Advance Information" nor "Report My
          Departure" while using a virtual private network ("VPN").
          <br/><br/>Users may not, under any circumstances, submit or query
          information on either
          CBP One<sup className='text-xs'>tm</sup> or the I-94 website about
          another traveler,
          other than themselves, without the expressed permission and consent of
          that individual traveler.
        </div>
      </div>
      <div className='terms-and-conditions-footer'>
        <div className='terms-and-conditions-footer-btns'>
          <RippleButton onClick={() => navigate('/unauthorized')}>DECLINE</RippleButton>
          <RippleButton onClick={() => navigate('/login')}>ACCEPT</RippleButton>
        </div>
        <div className='terms-and-conditions-footer-bottom'>
          <a href='https://www.cbp.gov/document/directives/vulnerability-disclosure-program-policy-and-rules-engagement'>Vulnerability
            Disclosure (VPD)</a>
          <a href='https://www.cbp.gov/document/directives/vulnerability-disclosure-program-policy-and-rules-engagement'>Paperwork
            Reduction</a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;