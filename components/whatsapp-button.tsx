'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    const phoneNumber = '573014162947';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-8 w-8" />
        </a>
    );
}
