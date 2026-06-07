const Footer = () => {
    return (
        <footer
             className="text-white px-7 py-16 mt-50px"
            id="contact"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold text-[#4a90e2] mb-4">
                        ADZKA
                    </h3>
                    <p className="text-sm text-gray-200 mb-2">
                        Full Stack Web Developer & UI/UX Designer
                    </p>
                    <p className="text-sm text-gray-400 leading-6">
                        Creating modern and responsive web experiences with cutting-edge
                        technologies.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-base font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Skills */}
                <div>
                    <h4 className="text-base font-semibold mb-4">
                        Skills
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>UI/UX Design</li>
                        <li>Photography</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-base font-semibold mb-4">
                        Follow Me
                    </h4>

                    <div className="flex gap-5">
                        <a
                            href="https://wa.me/6285943652388"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-45px h-45px rounded-full flex items-center justify-center text-[#4a90e2] border-2 border-transparent transition-all duration-300 hover:text-white hover:bg-[#4a90e233] hover:border-[#4a90e2] hover:-translate-y-1"
                        >
                            <i className="fa-brands fa-whatsapp text-[28px]"></i>
                        </a>

                        <a
                            href="https://github.com/ADZKA-AKN"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-45px h-45px rounded-full flex items-center justify-center text-[#4a90e2] border-2 border-transparent transition-all duration-300 hover:text-white hover:bg-[#4a90e233] hover:border-[#4a90e2] hover:-translate-y-1"
                        >
                            <i className="fa-brands fa-github text-[28px]"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/a.dzk_4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-45px h-45px rounded-full flex items-center justify-center text-[#4a90e2] border-2 border-transparent transition-all duration-300 hover:text-white hover:bg-[#4a90e233] hover:border-[#4a90e2] hover:-translate-y-1"
                        >
                            <i className="fa-brands fa-instagram text-[28px]"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
             <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-300 ">
                <p className="mt-10">
                    &copy; 2026 ADZKA WEB. All rights reserved. | Design by{" "}
                    <span className="text-[#4a90e2] font-semibold">
                        Muhammad Adzkarulah
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer