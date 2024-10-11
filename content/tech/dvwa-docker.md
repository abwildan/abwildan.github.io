+++
title = "Step by Step DVWA Installation via Docker"
date =  2024-10-11T13:28:19+07:00
cover = ""
summary = "DVWA (Damn Vulnerable Webb Apps) is a PHP/MySQL web application that is damn vulnerable~"
tags = [ "docker", "DVWA", "web" ]
categories = "docker"
+++


## Intro

Saya akan meng-*install* **DVWA (*Damn Vulnerable Web Apps*)** sebagai tempat berlatih *hacking* website. DVWA memang didesain untuk melakukan uji penetrasi (*penetration testing*) dan eksploitasi beberapa kerentanan yang umumnya banyak ditemukan di aplikasi web, seperti **Command Injection**, **SQL Injection**, **XSS** atau **Cross Site Scripting**, dan lain sebagainya. Jadi, DVWA adalah aplikasi web yang sengaja dirancang agar rentan terhadap serangan-serangan yang saya sebutkan sebelumnya tadi.

Nah, di artikel ini, saya akan meng-*install* DVWA via docker.

Apa itu Docker?  
Docker adalah platform *open source* untuk meng-*create*, me-*manage*, dan men-*deploy* aplikasi dalam sebuah *container*. <mark> Sederhananya, docker adalah sebuah *container*</mark>. Berikut adalah ilustrasi dari *container* dan docker.

<img src="/dvwa-docker/ss1.png" width="70%" height="200" alt="Docker and Container Visualization">


> **Note:**  
> Lebih lanjut tentang docker dan container: https://www.docker.com/resources/what-container/

## Instalasi DVWA via Docker

Berikut adalah langkah-langkah pemasangan DVWA via docker:[^1]  
*1. Install docker.*  
*2. Pull DVWA's docker image.*  
*3. Run DVWA's docker image.*  
*4. Login with default creds.*  
*5. Create database.*  
*6. Set difficulty level.*   
*7. Play and have fun!*  

{{< callout >}}

**WARNING** *This image is vulnerable to several kinds of attacks, please don't deploy it to any public servers*.

{{< /callout >}}

### 1. Install Docker

```shell
sudo apt -y update && 
sudo apt -y install docker.io &&

sudo systemctl start docker && sudo systemctl status docker
```

> **Credit to** [digininja](https://github.com/digininja) sebagai *maintainer* [DVWA di Github](https://github.com/digininja/DVWA).

### 2. Pull DVWA's docker image

```shell
sudo docker pull vulnerables/web-dvwa
```

### 3. Run DVWA's docker image

```shell
sudo docker run --rm -it -p 80:80 vulnerables/web-dvwa
```

### 4. Login with default creds

**admin:password**

<img src="/dvwa-docker/ss2.png" width="70%" height="200" alt="DVWA Login Page">

### 5. Create database

<img src="/dvwa-docker/ss3.png" width="70%" height="200" alt="Creating Database">


### 6. Set difficulty level

Silakan atur *difficulty level*-nya sesuai kebutuhan, bisa diatur mulai dari **low**, **medium**, **high**, hingga **impossible**. Low artinya *security* web-nya sangat rendah alias website sangat rentan, sebaliknya impossible artinya security-nya sangat tinggi sehingga sangat sulit untuk diretas.

Saya akan atur ke **low**.

<div style="display: flex; justify-content: center;">
  <video width="80%" controls autoplay loop muted>
    <source src="/dvwa-docker/vid1.mp4" type="video/mp4">
  </video>
</div>

### 7. Play and have fun!

Selesai!

Kita berhasil meng-install DVWA via docker. Nantikan artikel-artikel saya berikutnya terkait *web hacking* ya!





[^1]: https://hub.docker.com/r/vulnerables/web-dvwa