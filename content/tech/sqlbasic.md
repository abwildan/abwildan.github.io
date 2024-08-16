+++
title= "SQL Basic Commands"
date = 2024-08-16T08:03:25Z
draft = false
cover = ""
summary = "Let's learn about SQL basic commands for databases."
tags = [ "sql", "database", "linux" ]
categories = "sql"
+++

## Sepintas SQL, Database, dan Database Relational

Pernah dengan SQL?  

Yap, SQL atau *Structured Query Language* adalah bahasa yang digunakan untuk membuat, mengakses, dan memodifikasi data dalam sebuah *database*, khususnya pada *relational database*.[^1] Apa itu *relational database*?. Perlu diketahui terlebih dahulu bahwa *database* atau basis data adalah sebuah sistem untuk menyimpan data dengan rapih. Database dapat diibaratkan sebagai lemari yang menyimpan berbagai macam pakaian.[^2] Dengan adanya lemari, pakaian kita tersusun, tersimpan, dan tertata dengan rapih sehingga mudah untuk dicari nanti ketika dibutuhkan. Begitupula dengan data, data yang disimpan dalam sebuah *database* akan memudahkan pengguna data untuk mengaksesnya nanti ketika diperlukan. Data dalam database disimpan dalam bentuk tabel yang memiliki baris dan kolom.

![ss1](/sqlbasic/ss1.png "Tabel database")

Nah, sekarang, kita kembali lagi, apa itu *relational database*? Sebetulnya, *relational database* adalah kumpulan tabel yang dapat saling terhubung satu sama lain melalui kunci (*keys*), yaitu *primary key* dan *foreign key*. Primary key adalah nilai unik yang dimiliki suatu data. Contoh *primary key* adalah nomor KTP karena nomor KTP setiap orang tidak akan sama, meskipun diantara dua anak kembar sekalipun. Atau pada contoh gambar tabel saya di atas adalah NIM (Nomor Induk Mahasiswa). Sedangkan *foreign key* adalah adalah nilai yang mereferensikan data dari tabel lain. 

![ss2](/sqlbasic/ss2.png "primary key & foreign key")

<mark> Referensi bacaan lanjut tentang *database relational*: https://www.dicoding.com/blog/mengenal-apa-itu-relational-database/ </mark>

## Instalasi Mariadb

Oke, sekarang saya akan menginstall mariadb di linux:

Archlinux:

```shell
sudo pacman -S mariadb  
```

Debian:

```shell
sudo apt install mariadb-server mariadb-client
```

Untuk memastikan mariadb sudah terinstall, gunakan perintah:
```shell
mariadb --version
```






[^1]: https://id.wikipedia.org/wiki/SQL
[^2]: https://www.dicoding.com/blog/mengenal-apa-itu-relational-database/

