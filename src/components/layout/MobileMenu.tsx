import React from 'react';
import { PillButton } from '../ui/PillButton';
import { navLinks } from '../../config/clinic';
import { openWhatsApp } from '../../config/analytics';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onScheduleClick,
}) => {
  if (!isOpen) return null;

  const handleCta = () => {
    onClose();
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      openWhatsApp('mobile_menu');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-40 bg-[#5F9AD1]/95 backdrop-blur-md flex flex-col justify-between px-8 py-20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
    >
      <nav className="flex flex-col gap-6 mt-8">
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            style={{
              transitionDelay: `${100 + index * 60}ms`,
              transitionDuration: '500ms',
            }}
            className="text-3xl font-light text-white hover:text-[#EBFA73] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div 
        style={{ transitionDelay: '400ms', transitionDuration: '500ms' }}
        className="w-full pt-6"
      >
        <PillButton 
          label="Agendar por WhatsApp" 
          onClick={handleCta}
          className="w-full justify-between py-4 text-xl" 
        />
      </div>
    </div>
  );
};
