import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami - LingkupIT: Mitra Transformasi Digital Anda',
  description: 'Pelajari kisah di balik LingkupIT, visi misi kami, dan bagaimana kami membantu institusi pendidikan di Indonesia mencapai transformasi digital yang efektif dan terjangkau.',
  keywords: 'tentang LingkupIT, visi misi, transformasi digital Indonesia, founder LingkupIT, sejarah perusahaan',
  openGraph: {
    title: 'Tentang Kami - LingkupIT: Mitra Transformasi Digital Anda',
    description: 'Pelajari kisah di balik LingkupIT, visi misi kami, dan bagaimana kami membantu institusi pendidikan di Indonesia mencapai transformasi digital yang efektif dan terjangkau.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}