---
title: "The Utilization of 'nmcli' for Managing Wifi Network"
date: 2025-03-21T15:55:32+07:00
draft: false
summary: "Having issue to connect your server to a network (wifi)? Here is the solution to the problem."
tags: ["nmcli", "network", "internet", "linux", "wifi"]
categories: "nmcli"
---

Sebagai pengguna linux, terkadang, ada banyak alasan yang dapat kita sampaikan untuk tidak menggunakan GUI, mulai dari alasan yang paling logis seperti **"pasang GUI di server akan memakan banyak _resource_"** sampai alasan yang paling pragmatis seperti **"malas"**. Hal tersebut memang tidak dapat dipungkiri, sebab linux pada dasarnya sudah sangat _useful_ (dan _powerfull_) bahkan tanpa GUI sekalipun sehingga terkadang, beberapa pekerjaan dapat diselesaikan hanya melalui CLI saja.

Salah satunya yaitu menghubungkan atau mengkoneksikan sistem kita ke jaringan internet, dalam hal ini adalah WiFi (_Wireless Fidelity_). Kita dapat menghubungkan linux ke wifi tanpa perlu GUI karena kita dapat mengkoneksikannya via terminal atau CLI melalui program **`iwctl`** atau **`nmcli`**. Tapi, dalam artikel ini, saya hanya akan mengulas cara menggunakan **`nmcli`** saja.

## Instalasi

Sebetulnya, **`nmcli`** akan sudah ter-_include_ di dalam linux sejak proses instalasi linux itu sendiri di awal. Jadi, kita tidak perlu meng-_install_-nya lagi. Namun, berikut saya lampirkan sebuah paket yang terdapat _nmcli_ di dalamnya:

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install network-manager`**        |
| **Arch Linux**    | **`sudo pacman -Sy networkmanager`**          |
| **Opensuse**      | **`sudo zypper install networkmanager`**      |
| **Fedora**        | **`sudo dnf install networkmanager`**			|

## Penggunaan

Berikut adalah cara menggunakannya:[^1]

### - Mendaftar wifi yang tersedia

```shell
nmcli device wifi list
```

### - Menghubungkan linux ke jaringan wifi

```shell
nmcli device wifi connect SSID_or_BSSID password 12345
```

### - Menghubungkan jaringan wifi (tanpa memperlihatkan password)

```shell
nmcli device wifi connect SSID_or_BSSID --ask
```

### - Men-_disconnect_ jaringan wifi

```shell
nmcli device disconnect wlan0
```

### - Melihat daftar wifi yang pernah terhubung

```shell
nmcli connection show
```

### - Menampilkan SSID & password (+ barcode) wifi

```shell
nmcli device wifi show
```

### - Menghapus wifi yang pernah terhubung

```shell
nmcli connection delete NAME_OR_UUID
```

### - Melihat daftar dan status _interface_

```shell
nmcli device
```

### - Mematikan wifi

```shell
nmcli radio wifi off
```

## Contoh

Berikut adalah contoh penggunaannya:

1. Mendaftar wifi yang tersedia

![ss1](/nmcli/ss1.png "listing available wifi")

2. Menghubungkan wifi 

![ss2](/nmcli/ss2.png "connecting to a wifi network")

3. Melihat status wifi

![ss3](/nmcli/ss3.png "the wifis' status")

4. Menampilkan SSID, password, dan barcode wifi

![ss](/nmcli/ss4.png "showing wifis' SSID & password (+ its barcode)")

5. Men-_disconnect_ wifi

![ss5](/nmcli/ss5.png "disconnecting wifi network")









[^1]: https://wiki.archlinux.org/title/NetworkManager
