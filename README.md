# 📢 Public Release: EdOfuscator

### 📦 **Headline**
**EdOfuscator - Pure Python Binary Encrypter for Minecraft Plugins (Maven-Ready)**

### 📝 **Description**
**EdOfuscator** is an automated binary-level protection tool designed for Spigot/Paper Minecraft plugins built with Maven. It converts standard Java compiled classes into raw, un-decompilable cryptographic byte arrays while generating an inline secure ClassLoader (Bootstrap) dynamically.

Unlike heavy commercial products, EdOfuscator runs entirely on native Python 3. This makes it **100% compatible with Windows & Linux on both 32-bit and 64-bit architectures** with zero third-party dependencies.

### 🛡️ **Key Features**
* **100% Binary Protection:** Encrypts standard bytecode, breaking traditional Java decompilers (JD-GUI, Fernflower, Bytecode Viewer).
* **Zero Configuration Setup:** Scans `plugin.yml` automatically, routes paths, and patches entry points seamlessly.
* **Multiplatform Core:** Works natively across Windows, Linux, x86, and x64 platforms.
* **Maven Lifecycle Hook:** Integrates directly into `mvn clean package`.

---

## 🛠️ Setup Instructions

Follow these steps to deploy **EdOfuscator** on Windows or Linux (32-bit / 64-bit):

### 1. Place the Script
* Download or copy the `EdOfuscator.py` code.
* Place the file directly into your **Maven project root directory** (the exact same folder where your `pom.xml` is located).

### 2. Configure your `pom.xml`
Open your `pom.xml` file and paste the following configuration inside your `<build><plugins>` section. This binds the protector directly into your build lifecycle:

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>3.1.0</version>
    <executions>
        <execution>
            <id>run-edofuscator</id>
            <phase>package</phase>
            <goals>
                <goal>exec</goal>
            </goals>
            <configuration>
                <executable>python</executable>
                <workingDirectory>\${project.basedir}</workingDirectory>
                <arguments>
                    <argument>EdOfuscator.py</argument>
                    <argument>-java</argument>
                    <argument>project.build.directory/{project.build.finalName}.jar</argument>
                </arguments>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### 3. Initialize & Inject Dependencies
Open your terminal (CMD, PowerShell, or Linux Bash) in your project root folder and execute the initialization routine to safely auto-patch your source paths:

* **Windows:**
  ```cmd
  python EdOfuscator.py
  ```
* **Linux:**
  ```bash
  python3 EdOfuscator.py
  ```

### 4. Build and Encrypt
Compile your plugin normally. Maven will automatically summon **EdOfuscator** to lock down the output:

```bash
mvn clean package
```

Your secure, un-decompilable `.jar` file will be generated inside the `/target` directory with a `_protected.jar` suffix.
