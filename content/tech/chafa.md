+++
title = "Chafa: Character Art Facsimile Generator"
date = 2024-08-28T16:39:26+07:00
cover = ""
summary = "Chafa is a command-line utility that converts image data, including animated GIFs, into graphics formats or ANSI/Unicode character art suitable for display in a terminal."
tags = [ "chafa", "linux" ]
categories = "chafa"
+++

Sejak dahulu kala saya mencari program yang bisa menge-*print* gambar di dalam terminal. Tapi, saya tak kunjung menemukannya hingga beberapa saat lalu, saya menjumpainya dari suatu video Youtube [Eric Murphy](https://www.youtube.com/@EricMurphyxyz) yang berjudul **"Ueberzug is dead. Now What? (Terminal image previews without Ueberzug)"**:

{{< youtube nTQWI0OalVk >}}

Alasan saya mencari program yang bisa menampilkan gambar di dalam terminal adalah karena salah satu kriteria terminal yang bagus bagi saya adalah kemampuannya untuk me-*render* gambar. Dulu, saya hanya kenal [ueberzug](https://github.com/seebye/ueberzug), sementara program tersebut (sependek pengetahuan saya) tidak bisa digunakan sebagai perintah di terminal. Jadi, hanya sebatas program "pasif" untuk menampilkan gambar di file manager berbasis CLI seperti [ranger](https://github.com/ranger/ranger).

> Link repo official github Chafa: https://github.com/hpjansson/chafa

Seperti yang tampil pada *summary* artikel ini, <mark> chafa adalah program berbasis CLI untuk menampilkan data gambar (termasuk GIF! wow~) di dalam sebuah terminal. </mark>

Instalasinya cukup mudah, via official repo setiap distro:

|       Distro      |                  Command                  |
|       ---         |                   ---                     |
| **Debian**        | **`sudo apt install chafa`**              |
| **Arch Linux**    | **`sudo pacman -Sy chafa`**               |
| **Fedora**        | **`sudo dnf install chafa`**              |
| **Opensuse**      | **`sudo zypper install chafa`**           |

```bash
chafa Picture/location-of-your-pic.jpg
```

Boom!

![ss1](/chafa/ss1.png)

Keren banget, bukan? 

Tapi memang, kalau dilihat di official repo github-nya, program **chafa** ini memang relatif baru rilis, sekitar 2 tahun lalu. Jadi, saat itu saya memang belum menjumpai chafa karena program ini (mungkin) belum lahir. 

Wkwkwk~



