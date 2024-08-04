---
title: "Intro to Linux"
date: 2023-12-02T02:24:37-05:00
draft: true
cover: 
   image: "/introlinux/ss1.png"
   alt: "Linux Logo (TUX)"
   captions: "Linux Logo - TUX"
tags: ["linux"]
categories: ["linux"]
---

Holla!

Kali ini, saya akan berbagi mengenai satu topik yang menarik. Topik yang akan saya *share* yaitu tentang Linux. Menurut saya, Linux merupakan topik
yang seharusnya saya bahas di artikel ini karena menjadi salah satu "**peralatan perang**" penting yang saya gunakan selama saya membangun artikel ini.

Nanti, pembahasannya akan saya bagi ke dalam empat *part*. Pada bagian pertama, saya akan menjelaskan tentang Linux itu sendiri. Bagian kedua akan 
menjelaskan mengenai sejarah Linux. Bagian ketiga tentang distribusi linux. Di bagian keempat, saya akan menjelaskan bagaimana cara memilih
distro Linux. Untuk instalasi Linux tidak akan saya bahas di sini karena artikel ini akan menjadi terlalu panjang sehingga pembahasan mengenai tutorial
instalasi Linux akan saya buatkan di artikel yang baru.

Oke, mari kita masuk ke pembahasan pertama...

### 1. Linux in a Nutshell
Secara sederhana, Linux adalah sistem operasi berbasis *open-source*. Sebagaimana sistem operasi dekstop komputer lain yang terkenal seperti Windows dan MacOS, Linux juga
merupakan *software* yang dapat digunakan di komputer atau laptop kita. Dan karena Linux berbasis *open-source*, artinya, program ini dapat 
diperoleh, dikembangkan, dan diinstall  di komputer kita secara gratis tanpa harus membayar lisensi terlebih dahulu seperti Windows/MacOS.

### 2. Sejarah (singkat) Linux
![f1](/introlinux/linus-torvalds-enlarge.jpg)
Linux dikembangkan pertama kali oleh **Linus Torvalds** pada tahun 1991 saat masih menjadi mahasiswa di Universitas Helsinki, Finlandia. 
*Fun fact*-nya, Linux ternyata merupakan produk dari "proyek iseng" Linus yang terinspirasi dari sistem operasi Minix[^1]. Minix adalah 
sistem operasi mirip UNIX yang dibuat oleh seorang Profesor dari Vrije Universiteit Amsterdam, Andrew Stuart Tanenbaum, pada tahun 1987 dengan tujuan 
pendidikan. UNIX sendiri merupakan sistem operasi yang dibangun pada tahun 1969 oleh dua orang *developer* bahasa C (Ken Thompson & Dennis Ritchie) dan
para peneliti di AT&T Bell Laboratorium Amerika.

Logo Linux adalah seekor penguin bernama TUX. TUX sendiri merupakan gabungan dari kata **(T)orvalds (U)ni(X)**. Kenapa penguin? Awal mulanya terjadi
ketika Linus sedang berlibur dan bertemu dengan seekor penguin kecil dan pendek yang secara tidak sengaja menggigit jarinya. 
Hal tersebut membuatnya demam selama berhari-hari. Kejadian ini kemudian menginspirasi dirinya untuk memakai penguin sebagai logo Linux.

Dalam membangun Linux, Linus menggunakan *tools* dari [Free Foundation Software](https://www.fsf.org/) yang berlisensi GNU. Kemudian untuk menjadikan 
Linux sebagai sebuah sistem operasi yang utuh, dia memasukkan program-program yang juga berlisensi [GNU](https://www.gnu.org/licenses/). Oleh karena itu,
Linux sering juga disebut bersandingan dengan GNU, yaitu GNU/Linux. 

### 3. Distribusi Linux
Sejak awal mula ditemukannya Linux pada tahun 1991 hingga saat ini, sudah banyak variasi atau distribusi (distro) Linux yang terdapat di internet dan 
tentu saja kita dapat mengunduhnya secara cuma-cuma. Beberapa distro Linux yang terkenal misalnya ada [Ubuntu](https://ubuntu.com/), [Debian](https://www.debian.org/index.en.html),
[Fedora](https://fedoraproject.org/), [Mint](https://linuxmint.com/), [Arch](https://archlinux.org/), dan masih banyak lagi. 

Masing-masing varian Linux biasanya memiliki distro induk sebagai basis pengembangan Linux tersebut. Misalnya, Ubuntu adalah salah satu distro Linux yang
dibangun berbasis Debian (Debian-based). Linux Mint juga merupakan salah satu distro Linux yang dikembangkan berbasis Debian. Dengan kata lain, Debian
merupakan distro induk yang memiliki banyak varian Linux di bawahnya. Tapi, yang menarik, Ubuntu sebagai "anak" turunan Debian, juga memiliki varian-varian
Linux di bawahnya seperti Lubuntu, Kubuntu, Xubuntu, dan lain-lain. Artinya, seperti Debian, Ubuntu juga merupakan distro induk yang memiliki turunan
distro di bawahnya.

Berikut adalah peta distribusi Linux yang tersedia di Wikipedia[^2] Untuk memperbesar tulisannya, kalian dapat klik kanan di gambar tersebut, lalu pilih
***Open Image in New Tab***.
![f2](/introlinux/Linux_Distribution_Timeline.svg)

Melalui peta persebaran tersebut, kita dapat mengetahui 3 hal, 
1. distro Linux yang ada saat ini 
2. distro Linux yang menjadi **akar** dari varian-varian Linux lainnya, dan
3. tahun rilisnya distro tersebut ke publik (internet)

Berdasarkan peta tersebut, setidaknya ada 6 akar distro Linux yang memiliki varian-varian distro yang cukup populer. Kelima "distro akar" tersebut yaitu
**Slackware**, **Debian**, **Redhat**, **Jurix**, **Enoch**, dan **Arch Linux**.

*Developer* dari setiap distro Linux tidak bisa juga beragam. Sebab, ada distro yang dikembangkan oleh satu perusahaan atau organisasi, ada pula yang
dikembangkan oleh komunitas, dan bahkan ada juga yang dikembangkan atau dibuat oleh perseorangan/individu. **Ubuntu** misalnya, adalah distro Linux yang
dikembangkan oleh perusahaan bernama [Cannonical](https://ubuntu.com/community/governance/canonical), **Arch Linux** adalah distro Linux yang 
dikembangkan oleh komunitas, dan **Archcraft** adalah distro berbasis Arch Linux yang dibuat oleh seorang *developer* bernama [Aditya Shaka](https://github.com/adi1090x).
Yang jelas, masing-masing akar distro Linux menggunakan "kernel" (program inti dari sebuah sistem operasi) Linux yang sama, yaitu seperti yang dibuat 
oleh penemu Linux, Linus Torvalds, untuk mengembangkan distro Linux-nya masing-masing.

### 4. Cara Memilih Distro Linux
Sebagaimana saya jelaskan sebelumnya, ada banyak sekali distro Linux yang dapat kita gunakan. Nah, sebelum menentukan distro Linux apa yang akan
kalian gunakan, kita perlu tahu juga bahwa setiap distro Linux yang dikembangkan memiliki tujuan spesifiknya masing-masing. Sebagai contoh, saya akan
buatkan kategori distro linux berdasarkan tujuannya sebagai berikut:

**`1. Distro Linux untuk Daily Driver`**

Distro Linux ini cocok digunakan untuk kegiatan sehari-hari seperti mengetik, menonton, *browsing*, dan sebagainya.
- Ubuntu : https://ubuntu.com/download/desktop
- MX Linux : https://mxlinux.org/
- Linux Mint : https://linuxmint.com/
- Pop!_OS : https://pop.system76.com/
- Debian : https://www.debian.org/index.id.html
- Manjaro : https://manjaro.org/

**`2. Distro Linux untuk Multimedia`**

Distro Linux ini cocok digunakan untuk kegiatan multimedia seperti *design* dan *editing*.
- Ubuntu Studio : https://ubuntustudio.org/
- AV Linux : http://www.bandshed.net/avlinux/
- Fedora Design Suite : https://labs.fedoraproject.org/design-suite/
- LangitKetujuh OS : https://langitketujuh.id/
- Apodio : http://apodio.org/doku.php
- io GNU/Linux : http://io.gnu.linux.free.fr/

**`3. Distro Linux untuk Hacking`**

Distro Linux ini cocok digunakan untuk menguji keamanan jaringan komputer dan forensik.
- Kali Linux : https://www.kali.org/
- Parrot OS : https://www.parrotsec.org/
- BackBox : https://www.backbox.org/
- Black Arch : https://blackarch.org/
- Exodia OS : https://exodia-os.github.io/exodia-website/

**`4. Distro Linux untuk Server`**

Distro Linux ini cocok digunakan sebagai server.
- Ubuntu Server : https://ubuntu.com/server
- CentOS : https://www.centos.org/
- OpenSUSE : https://www.opensuse.org/
- Fedora Server : https://fedoraproject.org/en/server/download
- Rocky Linux : https://rockylinux.org/
- Red Hat Enterprise Linux (RHEL) : https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux


Setelah memahami tujuan dari dibuatnya masing-masing distro Linux, langkah berikutnya adalah mengidentifikasi kebutuhan untuk menginstall Linux. 
Misal, kita ingin menginstall Linux untuk keperluan sehari-hari saja (*daily driver*), maka kalian bisa mencari distro Linux yang sesuai dengan 
kebutuhan kalian tersebut.

> **Note**

> Menurut saya pribadi, spesialisasi Linux ditujukan untuk memudahkan penggunanya agar dapat langsung menggunakan *software*/aplikasi yang 
terkait dengan kebutuhannya sehingga tidak perlu meng-*compile* sendiri *tools* yang akan digunakan. Artinya, sebenarnya, selagi *tools/software*/aplikasi yang 
diperlukan tersedia di repositori, apapun distro Linux yang digunakan bukanlah masalah besar. Tapi, untuk kemudahan dan tujuan belajar, silakan 
gunakan distro Linux berdasarkan spesialisasi yang sudah saya kategorisasikan sebelumnya...


Demikian dulu perkenalan dengan Linux di artikel ini. Mungkin, di artikel-artikel berikutnya, kita akan belajar Linux lebih jauh lagi.

Sekian,	
sampai jumpa di artikel saya yang lain! :)

[^1]: https://klc2.kemenkeu.go.id/kms/knowledge/sejarah-dan-perkembangan-linux-ef5980e6/detail/
[^2]: https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg
