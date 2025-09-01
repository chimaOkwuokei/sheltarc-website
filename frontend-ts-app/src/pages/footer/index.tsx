"use client"

import { Mail } from 'lucide-react';
import { FaPhone } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
    return (
        <div className="bg-[#E3963E] border-t border-white/10 text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Left Section */}
                <div>

                    <h2 className="text-2xl font-bold italic bg-gradient-to-r from-[#ffffff] to-[#FFFFFF] bg-clip-text text-transparent">
                        Shelt+Arc Building Services Ltd.
                    </h2>
                    {/* <p className="mt-4 text-white/80">
                        Senior AI Engineer passionate about machine learning, and cutting-edge AI technologies.
                    </p> */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="tel:02013424656"
                            aria-label="Phone"
                            className="p-3 rounded-md hover:bg-white/50"
                        >
                            <FaPhone size={20} />
                        </a>

                        {/* <a href="http://github.com/titoausten" aria-label="Github" className=" p-3 rounded-md hover:bg-white/50">
                            <FaGithub size={20} />
                        </a> */}
                        <a href="mailto:sheltarc.llc@gmail.com" aria-label="Email" className="p-3 rounded-md hover:bg-white/50">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-white/80">
                        {['Home', 'About', 'Projects', 'Designs', 'Contact'].map((item) => (
                            <li key={item}>
                                <ScrollLink
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer hover:text-white/50 text-white"
                                >
                                    {item}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="text-white/80 space-y-2">
                        <p>
                            <span className="font-semibold">Email:</span> sheltarc.llc@gmail.com
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span> Lagos, Nigeria
                        </p>
                        {/* <p className="flex items-center gap-2">
                            <span className="font-semibold">Status:</span>
                            <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span>
                            Available for opportunities
                        </p> */}
                    </div>
                </div>

                {/* Location Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Head Office</h3>
                    <div className="text-white/80 space-y-2">
                        <p>
                            I138 Ikota Shopping Complex VGC, Lekki, Ajah, Lagos State, Nigeria.
                        </p>
                        <p>
                            <span className="font-semibold">Tel 1:</span> 02013424656
                        </p>

                        <p>
                            <span className="font-semibold">Tel 2:</span> 07058423700
                        </p>
                        <p>
                            <span className="font-semibold">Tel 3:</span> 08033244484
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
                © 2025 Shelt+Arc Building Services. All rights reserved.
            </div>
        </div>

    );
}