"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Target, 
  Heart, 
  Users, 
  ArrowRight,
  Linkedin,
  Eye,
  Compass,
  CheckCircle,
  Lightbulb,
  Globe,
  Shield,
  Zap,
  HandHeart
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function TentangKami() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Full Screen */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(59, 130, 246, 0.7)), url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Mitra Transformasi
            </span>
            <br />
            <span className="text-white">Digital Anda</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            LingkupIT hadir untuk menjembatani kesenjangan digital. Kami percaya bahwa teknologi canggih 
            harus bisa diakses oleh semua, dan kami mendedikasikan diri untuk membangun solusi yang tidak 
            hanya kuat, tetapi juga mudah digunakan dan terjangkau bagi setiap sektor usaha di Nusantara.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kisah di Balik LingkupIT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Di tengah pesatnya laju zaman, kami melihat sebuah kenyataan: banyak institusi dan sektor usaha 
                di Indonesia masih berjuang dengan tumpukan kertas dan proses manual yang memakan waktu. Potensi 
                besar mereka terhambat oleh inefisiensi, dan waktu berharga terbuang untuk tugas-tugas administratif, 
                bukan untuk melayani, berinovasi, atau mendidik.
              </p>
              
              <p>
                LingkupIT lahir dari sebuah keyakinan sederhana: bahwa transformasi digital bukanlah hak istimewa 
                bagi segelintir perusahaan besar, melainkan sebuah kebutuhan yang harus bisa dijangkau oleh semua. 
                Kami percaya setiap sekolah, klinik, kantor pemerintahan, hingga UMKM di pelosok Nusantara berhak 
                mendapatkan alat terbaik untuk bertumbuh dan bekerja secara lebih efisien.
              </p>
              
              <p>
                Karena itu, kami hadir bukan sekadar sebagai penyedia perangkat lunak, tetapi sebagai mitra dalam 
                perjalanan digitalisasi Anda. Kami merancang sistem operasional yang terintegrasi, mudah digunakan, 
                dan terjangkau, yang mencakup semua lingkup kebutuhan Anda agar Anda bisa kembali fokus pada apa 
                yang terpenting: misi inti organisasi Anda.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-3xl border border-blue-100">
                <p className="text-xl font-semibold text-gray-800 text-center">
                  Misi kami adalah 'Mewujudkan Digitalisasi, Raih Transformasi.' Bersama LingkupIT, 
                  mari kita luaskan jangkauan potensi Anda dan bangun masa depan yang lebih efisien 
                  dan terhubung untuk Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Panduan Arah Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-800">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed text-center">
                  Menciptakan sistem operasional terdigitalisasi yang merata di seluruh sektor usaha, 
                  serta membangun budaya efisiensi pada setiap lingkungan kerja.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Compass className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-800">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      Mengembangkan solusi teknologi yang mudah digunakan dan terjangkau
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      Memberikan inovasi berkelanjutan sesuai kebutuhan sektor usaha
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      Memperluas jangkauan digitalisasi ke seluruh Nusantara
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      Memastikan keamanan dan keandalan sistem operasional
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <HandHeart className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      Membangun kemitraan jangka panjang dengan klien
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dari Pendiri LingkupIT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Photo Section */}
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-12 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                    <Users className="w-32 h-32 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">[Nama Lengkap Anda]</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-6">Founder & CEO, LingkupIT</p>
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                      "Saya mendirikan LingkupIT dengan satu keyakinan: teknologi seharusnya menjadi alat pemberdaya, 
                      bukan penghalang. Selama bertahun-tahun berkarir di industri IT, saya melihat langsung bagaimana 
                      potensi luar biasa di berbagai sektor terhambat oleh proses manual. Misi pribadi saya adalah 
                      menghadirkan solusi digital yang tidak hanya canggih, tetapi juga benar-benar mudah diakses 
                      dan digunakan oleh semua orang. Mari kita bertransformasi bersama."
                    </blockquote>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Siap Memulai Perjalanan Anda?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8"></div>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Lihat bagaimana solusi kami dapat membantu mentransformasi operasional Anda 
              atau hubungi kami untuk diskusi lebih lanjut.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/solusi">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Lihat Solusi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="/#contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LingkupIT</span>
          </div>
          <p className="text-gray-400">
            © 2024 LingkupIT. Semua hak cipta dilindungi. Wujudkan Digitalisasi, Raih Transformasi.
          </p>
        </div>
      </footer>
    </div>
  );
}