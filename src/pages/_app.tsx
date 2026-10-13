import type { AppProps } from "next/app";
import '../styles/globals.css';
import AppShell from "@/components/layouts/AppShell";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LangProvider } from '../contexts/Langcontexts'; // Ganti dengan path yang sesuai

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <LangProvider> {/* Bungkus AppShell dengan LangProvider */}
      <AppShell>  
        <Component {...pageProps} />
      </AppShell>
    </LangProvider>
  );
}
