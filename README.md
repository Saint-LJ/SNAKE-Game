<br />
<div align="center">
    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/snake-game-8700200-7154211.png" alt="Logo" width="110" height="110">
  </a>

  <h3 align="center">Snake Game</h3>

  <p align="center">
    By Laura Jerome
    <br />
    <i><small>Molloy Project</small></i>
  </p>
</div>



## ❗ About This Guide

<p align="center">
  <img src="images/iPod.png" alt="iPod">
</p>

There is a lot of confusion with the original instruction guide linked above, so this guide will solve all the confusion :smile:

<b>Here's why:</b>
* Short and easy to follow steps
* Saves time and reduces errors
* Simple copy and pasting

<br />

### Dependencies

For the following commands to work, you must install:

* <a aria-label="Homebrew" href="https://brew.sh">`🍺 Homebrew`</a>
* <a aria-label="Xcode" href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">`🔨 Xcode`</a>

<br />

## 🚀 Getting Started

<br />

Paste the following commands into your `Terminal`, one-by-one.

<br />
<b>Install QEMU & Friends</b>

```sh
brew install qemu && brew install ninja && brew install make &&
brew install pkg-config && brew install meson && brew install sdl2 && brew install gcc
```

<br />
<b>Build QEMU</b>

```sh
mkdir iPod && cd iPod && git clone https://github.com/devos50/qemu && cd qemu && git checkout ipod_touch_1g
```
```sh
mkdir build && cd build && ../configure --enable-sdl --disable-cocoa --target-list=arm-softmmu --disable-capstone --disable-pie --disable-slirp --extra-cflags=-I/opt/homebrew/opt/openssl@3/include --extra-ldflags='-L/opt/homebrew/opt/openssl@3/lib -lcrypto' && make -j8
```

<br />
<b>Download iPod Files</b>

```sh
cd ../.. && mkdir boot && cd boot && curl -LJO https://github.com/devos50/qemu-ios/releases/download/n45ap_v1/bootrom_s5l8900 && curl -LJO https://github.com/devos50/qemu-ios/releases/download/n45ap_v1/iboot_204_n45ap.bin && curl -LJO https://github.com/devos50/qemu-ios/releases/download/n45ap_v1/nand_n45ap.zip && curl -LJO https://github.com/devos50/qemu-ios/releases/download/n45ap_v1/nor_n45ap.bin && unzip nand_n45ap.zip && rm nand_n45ap.zip && rm -rf __MACOSX
```

<br />
<b>Run QEMU</b>

```sh
cd .. && echo "cd qemu/build && ./arm-softmmu/qemu-system-arm -M iPod-Touch,bootrom=../../boot/bootrom_s5l8900,iboot=../../boot/iboot_204_n45ap.bin,nand=../../boot/nand -serial mon:stdio -cpu max -m 1G -d unimp -pflash ../../boot/nor_n45ap.bin" > run.sh && sh run.sh
```

<br />

## 🏁 Final Notes 

<br />

> :information_source:
> You **MUST** be in the **`./iPod`** directory for this to work.

<br />

Now, if you would like to simple <b>re-run your iPod</b>, anytime you please, make sure you type the following into your terminal:

```sh
sh run.sh
```
