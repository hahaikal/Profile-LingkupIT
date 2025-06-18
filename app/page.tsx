"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Monitor, 
  Users, 
  Zap, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Building2
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Full Screen */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.8)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-purple-900/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white">
                LingkupIT
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Wujudkan Digitalisasi,
            </span>
            <br />
            <span className="text-white">Raih Transformasi.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Kami menyediakan sistem administrasi, PPDB online, & manajemen data siswa yang mudah digunakan dan terjangkau 
            untuk berbagai sektor pendidikan di Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Lihat Solusi Kami
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kisah di Balik LingkupIT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                LingkupIT lahir dari visi untuk menjembatani kesenjangan digital di dunia pendidikan Indonesia. 
                Kami memahami bahwa setiap institusi pendidikan, baik besar maupun kecil, membutuhkan solusi 
                teknologi yang tepat untuk berkembang di era digital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan tim ahli berpengalaman dan pemahaman mendalam tentang kebutuhan sektor pendidikan, 
                kami menghadirkan solusi digital yang tidak hanya canggih, tetapi juga mudah 
                digunakan dan terjangkau untuk semua kalangan institusi pendidikan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Perjalanan transformasi digital pendidikan Anda adalah misi kami. Mari bersama-sama 
                membangun masa depan pendidikan yang lebih efisien dan terhubung.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <Monitor className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solusi Kami: LingkupIT Edukasi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistem informasi sekolah terdepan untuk administrasi, PPDB online, dan manajemen data siswa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Kemudahan Penggunaan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Interface yang intuitif dan user-friendly, dirancang khusus untuk kemudahan 
                  penggunaan oleh tenaga pendidik dan administrator sekolah tanpa memerlukan keahlian teknis mendalam.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Harga Terjangkau</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Solusi berbiaya efektif yang dapat diakses oleh berbagai kalangan institusi pendidikan, 
                  dari sekolah kecil hingga yayasan besar, tanpa mengorbankan kualitas dan fitur.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Efisiensi Maksimal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Otomatisasi proses administrasi sekolah yang cerdas untuk meningkatkan produktivitas 
                  dan mengurangi waktu operasional hingga 70%.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Keunggulan LingkupIT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mudah Digunakan</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Desain antarmuka yang sederhana dan intuitif memungkinkan tenaga pendidik 
                dari berbagai latar belakang untuk dengan mudah mengoperasikan sistem administrasi sekolah.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Harga Terjangkau</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Paket berlangganan yang fleksibel dan kompetitif, disesuaikan dengan 
                kebutuhan dan budget institusi pendidikan Anda.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proses Efisien</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Optimalisasi workflow administrasi dan otomatisasi proses untuk menghemat waktu 
                dan meningkatkan produktivitas tim pendidik Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mulai Perjalanan Digitalisasi Anda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hubungi tim ahli kami untuk konsultasi gratis dan temukan solusi digital terbaik untuk institusi pendidikan Anda
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">info@lingkupit.com</p>
                  <p className="text-blue-100">support@lingkupit.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                  <p className="text-blue-100">+62 21 1234 5678</p>
                  <p className="text-blue-100">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                  <p className="text-blue-100">
                    Jl. Teknologi Digital No. 123<br />
                    Jakarta Selatan, DKI Jakarta 12560<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Kirim Pesan</CardTitle>
                <CardDescription className="text-blue-100">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Nama Lengkap</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                        placeholder="contoh@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Nama Sekolah/Institusi</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      placeholder="Nama sekolah atau institusi Anda"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      placeholder="Ceritakan tentang kebutuhan digitalisasi sekolah Anda..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Kirim Pesan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
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