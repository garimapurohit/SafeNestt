# install.py
# SafeNest full installer script for Debian-based systems
# IGNORE (Colors)
BLACK = '\033[30m'
RED = '\033[31m'
GREEN = '\033[32m'
YELLOW = '\033[33m' # orange on some systems
BLUE = '\033[34m'
MAGENTA = '\033[35m'
CYAN = '\033[36m'
LIGHT_GRAY = '\033[37m'
DARK_GRAY = '\033[90m'
BRIGHT_RED = '\033[91m'
BRIGHT_GREEN = '\033[92m'
BRIGHT_YELLOW = '\033[93m'
BRIGHT_BLUE = '\033[94m'
BRIGHT_MAGENTA = '\033[95m'
BRIGHT_CYAN = '\033[96m'
WHITE = '\033[97m'

RESET = '\033[0m' # called to return to standard terminal text color

import os
import subprocess
import sys
from os import system

# --- Helper functions ---
def check_root():
    if os.geteuid() != 0:
        sys.exit("\n❌ Please run this script as root. Use: sudo python3 install.py\n")
'''
Order of installing
Installing git wget curl DONE
Node DONE
Setup UI (run npm install and fix the thing) DONE
Python modules DONE
Setup wireguard DONE
Setting up Google Safe Search API DONE
deps folder DONE
Setting up Docker DONE
Setup Filebrowser DONE 
Setup Jellyfin DONE
'''

def install_apt_packages():
    print(f"{BRIGHT_YELLOW}During installations of packages there will be a time when you will see the installation stopped and you see something like {BRIGHT_BLUE}root@server{BRIGHT_YELLOW} or something similar, type exit and hit enter to continue the installation...{RESET}")
    confirm = 'y'
    confirm = input(f"{BRIGHT_GREEN}Do you understand?(Y/n) {RESET}")
    if confirm.lower() == 'n':
        sys.exit(f"{BRIGHT_RED}Exiting...{RESET}")
    subprocess.run(["apt", "update"])
    subprocess.run(["apt", "install", "-y",
         "python3", "python3-pip", "python3-flask", "python3-requests", "docker.io", "docker-compose",
         "git", "curl", "ufw"])
    system("sudo usermod -aG docker $USER")
    system("newgrp docker")

def install_node(): # Taken from https://nodejs.org/en/download
    system('''
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".
# Verify npm version:
npm -v # Should print "10.9.2".''')
    system('''export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" ''')

def setup_ui():
    system("./setup-web-ui.sh")

def setup_vpn():
    system("curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh")
    system("chmod +x wireguard-install.sh")
    system("./wireguard-install.sh")

def api_key():
    KEY = input("You are now required to get an API Key for Google Safe Search, follow the steps in the video to get yours https://www.youtube.com/watch?v=LtzJnC-4ll8 , once acquired, paste it here: ")
    f = open('key', 'w')
    f.writelines(KEY)
    f.close()

def setup_docker():
    system("mkdir deps")
    system("mkdir deps/cloud-storage")
    system("mkdir deps/jellyfin")
    system("mkdir deps/jellyfin/cache")
    system("mkdir deps/jellyfin/config")
    system("mkdir deps/cloud-storage/data")
    system("mkdir deps/cloud-storage/data/jellyfin-media")
    system("mkdir deps/cloud-storage/config")
    system('''docker run -d \
  --name jellyfin \
  --network host \
  -v $(pwd)/deps/jellyfin/config:/config \
  -v $(pwd)/deps/cloud-storage/data/jellyfin-media:/media \
  jellyfin/jellyfin
''')
    system('''docker run -d \
  --name filebrowser \
  -v $(pwd)/cloud-storage:/srv \
  -v filebrowser_config:/config \
  -p 8081:80 \
  filebrowser/filebrowser
''')
    system('docker stop jellyfin && docker stop filebrowser')

if __name__ == "__main__":
    try:
        check_root()
        print("THIS SETUP REQUIRES PRESENCE OF A USER")
        print(f"{BRIGHT_GREEN}Setting up SafeNest...{RESET}\n")
        print(f"{BRIGHT_GREEN}Installing dependencies...{RESET}\n")
        install_apt_packages()
        print(f"{BRIGHT_GREEN}Installing Node.js...{RESET}\n")
        install_node()
        print(f"{BRIGHT_YELLOW}ATTENTION REQUIRED! {BRIGHT_GREEN} Setting up VPN...{RESET}\n")
        setup_vpn()
        print(f"{BRIGHT_GREEN}Setting up Google Safe Search API...{RESET}\n")
        api_key()
        print(f"{BRIGHT_GREEN}Setting up Docker...{RESET}\n")
        setup_docker()
        print(f"Setup almost completed, for the final step, when this program exits, type {BRIGHT_GREEN}./setup-web-ui.sh{RESET} and hit enter to setup the web UI")
    except Exception as e:
        sys.exit(f"Exception {e} has occured, the setup will now terminate")