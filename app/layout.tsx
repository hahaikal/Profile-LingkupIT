import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LingkupIT: Solusi Digitalisasi & Administrasi Sekolah Modern',
  description: 'Wujudkan transformasi digital di sekolah Anda dengan LingkupIT. Kami menyediakan sistem administrasi, PPDB online, & manajemen data siswa yang mudah dan terjangkau.',
  keywords: 'sistem informasi sekolah, PPDB online, administrasi sekolah, digitalisasi pendidikan, manajemen data siswa, LingkupIT',
  authors: [{ name: 'LingkupIT' }],
  creator: 'LingkupIT',
  publisher: 'LingkupIT',
  robots: 'index, follow',
  openGraph: {
    title: 'LingkupIT: Solusi Digitalisasi & Administrasi Sekolah Modern',
    description: 'Wujudkan transformasi digital di sekolah Anda dengan LingkupIT. Kami menyediakan sistem administrasi, PPDB online, & manajemen data siswa yang mudah dan terjangkau.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'LingkupIT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LingkupIT: Solusi Digitalisasi & Administrasi Sekolah Modern',
    description: 'Wujudkan transformasi digital di sekolah Anda dengan LingkupIT. Kami menyediakan sistem administrasi, PPDB online, & manajemen data siswa yang mudah dan terjangkau.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}