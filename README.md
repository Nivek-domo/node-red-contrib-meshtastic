# node-red-contrib-meshtastic (fork)

🎯 Version modifiée de la palette [node-red-contrib-meshtastic](https://github.com/meshtastic/node-red-contrib-meshtastic) avec les derniers fichiers protobufs et la version compilée incluse (`dist/`), pour une installation facile.

---

## ✅ Installation rapide (utilisateur final)

Sur une machine avec Node-RED déjà installé :

```bash
cd ~/.node-red
npm install https://github.com/Nivek-domo/node-red-contrib-meshtastic.git#encode
```

puis redémarrez
```bash
node-red-restart
```

Pour les développeurs
Si vous souhaitez modifier ou reconstruire la palette :

```bash
git clone https://github.com/Nivek-domo/node-red-contrib-meshtastic.git
cd node-red-contrib-meshtastic
npm install
npm run build
```








## pour être autonome 

# 🧰 Pré-requis : ce qu’on installe
Sur ton RPi :

```bash
sudo apt update
sudo apt install -y git curl build-essential protobuf-compiler

```

Installer Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Installer générateurs TypeScript et buf
```bash
sudo npm install -g protoc-gen-ts
sudo npm install -g @bufbuild/buf
```

# 📥 Étape 1 : Cloner les dépôts nécessaires
```bash
mkdir -p ~/meshtastic-protobuf-sync
cd ~/meshtastic-protobuf-sync
```

# Clone des protobufs Meshtastic officiels
```bash
git clone https://github.com/meshtastic/protobufs.git
```

# Clone de la palette de Valentin
```bash
git clone https://github.com/valentintintin/node-red-contrib-meshtastic.git node-red-contrib-meshtastic-valentin
```

# Clone des proto Google pour descriptor.proto
```bash
git clone https://github.com/protocolbuffers/protobuf.git google-protobuf-src
cd google-protobuf-src
git checkout v21.12
cd ..
```

## 🛠️ Étape 2 : Compiler les .proto en .ts
# Créer le dossier de sortie
```bash
mkdir -p protobufs/generated/ts
```

# Lancer protoc avec les bons chemins
```bash
cd node-red-contrib-meshtastic-valentin
```

```bash
protoc \
  --plugin=protoc-gen-ts=$(which protoc-gen-ts) \
  --ts_out ../protobufs/generated/ts \
  -I ../protobufs \
  -I ../protobufs/meshtastic \
  -I ../google-protobuf-src/src \
  ../protobufs/meshtastic/*.proto
```

## 📁 Étape 3 : Copier les fichiers générés dans la palette
# Nettoyer puis copier
```bash
rm -rf src/protos
mkdir -p src/protos
cp -r ../protobufs/generated/ts/* src/protos/
```

## 🏗️ Étape 4 : Installer et construire la palette
Dans node-red-contrib-meshtastic-valentin :
```bash
npm install --legacy-peer-deps
npm run build
```

# copier manuellement
```bash
cp -r ~/meshtastic-protobuf-sync/node-red-contrib-meshtastic-valentin/* ~/.node-red/node_modules/@meshtastic/node-red-contrib-meshtastic/
```




---------------------------------------------------------------------------------
# pour mettre à jour par la suite en 2 commandes

---------------------------------------------------------------------------------


## ✅ Script update-meshtastic.sh
Crée un fichier dans ~/meshtastic-protobuf-sync/ :
```bash
nano ~/meshtastic-protobuf-sync/update-meshtastic.sh
```
Et colle ceci :
```bash
#!/bin/bash

# === CONFIGURATION ===
MESHTASTIC_REPO="https://github.com/meshtastic/protobufs.git"
MESHTASTIC_NODE_RED_DIR="$HOME/.node-red/node_modules/@meshtastic/node-red-contrib-meshtastic"
SYNC_DIR="$HOME/meshtastic-protobuf-sync"
PROTOBUF_DIR="$SYNC_DIR/protobufs"
GOOGLE_PROTOBUF_DIR="$SYNC_DIR/google-protobuf-src/src"
NODE_RED_MESHTASTIC="$SYNC_DIR/node-red-contrib-meshtastic-valentin"

# === 1. Préparer les dossiers ===
mkdir -p "$PROTOBUF_DIR/generated/ts"

cd "$SYNC_DIR"

# === 2. Mettre à jour les protobufs ===
if [ -d "$PROTOBUF_DIR/.git" ]; then
    echo "🔄 Mise à jour du dépôt protobufs..."
    cd "$PROTOBUF_DIR" && git pull origin master && cd ..
else
    echo "📥 Clonage du dépôt protobufs..."
    git clone "$MESHTASTIC_REPO" "$PROTOBUF_DIR"
fi

# === 3. Compiler les fichiers proto ===
echo "⚙️ Compilation des fichiers protobufs..."

cd "$NODE_RED_MESHTASTIC"

protoc \
  --plugin=protoc-gen-ts=$(which protoc-gen-ts) \
  --ts_out "$PROTOBUF_DIR/generated/ts" \
  -I "$PROTOBUF_DIR" \
  -I "$PROTOBUF_DIR/meshtastic" \
  -I "$GOOGLE_PROTOBUF_DIR" \
  "$PROTOBUF_DIR/meshtastic/"*.proto

if [ $? -ne 0 ]; then
    echo "❌ Échec de la compilation des protobufs."
    exit 1
fi

# === 4. Copier les fichiers compilés dans src/protos ===
echo "📦 Copie des fichiers compilés dans src/protos..."
rm -rf "$NODE_RED_MESHTASTIC/src/protos"
mkdir -p "$NODE_RED_MESHTASTIC/src/protos"
cp -r "$PROTOBUF_DIR/generated/ts"/* "$NODE_RED_MESHTASTIC/src/protos/"

# === 5. Construire le module ===
echo "🔧 Construction du module Node-RED..."
cd "$NODE_RED_MESHTASTIC"
npm install --legacy-peer-deps
npm run build

# === 6. Copier les fichiers vers Node-RED ===
echo "📝 Mise à jour de la palette Node-RED..."
cp -r "$NODE_RED_MESHTASTIC/"* "$MESHTASTIC_NODE_RED_DIR/"

# === 7. Fin ===
echo "✅ Mise à jour terminée. Redémarre Node-RED pour appliquer les changements."
```

🛠️ Donne les permissions :
```bash
chmod +x ~/meshtastic-protobuf-sync/update-meshtastic.sh
```

▶️ Exécution :
```bash
~/meshtastic-protobuf-sync/update-meshtastic.sh
```

🔁 Puis redémarre Node-RED :
```bash
sudo systemctl restart nodered.service
```
ou
node-red-stop
node-red-start



