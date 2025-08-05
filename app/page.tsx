"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaTiktok , FaWhatsapp,FaTooth,FaSmile ,FaSyringe } from "react-icons/fa";

import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Star,
  Smile,
  
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Music 

} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import '../styles/custom.css'


import { useEffect, useState } from "react"



export default function DentistWebsite() {
  
  const [isLoading, setIsLoading] = useState(true);

  const [isScrolled, setIsScrolled] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)

  ///
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }


  // Gallery data

  const galleryItems = [

    { id: 1, type: "Aligned and refined", description: "Complete smile transformation with veneers and whitening" ,file1: "/Group_1.png"},

    { id: 2, type: "Beyond the vision", description: "Forehead lines and crow's feet treatment",file1: "/Group_2.png" },

    { id: 3, type: "Cavity free", description: "Full mouth restoration with dental implants",file1: "/Group_3.png"},

    { id: 4, type: "Crowns and bridges", description: "Natural lip enhancement with dermal fillers",file1: "/e1.jpg" },

    { id: 5, type: "Fresh and clean", description: "Professional teeth whitening treatment",file1: "/Group_5.png" },

    { id: 6, type: "New smiles", description: "Orthodontic treatment with clear aligners",file1: "/e2.jpg" },

    { id: 7, type: "White and bright", description: "Facial contouring with cheek enhancement",file1: "/case_11.jpg" },

    { id: 8, type: "Face profile correction", description: "Gummy smile correction procedure",file1: "/Group_8.png" },
    { id: 9, type: "Hair PRP", description: "Gummy smile correction procedure",file1: "/b1.jpg" },
    { id: 10, type: "Bio stimulators", description: "Gummy smile correction procedure",file1: "/b5.jpg" },
    { id: 11, type: "Botox", description: "Gummy smile correction procedure",file1: "/b6.jpg" },
    { id: 12, type: "Double chin dissolving", description: "Gummy smile correction procedure",file1: "/b9.jpg" },
    { id: 13, type: "Jawline definition", description: "Gummy smile correction procedure",file1: "/b2.jpg" },
    { id: 14, type: "Lip fillers", description: "Gummy smile correction procedure",file1: "/b3.jpg" },
    { id: 15, type: "Non surgical face lift", description: "Gummy smile correction procedure",file1: "/b8.jpg" },
    { id: 16, type: "Refreshing touches", description: "Gummy smile correction procedure",file1: "/b4.jpg" },
    { id: 17, type: "Sad smile correction", description: "Gummy smile correction procedure",file1: "/b7.jpg" },
    

  ]



  // Testimonials data

  const testimonials = [

    {

      name: "Hamzeh Sha’sha’a",

      text:  "I visited Dr. Osama’s clinic to do dental cleaning. Everything was professional, the clinic was clean and nice. Dr. Osama is very friendly, cares about patients' comfort, and is very professional… Highly recommended! 👌",

      role: "Facebook",
      

    },

    {

      name: "Reem Alrefa’i",

      text: "Honestly, I’m in love with my lips!  Dr. Ossama did an amazing job — super professional and incredibly gentle.  So many people keep asking me about my lips and how natural and beautiful they look.  I couldn’t be happier. Thank you so much! ❤",

      role: "Instagram",
      

    },

    {

      name: "لينا م",

      text: "دكتور أسامة، النتائج فاقت توقعاتي! الخدود وخط الفك اختلفوا بشكل واضح، لكن طبيعي جدًا. لما شفت الصور قبل وبعد ما صدقت. شغلك فني فعلاً.",

      role: "Facebook",
      

    },

    {

      name: "Nicole S",

      text: "I never thought Botox and fillers could make such a difference. everyone is telling me that my face looks more lifted and tight in a healthy way. Even though I lost 5-6 kilos, my face stayed lifted. I'm in love with the results!",

      role: "Instagram",
      

    },

    {

      name: "أمجد",

      text: "ما كنت متوقع نهائياً إني أطلع من العيادة وأنا مفكر أعمل تجميل للأسنان 😅 بس شغلك نظيف وطريقتك بالشرح بتخلي الواحد يرتاح ويحس إنه فاهم كل خطوة. شكراً إلك دكتور",

      role: "Facebook",
      

    },

    {

      name: "لينا",

      text: "عن جد شغلك فن، مو بس طب. أنا وجهي كان محتاج توازن، والخدود وخط الفك فرقوا معي كثير. ما حد لاحظ إنه في شي معموله، بس الكل يقول شكلك متغير حلو. وهاي أحلى نتيجة ممكن أتخيلها",

      role: "Instagram",
      

    },

  ]



  // Auto-advance slideshows
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkMobile(); // Run on first load
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(galleryItems.length / itemsPerSlide);


  useEffect(() => {

    const galleryInterval = setInterval(() => {
    const maxSlides = Math.ceil(galleryItems.length / itemsPerSlide)
    setGalleryIndex((prev) => (prev + 1) % maxSlides);
  }, 15000);




    const testimonialInterval = setInterval(() => {

      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)

    }, 10000)



    return () => {

      clearInterval(galleryInterval)

      clearInterval(testimonialInterval)

    }

  }, [galleryItems.length, testimonials.length,isMobile])


  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home")

      if (heroSection) {

        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight

        const scrollPosition = window.scrollY + 100 // Add offset for navbar height

        setIsScrolled(scrollPosition > heroBottom)

      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextGallerySlide = () => {

    const itemsPerSlide = isMobile ? 1 : 3

    const maxSlides = Math.ceil(galleryItems.length / itemsPerSlide)

    setGalleryIndex((prev) => (prev + 1) % maxSlides)



  }



  const prevGallerySlide = () => {

    const itemsPerSlide = isMobile ? 1 : 3

    const maxSlides = Math.ceil(galleryItems.length / itemsPerSlide)

    setGalleryIndex((prev) => (prev - 1 + maxSlides) % maxSlides)

  }



  const nextTestimonial = () => {

    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)

  }



  const prevTestimonial = () => {

    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#096B68]">
  <img
    src="/White logo.png"
    alt="Loading..."
    className="w-40 h-auto animate-pulse"
  />
</div>

  );
}





  return  (

    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Navigation */}
      <nav className={` fixed top-0 w-full backdrop-blur-sm shadow-sm z-50 background transition-colors duration-300 ${

          isScrolled ? "bg-[#096b68]" : "bg-white/10"

        }`}

      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className={`text-xl md:text-2xl font-bold text-blue-900 transition-colors duration-300 ${

                isScrolled ? "text-blue-900" : "text-white"

              }`} > <a href="#home">
                      <img src="/White logo.png" alt="" className="w-16 h-auto cursor-pointer" />
                    </a>
                    </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 duration-300 ${

                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"

                }`}

              >
                

                {isMobileMenuOpen ? (

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                  </svg>

                ) : (

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                  </svg>

                )}
              </button>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full inset-x-2 bg-white text-gray-800 shadow-md z-50 px-4 py-6 space-y-4 flex flex-col items-center text-center rounded-xl mt-2 transition-all duration-300 ease-in-out">
                <a href="#home" className="block hover:text-[#096B68] font-medium"onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#services" className="block hover:text-[#096B68] font-medium"onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#gallery" className="block hover:text-[#096B68] font-medium"onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
                <a href="#testimonials" className="block hover:text-[#096B68] font-medium"onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                <a href="#booking" className="block hover:text-[#096B68] font-medium"onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <div className="flex flex-col space-y-2">
                    <Button
                        asChild
                        className="bg-[#096B68] hover:bg-[#003434] text-xs lg:text-sm px-3 lg:px-4"
                      >
                        <a
                          href="https://wa.me/+962798283322"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FaWhatsapp className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                          <span className="hidden lg:inline">WhatsApp</span>
                          <span className="lg:hidden">WhatsApp</span>
                        </a>
                      </Button>


                    <Button
                      asChild
                      className="bg-[#096B68] hover:bg-[#003434] text-xs lg:text-sm px-3 lg:px-4"
                    >
                      <a
                        href="https://maps.app.goo.gl/ju5K1uLPRqTQ1NVj7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        <span className="hidden lg:inline">Find Us on Google Maps</span>
                        <span className="lg:hidden">Google Maps</span>
                      </a>
                    </Button>

                  </div>

                </div>
            )}


            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 background header">
              <a href="#home" className={`text-white hover:text-[#096B68] transition-colors duration-300 text-sm lg:text-base ${

                  isScrolled ? "text-white hover:text-[#8fffee]" : "text-white hover:text-[#003434]"

                }`}

              >
                Home
              </a>
              <a href="#services" className={`text-white hover:text-[#096B68] transition-colors duration-300 text-sm lg:text-base ${

                  isScrolled ? "text-white hover:text-[#8fffee]" : "text-white hover:text-[#003434]"

                }`}

              >
                Services
              </a>
              
              <a href="#gallery" 
              className={`text-white hover:text-[#096B68] transition-colors duration-300 text-sm lg:text-base  ${

                  isScrolled ? "text-white hover:text-[#8fffee]" : "text-white hover:text-[#003434]"

                }`}

              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className={`text-white hover:text-[#096B68] transition-colors duration-300 text-sm lg:text-base  ${

                  isScrolled ? "text-white hover:text-[#8fffee]" : "text-white hover:text-[#003434]"

                }`}

              >
                Reviews
              </a>
              
              <a href="#booking" className={`text-white hover:text-[#096B68] transition-colors duration-300 text-sm lg:text-base ${

                  isScrolled ? "text-white hover:text-[#8fffee]" : "text-white hover:text-[#003434]"

                }`}

              >
                Contact
              </a>
            </div>

            {/* Contact Options */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/*<div className="hidden lg:flex items-center space-x-3">
                <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="https://instagram.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                
              </div> */}
              <Button
              asChild
              className="bg-[#096B68] hover:bg-[#003434] text-xs lg:text-sm px-3 lg:px-4"
            >
              <a
                href="https://wa.me/+962798283322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaWhatsapp className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">WhatsApp</span>
                <span className="lg:hidden">WhatsApp</span>
              </a>
            </Button>


              <Button
                asChild
                className="bg-[#096B68] hover:bg-[#003434] text-xs lg:text-sm px-3 lg:px-4"
              >
                <a
                  href="https://maps.app.goo.gl/ju5K1uLPRqTQ1NVj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">Find Us on Google Maps</span>
                  <span className="lg:hidden">Google Maps</span>
                </a>
              </Button>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 md:pt-20 pb-8 md:pb-16 px-4 min-h-screen flex items-center overflow-hidden h-screen bg-gray-100"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/vid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#333436d8]/70 md:from-[#333436d8]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
            
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  Dr. Osama Abu Taha
                </h1>
                <p className="text-lg md:text-xl text-white font-medium">Dentist & Aesthetic Medicine Specialist</p>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md">
                Creating Beautiful Smiles , Enhancing Natural Beauty And Boosting Confidence
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#096B68] hover:bg-[#003434] shadow-2xl w-full sm:w-auto h-16 text-xl px-10 rounded-xl"
                >
                  <a href="tel:+962798283322">
                    Book Your Free Consultation
                  </a>
                </Button>

                {/*
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#003434] bg-transparent backdrop-blur-sm w-full sm:w-auto h-16 text-xl px-10 rounded-xl"
                >
                  View our Instagram Page<Instagram className="w-6 h-6" />
                </Button>
                */}
              </div>


              
            
            
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care and advanced aesthetic treatments.
            </p>
          </div>
          {/*bg-[#096B68] hover:bg-[#003434]*/ }

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
            {/* Dental Services */}
            <Card id="s1" className="group hover:shadow-xl transition-all duration-300 scroll-mt-20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#096B68] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003434] transition-colors">
                  {/*<FaTooth className="w-8 h-8 text-white group-hover:text-white" />*/}
                  <img src="clean.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">General Dentistry</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive oral health care including cleanings, fillings, crowns, and preventive treatments.
                </p>
                {/* Mobile expandable content */}
                <div className="md:block">
                  <button
                    onClick={() => toggleService(1)}
                    className="md:hidden w-full text-left text-black font-medium mb-2 flex items-center justify-between"
                  >
                    View Details
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${expandedService === 1 ? "rotate-90" : ""}`}
                    />
                  </button>
                  {/* List: shown always on desktop, toggled on mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedService === 1 ? "max-h-40" : "max-h-0"
          } md:max-h-none md:block`}
        >
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Surgical Extraction</li>
                  <li>• Cavity Fillings</li>
                  <li>• Root Canal Therapy</li>
                  <li>• Dental Crowns & Bridges</li>
                </ul>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card id="s2" className="group hover:shadow-xl transition-all duration-300 scroll-mt-20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#096B68] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003434] transition-colors">
                  <img src="smile.png" alt=""  />
                  {/*<FaSmile className="w-8 h-8 text-white group-hover:text-white" />*/}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cosmetic Dentistry</h3>
                <p className="text-gray-600 mb-4">
                  Transform your smile with our advanced cosmetic dental procedures and treatments.
                </p>
                {/* Mobile expandable content */}
                <div className="md:block">
                  <button
                    onClick={() => toggleService(2)}
                    className="md:hidden w-full text-left text-black font-medium mb-2 flex items-center justify-between"
                  >
                    View Details
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${expandedService === 1 ? "rotate-90" : ""}`}
                    />
                  </button>
                  {/* List: shown always on desktop, toggled on mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedService === 2 ? "max-h-40" : "max-h-0"
          } md:max-h-none md:block`}
        >
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Teeth Whitening</li>
                  <li>• Veneers and Facing</li>
                  <li>• Smile Makeovers</li>
                  <li>• Orthodontic Treatments</li>
                </ul>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card id="s3" className="group hover:shadow-xl transition-all duration-300 scroll-mt-20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#096B68] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003434] transition-colors">
                  {/*<FaSyringe className="w-8 h-8 text-white group-hover:text-white" />*/}
                  <img src="vaccine.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aesthetic Treatments</h3>
                <p className="text-gray-600 mb-4">
                  Reduce fine lines, eliminate wrinkles and rejuvinate the skin with our face-chart-analysis aproach for a natural result.
                </p>
                {/* Mobile expandable content */}
                <div className="md:block">
                  <button
                    onClick={() => toggleService(3)}
                    className="md:hidden w-full text-left text-black font-medium mb-2 flex items-center justify-between"
                  >
                    View Details
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${expandedService === 1 ? "rotate-90" : ""}`}
                    />
                  </button>
                  {/* List: shown always on desktop, toggled on mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedService === 3 ? "max-h-40" : "max-h-0"
          } md:max-h-none md:block`}
        >
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Botox And Dermal Fillers</li>
                  <li>• Biostimulators</li>
                  <li>• Skin And Hair Treatment</li>
                  <li>• Full Face And Neck Transformation</li>
                </ul>
                </div>
                </div>
              </CardContent>
            </Card>

            {/*<Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors">
                  <Heart className="w-8 h-8 text-pink-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dermal Fillers</h3>
                <p className="text-gray-600 mb-4">
                  Restore volume and enhance facial contours with our premium dermal filler treatments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lip Enhancement</li>
                  <li>• Cheek Augmentation</li>
                  <li>• Nasolabial Folds</li>
                  <li>• Under-eye Treatment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Award className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Treatments</h3>
                <p className="text-gray-600 mb-4">
                  Cutting-edge procedures combining dental expertise with aesthetic medicine.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gummy Smile Correction</li>
                  <li>• TMJ Treatment</li>
                  <li>• Facial Rejuvenation</li>
                  <li>• Combination Therapies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Users className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Personalized treatment planning with comprehensive evaluation and expert recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comprehensive Assessment</li>
                  <li>• Treatment Planning</li>
                  <li>• Before & After Imaging</li>
                  <li>• Follow-up Care</li>
                </ul>
              </CardContent>
            </Card>*/}
          </div>
        </div>
      </section>
      
      {/* Before & After Gallery Slideshow */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the amazing transformations our patients have achieved
            </p>
            
          </div>
          <div className="flex justify-center flex-wrap m-4">
          <Button
            asChild
            className="bg-[#096B68] hover:bg-[#003434] text-xs m-4"
          >
            <a
              href="https://www.instagram.com/dr.osama_abutaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Find Us on Instagram</span>
              <span className="lg:hidden">Instagram</span>
            </a>
          </Button>

          <Button
            asChild
            className="bg-[#096B68] hover:bg-[#003434] text-xs m-4"
          >
            <a
              href="https://www.facebook.com/share/16Koudu6qm/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Facebook className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Find Us on Facebook</span>
              <span className="lg:hidden">Facebook</span>
            </a>
          </Button> 

          <Button
            asChild
            className="bg-[#096B68] hover:bg-[#003434] text-xs m-4"
          >
            <a
              href="https://www.tiktok.com/@dr.osama_abutaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaTiktok className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Find Us on Tiktok</span>
              <span className="lg:hidden">Tiktok</span>
            </a>
          </Button>

          </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Gallery Slideshow */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(galleryItems.length / (isMobile ? 1 : 3)),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "md:grid-cols-3"}`}>
                      {galleryItems
                        .slice(slideIndex * (isMobile ? 1 : 3), slideIndex * (isMobile ? 1 : 3) + (isMobile ? 1 : 3))
                        .map((item) => (
                          <Card
                            key={item.id}
                            className="overflow-hidden group hover:shadow-xl transition-all duration-300 w-full h-full"
                          >
                            <div className="relative h-48 w-full max-w-md mx-auto">
                              <Image
                                src={`${item.file1}`}
                                alt="Before and After treatment"
                                fill
                                className="object-cover rounded-md"
                              />

                              <div className="absolute top-2 left-2">
                                <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                                  Before
                                </Badge>
                              </div>

                              <div className="absolute top-2 right-2">
                                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                  After
                                </Badge>
                              </div>
                            </div>

                            <CardContent className="p-4 h-24 flex flex-col justify-between">
                              <h3 className="font-semibold text-gray-900 mb-2 text-xl text-center">{item.type}</h3>
                              
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Navigation */}
            <button
              onClick={prevGallerySlide}
              className="absolute left-4 top-[70%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextGallerySlide}
              className="absolute right-4 top-[70%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Gallery Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(galleryItems.length / (isMobile ? 1 : 3)),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === galleryIndex ? "bg-[#003434] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Slideshow */}
      <section id="testimonials" className="py-20 bg-[#04817b] section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Real stories from real patients who love our results
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Slideshow */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white max-w-2xl mx-auto ">
                      <CardContent className="p-8 text-center">
                        
                        <p className="text-lg text-gray-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                        <div className="flex items-center justify-center">
                          <Image
                            src="https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"
                            alt="Patient testimonial"
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                          ></Image>
                          <div>
                            <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                            <div className="text-gray-600 flex items-center justify-center gap-2">
                                
                                {testimonial.role === "Facebook" ? (
                                  <Facebook className="w-4 h-4 text-blue-600" />
                                ) : testimonial.role === "Instagram" ? (
                                  <Instagram className="w-4 h-4 text-pink-500" />
                                ) : null}
                              </div>

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-[60%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-[60%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === testimonialIndex ? "bg-[#003434] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*bg-[#096B68] hover:bg-[#003434]*/ }

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
              <p className="text-lg text-gray-600">Ready to start your transformation? Schedule a consultation today</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <Card>
              
                <CardContent className="p-4 md:p-6 gap-8" >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Schedule Your Free Consultation NOW!
                  </h3>

                  <Button
                    asChild
                    className="w-full bg-[#096B68] hover:bg-[#003434] h-10 text-sm"
                    size="sm"
                  >
                    <a href="tel:+962798283322">
                      Book Appointment
                    </a>
                  </Button>

                </CardContent>

              </Card>

              <div className="space-y-6 md:space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div
                        className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                        onClick={() => {
                          navigator.clipboard.writeText("(+962) 798283322");
                          alert("Phone number copied to clipboard!");
                        }}
                      >
                        <Phone className="w-5 h-5 text-[#096B68]" />
                        <span className="text-gray-700">(+962) 798283322</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <a
                            href="mailto:dr.osama.abutaha@icloud.com"
                            className="flex items-center space-x-3 text-gray-700 hover:underline"
                          >
                            <Mail className="w-5 h-5 text-[#096B68]" />
                            <span>dr.osama.abutaha@icloud.com</span>
                          </a>

                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-[#096B68]" />
                        <span className="text-gray-700">
                           Um Uthaina - Royal business center - 2nd floor - Academic specialized dental center
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003434] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <a href="#home">
                <img src="/White logo.png" alt="" className="w-20 h-auto" />
              </a>


              <p className="text-gray-400">
                Creating beautiful smiles and enhancing natural beauty with expert care and advanced treatments.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/share/16Koudu6qm/?mibextid=wwXIfr" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/dr.osama_abutaha/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://www.tiktok.com/@dr.osama_abutaha" target="_blank" className="text-gray-400 hover:text-white transition-colors ">
                  <FaTiktok className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#s1" className="hover:text-white transition-colors">
                    General Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="#s2" className="hover:text-white transition-colors">
                    Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="#s3" className="hover:text-white transition-colors">
                    Aesthetic Treatments
                  </Link>
                </li>
                
                
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>
                    Um Uthaina - Royal business center - 2nd floor - Academic specialized dental center
                  </span>
                </div>
                <div
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                  onClick={() => {
                    navigator.clipboard.writeText("(+962) 798283322");
                    alert("Phone number copied to clipboard!");
                  }}
                >
                  <Phone className="w-5 h-5" />
                  <span>(+962) 798283322</span>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href="mailto:dr.osama.abutaha@icloud.com"
                    className="flex items-center space-x-3 text-inherit no-underline hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    <span>dr.osama.abutaha@icloud.com</span>
                  </a>

                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Sat-Wed: 10AM-5PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Thu: 10AM-3:30PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Fri: Closed</span>
                </div>
                
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
                Website created by Sami Abdel Fattah{" "}
                <a
                  href="https://www.linkedin.com/in/sami-abdel-fattah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </p>

            <p>
              &copy; {new Date().getFullYear()} Dr. Osama Abu Taha. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
