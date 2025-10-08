export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  47
                </div>
                <div>
                  <div className="font-bold text-lg">GEN 47 INITIATIVE</div>
                  <div className="text-sm text-white/70">FOUNDATION</div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Empowering Kenyan youth across all 47 counties through dialogue, mentorship, and community impact.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#programs" className="text-white/80 hover:text-sky-400 transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-white/80 hover:text-sky-400 transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#get-involved" className="text-white/80 hover:text-sky-400 transition-colors">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-sky-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Our Mission</h4>
              <p className="text-white/80 text-sm leading-relaxed italic">"One Nation. Every County. Every Youth."</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} GEN 47 INITIATIVE FOUNDATION. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
