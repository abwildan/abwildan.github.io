---
title: "Tools for Comparing Text-Based Files."
date: 2026-06-20T14:19:00+07:00
draft: false
summary: "These tools are my go-to tools when it comes to comparing files. For the sake of your own mental health, I am telling you that those are CLI-based ones. If you are allergic to those tools, please read this article with professional assistance or do not read it at all."
tags: ["diff", "vimdiff", "kitty", "kitten diff"]
categories: "diff"
---

## Preface

_Tools_ _comparison_ ini akan terasa sekali manfaatnya, terutama jika kita ingin membandinkan isi file yang berbasis teks seperti logs. Jadi, "file" yang dimaksud di sini adalah file yang dapat dibaca dengan terminal (berbasis teks), bukan file dokumen seperti Word atau PDF.

## The Tools

Berikut adalah _tools_ yang pernah saya gunakan untuk membandingkan file-file. Sebagai _disclaimer_, tools di bawah ini semuanya adalah terminal-based _tools_, jadi tidak ada GUI-nya. 

### 1. `vimdiff`

`vimdiff` adalah _tool_ yang terintegrasi langsung dengan `vim` (teks editor).

![ss1](/diff/ss1.png "`vimdiff`")

#### Installation

Berikut adalah cara meng-_install_ `vim` di beberapa sistem operasi UNIX/Linux:

|       Distro      |                  Command          |
|       ---         |                   ---             |
| **Debian/Ubuntu** | **`sudo apt install -y vim`**     |
| **Arch Linux**    | **`sudo pacman -Sy vim`**         |
| **Fedora**        | **`sudo dnf install vim`**        |
| **Opensuse**      | **`sudo zypper install vim`**     |
| **FreeBSB**       | **`sudo pkg install vim`**        |

{{< alert icon=none >}}

**NixOS:**  
Masukkan baris berikut di file konfigurasi (`/etc/nixos/configuration.nix`):

```nix
  environment.systemPackages = [
    pkgs.vim
  ];
```

Atau jika menggunakan `nix-shell`:

```shell
nix-shell -p vim
```

{{< /alert >}}

#### Usage

```shell
vimdiff file1 file2 file3 file4
```

> **Notes:** `vimdiff` dapat membandingkan 2 hingga 4 file sekaligus.

### 2. `kitten diff`

`kitten diff` adalah _tool_ yang terintegrasi langsung dengan `kitty` (terminal).

![ss1](/diff/ss2.png "`kitten diff`")

#### Installation

Berikut adalah cara meng-_install_ `kitty` di beberapa sistem operasi UNIX/Linux:

|       Distro      |                  Command            |
|       ---         |                   ---               |
| **Debian/Ubuntu** | **`sudo apt install -y kitty`**     |
| **Arch Linux**    | **`sudo pacman -Sy kitty`**         |
| **Fedora**        | **`sudo dnf install kitty`**        |
| **Opensuse**      | **`sudo zypper install kitty`**     |
| **FreeBSB**       | **`sudo pkg install kitty`**        |

{{< alert icon=none >}}

**NixOS:**  
Masukkan baris berikut di file konfigurasi (`/etc/nixos/configuration.nix`):

```nix
  environment.systemPackages = [
    pkgs.kitty
  ];
```

Atau jika menggunakan `nix-shell`:

```shell
nix-shell -p kitty
```

{{< /alert >}}

#### Usage

```shell
kitten diff file1 file2
```

> **Notes:** `kitten diff` hanya dapat membandingkan maksimal 2 file.

### 3. `diff`

![ss3](/diff/ss3.png "`diff`")

#### Installation

Sebelum dapat menggunakan `diff`, kita perlu meng-_install_ paket `diffutils`.

Berikut adalah cara meng-_install_ `diffutils` di beberapa sistem operasi UNIX/Linux:

|       Distro      |                  Command                |
|       ---         |                   ---                   |
| **Debian/Ubuntu** | **`sudo apt install -y diffutils`**     |
| **Arch Linux**    | **`sudo pacman -Sy diffutils`**         |
| **Fedora**        | **`sudo dnf install diffutils`**        |
| **Opensuse**      | **`sudo zypper install diffutils`**     |
| **FreeBSB**       | **`sudo pkg install diffutils`**        |

{{< alert icon=none >}}

**NixOS:**  
Masukkan baris berikut di file konfigurasi (`/etc/nixos/configuration.nix`):

```nix
  environment.systemPackages = [
    pkgs.diffutils
  ];
```

Atau jika menggunakan `nix-shell`:

```shell
nix-shell -p diffutils
```

{{< /alert >}}

#### Usage

```shell
diff file1 file2
```

> **Notes:** `diff` hanya dapat membandingkan maksimal 2 file.