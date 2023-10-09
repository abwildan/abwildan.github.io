---
title: "Hugo Advanced"
date: 2023-10-09T15:22:46+07:00
draft: false
cover:
  image: ""
  alt: ''
  caption: ""
tags: ["hugo", "website", "static-site"]
categories: ["hugo"]
---

# Mengkonfigurasi Hugo (Advanced)
Setelah berhasil membuat website Hugo dan men-*deploy*-nya ke Github, kali ini saya akan memberi beberapa tips yang sedikit banyak dapat memberi kemudahan dan nilai estetika pada website Hugo tersebut.

### Tips 1: Mengganti format file konfigurasi
*By default*, format file konfigurasi Hugo tersimpan dalam format **TOML** (.toml). Tapi, Hugo sendiri menyediakan 2 opsi format lain yang dapat kita gunakan, yaitu **YAML/YML** (.yaml) dan **JSON** (.json)[^1]. 

Untuk alasan *humanisme* (kemudahan dan kenyamanan dipandang dan dibaca), maka kita akan mengganti format file konfigurasi Hugo dari **TOML** ke **YAML/YML**. Alasan saya tersebut juga didukung oleh pernyataan pembuat tema ***Papermod*** di Github-nya[^2].
![ss1](/Hugo-Advanced/ss1.png)

Caranya, kita dapat mengunjungi website pengkonversi TOML ke YAML, misalnya saya menggunakan website "**[convert simple](https://www.convertsimple.com/convert-toml-to-yaml/)**" ini. Tinggal *copy-paste* kode yang ada di file konfigurasi Hugo (***hugo.toml***) ke website tersebut.
![ss2](/Hugo-Advanced/ss2.png)

Jangan lupa ganti nama filenya juga dari hugo.toml ke ***hugo.yaml***.
```bash
mv hugo.toml hugo.yaml
```

Setelah itu, kita harus memberi tahu Hugo kalau file konfigurasi kita sudah berubah formatnya dengan mengetikkan perintah berikut:
```bash
hugo --config hugo.yaml
```

### Tips 2: Mengganti mode *Home Page* sesuai selera
***Papermod*** menyediakan tiga mode sebagai tampilan *Home Page* website Hugo kita[^2].

1. Regular Mode (Default-mode)
![ss3](/Hugo-Advanced/ss3.jpg)

2. Home-Info Mode
![ss4](/Hugo-Advanced/ss4.jpg)

Untuk mengganti mode ke **Home-Info Mode**, kita dapat menambahkan baris kode berikut ke file konfigurasi (*hugo.yaml*):
```yaml
params:
    homeInfoParams:
        Title: Hi there wave
        Content: Can be Info, links, about...

    socialIcons: # optional
        - name: "<platform>"
            url: "<link>"
        - name: "<platform 2>"
            url: "<link2>"
```

3. Profile Mode
![ss5](/Hugo-Advanced/ss5.jpg)

Untuk mengganti mode ke **Profile Mode**, kita dapat menambahkan baris kode berikut ke file konfigurasi (*hugo.yaml*):
```yaml
params:
    profileMode:
        enabled: true
        title: "<Title>" # optional default will be site title
        subtitle: "This is subtitle"
        imageUrl: "<image link>" # optional
        imageTitle: "<title of image as alt>" # optional
        imageWidth: 120 # custom size
        imageHeight: 120 # custom size
        buttons:
            - name: Archive
            url: "/archive"
            - name: Github
            url: "https://github.com/"

    socialIcons: # optional
        - name: "<platform>"
            url: "<link>"
        - name: "<platform 2>"
            url: "<link2>"
```

### Tips 3: Menambahkan gambar pada postingan konten 
Untuk menambahkan "*post cover image*" seperti gambar di bawah ini:
![ss6](/Hugo-Advanced/ss6.png)

kita dapat menambahkan baris kode berikut di file konfigurasi (*hugo.yaml*):

```yaml
cover:
    image: "<image path/url>"
    # can also paste direct link from external site
    # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
    alt: "<alt text>"
    caption: "<text>"
    relative: false # To use relative path for cover image, used in hugo Page-bundles
```

Kita juga dapat menambahkan pengaturan pada gambar tersebut dalam hal responsivitas dan *link-to-full-size* dengan menambahkan baris kode berikut:

```yaml
params:
    cover:
        responsiveImages: true # To reduce generation time and size of the site, you can disable this feature using
        linkFullImages: true # To enable hyperlinks to the full image size on post pages
```

### Tips 4: Menambahkan fitur *Reading Time*.
Untuk menampilkan fitur *reading time*, tambahkan baris kode berikut:  
![ss7](/Hugo-Advanced/ss7.png)

```yaml
Params:
    ShowReadingTime: true # Displays Reading Time (the estimated time, in minutes, it takes to read the content.)
```

### Tips 5: Menambahkan fitur daftar isi
Untuk menampilkan fitur daftar isi (*Table of Content*), tambahkan baris kode berikut:
![ss8](/Hugo-Advanced/ss8.png)

```yaml
ShowToc: true # To show ToC add following to page-variables
TocOpen: true # To keep Toc Open by default on a post add following to page-variables:
```

### Tips 6: Menambahkan fitur tombol *Share Post*
Untuk menampilkan fitur tombol *Share Post*, tambahkan baris kode berikut:
![ss9](/Hugo-Advanced/ss9.png)

```yaml
params:
    ShowShareButtons: true # Displays Share Buttons at Bottom of each post
```

### Tips 7: Menambahkan fitur *Post Suggestion*
Untuk menampilkan fitur *Post-Suggestion*, tambahkan baris kode berikut:
![ss10](/Hugo-Advanced/ss10.png)

```yaml
params:
    ShowPostNavLinks: true # Adds a Previous / Next post suggestion under a single post
```

### Tips 8: Menambahkan fitur *copy* button di ***codeblock***
Untuk menampilkan fitur *copy* di ***codeblock***, tambahkan baris kode berikut:
![ss11](/Hugo-Advanced/ss11.png)

```yaml
params:
    ShowCodeCopyButtons: true # Adds a copy button in code block to copy the code it contains
```

### Tips 9: Menambahkan fitur *Author* di postingan
Untuk menampilkan fitur *Author* di postingan, tambahkan baris kode berikut:
![ss12](/Hugo-Advanced/ss12.png)

```yaml
params:
  author: "Wildan" # Add author
```

### Tips 10: Menambahkan fitur menu-menu (*categories, tags, archives*)
Untuk menampilkan fitur menu di postingan, tambahkan baris kode berikut:
![ss13](/Hugo-Advanced/ss13.png)

```yaml
menu:
  main:
    - identifier: categories
      name: Categories
      url: /categories/
      weight: 10
    - identifier: tags
      name: Tags
      url: /tags/
      weight: 20
    - identifier: archives
      name: Archives
      url: /archives/
      weight: 30
```

Kalau sudah selesai, jangan lupa commit ke repo lokal dan push ke Github:

```bash
git status
git add .
git commit -m "change configuration"
git push
```

[^1]: https://gohugo.io/getting-started/configuration/
[^2]: https://github.com/adityatelange/hugo-PaperMod/wiki/Features#profile-mode