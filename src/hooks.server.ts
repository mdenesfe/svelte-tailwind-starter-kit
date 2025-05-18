import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Chrome DevTools ve diğer özel istekleri ele al
  if (event.url.pathname.includes('/.well-known/appspecific')) {
    // Statik dosyadan gelecek cevabı bekle
    const response = await resolve(event);
    
    // Eğer 404 dönüyorsa ve Chrome DevTools ise boş bir 200 yanıtı döndür
    if (response.status === 404) {
      return new Response(JSON.stringify({ devtools: { version: "1.0" } }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return response;
  }
  
  // Diğer tüm istekler için normal akışa devam et
  return resolve(event);
}