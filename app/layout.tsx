"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Navigation from "@/components/navigation";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Container>
              <Navigation />
              {children}
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
