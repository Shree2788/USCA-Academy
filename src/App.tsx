import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  MapPin, 
  Award, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Globe
} from 'lucide-react';

const features = [
  {
    title: "High University Acceptance Rate",
    description: "Our students enter top institutions like UofT, Waterloo, McMaster, and more.",
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />
  },
  {
    title: "The Best Curriculum",
    description: "We follow the Ontario Curriculum, exceeding all expectations set by the Ministry of Education.",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Guidance Assistance",
    description: "Personalized study plans and university application assistance from our dedicated counselors.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Flexible Intake & Credit Transfer",
    description: "Five intakes a year (Sep, Nov, Feb, Apr, Jul) and credit transfers for previous high school work.",
    icon: <Calendar className="w-6 h-6 text-blue-600" />
  },
  {
    title: "More Teacher Attention",
    description: "Average class size of 5-15 students ensures personalized attention and support.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Best Location",
    description: "Located in the heart of Mississauga, near Square One and major transit routes.",
    icon: <MapPin className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Fully Accredited",
    description: "A fully registered and accredited private school inspected by the Ontario Ministry of Education.",
    icon: <Award className="w-6 h-6 text-blue-600" />
  }
];

const programs = [
  {
    title: "Ontario Secondary School Diploma (OSSD)",
    grades: "Grade 9-12",
    description: "Full-time or part-time program to obtain a high school diploma and apply to universities worldwide."
  },
  {
    title: "University Preparation Program",
    grades: "Grade 12",
    description: "A 1-year program for students who have finished grade 11 or 12 to prepare for top universities."
  },
  {
    title: "International Students",
    grades: "ESL, IELTS, TOEFL",
    description: "Comprehensive language coaching and support to help international students succeed in Canada."
  }
];

const faqs = [
  {
    question: "What's the best private school in Mississauga, Toronto, and Ontario?",
    answer: "USCA Academy is one of the best private schools in Mississauga, Toronto, and Ontario. Families love our small class sizes, personalized learning, and excellent programs for local and international students."
  },
  {
    question: "Does USCA Academy accept international students?",
    answer: "Yes, USCA Academy is proud to welcome international students. We provide ESL, IELTS, and TOEFL programs to help them succeed in the Canadian education system."
  },
  {
    question: "What programs does USCA Academy offer for students?",
    answer: "USCA Academy provides Elementary and middle school programs (Grades 1-8), High school programs for the Ontario Secondary School Diploma (OSSD), University preparation programs, and Language coaching (IELTS, TOEFL, ESL)."
  },
  {
    question: "How is USCA Academy different from other private schools in Mississauga?",
    answer: "USCA Academy has highly qualified and caring teachers with proven traceable results. We maintain small class sizes, normally 5-15 students in each class, ensuring personalized attention."
  },
  {
    question: "How much does it cost to attend USCA Academy?",
    answer: "The tuition fee varies depending on the grade level. For local students, it's $7,000 per year for high school students."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">USCA Academy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Programs</a>
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Features</a>
              <a href="#admissions" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Admissions</a>
              <a href="#faq" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">FAQ</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/school/1920/1080?blur=2" 
            alt="Students on campus" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide mb-6">
              Premier Private Education in Mississauga
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Shape Your Future at <br className="hidden md:block" />
              <span className="text-blue-600">USCA Academy</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
              A leading Canadian Private School offering the Ontario Secondary School Diploma (OSSD) and University Preparation for local and international students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" /> International Students
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Logos Section */}
      <section className="py-10 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Our students are accepted into top universities
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for University Logos */}
            <div className="text-xl font-bold font-serif">University of Toronto</div>
            <div className="text-xl font-bold font-serif">Waterloo</div>
            <div className="text-xl font-bold font-serif">McMaster</div>
            <div className="text-xl font-bold font-serif">Western</div>
            <div className="text-xl font-bold font-serif">Queen's</div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Academic Programs</h2>
            <p className="text-lg text-slate-600">
              We offer full-time and part-time programs tailored to help you achieve your educational goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-semibold text-blue-600 mb-2">{program.grades}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                <p className="text-slate-600 mb-6">{program.description}</p>
                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose USCA Academy?</h2>
                <p className="text-lg text-slate-600 mb-8">
                  From our high university acceptance rate to our prime location in Mississauga, discover what makes us the premier choice for your education.
                </p>
                <img 
                  src="https://picsum.photos/seed/study/800/600" 
                  alt="Students studying" 
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Course Selection</h2>
            <p className="text-lg text-slate-300">
              We offer a wide range of high school courses following the Ontario Curriculum to prepare you for any university program.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mathematics', 'Sciences', 'English', 'Business', 'Computer Science', 'Arts', 'Social Sciences', 'Languages'].map((subject, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">{subject}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">
              View All Courses <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Future?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join USCA Academy today and take the first step towards your dream university.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">USCA Academy</span>
              </div>
              <p className="text-sm">
                Premier Private Education in Mississauga, Ontario. Empowering students to achieve their academic goals.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">OSSD Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">University Preparation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Students</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Night School</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our School</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuition Fees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Mississauga, Ontario, Canada</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} USCA Academy. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
