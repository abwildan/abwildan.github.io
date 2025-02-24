---
title: "Cool Terminal Tools You Should Know"
date: 2024-06-09T16:59:47+07:00
draft: false
summary: "Just a list of a couple of (funny) terminal tools"
cover:
  image: "/cooltools/cover.png"
  alt: 'bpytop'
  caption: "Bpytop"
tags: ["cool", "terminal", "linux"]
categories: ["linux"]
---

Yoo, jumpa lagi!

Saya mau berbagi sejumlah *tools* terminal yang sayang jika dilewatkan, apalagi bagi kalian guys, linux nerds. Sebagian besar (atau mungkin semuanya) *tools* yang akan saya *share* di artikel ini murni ***for fun***. Jadi, memang fungsinya hanya untuk *show off* kecantikan terminal. But, anyway, berikut adalah 9 terminal *tools* keren yang bisa kalian coba:

### 1. cava

Cava adalah *cross-platform audio visualizer*.

**Github:** https://github.com/karlstav/cava 

Instalasi (Archlinux) via repositori komunitas (AUR - *Arch User Repository*):
```shell
yay -Sy cava
```

![gif1](/cooltools/gif1.gif)

Untuk mengganti ukuran bar-nya, kita bisa menggunakan *arrow key* di keybord: *`arrow left`* untuk memperbesar dan *`arrow right`* untuk memperkecil.  
Untuk mengganti warnanya, kita bisa menekan huruf **`f`** di keyboard.

Baca-baca `help`-nya di:
```shell
cava --help
```

### 2. pipes

Pipes adalah *animated pipes terminal screensaver*.

**Github:** https://github.com/pipeseroni/pipes.sh

Instalasi (Archlinux) via repositori komunitas (AUR - *Arch User Repository*):
```shell
yay -Sy pipes.sh
```

![gif2](/cooltools/gif2.gif)

Baca-baca `help`-nya di:
```shell
pipes.sh --help
```

### 3. cowsay

Cowsay adalah *a configurable talking cow*.

**Github:** https://github.com/piuccio/cowsay

Instalasinya (Archlinux) bisa merujuk ke repositori official:
```shell
sudo pacman -Sy cowsay
```
![gif3](/cooltools/gif3.gif)

File config untuk menampilkan berbagai objeknya tersimpan di direktori `/usr/share/cows/`.

![ss1](/cooltools/ss1.png)

Baca-baca `help`-nya di:
```shell
cowsay --help
```

### 4. cbonsay

Cbonsai adalah *a bonsai tree generator*.

**Github:** https://github.com/mhzawadi/homebrew-cbonsai

Instalasi (Archlinux) via repositori komunitas (AUR - *Arch User Repository*):
```shell
yay -Sy cbonsai
```

![gif4](/cooltools/gif4.gif)

Baca-baca `help`-nya di:
```shell
cbonsai --help
```

### 5. cmatrix

Cmatrix adalah *terminal based "The Matrix"-like implementation*.

**Github:** https://github.com/abishekvashok/cmatrix

Instalasinya (Archlinux) bisa merujuk ke repositori official:
```shell
sudo pacman -Sy cmatrix
```
![gif5](/cooltools/gif5.gif)

Baca-baca `help`-nya di:
```shell
cmatrix --help
```

### 6. figlet

Figlet? *Claudia's FIGlet tree*.

**Github:** https://github.com/cmatsuoka/figlet

Instalasinya (Archlinux) bisa merujuk ke repositori official:
```shell
sudo pacman -Sy figlet
```
![gif6](/cooltools/gif6.gif)

File font-nya tersimpan di direktori `/usr/share/figlet/fonts`:
![ss2](/cooltools/ss2.png)

Baca-baca `help`-nya di:
```shell
figlet --help
```

### 7. lolcat

Lolcat: *rainbow and unicorns*!

**Github:** https://github.com/busyloop/lolcat

Instalasinya (Archlinux) bisa merujuk ke repositori official:
```shell
sudo pacman -Sy lolcat
```

![gif7](/cooltools/gif7.gif)

Baca-baca `help`-nya di:
```shell
lolcat --help
```

### 8. asciiquarium

Asciiquairum: *Ascii aquarium in terminal*!

**Github:** https://github.com/cmatsuoka/asciiquarium

Instalasinya (Archlinux) bisa merujuk ke repositori official:
```shell
sudo pacman -Sy asciiquarium
```

![gif8](/cooltools/gif8.gif)

### 9. mapscii

Mapscii adalah *a Braille & ASCII world map renderer for your console*.

**Github:** https://github.com/rastapasta/mapscii?tab=readme-ov-file

![gif9](/cooltools/gif9.gif)

### 10. hollywood

Hollywood adalah *a technical melodrama*.

**Github:** https://github.com/dustinkirkland/hollywood

Instalasi (Archlinux) via repositori komunitas (AUR - Arch User Repository):
```shell
yay -Sy hollywood
```

![gif10](/cooltools/gif10.gif)

{{< alert icon="none" >}}

**Notes:**  
`hollywood` sangat memakan _resource_ (terutama CPU) jika dijalankan. Jadi, jika komputer kalian memiliki _resource_ yang terbatas, jangan jalankan program ini terlalu lama.

{{< /alert >}}




Artikel ini akan saya perbarui jika ada *tools* baru yang belum sempat ditulis.

