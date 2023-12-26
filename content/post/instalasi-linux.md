---
title: "Linux Installation as VM"
date: 2023-12-03T03:54:29-05:00
draft: true
cover: 
   image: ""
   alt: ""
   caption: ""
tags: []
categories: []
---

Yooo, Hollaa, Hollaa!!
Kali ini, saya akan melanjutkan serial tulisan saya mengenai Linux. Kemarin, kita baru saja belajar hal-hal dasar tentang Linux. Jadi, harapannya, saat ini, kalian
seharusnya sudah sedikit-banyak tahu tentang apa itu Linux, bagaimana sejarahnya, apa saja varian atau distro yang tersedia, dan bagaimana cara memilih distro linux
yang cocok dengan kalian...

Nah, sekarang, di artikel ini, saya akan berbagi cara menginstall Linux. 

Secara umum, sebagaimana sistem operasi komputer lainnya (Windows dan MacOS), Linux dapat diinstall di hardware laptop atau komputer kalian secara langsung. Tapi, 
opsi lain untuk menginstall Linux adalah dengan menggunakannya sebagai *virtual machine* (VM). Kalau boleh saya mendefinisikan secara bebas, VM atau mesin virtual 
artinya adalah tidak menginstall suatu sistem operasi ke *hardware* (*hard disk* / ssd) secara langsung, tapi menginstallnya di dalam *software* virtualisasi. 
Salah dua *software* virtualisasi yang cukup populer adalah [Virtualbox](https://www.virtualbox.org/) dan [VMWare](https://www.vmware.com).

*So*, sekarang saya hanya akan fokus menunjukkan bagaimana menginstall Linux sebagai *Virtual Machine* (VM) saja, tidak menginstallnya langsung di *hardware*. 

## Virtual Machine vs Baremetal
Sebelum masuk ke inti tutorialnya, saya merasa perlu menjelaskan alasan saya menginstall Linux sebagai VM alih-alih sebagai sistem operasi langsung di perangkat fisik
(*baremetal*). Berikut ini adalah alasan saya memilih menggunakan Linux di VM bukan di komputer/laptop fisik:

- Meskipun instalasi Linux sebagai *baremetal* berbeda dengan instalasi Linux sebagai VM, tetapi fitur-fitur yang dapat kita gunakan ketika menginstall Linux sebagai
VM 95% sudah mirip dengan Linux as *baremetal*.
- Untuk keperluan belajar Linux, instalasinya sebagai VM memudahkan pemula. Artinya, mereka tidak perlu khawatir kehilangan kemampuan *basic* sistem operasi (*browsing*, etc)
jika terjadi kesalahan di Linux yang diinstall.

Jadi, harapan saya, dengan menginstall Linux sebagai VM, kalian jadi lebih tenang untuk belajar Linux. Itu intinya. Oke, cukup, kita masuk ke tutorial.

## Tutorial Instalasi Linux as VM 
### 1. Install Virtualbox
Langkah pertama yang harus kalian lakukan adalah menginstall *software* virtualisasi, dalam hal ini saya pilih Virtualbox. Alasannya sederhana, yaitu karena Virtualbox 
merupakan salah satu *software* virtualisasi yang sudah cukup populer sehingga kalian dapat menemukan banyak tutorialnya di internet. Jadi, kalau kalian menghadapi
masalah dan ingin melakukan *troubleshooting* di Virtualbox, kalian akan dapat menemukan sumber-sumber yang melimpah dari internet. Selain itu, Virtualbox juga 
adalah program yang open-source. Artinya, kalian dapat menggunakan Virtualbox dengan segala fiturnya tanpa harus merogoh kocek.


Untuk menginstall Virtualbox, kalian cukup mengunjungi situs resminya di sini: https://www.virtualbox.org/wiki/Downloads. 
![ss1](/linuxinstall/windows-virtualbox.png)
Kemudian klik **Windows hosts** untuk mengunduh installer Virtualbox-nya.

Selanjutnya, jalankan installer-nya, dan kita tinggal mengikuti arus instalasinya secara default saja.
![ss2](/linuxinstall/welcome.png)
Tunggu beberapa saat hingga proses install selesai.

### 2. Download Kali Linux
Well, tahap selanjutnya adalah memilih dan mendownload Linux yang akan kalian install ke Virtualbox. Dalam hal ini, saya memilih (walaupun tidak menganjurkan) 
Kali Linux sebagai distro yang akan kita install. Saya perlu beri catatan di sini:

> Jika kalian adalah individu yang hanya ingin mengenal dan mempelajari dengan detail sistem operasi Linux, saya sarankan kalian dapat memulai dengan memilih distro
seperti Ubuntu, MX Linux, atau Linux Mint. Tapi, jika kalian hanya ingin tahu dasar-dasar penggunaan Linux, saya pikir Kali Linux bukanlah masalah besar. So, *just
keep going*.

Alasan saya menggunakan Kali Linux sudah jelas, yaitu karena saya mendeskripsikan diri saya sendiri sebagai "*Cyber Security Enthusiast*" dan Kali Linux menyediakan
*tools* yang lengkap untuk keperluan saya tersebut.

Kalian bisa mendapatkan file Kali Linux dari website resminya di sini: https://www.kali.org/get-kali/#kali-virtual-machines. 
![ss3](/linuxinstall/opsi-install.png)
Di sana, ada dua kategori file yang bisa
didownload, ada yang untuk komputer/laptop dengan arsitektur 64-bit dan ada yang untuk komputer/laptop 32-bit. Silakan sesuaikan dengan tipe arsitektur komputer 
masing-masing. Kemudian, karena kita akan menginstallnya di Virtualbox, maka pilih file Kali Linux yang berlogo Virtualbox.

Oiya, untuk mengecek tipe arsitektur komputer/laptopnya, kalian bisa membuka file eksplorer, kemudian klik kanan di **My Computer** > Properties.
![ss4](/linuxinstall/architecture.png)

Di sana, kalian bisa melihat tipe arsitektur komputer/laptop kalian.
![ss5](/linuxinstall/64bit.png)
Laptop saya berasitektur 64 bit.

### 3. Install Kali Linux di Virtualbox
File Kali Linux yang terunduh berupa file *compress* berekstensi 7z. Jadi, silakan di *extract* terlebih dahulu. Nanti dalam folder yang terekstrak, ada dua file, 
file **.vbox** dan file **.vdi** yang berukuran cukup besar (14 GB). Kita akan fokus ke file **.vdi** karena file tersebut akan kita gunakan untuk proses instal nanti.
![ss6](/linuxinstall/size.png)

Berikut adalah *step-by-step*-nya:

1. 
