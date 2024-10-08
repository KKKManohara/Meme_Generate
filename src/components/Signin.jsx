import React, { useState } from "react";
import { PageContainer, Container, SignUpContainer, SignInContainer, OverlayContainer, Overlay, LeftOverlayPanel, RightOverlayPanel, Form, Title, Input, Button, GhostButton, Paragraph, CancelButton } from './Components';

const Signin = () => {
  const [signIn, toggle] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  const handlePanelOpen = (isOpen) => {
    setIsBlurred(isOpen);
  };

  const handleCancel = () => {
    
    console.log("Cancel clicked");
  };

  return (
    <PageContainer isBlurred={isBlurred}>
      <Container>
        <SignUpContainer signinIn={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton> {/* Cancel button */}
          </Form>
        </SignUpContainer>

        <SignInContainer signinIn={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton> {/* Cancel button */}
          </Form>
        </SignInContainer>

        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>To keep connected with us, please login with your personal info</Paragraph>
              <GhostButton onClick={() => { toggle(true); handlePanelOpen(false); }}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signinIn={signIn}>
              <Title>Hello, Friend!</Title>
              <Paragraph>Enter your personal details and start your journey with us</Paragraph>
              <GhostButton onClick={() => { toggle(false); handlePanelOpen(true); }}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </PageContainer>
  );
}

export default Signin;
