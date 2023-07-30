import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = import.meta.env.BASE_URL
  ? `https://${import.meta.env.BASE_URL}`
  : '';

export const ResetPassword = ({
  userFirstname = 'Zeno',
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      KG Jobs reset password.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Someone recently requested a password change for your KG Jobs account. If this was you, you can set a new password here:
        </Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href="https://getkoala.com">
            Reset Password
          </Button>
        </Section>
        <Text style={paragraph}>
          If you don&apos;t want to change your password or didn&apos;t
          request this, just ignore and delete this message.
        </Text>
        <Text style={paragraph}>
          To keep your account secure, please don&apos;t forward this email to anyone.
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          The KG Jobs team
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

export default ResetPassword;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};