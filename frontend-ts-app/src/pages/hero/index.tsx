"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const sections = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Research",
    "Blogs",
    "Contact",
];

export default function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div
            className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
        >
            {/* Background Image */}
            <img
                src="/background.jpg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />


            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 px-4 pt-3 transition-all duration-300">
                <div
                    className={`mx-auto max-w-7xl flex justify-between items-center px-6 py-3 rounded-2xl shadow-lg transition-all duration-300
            ${scrolled
                            ? "bg-white/50 backdrop-blur-lg border border-white/30"
                            : "bg-white/20 backdrop-blur-md border border-white/20"
                        }`}
                >
                    {/* Logo + Name */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/logo.jpg"
                            alt="Sheltarc Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <h1 className="font-bold text-lg sm:text-xl text-[#E3963E] tracking-wide">
                            SHELT + ARC
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 text-sm sm:text-lg font-medium">
                        {sections.map((section) => (
                            <ScrollLink
                                key={section}
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-white hover:text-[#E3963E] transition"
                            >
                                {section}
                            </ScrollLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="link"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="text-white" />
                            ) : (
                                <Menu className="text-white" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black/80 backdrop-blur rounded-2xl mt-2 w-full flex flex-col items-center py-4 space-y-4">
                        {sections.map((section) => (
                            <ScrollLink
                                key={section}
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-white hover:text-[#E3963E]"
                            >
                                {section}
                            </ScrollLink>
                        ))}
                    </div>
                )}
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

            {/* Hero Section */}
            <section
                id="home"
                className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 pt-22 z-20"
            >
                <div className="items-center justify-between w-full gap-12 lg:p-10">
                    {/* Client Logos Section */}
                    <div className="mb-2">
                        <div className="flex items-center gap-4 mb-6">
                            {/* Circular Client Logos */}
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-lg">
                                    <img src="/ngx.png" alt="Client 1" className="w-8 h-8 object-contain" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-lg">
                                    <img src="/elektrint.jpg" alt="Client 2" className="w-8 h-8 rounded-full object-contain" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-lg">
                                    <img src="/shell.png" alt="Client 3" className="w-8 h-8 object-contain" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-lg">
                                    <img src="/templars.jpg" alt="Client 4" className="w-8 h-8 object-contain" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 font-medium">50+ successful projects completed</p>
                        </div>
                    </div>
                    {/* Left Content */}
                    <div className="text-left lg:w-1/2">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                            Building <span className="text-[#E3963E]">Dreams</span>, <br />
                            Managing <span className="text-[#E3963E]">Reality</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-200 max-w-lg">
                            Shelt + Arc is your go-to team for buildings that inspire — uniting
                            architects, engineers, and quantity surveyors to handle everything
                            from design and project management to full-scale construction.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href="mailto:sheltarc.llc@gmail.com">
                                <Button
                                    size="lg"
                                    className="bg-[#E3963E] hover:bg-[#cf7d2d] text-white font-semibold"
                                >
                                    Let’s Talk →
                                </Button>
                            </a>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#E3963E] text-[#E3963E] hover:bg-[#E3963E] hover:text-white"
                                >
                                    View Projects
                                </Button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
