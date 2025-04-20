import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Carrefour de Manutention</h3>
            <p className="text-sm">
              Leader dans la vente, la location et la réparation de matériel de manutention au Maroc
              depuis 12 ans. Votre partenaire de confiance pour chariots élévateurs, nacelles, et plus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neuf" className="text-sm hover:text-blue-300">Matériel Neuf</Link>
              </li>
              <li>
                <Link href="/occasion" className="text-sm hover:text-blue-300">Matériel d&apos;Occasion</Link>
              </li>
              <li>
                <Link href="/location" className="text-sm hover:text-blue-300">Location</Link>
              </li>
              <li>
                <Link href="/pieces" className="text-sm hover:text-blue-300">Pièces de Rechange</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+212710696910">07 10 69 69 10</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:carrefourmanutention@gmail.com">carrefourmanutention@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <a href="https://wa.me/+212710696910">WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-Nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/carrefourmanutention"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/+212710696910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Carrefour de Manutention. Tous droits réservés.
          </p>
          {/* <p className="text-sm mt-2">
            Site réalisé par <a href="https://example.com" className="hover:text-blue-300">Votre Agence</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}