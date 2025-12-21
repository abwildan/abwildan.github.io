---
title: "How to Install Python Packages with `pip` & `pipx`"
date: 2025-12-21T06:38:10+07:00
draft: false
summary: "A step-by-step guidance on how to install python packages using pip & pipx."
tags: ["pip", "python", "windows", "linux", ""]
categories: "pip"
---

Beberapa aplikasi Python[^1] sebetulnya dapat langsung di-_install_ untuk kemudian digunakan.[^2] Aplikasi/paket-paket ini dapat dilihat di PyPi (_The Python Package Index_):

> [**PyPi**](https://pypi.org/): https://pypi.org/

{{< alert icon=none >}}

**Notes:**  
Python adalah 'bahasa pemrograman tingkat tinggi' yang dikembangkan oleh Guido van Rossum pada akhir tahun 1980-an. Disebut 'bahasa pemrograman tingkat tinggi' karena _syntax_ Python lebih dekat ke bahasa manusia alih-alih ke bahasa mesin. Nama Python sendiri diambil dari serial komedi asal British bernama ["Monty Python's Flying Circus"](https://en.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus).   
{{< /alert >}}

## `pip`

Berikut langkah-langkahnya:

### 1. Install `python` 

Tentu saja, karena aplikasi-aplikasi di [**PyPi**](https://pypi.org/) adalah aplikasi Python, maka kita perlu memasang **Python** terlebih dahulu.

{{< alert icon=none >}}

**Notes:**  
Perlu diketahui, Python punya 2 versi:  
- Python versi 2 (sudah tidak dilanjut lagi.)
- Python versi 3

Seperti terlihat, Python versi 2 sudah tidak dilanjut lagi perkembangannya, sehingga banyak aplikasi modern dikembangkan dengan yang versi 3. Jadi, pastikan ketika kita ingin meng-_install_ Python, kita memasang versi yang sesuai dengan kebutuhan atau spesifikasi _software_ yang ingn dijalanan...   

{{< /alert >}}

Di sini, saya akan memasang Python versi 3.

|       Distro      |                  Command                      |
|       ---         |                   ---                         |
| **Debian/Ubuntu** | **`sudo apt install python3`**                |
| **Arch Linux**    | **`sudo pacman -Sy python`**                  |
| **Opensuse**      | **`sudo zypper install python3`**             |
| **Fedora**        | **`sudo dnf install pyton3`**     			|

Untuk memastikan Python3 sudah terpasang, gunakan perintah:

```shell
python --version
```

{{< alert icon=none >}}

**NixOS:**  
Masukkan baris berikut di file konfigurasi (`/etc/nixos/configuration.nix`):

```nix
  environment.systemPackages = [
    pkgs.python3
  ];
```

Atau jika menggunakan `nix-shell`:

```shell
nix-shell -p python3
```

{{< /alert >}}

### 2. Create `virtualenv`

Selanjutnya, kita perlu membuat `virtual environment` dengan perintah:

```shell
python -m venv {nama-folder}
```

Bagian **{nama-folder}** bisa diganti sebebas-bebasnya karena tidak akan berpengaruh ke *software*-nya. Akan tetapi, akan lebih baik kalau namanya disesuaikan dengan nama _software/package_ yang akan di-_install_.

### 3. Activate `venv`

Berikutnya, kita akan mengaktifkan `virtual environment` yang sudah kita buat dengan perintah:

```shell
source {nama-folder}/bin/activate
```

### 4. Use `pip`

Kita kemudian dapat menggunakan `pip` untuk meng-_install_ suatu _package_ atau _software_.

```shell
./{nama-folder}/bin/pip install {nama-package}
```

**{nama-pakcakge}** diganti dengan nama paket yang hendak dipasang.

### 5. Run The Package

Selesai! Kita sekarang dapat menjalankan aplikasinya dengan perintah:

```shell
./{nama-folder}/bin/{nama-package}
```

> **Notes:**
> Cara tersebut dapat terus dilakukan untuk dikemudian hari, bahkan tanpa `python` sekalipun.

## `pipx`

Beberapa artikel saya yang lain juga sebetulnya ada yang pernah memanfaatkan `pip` dan `pipx` untuk meng-_install_ paket Python: 

1. Cloudinary

{{< article link="/tech/cloudinary/" >}}

2. File Server (Updog & Copyparty)

{{< article link="/tech/fileserver/" >}}

3. BeatPrints

{{< article link="/tech/beatprints/" >}}

---

### Notes:

#### 1. Getting out of `venv`

Untuk keluar dari sesi _virtual environment_ yang sudah diaktifkan ketika meng-_install_ _packages_ via `pip` sebelumnya, kita dapat mengetikkan perintah `exit` atau _shortcut_ `Ctrl+d` di terminal.

#### 2. Delete `venv`

Jika kita merasa tidak lagi membutuhkannya, kita dapat menghapus folder paket tersebut:

```shell
rm -rf {nama-folder}
```






[^1]: https://en.wikipedia.org/wiki/Python_(programming_language)
[^2]: https://packaging.python.org/en/latest/tutorials/installing-packages/

