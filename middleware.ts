import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

// Forzar el uso de Node.js Runtime en lugar de Edge Runtime
export const runtime = 'nodejs';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};