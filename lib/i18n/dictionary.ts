export type Locale = "en" | "es"

export const locales: Locale[] = ["en", "es"]

export function localePath(locale: Locale, path: string = "") {
  const base = locale === "es" ? "/es" : ""
  if (!path) return base || "/"
  return `${base}${path}`
}

const dictionary = {
  en: {
    header: {
      nav: [
        { href: "#about", label: "About" },
        { href: "#categories", label: "Categories" },
        { href: "#markets", label: "Markets" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Start a Partnership",
      toggleMenu: "Toggle menu",
      switchLanguage: "Español",
    },
    footer: {
      tagline: "Global Trade · United States",
      copyright: "© 2026 Domi Global Group. All rights reserved.",
      legalLinks: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/responsible-disclosure", label: "Responsible Disclosure" },
      ],
    },
    cookieConsent: {
      text: "We use a first-party cookie to remember your choice here. See our",
      linkLabel: "Cookie Policy",
      textAfter: "for details.",
      necessaryOnly: "Necessary Only",
      acceptAll: "Accept All",
    },
    home: {
      hero: {
        titleLine1: "We Source. We Buy.",
        titleLine2: "We Deliver.",
        paragraph:
          "Domi Global Group is a Miami-based wholesale trading company. We purchase consumer goods directly from authorized distributors and move them through our distribution network across the United States, Mexico, and Canada. We are looking to build serious, long-term supplier partnerships.",
        ctaPrimary: "Start a Partnership →",
        ctaSecondary: "Our Categories",
        stats: [
          { value: "3", label: "Markets" },
          { value: "5+", label: "Categories" },
          { value: "Miami", label: "Florida HQ" },
          { value: "24h", label: "Response" },
        ],
        imageAlt: "A courier delivering a package to a customer's front door",
      },
      about: {
        imageAlt: "A courier handing a package to a customer at an office",
        eyebrow: "Who We Are",
        checkmarks: [
          {
            title:
              "Legally registered company — Active & Good Standing in Florida",
            description:
              "A Florida company in active, good standing — fully able to operate as a wholesale buyer.",
          },
          {
            title: "Valid Resale Certificate for tax-exempt wholesale purchases",
            description:
              "Our Resale Certificate lets us purchase inventory tax-exempt for wholesale resale.",
          },
          {
            title: "Miami-based operations with national distribution reach",
            description:
              "Our Miami operations give us direct access to major US distribution networks.",
          },
          {
            title:
              "Dedicated purchasing team — fast and professional communication",
            description:
              "We respond within 24 hours with clear, easy communication.",
          },
        ],
      },
      categories: {
        eyebrow: "Product Categories",
        title: "What we trade",
        paragraph:
          "We actively purchase from authorized distributors across the most in-demand consumer categories in the US market.",
      },
      markets: {
        eyebrow: "Our Markets",
        title: "Where We Operate",
        paragraph: "Three major North American markets, millions of end consumers.",
        items: [
          { flag: "🇺🇸", name: "United States" },
          { flag: "🇲🇽", name: "Mexico" },
          { flag: "🇨🇦", name: "Canada" },
        ],
      },
      ctaBanner: {
        title: "Ready to become a trusted supplier?",
        paragraph:
          "Join our network of authorized distributors and start a long-term wholesale partnership with Domi Global Group.",
      },
      contact: {
        title: "Interested in Supplying Us?",
        paragraph:
          "We are actively looking for authorized distributors and brand owners to establish long-term supply agreements. If you represent a brand or distribute consumer goods and are looking for a serious, consistent wholesale buyer — we want to hear from you. Fill out the form and our purchasing team will get back to you within 24 hours.",
        email: { label: "Email", value: "sales@domi-globalgroup.com" },
        address: { label: "Address", value: "Miami, FL" },
        hours: { label: "Business Hours", value: "Mon–Fri · 9am–6pm EST" },
      },
    },
    categoriesPage: {
      eyebrow: "Product Categories",
      title: "Everything we trade",
      paragraph:
        "The full range of consumer categories we actively purchase and distribute across the US market.",
      metaTitle: "Product Categories | Domi Global Group",
      metaDescription:
        "Every consumer product category Domi Global Group sources and purchases across the United States, Mexico, and Canada.",
    },
    contactForm: {
      firstName: "First name",
      lastName: "Last name",
      email: "Business email",
      company: "Company name",
      message: "Message",
      messagePlaceholder:
        "Tell us about your brand and the products you distribute...",
      submit: "Submit Wholesale Inquiry →",
      sending: "Sending…",
      successTitle: "Message sent",
      successBody:
        "Thank you for reaching out. Our purchasing team will get back to you within 24 hours.",
      genericError: "Something went wrong. Please try again.",
    },
  },
  es: {
    header: {
      nav: [
        { href: "#about", label: "Nosotros" },
        { href: "#categories", label: "Categorías" },
        { href: "#markets", label: "Mercados" },
        { href: "#contact", label: "Contacto" },
      ],
      cta: "Iniciar una Asociación",
      toggleMenu: "Alternar menú",
      switchLanguage: "English",
    },
    footer: {
      tagline: "Comercio Global · Estados Unidos",
      copyright: "© 2026 Domi Global Group. Todos los derechos reservados.",
      legalLinks: [
        { href: "/privacy", label: "Política de Privacidad" },
        { href: "/cookies", label: "Política de Cookies" },
        { href: "/terms", label: "Términos y Condiciones" },
        { href: "/responsible-disclosure", label: "Divulgación Responsable" },
      ],
    },
    cookieConsent: {
      text: "Utilizamos una cookie propia para recordar su elección aquí. Consulte nuestra",
      linkLabel: "Política de Cookies",
      textAfter: "para más detalles.",
      necessaryOnly: "Solo lo Necesario",
      acceptAll: "Aceptar Todo",
    },
    home: {
      hero: {
        titleLine1: "Buscamos. Compramos.",
        titleLine2: "Entregamos.",
        paragraph:
          "Domi Global Group es una empresa mayorista con sede en Miami. Compramos bienes de consumo a distribuidores autorizados y los distribuimos en Estados Unidos, México y Canadá, buscando alianzas serias y duraderas.",
        ctaPrimary: "Iniciar Ahora →",
        ctaSecondary: "Nuestras Categorías",
        stats: [
          { value: "3", label: "Mercados" },
          { value: "5+", label: "Categorías" },
          { value: "Miami", label: "Sede en Florida" },
          { value: "24h", label: "Respuesta" },
        ],
        imageAlt: "Un mensajero entregando un paquete en la puerta de un cliente",
      },
      about: {
        imageAlt: "Un mensajero entregando un paquete a un cliente en una oficina",
        eyebrow: "Quiénes Somos",
        checkmarks: [
          {
            title: "Empresa legalmente registrada — Activa y en regla en Florida",
            description:
              "Empresa de Florida activa y en regla — con plena capacidad para operar como comprador mayorista.",
          },
          {
            title:
              "Certificado de Reventa válido para compras mayoristas exentas de impuestos",
            description:
              "Nuestro Certificado de Reventa nos permite comprar inventario exento de impuestos para reventa mayorista.",
          },
          {
            title: "Operaciones con sede en Miami y alcance de distribución nacional",
            description:
              "Nuestras operaciones en Miami nos dan acceso directo a las principales redes de distribución de EE. UU.",
          },
          {
            title:
              "Equipo de compras dedicado — comunicación rápida y profesional",
            description:
              "Respondemos en menos de 24 horas con comunicación clara y sencilla.",
          },
        ],
      },
      categories: {
        eyebrow: "Categorías de Productos",
        title: "Lo que comercializamos",
        paragraph:
          "Compramos activamente a distribuidores autorizados en las categorías de consumo más demandadas del mercado estadounidense.",
      },
      markets: {
        eyebrow: "Nuestros Mercados",
        title: "Dónde Operamos",
        paragraph: "Tres grandes mercados norteamericanos, millones de consumidores finales.",
        items: [
          { flag: "🇺🇸", name: "Estados Unidos" },
          { flag: "🇲🇽", name: "México" },
          { flag: "🇨🇦", name: "Canadá" },
        ],
      },
      ctaBanner: {
        title: "¿Listo para convertirse en un proveedor de confianza?",
        paragraph:
          "Únase a nuestra red de distribuidores autorizados e inicie una alianza mayorista a largo plazo con Domi Global Group.",
      },
      contact: {
        title: "¿Le interesa ser nuestro proveedor?",
        paragraph:
          "Estamos buscando activamente distribuidores autorizados y propietarios de marcas para establecer acuerdos de suministro a largo plazo. Si representa una marca o distribuye bienes de consumo y busca un comprador mayorista serio y constante, queremos saber de usted. Complete el formulario y nuestro equipo de compras se pondrá en contacto con usted en un plazo de 24 horas.",
        email: { label: "Correo Electrónico", value: "sales@domi-globalgroup.com" },
        address: { label: "Dirección", value: "Miami, FL" },
        hours: { label: "Horario de Atención", value: "Lun–Vie · 9am–6pm EST" },
      },
    },
    categoriesPage: {
      eyebrow: "Categorías de Productos",
      title: "Todo lo que comercializamos",
      paragraph:
        "La gama completa de categorías de consumo que compramos y distribuimos activamente en el mercado estadounidense.",
      metaTitle: "Categorías de Productos | Domi Global Group",
      metaDescription:
        "Todas las categorías de productos de consumo que Domi Global Group compra y distribuye en Estados Unidos, México y Canadá.",
    },
    contactForm: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico empresarial",
      company: "Nombre de la empresa",
      message: "Mensaje",
      messagePlaceholder: "Cuéntenos sobre su marca y los productos que distribuye...",
      submit: "Enviar Consulta Mayorista →",
      sending: "Enviando…",
      successTitle: "Mensaje enviado",
      successBody:
        "Gracias por contactarnos. Nuestro equipo de compras se pondrá en contacto con usted en un plazo de 24 horas.",
      genericError: "Algo salió mal. Por favor, inténtelo de nuevo.",
    },
  },
} as const

export function getDictionary(locale: Locale) {
  return dictionary[locale]
}
