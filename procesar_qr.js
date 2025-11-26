/**
 * procesar_qr.js
 * Decodifica QR de factura ARCA/AFIP y devuelve datos limpios.
 */

function decodeArcaQR(qr) {
  try {
    const url = new URL(qr);
    const params = Object.fromEntries(url.searchParams.entries());
    return params;
  } catch (e) {
    return { error: "QR inválido", details: e.toString() };
  }
}

// Entrada desde GitHub Actions
const qr = process.argv[2];
const id = process.argv[3];

const datos = decodeArcaQR(qr);

// Formato de salida (lo que volverá a AppSheet vía Worker u otra API)
console.log(JSON.stringify({
  id: id,
  datos_qr: datos
}));
