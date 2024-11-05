'use client';

import { Typography, Container } from '@mui/material';
import Navigation from '../../components/navigation';

export default function AboutPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our website! We are committed to providing the best services
        to our customers. Our mission is to make your experience enjoyable and
        fulfilling.
      </Typography>
    </>
  );
}
