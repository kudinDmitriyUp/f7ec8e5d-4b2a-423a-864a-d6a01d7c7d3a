"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, UtensilsCrossed, Waves, Dumbbell, Home, Crown, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="LuxeStay"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379212098-yo3snuso.jpg"
          logoAlt="LuxeStay Hotel Logo"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "#pricing"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Hospitality"
          description="Discover your perfect getaway with world-class amenities, exceptional service, and unforgettable moments at LuxeStay Hotel."
          tag="Welcome"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379213239-aebmhyqz.jpg"
          imageAlt="Luxury hotel lobby with modern architecture"
          frameStyle="card"
          buttons={[
            { text: "Book a Room", href: "#pricing" },
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafted for the discerning traveler who seeks more than just a room—we offer a sanctuary of elegance, comfort, and personalized service where every detail reflects our commitment to excellence."
          buttons={[
            { text: "Explore Our Story", href: "about" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFive
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed for your comfort and relaxation"
          tag="Services"
          features={[
            { title: "Spa & Wellness", icon: Sparkles },
            { title: "Fine Dining", icon: UtensilsCrossed },
            { title: "Infinity Pool", icon: Waves },
            { title: "Fitness Center", icon: Dumbbell }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Room Selection"
          description="Choose from our carefully curated collection of rooms and suites"
          tag="Accommodations"
          products={[
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "$189/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379213943-m6cojkgo.jpg",
              imageAlt: "Deluxe bedroom with ocean view"
            },
            {
              id: "suite",
              name: "Premium Suite",
              price: "$329/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379215071-r0j3tk76.jpg",
              imageAlt: "Spacious premium suite with king bed"
            },
            {
              id: "standard",
              name: "Standard Room",
              price: "$129/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379215774-fun4ldnz.jpg",
              imageAlt: "Modern standard guest room"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Room Packages"
          description="Select the perfect package for your stay"
          tag="Special Offers"
          plans={[
            {
              id: "basic",
              badge: "Standard",
              badgeIcon: Home,
              price: "$129",
              subtitle: "Per night",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Details", href: "rooms" }
              ],
              features: [
                "Free WiFi",
                "Air conditioning",
                "24/7 room service",
                "Flat-screen TV"
              ]
            },
            {
              id: "deluxe",
              badge: "Deluxe",
              badgeIcon: Crown,
              price: "$189",
              subtitle: "Per night",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Details", href: "rooms" }
              ],
              features: [
                "All Standard features",
                "Ocean view balcony",
                "Premium bedding",
                "Complimentary breakfast"
              ]
            },
            {
              id: "suite",
              badge: "Luxury",
              badgeIcon: Sparkles,
              price: "$329",
              subtitle: "Per night",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Details", href: "rooms" }
              ],
              features: [
                "All Deluxe features",
                "Separate living area",
                "Spa access",
                "Personalized concierge"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Reviews"
          description="See what our valued guests have to say about their stay"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Margaret Wilson",
              role: "Travel Journalist",
              testimonial: "LuxeStay exceeded every expectation. The attention to detail, from the premium linens to the personalized service, made our anniversary stay unforgettable. We will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379220064-066581w5.png",
              imageAlt: "Margaret Wilson portrait"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Business Executive",
              testimonial: "Perfect for business travels. The high-speed WiFi, comfortable workspace, and excellent restaurant made my stay productive and enjoyable. The staff went above and beyond.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379220756-271ucnzn.jpg",
              imageAlt: "David Chen portrait"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Artist",
              testimonial: "The spa experience here is world-class. After a rejuvenating massage and some time by the infinity pool, I felt completely refreshed. Highly recommend to anyone seeking relaxation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379221753-p4p1pp5c.jpg",
              imageAlt: "Elena Rodriguez portrait"
            },
            {
              id: "4",
              name: "James Patterson",
              role: "Entrepreneur",
              testimonial: "Outstanding hospitality. From check-in to check-out, everything was seamless. The views from the balcony are spectacular, and the complimentary breakfast was delicious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379222426-3oqygx7w.jpg",
              imageAlt: "James Patterson portrait"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay with us"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
            },
            {
              id: "2",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer complimentary valet parking for all guests. Self-parking is also available. EV charging stations are located in the parking area."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets with advance notice. A pet fee of $50 per night applies. Service animals stay free of charge."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, debit cards, and digital payment methods. Payment must be made at the time of booking or during check-in."
            },
            {
              id: "5",
              title: "Can I cancel my reservation?",
              content: "Cancellations made 7 days before arrival receive a full refund. Cancellations within 7 days of arrival incur a one-night charge. Travel insurance is recommended."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to our newsletter for exclusive offers, travel tips, and special promotions delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379223418-jyz2vhw0.jpg"
          imageAlt="Luxury hotel exterior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="LuxeStay"
          copyrightText="© LuxeStay Hotel, 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Dining", href: "amenities" },
                { label: "Spa", href: "amenities" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Booking Help", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}