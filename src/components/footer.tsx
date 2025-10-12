import { Container } from "./container";
import { Typography } from "./typography";

export const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <Typography size="bodySmall" className="text-center">
          © 2025 Firewrite.app. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};
