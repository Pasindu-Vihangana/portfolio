# <img src="appicon.png" width="48" height="48" valign="middle" style="border-radius:10px;"/> QR2Wallet

> **Category:** Mobile & iOS  
> **GitHub Link:** [Explore on GitHub](https://github.com/Pasindu-Vihangana)  
> **Tags:** `Swift` `iOS SDK` `Cryptography` `OpenSSL` `Apple Wallet Passes`



![QR2Wallet Hero Mockup](hero.jpeg)

QR2Wallet is a **100% standalone, serverless, and offline-capable** iOS application designed to scan any QR code or barcode (such as movie tickets, event passes, national fuel cards, or coupon codes) and instantly compile and sign them into official Apple Wallet passes (`.pkpass`) directly on your device.

Unlike traditional Wallet pass creators that rely on remote cloud signing servers—which compromises privacy and requires active internet connections—QR2Wallet performs all cryptographic parsing and PKCS#7 signature generation **completely on-device** using an embedded distribution of OpenSSL.

<p align="center">
  <img src="dashboard_grid_styled.png" width="40%" alt="Dashboard" />
  <img src="pass_detail_styled.png" width="40%" alt="Pass Details" />
</p>

  
### 📱 Empty Dashboard 
<p align="center">
  <img src="dashboard_empty.png" width="30%" alt="Empty Dashboard" />
  <img src="dashboard_empty_dark.png" width="30%" alt="Empty Dashboard Dark Mode" />
</p>

### 🔑 Creating & Editing Passes
<p align="center">
  <img src="create_pass.png" width="20%" alt="Create Pass - Live Preview" />
  <img src="pass_theme.png" width="20%" alt="Create Pass - Select Theme" />
  <img src="pass_detail.png" width="20%" alt="Pass Editor" />
<img src="pass_customization.png" width="20%" alt="Pass Editor" />
</p>

---

## ✨ Key Features

*   **100% Offline Cryptography**: Signs the pass's `manifest.json` locally on-device using custom C-compiled OpenSSL APIs.
*   **Tile-Like Grid Dashboard**: A premium, color-coordinated dashboard displaying your active passes as a grid of interactive mini passes.
*   **Highly Customizable Editor**: Customize colors (background, text, label) and pass layouts (Generic, Event Ticket, Boarding Pass, Coupon, Store Card) with custom metadata fields.
*   **Hardware-Backed Security**: Certificate credentials and passwords are kept locked in the iOS System Keychain, encrypted at the hardware level, and isolated to the app sandbox.
*   **Scanner-Reliable Barcodes**: Barcodes are generated in high contrast (black on white) with **High Error Correction (Level H)** to ensure they scan correctly at any reader (e.g. airport gate, ticket counter, or fuel pump).
*   **Completely Independent**: Zero server dependency, no trackers, and no remote calls.

---

## 🔑 How to Set Up Your Pass Signing Certificate (.p12)

Apple Wallet requires all passes to be signed using a certificate registered with Apple's Developer Authority. To enable the "Add to Apple Wallet" feature offline in this app, you must import your Pass Type ID Certificate:

### Step 1: Create a Pass Type ID Identifier
1.  Log in to the [Apple Developer Account Portal](https://developer.apple.com).
2.  Navigate to **Certificates, Identifiers & Profiles** > **Identifiers**.
3.  Click the blue `+` button, select **Pass Type IDs**, and click **Continue**.
4.  Enter a description and a unique identifier (e.g., `pass.com.yourcompany.qr2wallet`). Click **Register**.

### Step 2: Request and Download the Pass Certificate
1.  Go to **Certificates, Identifiers & Profiles** > **Certificates**.
2.  Click the `+` button and select **Pass Type ID Certificate** under the Services section. Click **Continue**.
3.  Choose the Pass Type ID you created in Step 1.
4.  Follow the prompts to generate a Certificate Signing Request (CSR) using **Keychain Access** on your Mac, upload it, and download the resulting `.cer` file (e.g., `pass.cer`).

### Step 3: Export as a `.p12` File
1.  Double-click the downloaded `pass.cer` file to add it to your Mac's **Keychain Access** application.
2.  Open **Keychain Access**, locate the certificate (usually under **login** > **My Certificates**), and expand it to see the private key.
3.  Right-click the certificate line and select **Export "Pass Type ID:..."**.
4.  Choose the file format as **Personal Information Exchange (.p12)**.
5.  Set a strong export password. Save the file.

### Step 4: Transfer and Import Into the App
1.  Transfer the exported `.p12` file to your iPhone (via AirDrop, iCloud Drive, or the Files app).
2.  Open **QR2Wallet** on your iPhone and go to the **Settings** tab.
3.  Under **Certificate Credentials**, click **Select Certificate (.p12)** and pick the file.
4.  Enter the certificate export password you set in Step 3, then click **Import & Save**.

<p align="center">
  <img src="settings_no_cert.png" width="40%" alt="Settings - No Certificate" />
  <img src="settings_instructions.png" width="40%" alt="Settings Setup" />
</p>

The app will validate your certificate details (Pass Type ID, Team ID, Common Name, and expiration date) and store the credentials securely in your device's Keychain.

---

## 🛠️ Architecture

QR2Wallet bridges low-level C cryptography with modern SwiftUI:

```
┌────────────────────────────────────────────────────────────────┐
│                        iOS Application                         │
│                                                                │
│    ┌──────────────┐          ┌──────────────────────┐          │
│    │  SwiftUI UI  ├─────────►│  PassSigner.swift    │          │
│    └──────────────┘          └──────────┬───────────┘          │
│                                         │ (Swift)              │
│                                         ▼                      │
│    ┌──────────────┐          ┌──────────────────────┐          │
│    │ Swift Bridging◄─────────┤ PassSignerWrapper.h/m│          │
│    │    Header    │          └──────────┬───────────┘          │
│    └──────────────┘                     │ (Objective-C)        │
│                                         ▼                      │
│                              ┌──────────────────────┐          │
│                              │ OpenSSL-Package (SPM)│          │
│                              └──────────────────────┘          │
└────────────────────────────────────────────────────────────────┘
```

*   **Swift Bridging Header**: Exposes Objective-C wrappers to Swift.
*   **Objective-C Wrapper (`PassSignerWrapper.m`)**: Written to handle complex C macro executions (e.g., stack manipulation `sk_X509_push`) and call the OpenSSL C APIs (`PKCS12_parse`, `PKCS7_sign`, `i2d_PKCS7_bio`) directly on-device.
*   **OpenSSL Binary Distribution**: Packaged as a Swift Package Manager binary dependency to bundle precompiled architectures directly inside the compiled binary.
