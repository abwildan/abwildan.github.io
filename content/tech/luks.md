---
title: "Enrypting Disk in Linux using LUKS"
date: 2025-02-02T04:43:27Z
draft: false
summary: "A tutorial on how to encrypt disk/drive in linux with cryptsetup."
tags: ["cryptsetup", "linux", "disk", "encryption", "luks"]
categories: "cryptsetup"
---

Kali ini kita akan belajar cara meng-_encypt_ disk/drive di linux menggunakan **LUKS (Linux Unified Key Format)**. LUKS adalah format enkripsi yang umum digunakan di linux. Salah satu tool yang dapat digunakan untuk mengenkripsi disk/drive adalah [**`cryptsetup`**](https://www.google.com/search?q=cryptsetup)[^1]. 

## Installation

Karena merupakan _tool_ standard, **`cryptsetup`** biasanya sudah terpasang ketika melakukan instalasi linux. Tapi, jika ternyata belum terpasang, silakan _install_ terlebih dahulu:

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install cryptsetup`**             |
| **Arch Linux**    | **`sudo pacman -Sy cryptsetup`**              |
| **Opensuse**      | **`sudo zypper install cryptsetup`**          |
| **Fedora**        | **`sudo dnf install cryptsetup`**             |

## The Initial Setup

Sebelum melakukan proses enkripsi, beberapa hal berikut perlu diperhatikan:

{{< alert iconColor="#ff001e" cardColor="#ff9ba7" textColor="#000000" >}}

- **_Back up_** data-data penting terlebih dahulu!
- Catat **_passphrase_** yang digunakan agar tidak lupa!

{{< /alert >}}

Berikut adalah langkah-langkah enkripsi dengan **`cryptsetup`**:

### 1. Mengengkripsi partisi

Pertama, kita perlu mengenkripsi partisi yang terdapat di sebuah disk/drive terlebih dahulu. Artinya, sebuah disk/drive mungkin punya lebih dari satu partisi dan kita tidak harus mengenkripsi semua partisinya. 

Berikut perintahnya:

```shell
sudo cryptsetup luksFormat /dev/sda3
```

{{< alert icon="none" >}}

**Keterangan:** 
- `/dev/sda3` adalah partisi yang akan saya _encrypt_. Silakan disesuaikan.
- Partisi yang ada dapat dilihat dengan perintah `lsblk`.

{{< /alert >}}

Setelah itu, akan muncul 2 prompt:
1. Konfirmasi untuk mengenkripsi partisi, kita bisa ketik **YES** jika ingin melanjutkan.
2. _Passphrase_ atau _password_ yang digunakan untuk meng-_encrypt_ dan men-_decrypt_. Gunakan passphrase yang tidak mudah ditebak tapi tidak mudah dilupakan.

![ss1](/luks/ss1.png "Encrypting a partition")

### 2. Membuka partisi 🔑

Sekarang, kita akan membuka partisi sebelumnya yang sudah diformat dengan LUKS:

```shell
sudo cryptsetup open /dev/sda3 test
```

{{< alert icon="none" >}}

**Keterangan:** 
- `test` adalah nama partisi yang terenkripsi tadi. Nama ini hanya sementara. Jadi, bisa diganti ketika kita membuka partisi ini lagi nanti.

{{< /alert >}}

Sekarang, bandingkan partisi yang belum dibuka dengan yang sudah dibuka dengan `lsblk`. Sekarang, kita memiliki sebuah partisi baru yang ter-_decrypt_ yang bernama **"test"** di `/dev/sda3`. :

![ss2](/luks/ss2.png "Opening up the encrypted partition")

Hal penting lainnya yang perlu dicatat juga di tahap ini adalah bahwa partisi yang sudah didekripsi akan muncul di **`/dev/mapper`**.

### 3. Memformat filesystem 

Berikutnya, kita perlu membuat format _filesystem_ baru ke partisi ini.[^2] Kita hanya perlu melakukan ini di awal saja:

```shell
sudo mkfs.ext4 /dev/mapper/test
```

{{< alert icon="none" >}}

**Keterangan:** 
- `mkfs.ext4` adalah nama filesystem standard untuk linux. Silakan disesuaikan dengan kebutuhan.
- `/dev/mapper/test` adalah nama partisi terdekripsi yang sudah saya buat sebelunnya.  

{{< /alert >}}

Perhatikan bahwa _formatting_ filesystem ini kita lakukan ke `/dev/mapper/test`, bukan lagi ke `/dev/sda3`!

![ss3](/luks/ss3.png "Creating partition's filesystem")

### 4. Me-mounting partisi 🛄

Langkah terakhir sebelum partisi ini dapat digunakan adalah me-_mounting_-nya ke direktori tertentu.

```shell
sudo mount /dev/mapper/test /mnt
```

{{< alert icon="none" >}}

**Keterangan:** 
- `/dev/mapper/test` adalah nama partisi yang sudah dibuat sebelumnya.
- `/mnt` adalah lokasi yang saya inginkan sebagai tempat partisi `/dev/mapper/test` dipasang. 

{{< /alert >}}

![ss4](/luks/ss4.png "Mounting partition")

Seperti terlihat pada tangkapan layar, partisi `/dev/mapper/test` sudah terpasang ke `/mnt`.

Sekarang, kita sudah bisa menggunakan (mengisinya dengan file & folder) partisi tersebut. Misalnya, saya akan mengisinya dengan sebuah direktori/folder bernama **"secret-dir"** dan sebuah file teks bernama **"secret-file.txt"** di dalamnya:

![ss5](/luks/ss5.png "Creating a folder and a file")

### 5. Unmount partisi 🛅

Setelah selesai menggunakan partisi tersebut, kita bisa meng-unmount-nya:

```shell
sudo umount /mnt
```

{{< alert icon="none" >}}

**Keterangan:** 
- `/mnt` adalah tempat dimana partisi tadi terpasang.  

{{< /alert >}}

![ss6](/luks/ss6.png "Unmounting partition")

Seperti terlihat, partisi `/dev/mapper/test` sudah terlepas dari `/mnt`.

### 6. Menutup partisi 🔐

Ketika sudah tidak digunakan lagi, pastikan kita menutup partisi tersebut agar ketika misalnya komputer atau disk/drive kita di-_hack_, data-data dalam partisi kita akan tetap aman karena kita sudah kembali mengenkripsinya kembali.

```shell
sudo cryptsetup close test
```

Dan partisi tadi `/dev/sda3` sudah ter-_encrypt_ kembali.

![ss7](/luks/ss7.png "Close the partition")

SELESAI!!!

## The End

Sampai di tahap ini, kita telah berhasil membuat enkripsi pada sebuah partisi di disk/drive. Jika kita ingin menggunakan partisi tersebut lagi, kita hanya perlu men-_decrypt_ partisinya dan me-_mounting_-nya ke suatu direktori **(langkah 2 & 4)**, dan jika sudah selesai, kita bisa kembali meng-_unmount_ dan meng-_encrypt_-nya lagi **(langkah 5 & 6)**.

Misalnya, sekarang saya ingin menghapus file **"secret-file.txt"** yang sudah dibuat sebelumnya dan menggantinya dengan file baru bernama **"secrets.txt"**. Berikut adalah langkah-langkahnya:

![ss8](/luks/ss8.png "The cycle")

## Additional Info: POC

Kalau kita mencoba untuk me-_mounting_ partisi `/dev/sda3` secara manual seperti biasa, tentu saja tidak akan berhasil karena kita sudah mengubah filesystem partisi tersebut ke format **LUKS** dan tentu saja karena sudah di-_encrypt_:

![ss9](/luks/ss9.png "POC")

Jadi, kalau kita ingin menggunakan partisi tersebut, kita harus melakukan 4 prosedur yang sudah dijelaskan sebelumnya.

---

Artikel ini di-inspirasi oleh video Youtube berikut:

{{< youtube ZNaT03-xamE >}}




[^1]: https://wiki.archlinux.org/title/Dm-crypt/Device_encryption
[^2]: https://wiki.archlinux.org/title/File_systems