// app/auth/login/page.tsx
import { Metadata } from 'next';
import Auth from '../../components/auth/Auth';

export const metadata: Metadata = {
  title: 'Login | API Key Manager',
  description: 'Sign in to your API Key Manager account or create a new one to start managing API keys with power and precision.',
};

export default function LoginPage() {
  return <Auth />;
}