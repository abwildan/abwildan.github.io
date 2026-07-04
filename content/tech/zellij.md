---
title: "Zellij: Another Terminal Multiplexer, Yet More Modern"
date: 2026-06-22T06:46:06+07:00
lastmod: 2026-06-30
draft: false
summary: "If tmux is the legendary terminal multiplexer, meaning it is the oldest and not really convenient for beginners, then, zellij is your other terminal multiplexer, yet offering modern UI and convenience."
tags: ["zellij", "terminal", "multiplexer"]
categories: "zellij"
series: ["terminal multiplexer"]
series_order: 1
---

## Getting to Know

Seperti `tmux`, `zellij` adalah sebuah program terminal multiplexer juga. Akan tetapi, zellij menawarkan tampilan / UI (_User Interface_) yang lebih modern dan kemudahan penggunaan dibandingkan dengan `tmux` sehingga pengguna pemula maupun _power user_ dapat menggunakan `zellij` dengan lebih nyaman. Oleh karena itu, gak terlalu salah kalau dikatakan bahwa `zellij` adalah `tmux` versi yang lebih modern.  

Hirarki yang dimiliki `zellij` juga saya pikir mirip dengan level hirarkinya `tmux`, yang terbagi ke 3 level: **Session > Tab > Pane**. Jadi, ketika kita pertama kali menjalankan program `zellij`, dia akan membuat sebuah "Session" yang di dalamnya juga sudah memiliki sebuah "Tab" yang mengandung sebuah "Pane". Di dalam "Session" tersebut, kita bisa menambahkan "Tab" yang dapat kita bagi menjadi beberapa "Pane".

Perhatikan ilustrasi berikut:

![ss1](/zellij/ss10.png "Session, Tab, and Pane on `zellij`. **Created with:** [excalidraw.com](https://excalidraw.com/?element=Svp3euaOi1nCReEOdK3vu)")

{{< article link="/tech/tmux/" showSummary=true compactSummary=true >}}  

### Features

Beberapa fitur `zellij` yang juga di-_highlight_ di website mereka adalah sebagai berikut:[^1]

#### 1. Floating Panes

![ss1](/zellij/ss1.png "`zellij` floating panes")

Untuk menjalankannya:

```shell
Alt+f
```

Seperti terlihat, kita dapat membuat _floating pane_. Yang unik dari _floating pane_ ini adalah jika kita menjalankan sebuah perintah atau proses di dalamnya, kemudian kita _hide floating pane_-nya, nanti ketika ditampilkan lagi, proses tersebut masih akan tetap berjalan.

Dengan floating pane, kita bisa:
- Memindahkan posisinya dengan mouse maupun keyboard.
- Mengatur ukurannya.
- Pin agar _always on top_.

#### 2. Stacked Panes

![ss2](/zellij/ss2.png "`zellij` stacked panes")

Kita juga bisa membuat _stacked panes_ (lihat panes di sebelah kanan). 

```shell
Ctrl+p s
```

Mode ini bagus untuk:
- Menjaga banyak _editor buffers_ tetap tersedia.
- Memonitor beberapa _commands_ tanpa mengambil banyak tempat.
- Mengorganisasi _workspace_ berdasarkan jenis pekerjaan atau konteks. 

#### 3. Layouts & Automation

![ss3](/zellij/ss3.png "`zellij` autozellijmation layouts. **Source:** https://zellij.dev/features/")

Seperti terlihat pada gambar di atas, `zellij` juga memungkinkan kita untuk melakukan otomatisasi melalui layout-layout. Ini dapat kita lakukan di file konfigurasi `zellij`. Beberapa manfaatnya:
- Mengotomatisasi workflow.
- Langsung membuka file-file di editor ketika membuka `zellij`.
- Membuat template layout supaya tidak selalu mengulang keybind layout yang sama.

#### 4. Session Management

![ss4](/zellij/ss4.png "`zellij` session management")

Seperti namanya, kita juga bisa melakukan manajemen sesi dengan perintah:

```shell
Ctrl+o w
```

- Berpindah cepat ke sesi yang aktif.
- Membuat sesi dengan nama custom.
- Mengatur sesi yang berjalan di belakang layar (_background_).

#### 5. Web Client

![ss5](/zellij/ss5.png "`zellij` in web browser!")

Menurut saya, ini fitur yang paling keren. Kita bisa mengakses `zellij` di web browser!

```shell
zellij web --create-token # buat token untuk login ke web
zellib web # buat sesi web browser, default: http://127.0.0.1:8082s
```

Beberapa manfaatnya:
- Gak memerlukan terminal karena kita bisa mengakses `zellij` di web browser.
- Menjaga sesi agar tetap ada dengan mem-_bookmark_-nya via URL (misalnya `http://localhost:8082/my-project`)
- Kita bisa berbagi sesi dengan orang lain, terutama jika mengerjakan proyek yang sama.

#### 6. Plugin System

![ss6](/zellij/ss6.png "`zellij` **welcome screen** plugin")

```shell
zellij -l welcome
```

`zellij` sendiri juga pada dasarnya sudah menggunakan beberapa plugin (_pre-bundled plugin_), misalnya seperti **tab-bar**, **status bar**, **session-manager**, dan **welcome screen**.

Jadi, kita bisa membuat plugin `zellij` kita sendiri menggunakan bahasa pemrograman Rust.[^2]

#### 7. Command Panes

![ss7](/zellij/ss7.png "`zellij` command panes")

Kita juga bisa menjalankan perintah tertentu dari luar `zellij` yang akan langsung dieksekusi di dalam `zellij`.

```shell
zellij -s nama-sesi run -- <perintah yang ingin dijalankan>
```

Manfaatnya:
- Melihat **exit code** dari perintah yang berhasil dijalankan.
- Menjalankan kembali suatu command dengan sekali tekan [Enter].
- Bagus untuk _build commands_, _test_, dan _development servers_.

#### 8. Scrollback Editing

![ss8](/zellij/ss8.png "`zellij` scrollback editing. **Source:** https://zellij.dev/features/")

Kita juga bisa membuka _pane buffer scrollback_ di `$EDITOR`. 

```shell
Ctrl+s e
```

Manfaatnya: 
- Menyimpan _output_ ke file untuk dibagikan atau didokumentasikan.
- _Search_, _manipulate_, dan _copy_ terminal _output_ melalui file editor favorit kita. 

#### 9. Multiple Pane Select

![ss9](/zellij/ss9.png "`zellij` multiple pan select")

Dengan fitur ini, kita bisa menyeleksi berbagai pane (lihat pane yang terseleksi, berwarna ungu).

```shell
Alt+[left click]
```

Manfaatnya:
- Menutup pane yang kita inginkan secara bersamaan.
- Stack (menumpuk) pane yang kita inginkan secara bersamaan.
- Memecah beberapa panes yang kita inginkan ke dalam tab baru dalam jumlah banyak (_bulk_).

#### etc

Masih ada beberapa fitur zellij lainnya yang tidak dicantumkan dalam artikel ini, seperti **_Remote Session Access_**, **_Advanced Scriptability_**, **_Mouse-based Pane Resizing_**, dan lain-lain. Sila kunjungi dokumentasi resmi `zellij` untuk mengetahui fitur-fitur tersebut lebih lanjut:

https://zellij.dev/features/

## Installation 

Berikut adalah cara meng-_install_ `zellij` di beberapa sistem operasi UNIX/Linux:

|       Distro      |                  Command          |
|       ---         |                   ---             |
| **Arch Linux**    | **`sudo pacman -Sy zellij`**         |
| **Opensuse**      | **`sudo zypper install zellij`**     |
| **FreeBSD**       | **`sudo pkg install zellij`**        |

{{< alert icon=none >}}

**NixOS:**  
Masukkan baris berikut di file konfigurasi (`/etc/nixos/configuration.nix`):

```nix
  environment.systemPackages = [
    pkgs.zellij
  ];
```

Atau jika menggunakan `nix-shell`:

```shell
nix-shell -p zellij 
```

{{< /alert >}}

Per artikel ini ditulis, `zellij` tidak tersedia di repositori **Debian/Ubuntu** dan **Fedora**. Oleh karena ini, beberapa alternatif cara instalasinya adalah sebagai berikut:
1. [Snap](https://snapcraft.io/zellij): https://snapcraft.io/zellij
2. [Official Github Repo](https://github.com/zellij-org/zellij/releases/): https://github.com/zellij-org/zellij/releases/

Berikut adalah repository Github `zellij`:

{{< github repo="zellij-org/zellij" showThumbnail=true >}}

## Usage

Berikut adalah cara menggunakan `zellij`.

### Quickstart 

#### Starting `zellij`

Untuk memulai sesi `zellij`, kita hanya perlu mengetikkan:

```shell
zellij
```

Atau kalau kita ingin membuat sesi baru dengan nama custom:

```shell
zellij -s your-custom-session-name
```

Atau kita bisa juga masuk ke sesi yang sudah ada sebelumnya. Kita bisa masuk ke sesi yang masih berjalan atau sesi yang sudah mati (kalau kita masuk ke sesi yang sudah mati, artinya kita menghidupkan lagi sesi tersebut).

```shell
# lihat daftar sesi yang tersedia terlebih dahulu
zellis ls 

# masuk ke salah satu sesi
zellij attach <nama-sesi>
```

{{< alert icon=none >}}

Semua "_cache_" dari daftar sesi `zellij` akan tersimpan di `~/.cache/zellij`. 

{{< /alert >}}

#### Adding Tab

Buat tab baru dengan _keybind_:

```shell
Ctrl+t n
```

#### Splitting Pane

Bagi pane secara vertikal dengan _keybind_:

```shell
Ctrl+p r
```

Bagi pane secara horizontal dengan _keybind_:

```shell
Ctrl+p d
```

#### Panes Navigation

Berpindah dari satu pane ke pane yang lain dapat dilakukan dengan mudah _keybind_:

```shell
Alt → # ke pane yang ada di kanan
Alt ← # ke pane yang ada di kiri
Alt ↑  # ke pane yang ada di atas
Alt ↓ # ke pane yang ada di bawah
```

#### Detaching Session

Keluar dari sesi tanpa mematikan sesi tersebut:

```shell
Ctrl+o d
```

Untuk benar-benar keluar dan mematikan sesi:

```shell
Ctrl+q
```

#### Listing Sessions

Kita bisa melihat daftar sesi yang ada/yang pernah dibuat (baik yang sudah mati maupun yang masih berjalan, jika ada):

```shell
zellij ls
```

Atau kalau ingin menggunakan session manager juga bisa dengan mengetikkan _keybind_ berikut di dalam sesi _zellij_:

```shel
Ctrl+o w
```

#### Renaming Session

Untuk mengganti nama sesi:

```shell
# Masuk ke session manager
Ctrl+o w

# Pilih sesi yang ingin diganti namanya, kemudian:
Ctrl+r
```

Kemudian masukkan nama sesi yang kalian kehendaki. Tekan [**Enter**] jika sudah selesai.

#### Deleting Session

Hapus sesi dengan perintah:

```shell
zellij d <nama-sesi-yang-ingin-dihapus>
```

Atau via session manager:

```shell
# Masuk ke session manager di dalam zellij
Ctrl+o w

# Pilih nama sesi yang ingin dihapus
Del
```

#### Locking Keybinds

Kita juga bisa menon-aktifkan _keybind_ sementara:

```shell
Ctrl+g
```

Gunakan _keybind_ yang sama (`Ctrl+g`) untuk meng-_unlock_-nya.

Sekian.  
Terima kasih sudah membaca!











[^1]: https://zellij.dev/features/
[^2]: https://zellij.dev/tutorials/developing-a-rust-plugin/