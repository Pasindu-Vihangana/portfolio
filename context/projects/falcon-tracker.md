# Falcon Tracker: Long-Range LoRa Transmitter

> **Category:** Hardware & IoT  
> **GitHub Link:** [Explore on GitHub](https://github.com/Pasindu-Vihangana)  
> **Tags:** `Semtech SX1268` `LoRa RF` `RTOS` `3D CAD (SolidWorks)` `PCB Design`



![Falcon Tracker Hero](./hero.jpeg)

Falcon Tracker is a high-performance, compact, and lightweight tracking transmitter utilizing the Semtech SX1268 LoRa transceiver. Designed for range-critical applications, it integrates a power-amplified transmitter, low-noise receiver, custom 3D-printed enclosure, and precision-engineered mechanical components.

During field tests, this design achieved an **Air-to-Ground transmission range exceeding 250 km** and a **Ground-to-Ground range of approximately 12 km**, proving its viability for long-distance telemetry, tracking, and remote communication.

---

## 📡 Performance & RF Configuration

Maximizing range in power- and size-constrained environments requires optimal configuration of Spreading Factor (SF), Bandwidth (BW), and RF amplification. The following settings represent the field-tested configuration:

| Parameter | Configuration / Value | Description |
| :--- | :--- | :--- |
| **RF Transceiver** | Semtech SX1268 | High-efficiency sub-GHz LoRa chip |
| **Transmit (Tx) Power** | `27 dBm` | Boosted via integrated Power Amplifier (PA) |
| **Receive (Rx) Gain** | `20 dBm` | Enhanced via Low Noise Amplifier (LNA) |
| **Bandwidth (BW)** | `500` | Optimizes data rate vs. receiver sensitivity |
| **Spreading Factor (SF)** | `9` | Balances airtime and range reliability |
| **Tx Antenna** | Thin metal rod (~20 cm) | Lightweight omnidirectional whip antenna |
| **Rx Antenna** | Long whip (~80 cm) | Magnetic-base antenna for stable ground reception |

### 🌍 Range Test Results
* **Air-to-Ground Distance:** **> 250 km** (limit of testing facilities, with potential for further range)
* **Ground-to-Ground Distance:** **~ 12 km** (tested under light-obstacle conditions)
* **Field Note:** Real-world receiver sensitivity limits reliable reception to around `-120 dBm` (compared to the theoretical maximum of `-148 dBm` stated in datasheet specifications). VNAs (Vector Network Analyzers) should be used to verify antenna tuning, as commercial antennas often deviate from their designated frequencies.

---

## 🛠️ Mechanical & Enclosure Design

The custom enclosure is designed to protect the internal electronics, house the battery securely, and provide robust interfaces for the RF antenna.

### 📐 Mechanical Specifications
Detailed drawings are available in the engineering documentation:
* [Battery Cap Specification Drawing (PDF)](Battery%20Cap.pdf)
* [Enclosure Specification Drawing (PDF)](NewEnclosure.pdf)

#### 🔋 Threaded Battery Cap
Designed with an ISO Metric Profile to secure the power source within the chamber:
* **Pitch:** `0.5 mm` thread pitch
* **Thread Depth:** `3.2 mm`
* **Features:** 120° internal relief angle, textured outer cap edge for manual tightening.

#### 📦 Transmitter Enclosure Body
Features integrated mechanical threads printed directly into the body:
* **Antenna Port:** Standard Female SMA thread (`1/4" - 36UNS - 2A`), featuring a `0.5 mm` offset and `3.8 mm` depth.
* **Internal Battery Thread:** ISO Metric Profile matching the cap (`0.5 mm` thread pitch, `4.0 mm` depth).

---

## 🖼️ Media & Design Gallery

### 🖥️ CAD Renderings
The following CAD designs show the mechanical model and structural layouts:

| Fully Assembled Transmitter | Internal & Wireframe View (X-Ray) |
| :---: | :---: |
| ![Transmitter Assembly](Transmitter-Assembly.png) | ![Transmitter Assembly X-Ray](Transmitter-X-Ray.jpeg) |

| Battery Cap Layout | Battery Cap Isometric Detail |
| :---: | :---: |
| ![Battery Cap Layout](Battery%20Cap.png) | ![Battery Cap POV](Battery%20Cap%20POV.png) |

| Transmitter Prototype |
| :---: |
| ![Transmitter Prototype](prototype%201.png) |

---

### 📷 Physical Prototypes
These photographs showcase the real-world physical build, mounting configuration, and hardware assembly:

#### 1. Hardware Layout & Disassembled Components
A view of all physical parts of the system, including the O-ring, custom charger PCB, mounting bracket, coaxial antennas, and the main 3D-printed enclosure.

<p align="center">
  <img src="hardware_components_overview.jpg" width="20%" alt="Components Overview" />
  <img src="hardware_components_perspective.jpg" width="20%" alt="Components Perspective" />
  <img src="hardware_components_side.jpg" width="20%" alt="Hardware Components Side" />
  <img src="hardware_components_side_perspective.jpg" width="20%" alt="Hardware Components Side Perspective" />
</p>

#### 2. Fully Assembled Receiver Enclosure
A close-up of the completed receiver. The shell features a custom embossed logo and has a side-facing port for USB-C battery charging and data access.

<img src="receiver_close_up.jpg" width="30%" alt="Receiver Close-Up" />

#### 3. Charger PCB
The charger PCB is capable of charging 3 battaries at once. It features: full charge and charging status LEDs, as well as overcharge protection.

<img src="Charger PCB.png" width="30%" alt="Charger PCB Layout" />

---

#lora #wireless #wirelesscommunication #longrangetransmission #lorawan #datalink #telecommunication #radiofrequency #rf #iot #internetofthings #sx1268 #electronics #tech #science #antenna