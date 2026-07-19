#!/bin/bash
# Double-clique ce fichier pour publier le site :
# il envoie le dernier commit vers GitHub, ce qui déclenche
# automatiquement le déploiement Vercel (iron-gym-v2.vercel.app).
cd "$(dirname "$0")" || exit 1
echo "==============================================="
echo "  IRON GYM V2 — publication"
echo "  Dossier : $(pwd)"
echo "==============================================="
echo ""
echo "Envoi vers GitHub (branche main)..."
git push origin main
code=$?
echo ""
if [ $code -eq 0 ]; then
  echo "✅  Push OK — Vercel déploie automatiquement."
  echo "    Production : https://iron-gym-v2.vercel.app  (1 à 2 min)"
else
  echo "❌  Push échoué (code $code)."
  echo "    Vérifie ta connexion GitHub, puis relance ce fichier."
fi
echo ""
echo "Appuie sur une touche pour fermer."
read -n 1 -s
