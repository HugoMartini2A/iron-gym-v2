/**
 * Compression du modèle de statue du hero (revue DA — « sans perte visible »).
 * Applique EXT_meshopt_compression (quantification haute) → réduit fortement le
 * poids sans altération visible. Produit public/statue.glb (préféré par le
 * loader, qui a le décodeur meshopt enregistré).
 *
 * Usage : node scripts/compress-statue.mjs
 */
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression } from '@gltf-transform/extensions';
import { reorder, quantize, weld, dedup, prune } from '@gltf-transform/functions';
import { MeshoptEncoder } from 'meshoptimizer';

await MeshoptEncoder.ready;

const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression])
  .registerDependencies({ 'meshopt.encoder': MeshoptEncoder });

const doc = await io.read('public/statue/scene.gltf');

await doc.transform(
  dedup(),
  prune(),
  weld(),
  // Quantification haute qualité (14 bits position) → visuellement sans perte.
  quantize({ quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 }),
  reorder({ encoder: MeshoptEncoder, target: 'size' }),
);

// Active la compression meshopt à l'écriture.
doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({
  method: EXTMeshoptCompression.EncoderMethod.QUANTIZE,
});

await io.write('public/statue.glb', doc);
console.log('OK → public/statue.glb');
