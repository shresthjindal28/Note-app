import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({userName, verificationUrl}: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your email address to complete your account setup</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to NoteFoge! Please confirm your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Thanks for signing up with NoteFoge! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                This verification link will expire in 24 hours for security purposes.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                If the button above doesn&#39;t work, copy and paste this link into your browser:
              </Text>
              <Link
                href={verificationUrl}
                className="text-blue-600 text-[14px] break-all"
              >
                {verificationUrl}
              </Link>
            </Section>

            {/* Security Note */}
            <Section className="bg-gray-50 p-[16px] rounded-[8px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 m-0 mb-[8px]">
                <strong>Security Note:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                If you didn&#39;t create an account with NoteFoge, please ignore this email. Your email address will not be added to our system.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                This email was sent to {userName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                NoteFoge, 123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2025 NoteFoge. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default VerificationEmail;