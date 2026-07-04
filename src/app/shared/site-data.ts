// Datos de contacto y links del sitio, centralizados.
export const SITE = {
  phoneDisplay: '11 3160 1069',
  phoneCalefaccion: '541131601069',
  phoneAire: '541151534100',
  email: 'Info@ztclima.com.ar',
  address: 'Gdor. Marcelino Ugarte 3033, Olivos, Bs. As.',
  mapsUrl: 'https://maps.app.goo.gl/R22BXo4pvteVD8tc7',
  reviewUrl: 'https://maps.app.goo.gl/R22BXo4pvteVD8tc7',
  pressUrl:
    'https://www.lanacion.com.ar/propiedades/construccion-y-diseno/cuanto-cuesta-instalar-losa-radiante-por-metro-cuadrado-nid01082025/',
  whatsappMessage: 'Hola ZT Clima, necesito asesoramiento.',
} as const;

export function waUrl(
  phone: string = SITE.phoneCalefaccion,
  message: string = SITE.whatsappMessage
): string {
  return `https://api.whatsapp.com/send/?type=phone_number&app_absent=0&phone=${phone}&text=${encodeURIComponent(message)}`;
}
