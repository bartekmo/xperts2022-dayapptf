apt update
apt install nodejs npm -y
cd /opt
git clone https://github.com/bartekmo/xperts2022-dayapp.git
cd xperts2022-dayapp
npm install
TODAY=Tuesday node .
