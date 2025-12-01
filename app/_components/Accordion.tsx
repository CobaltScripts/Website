'use client';

import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface AccordionProps {
    question: string;
    children: React.ReactNode;
}

export default function Accordion({ question, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 transition-all duration-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left font-medium text-white hover:text-gray-300 transition-colors focus:outline-none"
            >
                <span className="text-xl font-bold">{question}</span>
                <IoChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="pb-5 text-gray-300 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
