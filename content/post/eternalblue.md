---
title: "Eternalblue - MS17-010"
date: 2024-03-21T18:54:33+07:00
draft: false
cover:
  image: ""
  alt: ''
  caption: ""
tags: ["metasploit", "tutorial", "cyber security"]
categories: ["hacking"]
---

# Sejarah (Singkat)

Apa itu Eternalblue?

Eternalblue atau oleh Microsoft disebut dengan MS17-010 adalah sebuah [**exploit**](https://en.wikipedia.org/wiki/Exploit_(computer_security)) yang dapat digunakan untuk menyebarkan ***malware*** pada sebuah mesin Windows. Eternalblue adalah eksploit yang pada awalnya ditemukan oleh [NSA (_National Security Agency_) Amerika Serikat](https://www.nsa.gov/) untuk memanfaatkan kerentanan pada SMB v1 (_Server Message Block_ versi 1)  di Windows, terutama pada Windows 7 dan Windows XP.[^1] 

Exploit ini tidak dilaporkan oleh NSA ke pihak Microsoft karena menguntungkan pihak NSA untuk melakukan mata-mata terhadap lawan-lawan politiknya. Ketika NSA mengetahui bahwa ternyata exploit tersebut sudah bocor (dicuri), Microsoft akhirnya mengumumkan *security pacthes* terhadap kerentanan atau *vulnerability* tersebut pada Maret 2017. Exploit tersebut dibocorkan kepada publik oleh sebuah kelompok ***hacker*** bernama [The Shadow Brokers](https://en.wikipedia.org/wiki/The_Shadow_Brokers) pada April 2017. Segera setelah rilisnya exploit tersebut ke publik, pada May 2017, dilaporkan [*ransomware* Wannacry](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack) mulai menginfeksi banyak komputer di seluruh dunia menggunakan exploit Eternalblue tersebut[^2].


# Demo Exploitasi - Offensive

Saya akan memberikan demo eksploitasi kerentanan SMBv1 ini menggunakan exploit Eternalblue (MS17-010) yang sudah terdapat dalam [Metasploit](https://www.metasploit.com/). Metasploit adalah sebuah *framework* berbasis [*open-source*](https://en.wikipedia.org/wiki/Open_source) yang digunakan untuk *exploit development* dan *vulnerability research*.

Di **Kali Linux**, metasploit sudah terdapat di dalamnya sebagai *pre-installed tools*. Atau jika kalian menggunakan **Arch Linux**, Metasploit dapat diinstall dari repo utama dengan perintah

```bash
sudo pacman -Sy metasploit
```

![ss1](/eternalblue/ss1.png)




# Pencegahan - Defensife






[^1]: https://nordvpn.com/blog/what-is-eternalblue/
[^2]: https://en.wikipedia.org/wiki/EternalBlue
