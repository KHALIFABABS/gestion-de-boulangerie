# 🥖 Boulangerie Prestige v4.0

## 📦 Fichiers
- index.html : l'app
- manifest.json : config PWA
- sw.js : service worker (offline)
- icon-192.png / icon-512.png : icônes

## 🚀 Déploiement (gratuit, 2 min)

### Option 1 : Netlify Drop ⭐ (recommandé)
1. Va sur https://app.netlify.com/drop
2. Glisse le dossier complet dans la page
3. Tu obtiens une URL : https://xxx.netlify.app
4. Partage le lien WhatsApp au boulanger

### Option 2 : Vercel
1. https://vercel.com/new
2. Import du dossier
3. URL automatique

### Option 3 : GitHub Pages
1. Créer un repo GitHub
2. Upload les fichiers
3. Settings → Pages → Deploy

## 📱 Installation sur téléphone
Le boulanger ouvre le lien dans Chrome (Android) ou Safari (iPhone) :
- **Android** : menu Chrome → "Ajouter à l'écran d'accueil"
- **iPhone** : bouton Partager → "Sur l'écran d'accueil"

## 🔑 Codes par défaut (PREMIER lancement)
- Patron : `1234`
- Caissier : `0000`
⚠️ Le boulanger DOIT les changer à l'onboarding.

## 💳 Licence
### Format : `BAK-XXXX-XXXX-YYYY`
- Génère tes propres codes avec ce script Node.js :

```javascript
// gen-licence.js
const crypto = require('crypto');
function genLicence(annee = 2026) {
    const p1 = crypto.randomBytes(2).toString('hex').toUpperCase();
    const p2 = crypto.randomBytes(2).toString('hex').toUpperCase();
    return `BAK-${p1}-${p2}-${annee}`;
}
// Génère 100 codes pour 2026
for(let i=0; i<100; i++) console.log(genLicence(2026));