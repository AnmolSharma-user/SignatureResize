
export const environment = {
  production: import.meta.env.PROD,
  development: import.meta.env.DEV,
  baseUrl: import.meta.env.VITE_BASE_URL || 'https://signatureresize.pro',
  appName: 'SignatureResize.pro',
  version: '1.0.0'
};

export const seoConfig = {
  defaultTitle: 'Free Signature Resizer for SSC/PAN/GATE | SignatureResize.pro',
  defaultDescription: 'Free online signature resize tool for government forms. Resize signatures to 10KB-50KB for SSC MTS, PAN card, GATE, RRB, UTI forms. No registration needed.',
  defaultKeywords: 'signature resize, signature resize 10 to 20 kb, signature resize 20kb, ssc mts signature resize, pan card photo signature resize tool, signature resize 50 kb, gate signature resize, rrb signature resize, uti photo signature resize',
  defaultImage: 'https://lovable.dev/opengraph-image-p98pqg.png',
  twitterHandle: '@signatureresize'
};
