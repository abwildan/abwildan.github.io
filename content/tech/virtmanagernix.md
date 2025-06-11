---
title: "Installing Virt-manager on NixOS"
date: 2025-06-11T10:28:05+07:00
draft: true
summary: "A note of installing virt-manager on NixOS"
tags: ["virt-manager", "virtualization", "kvm", "nixos", "linux"]
categories: "virt-manager"
---

[**Virt-manager**](https://virt-manager.org/) adalah salah satu _software_ GUI (_Graphical User Interface_) untuk virtualisasi mesin seperti [VirtualBox](https://www.virtualbox.org/) dan [VMWare](https://www.vmware.com/). Perbedaan signifikan [Virt-manager](https://virt-manager.org/) dibandingkan kedua software populer tersebut adalah [Virt-manager](https://virt-manager.org/) menggunakan KVM (Kernel Virtual Machine) sebagai mesin virtualisasinya yang artinya performa _virtual machine_ (VM) di [Virt-manager](https://virt-manager.org/) akan sangat jauh lebih baik dibandingkan di VirtualBox ataupun VMWare.[^1]

Instalasinya di NixOS sangat mudah, kita hanya perlu menambahkan baris-baris berikut ke file konfigurasi di **`/etc/nixos/configuration.nix`**:[^2]

```shell
programs.virt-manager.enable = true;
users.groups.libvirtd.members = ["your_username"];
virtualisation.libvirtd.enable = true;

virtualisation.spiceUSBRedirection.enable = true; # opsional, untuk mengaktifkan USB direction 
```

Kemudian, _install_ dengan me-_rebuild_ konfigurasi `nix` kita:

```shell
sudo nixos-rebuild switch
```









[^1]: https://blog.purestorage.com/purely-educational/kvm-vs-virtualbox-which-one-should-you-use/
[^2]: https://nixos.wiki/wiki/Virt-manager

