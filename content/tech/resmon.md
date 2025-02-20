---
title: "5 Modern Linux Resource Monitoring Tools"
date: 2025-02-20T15:43:50Z
draft: false
summary: "This article would show several modern linux resource monitoring utilities that might help you identify your resource consumptions easily."
tags: ["linux", "resource", "monitoring", "tools", "utility"]
categories: "monitoring"
---

Linux memiliki beberapa _utility_ yang secara spesifik ditujukan untuk memudahkan kita sebagai penggunanya untuk memantau kondisi _resource_ komputer kita. _Reource_ yang saya maksud di sini sekurang-kurangnya mencakup **CPU** & **RAM**.

Berikut adalah daftarnya:

## 1. htop

**`htop`** adalah _resource monitoring tools_ yang akan menampilkan informasi terkait:
- CPU
- RAM
- SWAP
- Process 

Selain itu, **`htop`** juga memiliki fitur untuk mencari proses yang sedang berjalan dan memberhentikannya secara paksa (jika memang diperlukan), sama seperti yang dapat kita lakukan di Task Manager kalau di Windows.

![ss1](/resmon/ss1.png "htop")

### Instalasi

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install htop`**                   |
| **Arch Linux**    | **`sudo pacman -Sy htop`**                    |
| **Opensuse**      | **`sudo zypper install htop`**                |
| **Fedora**        | **`sudo dnf install htop`**                   |

{{< alert icon="github" >}}

https://github.com/htop-dev/htop

{{< /alert >}}

## 2. btop

**`btop`** adalah _resource monitoring tools_ yang akan menampilkan informasi terkait:
- CPU
- RAM
- SWAP
- Disk
- Process
- Network 
- Battery

![ss2](/resmon/ss2.png "btop")

**`btop`** juga kaya akan _customization_. Diantaranya, kita dapat mengganti tema, memilih informasi spesifik yang ingin ditampilkan (misalnya kita hanya ingin informasi tentang process saja yang tampil, atau internet saja), dan kustomisasi-kustomisasi lainnya.

### Instalasi

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install btop`**                   |
| **Arch Linux**    | **`sudo pacman -Sy btop`**                    |
| **Opensuse**      | **`sudo zypper install btop`**                |
| **Fedora**        | **`sudo dnf install btop`**                   |

{{< alert icon="github" >}}

https://github.com/aristocratos/btop

{{< /alert >}}

## 3. glances

**`glances`** adalah _resource monitoring tools_ yang akan menampilkan informasi terkait:
- CPU
- RAM
- SWAP
- Disk
- Process
- Network 
- Battery

![ss3](/resmon/ss3.png "glances")

**`glances`** secara UI (_user interface_) sedikit lebih mirip dengan **`htop`**. Terdapat beberapa kustomisasi, seperti memilih informasi apa yang ingin ditampilkan. Namun, glances tidak memiliki kustomisasi tema.  

### Instalasi

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install glances`**                |
| **Arch Linux**    | **`sudo pacman -Sy glances`**                 |
| **Opensuse**      | **`sudo zypper install python-glances`**      |
| **Fedora**        | **`sudo dnf install htop`**                   |

{{< alert icon="github" >}}

https://github.com/nicolargo/glances

{{< /alert >}}

## 4. gotop

**`gotop`** adalah _resource monitoring tools_ yang akan menampilkan informasi terkait:
- CPU
- RAM
- SWAP
- Disk
- Process
- Network 

![ss4](/resmon/ss4.png "gotop")

**`gotop`** secara UI (_user interface_) sedikit lebih mirip dengan **`htop`**. Terdapat beberapa kustomisasi, seperti memilih informasi apa yang ingin ditampilkan. Namun, glances tidak memiliki kustomisasi tema. Sayangnya, gotop tidak tersedia di beberapa repo distro sehingga kita harus meng-_compile_ dan meng-_install_-nya secara manual dari repo-nya di github.

### Instalasi

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Arch Linux**    | **`sudo yay -Sy gotop`**                      |

{{< alert icon="github" >}}

https://github.com/cjbassi/gotop 

{{< /alert >}}

## 5. nmon

**`nmon`** adalah _resource monitoring tools_ yang akan menampilkan informasi terkait:
- CPU
- RAM
- SWAP
- Network
- Disk 
- Process

![ss5](/resmon/ss5.png "nmon")

**`nmon`** merupakan _resource monitoring tool_ yang unik dan keren dari segi UI menurut saya. Kita juga dapat mengatur informasi yang ingin ditampilkan. Meskipun demikian, **`nmon`** tidak memiliki kustomisasi tema seperti yang terdapat di **`btop`**. 

### Instalasi

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install nmon`**                   |
| **Arch Linux**    | **`sudo pacman -Sy nmon`**                    |
| **Opensuse**      | **`sudo zypper install nmon`**                |
| **Fedora**        | **`sudo dnf install nmon`**                   |

{{< alert icon="globe" >}}

https://nmon.sourceforge.io/pmwiki.php

{{< /alert >}}