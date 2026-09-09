# 📢 EdOfuscator

### 📦 **Automated Binary Encrypter for Minecraft Plugins (Maven-Ready)**

**EdOfuscator** is an automated, zero-configuration protection tool designed for Spigot/Paper Minecraft plugins built with Maven. It injects an inline secure ClassLoader (Bootstrap) and completely encrypts standard compiled classes into raw, un-decompilable cryptographic byte arrays to break Java reverse-engineering tools.

Runs entirely on native Python 3 with no third-party dependencies, making it **100% compatible with Windows & Linux across both 32-bit and 64-bit architectures**.

---

## 🛠️ How to Use (Step-by-Step)

Follow these simple steps to compile and secure your plugin:

### 1. Place the Script
* Download the protected `EdOfuscator.py` script from the Releases section.
* Drop the file directly into your **Maven project root directory** (the exact same folder where your `pom.xml` file is located).

### 2. Run the Command
Open your terminal (CMD, PowerShell, or Linux Bash) in your project folder and run the script:

* **On Windows (CMD / PowerShell):**
  ```cmd
  python EdOfuscator.py
  ```
* **On Linux (Bash):**
  ```bash
  python3 EdOfuscator.py
  ```

### 3. Retrieve your Protected Plugin
The script will handle the rest automatically:
1. It verifies your environment folders and structural dependencies.
2. It summons Maven (`mvn clean package`) internally in the background to build your project.
3. It locks down and encrypts every class block on the fly.

**Result:** Check your `/target` directory. Your secured, un-decompilable plugin will be exported with the `_protected.jar` suffix, ready for deployment!
