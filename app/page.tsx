'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Heart,
  Users,
  BookOpen,
  Briefcase,
  Droplets,
  Shield,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// SVG Wave Component
const WaveDivider = ({
  colors = ['#000000', '#DC143C', '#007A5E'],
}: {
  colors?: string[]
}) => (
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="50%" stopColor={colors[1]} />
        <stop offset="100%" stopColor={colors[2]} />
      </linearGradient>
      <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={colors[1]} />
        <stop offset="50%" stopColor={colors[2]} />
        <stop offset="100%" stopColor={colors[0]} />
      </linearGradient>
    </defs>
    <path
      d="M0,30 Q300,80 600,30 T1200,30 L1200,0 L0,0 Z"
      fill={colors[0]}
      opacity="1"
    />
    <path
      d="M0,50 Q300,100 600,50 T1200,50 L1200,30 Q600,80 0,30 Z"
      fill={colors[1]}
      opacity="0.95"
    />
    <path
      d="M0,80 Q300,120 600,80 T1200,80 L1200,50 Q600,100 0,50 Z"
      fill={colors[2]}
      opacity="0.9"
    />
  </svg>
)

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const manifestoPillars = [
    {
      number: 1,
      title: 'Good Leadership & Accountability',
      description: 'Transparent use of ward development funds and regular public updates.',
      icon: CheckCircle2,
      color: 'from-black to-slate-900',
      bgColor: 'bg-black/5 border-l-4 border-black',
    },
    {
      number: 2,
      title: 'Roads, Drainage & Clean Environment',
      description: 'Improved road networks and proper drainage to reduce flooding.',
      icon: Droplets,
      color: 'from-green-700 to-green-800',
      bgColor: 'bg-green-50 border-l-4 border-green-700',
    },
    {
      number: 3,
      title: 'Youth Empowerment & Job Creation',
      description:
        'Skills hub for digital training and internship opportunities with local businesses.',
      icon: Briefcase,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50 border-l-4 border-red-600',
    },
    {
      number: 4,
      title: 'Women & SME Support',
      description:
        'Support for sports, talent development, and creative arts programs.',
      icon: Users,
      color: 'from-black to-slate-900',
      bgColor: 'bg-black/5 border-l-4 border-black',
    },
    {
      number: 5,
      title: 'Education & Schools',
      description:
        'Infrastructure improvements, bursary programs, and after-school support.',
      icon: BookOpen,
      color: 'from-green-700 to-green-800',
      bgColor: 'bg-green-50 border-l-4 border-green-700',
    },
    {
      number: 6,
      title: 'Health & Social Services',
      description:
        'Enhanced healthcare access and comprehensive social welfare programs.',
      icon: Heart,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50 border-l-4 border-red-600',
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b-2 border-b-black shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-black via-red-600 to-green-700 flex items-center justify-center text-white font-bold text-lg">
              DO
            </div>
            <span className="font-bold text-lg text-gray-900">Daniel Omondi</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#manifesto" className="text-gray-700 hover:text-black transition">
              Manifesto
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition">
              About
            </a>
            <a href="#volunteer" className="text-gray-700 hover:text-black transition">
              Volunteer
            </a>
          </div>

          <Link
            href="https://wa.me/254787937065"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold hover:from-green-800 hover:to-green-900 transition"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </Link>
        </nav>
      </header>

      {/* WhatsApp FAB */}
      <Link
        href="https://wa.me/254787937065?text=Hello%20Daniel!%20I%20would%20like%20to%20discuss%20your%20campaign."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-red-600 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border-2 border-black"
        aria-label="Chat with Daniel on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden pt-20 pb-20">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-700 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-last md:order-first">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
                  <span className="bg-gradient-to-r from-green-400 via-white to-red-400 bg-clip-text text-transparent">
                    Transforming Ngando
                  </span>
                </h1>
                <p className="text-xl text-gray-300">
                  Leadership with integrity. Service with purpose. A ward full of opportunities for every household.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg border border-red-800"
                >
                  <a
                    href="https://wa.me/254787937065?text=I%20would%20like%20to%20join%20Daniel%27s%20movement!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Movement
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold"
                >
                  <a href="#manifesto">Read the Manifesto</a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first md:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-transparent rounded-3xl blur-xl" />
              <Image
                src="/images/profile-photo.png"
                alt="Daniel Omondi - MCA Candidate"
                width={400}
                height={500}
                className="relative rounded-3xl object-cover shadow-2xl border-2 border-green-700/30"
                style={{ width: '100%', height: 'auto' }}
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Wave Divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <WaveDivider colors={['#000000', '#DC143C', '#007A5E']} />
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-black via-red-600 to-green-700 bg-clip-text text-transparent">
                Six Pillars of Change
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive plan to build a safer, more empowered Ngando Ward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manifestoPillars.map((pillar) => {
              const IconComponent = pillar.icon
              return (
                <Card
                  key={pillar.number}
                  className={`p-8 ${pillar.bgColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="w-full mt-20">
          <WaveDivider colors={['#007A5E', '#DC143C', '#000000']} />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-green-50 via-white to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-first md:order-first">
              <div className="sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-green-700/20 rounded-3xl blur-2xl" />
                <Image
                  src="/images/profile-photo.png"
                  alt="Daniel Omondi"
                  width={400}
                  height={500}
                  className="relative rounded-3xl object-cover shadow-2xl border-4 border-white"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-last md:order-last">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
                    About Daniel
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Daniel Omondi is a passionate community leader dedicated to transforming Ngando Ward through integrity, fairness, and actionable solutions. With years of experience in community development and grassroots mobilization, Daniel understands the unique challenges facing residents of Ngando Ward.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  His leadership philosophy is simple: serve with purpose, lead with integrity, and deliver results. Daniel believes in transparent governance and direct accountability to the people who elected him.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Integrity', icon: '✓' },
                  { label: 'Fairness', icon: '✓' },
                  { label: 'Transparency', icon: '✓' },
                  { label: 'Action', icon: '✓' },
                ].map((value) => (
                  <div
                    key={value.label}
                    className="p-4 rounded-lg bg-gradient-to-br from-black to-gray-800 text-white"
                  >
                    <p className="font-semibold">{value.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="w-full mt-20">
          <WaveDivider colors={['#DC143C', '#007A5E', '#000000']} />
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">My Commitment to You</h2>

          <blockquote className="text-2xl md:text-3xl italic font-light border-l-4 border-green-500 pl-8 text-balance">
            "I am running to serve, not to be served. My leadership will be guided by
            <span className="block mt-2 font-semibold text-transparent bg-gradient-to-r from-green-400 via-red-400 to-green-400 bg-clip-text">
              integrity, fairness, and respect
            </span>
            for all residents of Ngando Ward."
          </blockquote>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Together, we will build a ward that is safe, empowered, and full of opportunities for every household. This is not just a campaign—it&apos;s a movement toward lasting change.
          </p>

          <Link
            href="https://wa.me/254787937065"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition"
          >
            <MessageCircle className="w-5 h-5 inline mr-2" />
            Connect with Daniel
          </Link>
        </div>

        {/* Wave Divider */}
        <div className="w-full mt-20">
          <WaveDivider colors={['#007A5E', '#000000', '#DC143C']} />
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent">
                Join the Movement
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Be part of the change. Sign up to volunteer or show your support.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-green-50 border-2 border-green-700/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how you&apos;d like to be involved..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-700 focus:outline-none min-h-32 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold rounded-lg border border-green-900"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Sign Up to Volunteer'}
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg border border-green-900"
              >
                <a
                  href="https://wa.me/254787937065"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </form>
          </Card>
        </div>

        {/* Wave Divider */}
        <div className="w-full mt-20">
          <WaveDivider colors={['#000000', '#007A5E', '#DC143C']} />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white py-12">
        <div className="absolute top-0 left-0 right-0 w-full">
          <WaveDivider colors={['#007A5E', '#DC143C', '#000000']} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-700 to-red-600 flex items-center justify-center text-white font-bold">
                  DO
                </div>
                <span className="font-bold text-lg">Daniel Omondi</span>
              </div>
              <p className="text-gray-400">
                MCA Candidate for Ngando Ward 2026
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#manifesto" className="hover:text-white transition">
                    Manifesto
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="hover:text-white transition">
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://wa.me/254787937065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp: +254 787 937 065
                  </a>
                </li>
                <li className="text-gray-500">Ngando Ward, Nairobi</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Daniel Omondi for MCA. Transforming Ngando Ward with
              integrity, fairness, and respect.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
