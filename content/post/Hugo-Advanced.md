---
title: "Hugo (Papermod) Advanced"
date: 2023-10-09T15:22:46+07:00
draft: false
cover:
  image: "/Hugo-Advanced/cover.png"
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

### Tips 11: Menambahkan menu Search
![ss14](/Hugo-Advanced/ss14.png)
Untuk menampilkan fitur menu *Search* seperti gambar di atas setidaknya ada 3 hal yang perlu diperhatikan[^3]:

1. Menambahkan konfig **JSON** di file konfigurasi (kebetulan di saya nama filenya `hugo.yaml`)
```yaml
outputs:
  home:
    - HTML
    - RSS
    - JSON 
```

2. Membuat file baru di bawah folder atau direktori `/content/`, bernama `search.md`.
```bash
.
├── config.yml
├── content/
│   ├── search.md   <--- Bikin file search.md di sini
│   └── posts/
├── static/
└── themes/
    └── papermod/
```
Isi file `search.md`-nya adalah seperti ini:
```yaml
---
title: "Search"
layout: "search"
summary: "search"
placeholder: "ini text yang ada di dalam box search-nya"
---
```

3. Memastikan sudah menambahkan *identifier* & *url* di file konfigurasi `hugo.yaml` atau `config.yaml`.
```yaml
menu:
  main:
    - identifier: home
      name: Home
      url: /
    - identifier: search
      name: Search
      url: /search/  <--- Tambahkan ini
```

### Tips 12: Menambahkan kutipan postingan dari media sosial 

Di sini, saya akan membagikan cara menambahkan kutipan postingan dari Twitter (X), Instagram, dan Youtube[^4].

#### Twitter (X)
Misalnya, untuk menampilkan link twitter berikut:

`https://twitter.com/CrazyCatsDogs/status/1769982684799873341`	

Kita dapat membuat ***shortcode*** berikut:
![ss15](/Hugo-Advanced/ss15.png)

Hasilnya, seperti ini:
{{<twitter user="CracyCatsDogs" id="1769982684799873341" >}}

#### Instagram
Untuk menampilkan postingan Instagram dari link berikut:

`https://instagram.com/p/C3YR1iHoeuh`

Kita dapat membuat ***shortcode*** berikut:
![ss16](/Hugo-Advanced/ss16.png)

Hasilnya, seperti ini:
{{< instagram C3YR1iHoeuh >}}

#### Youtube
Untuk menampilkan sebuah video Youtube dari link berikut:

`https://www.youtube.com/watch?v=YOs4ntiUq1o`

Kita dapat membuat ***shortcode*** berikut:
![ss17](/Hugo-Advanced/ss17.png)

Hasilnya, seperti ini:
{{< youtube YOs4ntiUq1o >}}

### Tips 13: Menambahkan caption pada gambar
Untuk menambahkan caption pada gambar, kita bisa melampirkan caption yang kita inginkan setelah path gambar seperti pada baris kode berikut[^5]:
```markdown
![Alt-Image](/path/to/image.png "Caption Here!")
```
Caption-nya memang tidak muncul di bawah atau di atas gambar pada postingan kita, tapi muncul ketika di-["hover"](https://www.merriam-webster.com/dictionary/hover) alias ketika kita mengarahkan mouse atau pointer mouse kita ke gambar. Untuk membuktikannya, kalian bisa meng-hover gambar berikut:

![ss18](/Hugo-Advanced/ss18.jpg "These kitten are so cute!")

Apakah muncul caption ***"These kitten are so cute!"***-nya? 🫶🏻🥹❤️‍🩹 🤗

### Tips 14: Mengatur Urutan Menu
Jika susunan menu dibiarkan default di file konfigurasi hugo (`hugo.yaml`), maka urutan menu yang tampil di website akan menyesuaikan dengan urutan alphabet/abjad yang ada pada kolom `name:`. Tapi, kalau kita ingin agar urutan tersebut disesuaikan dengan selera kita, maka kita bisa menambahkan baris `weight:{angka}` sehingga urutan menu yang tampil di website akan menyesuaikan urutan angka pada kolom **weight** tersebut[^6]:

Misalnya, berikut adalah pengaturan menu pada file `hugo.yaml` milik saya yang sudah disesuaikan urutannya dengan nomor:
```yaml
menu:
  main:
    - identifier: home
      name: Home
      url: /
      weight: 1 # <-- untuk mengatur urutan tampil pertama di menu
    - identifier: search
      name: Search
      url: /search/
      weight: 3 # <-- untuk mengatur urutan tampil ketiga di menu
    - identifier: tutorial
      name: Tutorial
      url: /post/
      weight: 2 # <-- untuk mengatur urutan tampil kedua di menu
```

### Tips 15: Menampilkan File PDF 

Kita bisa menampilkan isi sebuah file PDF pada website Hugo kita dengan melampirkan ***`shortcode`***. Pertama, kita harus membuat sebuah file html di `themes/{papermod}/layouts/shortcodes`, misalnya saya beri nama **pdf.html** yang isinya adalah sebagai berikut[^7]:
```html
<iframe src="{{ .Get 0 }}" width="100%" height="700px"></iframe>
```

Ukuran *layout* file pdf yang tampil di website bisa disesuaikan pada bagian **width** dan **height** pada **pdf.html** tersebut. Selanjutnya, kita bisa menambahkan ***`shortcode`*** berikut di halaman markdown kita:
![ss18](/Hugo-Advanced/ss18.png)

Hasilnya seperti ini:

{{< pdf "/Hugo-Advanced/teachlikefinland.pdf" >}}

Jangan lupa, sebelum di-push ke github, kita perlu menghapus folder `.git` di direktori papermod sebagai tema website kita, supaya file **pdf.html** kita yang tadi bisa ikut terupload dalam folder tema papermod di github.
```shell
rm -rf themes/papermod/.git`
```

Atau cara yang lebih aman, kita bisa menghapus seluruh folder tema papermod, kemudian mengunduhnya kembali, jangan lupa menghapus folder `.git`-nya. baru kemudian membuat baru file **pdf.html** di folder ***`shortcode`***.
```shell
rm -rf themes/papermod/
git clone https://github.com/adityatelange/hugo-PaperMod.git themes/papermod
rm -rf themes/papermod/.git
touch /themes/papermod/layouts/shortcodes/pdf.html
echo "<iframe src="{{ .Get 0 }}" width="100%" height="700px"></iframe>" > pdf.html
```

Kalau sudah selesai, jangan lupa commit ke repo lokal dan push ke Github:

```shell
ssh-agent bash
ssh-add ./ssh/ssh-config-file

git status
git add .
git commit -m "change configuration"
git push
```

[^1]: https://gohugo.io/getting-started/configuration/
[^2]: https://github.com/adityatelange/hugo-PaperMod/wiki/Features#profile-mode
[^3]: https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-features/#search-page
[^4]: https://gohugo.io/content-management/shortcodes/
[^5]: https://sebastiandedeyne.com/captioned-images-with-markdown-render-hooks-in-hugo/
[^6]: https://chatgpt.com/c/ba64752f-c7a0-438c-9a1b-d11efa9aaa05
[^7]: https://chatgpt.com/c/35c0c015-e708-42f4-9319-ef7992479132
