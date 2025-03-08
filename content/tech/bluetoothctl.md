---
title: "bluetoothctl: CLI Tool for Managing Bluetooth Devices"
date: 2025-02-23T22:57:04+07:00
draft: false
summary: "The easiest way to connect your bluetooth devices via terminal in Linux."
tags: ["linux", "bluetooth", "bluetoothctl"]
categories: "bluetoothctl"
---

**`bluetoothctl`** adalah _utility_ yang digunakan untuk mengontrol perangkat wireless berbasis bluetooth via terminal[^1]. Oleh karena _tool_ ini berbasis CLI (_Command Line Interface_) alias tidak memerlukan GUI (_Graphical User Interface_) untuk dijalankan, maka **`bluetoothctl`** memberikan kemudahan kepada kita (Linux user) dalam me-_manage_ perangkat bluetooth.

{{< alert icon="none" >}}

**Catatan:**  
Mengapa saya (dan mungkin teman-teman pengguna Linux serta para professional Linux) lebih menyukai aplikasi berbasis terminal? Tentu saja alasannya sederhana:
**Karena aplikasi berbasis CLI adalah aplikasi yang tidak bergantung pada GUI**, maka itu berarti bahwa _tool_ tersebut dapat dijalankan pada _interface_ yang paling sederhana, misalnya ketika mode TTY seperti yang lumrah kita dapatkan, apalagi jika bekerja di server Linux. 

{{< /alert >}}

Saya pernah menulis sedikit mengenai TTY, btw, berikut tautan artikelnya:

{{< article link="/tech/tty/" >}}

## Prerequisites:

Beberapa hal yang perlu dipersiapkan sebelum mengoperasikan **`bluetoothctl`**[^2]:

### 1. Meng-_install_ paket yang diperlukan (`bluez`)

Pertama-tama, tentu saja kita perlu meng-_install_ paket `bluez` karena **`bluetoothctl`** ada di dalamnya:

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install bluez`**                  |
| **Arch Linux**    | **`sudo pacman -Sy bluez`**                   |
| **Opensuse**      | **`sudo zypper install bluez`**               |
| **Fedora**        | **`sudo dnf install bluez`**                  |

Selesai.

### 2. Pastikan **bluetoothd** sudah _running_

**bluetoothd** adalah daemon bluetooth, semacam server yang meng-_handle_ per-bluetooth-an:

```bash
# Menjalankan bluetooth hanya untuk session saat ini:
sudo systemctl start bluetooth 

# Menjalankan bluetooth setiap kali login:
sudo systemctl enable bluetooth
```

Untuk melihat statusnya:

```bash
sudo systemctl status bluetooth
```

Jika **bluetoothd** sudah _running_, berikut statusnya:

![ss1](/bluetoothctl/ss1.png "starting **bluetoothd**")


## **`bluetoothctl`** Tutorial:

Berikut adalah langkah-langkah penggunaan **`bluetoothctl`**:

### 1. Masuk ke shell **`bluetoothctl`**

```bash
bluetoothctl
```

![ss2](/bluetoothctl/ss2.png "entering **`bluetoothctl`** shell")

Ketika masuk ke **`bluetoothctl`**, kita dapat melihat controller-nya juga.

### 2. _Scanning_ perangkat

```bash
scan on
```

![ss3](/bluetoothctl/ss3.png "_scanning active devices_")

Tampak beberapa perangkat bluetooth ter-_scan_. Namun, perangkat yang akan saya hubungkan adalah TWS atau headset bluetooth dengan MAC **27:AB:34:8B:CD:B1**.

### 3. _Connecting_ perangkat

```bash
connect 27:AB:34:8B:CD:B1
```

![ss4](/bluetoothctl/ss4.png "connecting the device")

Jika perangkat sudah terhubung dengan baik, maka seperti terlihat pada tangkapan layar, **`bluetoothctl`** akan memberikan notifikasi **"Connection Succesful"**. Selain itu, terlihat **prompt**-nya juga berubah menyesuaikan dengan nama perangkat yang berhasil terhubung (di saya berubah menjadi **TWS**).

### 4. _Disconnecting_ perangkat

```bash
disconnect
```

![ss5](/bluetoothctl/ss5.png "disconnecting")

Jika sudah selesai menggunakannya, kita dapat men-_disconnect_ perangkat tersebut dengan mengetikkan perintah `disconnect`, dan bila berhasil, **`bluetoothctl`** akan menampilkan status **Succesful disconnected**. Selain itu, **prompt**-nya juga akan kembali seperti semula.


## Additional Notes:

Beberapa catatan tambahan:

### 1. _Pairing_ perangkat

Perlu dicatat, tutorial ini saya tulis ketika saya sudah biasa menggunakan perangkat TWS sehingga baik-baik saja jika saya tidak memasukkan proses _pairing_ (alias setelah _scan_ langsung _connect_). Mungkin, beberapa perangkat perlu dilakukan _pairing_ terlebih dahulu sebelum _connect_, berikut perintahnya:

```bash
pair 27:AB:34:8B:CD:B1
``` 

### 2. _Listing_ perangkat

Kita juga dapat melihat perangkat apa saja yang pernah terhubung, atau jika perintah ini dilakukan setelah *scanning*, maka akan terlihat perangkat-perangkat yang berhasil ter-*scan*:

```bash
devices
```

![ss6](/bluetoothctl/ss6.png "devices listing")

### 3. _Device info_

Kita juga dapat melihat info rinci mengenai _device_ yang terhubung:

```bash
info
```

![ss7](/bluetoothctl/ss7.png "device info")

---

Btw, saya membuat artikel ini di [**Wayfire**](https://wayfire.org/)-nya Archlinux.

{{< gallery >}}
  <img src="/mountntfs/way1.jpg" class="grid-w33" />
  <img src="/mountntfs/way2.jpg" class="grid-w33" />
  <img src="/mountntfs/way3.jpg" class="grid-w33" />
{{< /gallery >}}








[^1]: https://wiki.archlinux.org/title/Bluetooth
[^2]: https://bandithijo.dev/blog/mudah-menggunakan-bluetoothctl


