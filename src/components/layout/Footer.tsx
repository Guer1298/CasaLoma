// src/components/layout/Footer.tsx
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Branding y contacto */}
        <div>
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wider">Casa Loma</h2>
          <p className="mb-1">Hotel Boutique & Terraza Gastro</p>
          <p className="mb-1">Popayán, Colombia</p>
          <p className="mb-1">contacto@casaloma.com</p>
          <p>+57 312 345 6789</p>
        </div>

        {/* Navegación rápida */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Enlaces útiles</h3>
          <ul className="space-y-1">
            <li><a href="/habitaciones" className="hover:underline">Habitaciones</a></li>
            <li><a href="/terraza" className="hover:underline">Restaurante</a></li>
            <li><a href="/eventos" className="hover:underline">Eventos</a></li>
            <li><a href="/contacto" className="hover:underline">Contáctanos</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Síguenos</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com/casaloma_popayan" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/casaloma" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://tripadvisor.com/" aria-label="TripAdvisor" target="_blank" rel="noopener noreferrer">
              <FaTripadvisor />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Casa Loma Hotel Boutique. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
