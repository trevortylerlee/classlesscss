export interface Theme {
  title: string;
  slug: string;
  cdn: string;
  link: string;
  integrity?: string;
}

export const themes: Theme[] = [
  {
    title: "7.css",
    slug: "7css",
    cdn: "https://unpkg.com/7.css",
    link: "https://khang-nd.github.io/7.css/#intro",
    integrity:
      "sha384-WN2QoZVHe/0w3aOmuNlv18gZn4NKrLXxgsUtsLAXPV1zCE/49AFfl07gQ2knrObx",
  },
  {
    title: "98.css",
    slug: "98css",
    cdn: "https://unpkg.com/98.css",
    link: "https://jdan.github.io/98.css/",
    integrity:
      "sha384-15ft94Qa+wtquckGuqoUZVwmRnPrMFakV20jxURH5clORpGUeXAbhNK5x6aVebrD",
  },
  {
    title: "Almond",
    slug: "almond",
    cdn: "https://unpkg.com/almond.css@latest/dist/almond.min.css",
    link: "https://github.com/alvaromontoro/almond.css",
    integrity:
      "sha384-Ek+DKSp8TbfC5PTWXk9cB7kVu7LqbVJiH9GhXU6B2bdhOaon97mPacfgSHQz00rz",
  },
  {
    title: "awsm",
    slug: "awsm",
    cdn: "https://unpkg.com/awsm.css/dist/awsm.min.css",
    link: "https://igoradamenko.com/awsm.css/v2/index.html",
    integrity:
      "sha384-TiZr8Ie+2EUxWQV+mD232IBRp/nVyIZr4go5DtHfegZdYPrUAN1OeYtoZJu717Um",
  },
  {
    title: "axist",
    slug: "axist",
    cdn: "https://unpkg.com/axist@latest/dist/axist.min.css",
    link: "https://github.com/ruanmartinelli/axist",
    integrity:
      "sha384-d4HT4/nHFIFxWenX+QsAnmAEHIyIrECBCoRcDw/zTtMN1SU/RyxWEidRx7t3wN+8",
  },
  {
    title: "Bahunya",
    slug: "bahunya",
    cdn: "https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css",
    link: "https://hakanalpay.com/bahunya/",
    integrity:
      "sha384-mT+U3nwgIZ1Ph7ByZwoR8P6GJfxsajkv5Xwg58Flu0+RNQk8Qly3Qz9T7BtDC/0h",
  },
  {
    title: "bamboo",
    slug: "bamboo",
    cdn: "https://unpkg.com/bamboo.css",
    link: "https://rilwis.github.io/bamboo/",
    integrity:
      "sha384-73iE/qBq+uEpM65QAOw/rcoQGJ80jYc21p7XBU0OEJJxCa/lZXrq/5ZDks/KsiO",
  },
  {
    title: "Beer CSS",
    slug: "beercss",
    cdn: "https://cdn.jsdelivr.net/npm/beercss@3.5.6/dist/cdn/beer.min.css",
    link: "https://www.beercss.com",
    integrity:
      "sha384-Be8t7nT5OrZUNT0t4MK2sNEgwTbEpliFF46rubbZeRUvfpdMPwDXZ5ty7JW3JYua",
  },
  {
    title: "Bolt.css",
    slug: "boltcss",
    cdn: "https://unpkg.com/boltcss/bolt.min.css",
    link: "https://boltcss.com/",
    integrity:
      "sha384-33bOdGR6oXPG/JG1R05d1UCdAMo8qhUx676ED4lGRhw2PDmGO1I+fVGPjIYC2tRf",
  },
  {
    title: "Classless.css",
    slug: "classlesscss",
    cdn: "https://classless.de/classless.css",
    link: "http://classless.de/",
    integrity:
      "sha384-2Z22729H1zXm5pLWuN3A/ngMS4g4GtaQyVL1vVBQty039005VSlYVdi7C7SMZ40g",
  },
  {
    title: "Classless.css (new!)",
    slug: "classlesscssnew",
    cdn: "https://cdn.jsdelivr.net/gh/digitallytailored/classless@latest/classless.min.css",
    link: "https://digitallytailored.github.io/Classless.css/",
    integrity:
      "sha384-Edp8zvgEEIhQaYVJOVWa59TI4WbwTYKMfJ3B2WndyoTQfkKHXpGQENhfykelLhuC",
  },
  {
    title: "concrete.css",
    slug: "concretecss",
    cdn: "https://unpkg.com/concrete.css@2.1.1/concrete.css",
    link: "https://concrete.style/",
    integrity:
      "sha384-FXVaGhrQYydFigwhRxLkK++yp0J4xa+AV0o8O3jnEHMvcg7Pd0ajiD4sXkHprCLx",
  },
  {
    title: "cs16.css",
    slug: "cs16css",
    cdn: "https://cdn.jsdelivr.net/gh/ekmas/cs16.css@main/css/cs16.min.css",
    link: "https://cs16.samke.me",
    integrity:
      "sha384-gd14p4ZNhE8llyjykC06gdQpzt7WxbSQgPAxUd+HbQ+51oewTDDIaKf7fKSZ507G",
  },
  {
    title: "Downstyler ★",
    slug: "downstyler",
    cdn: "https://raw.githack.com/waldyrious/downstyler/master/downstyler.css",
    link: "https://waldyrious.net/downstyler/",
    integrity:
      "sha384-/sYjKOPGSMR7uLChbM0QaJDfp8iBee/XS68XAJyoXvOsF5gOjf4w7/xYqpd6Lgfx",
  },
  {
    title: "holiday.css",
    slug: "holidaycss",
    cdn: "https://cdn.jsdelivr.net/npm/holiday.css@0.11.2",
    link: "https://holidaycss.js.org/",
    integrity:
      "sha384-Xnue82bdRxWyIPdQmDnq1Xq/p8EkjVEzrVfLrEEKYdT32FxtNusvQZExqpMdVOvq",
  },
  {
    title: "magick.css",
    slug: "magickcss",
    cdn: "https://unpkg.com/magick.css",
    link: "https://css.winterveil.net/",
    integrity:
      "sha384-K3Dc+hlTsZ0iHcK/UqJiChQWv6BjRlp4y4gUcM6V04vDNYG3BSWL/9ypBCkFGfBf",
  },
  {
    title: "Marx",
    slug: "marx",
    cdn: "https://unpkg.com/marx-css/css/marx.min.css",
    link: "https://mblode.github.io/marx/",
    integrity:
      "sha384-ZyREekelFZMP0al8+DYlpJwQUelAlWO7X/BYNMchFhgv6vFzLJ2Y0g9K/ddj3lJ3",
  },
  {
    title: "MVP",
    slug: "mvp",
    cdn: "https://unpkg.com/mvp.css",
    link: "https://andybrewer.github.io/mvp/",
    integrity:
      "sha384-TKocGRSt7rQEodO1r/0j4o7Wv3ubuGTBTufPBAMVaqOk+qqV85HSAuoP5c/LsaSR",
  },
  {
    title: "new.css",
    slug: "newcss",
    cdn: "https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css",
    link: "https://newcss.net/",
    integrity:
      "sha384-Wh4i8JDLuRrfisLuCOOPRvvOenkPdgXL9ZEBJkvidYFs9ym6gGOkVhU5LkVGEnN5",
  },
  {
    title: "Pico",
    slug: "pico",
    cdn: "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css",
    link: "https://picocss.com/",
    integrity:
      "sha384-Igjx5rLo1oJuDlq1Ls6uECey1nXahm4j4GoF8ixTon9zxdse6QkdsFelFYk8j7rI",
  },
  {
    title: "reset.css",
    slug: "resetcss",
    cdn: "https://unpkg.com/@acab/reset.css",
    link: "https://github.com/mayank99/reset.css",
    integrity:
      "sha384-FNnkSEkxFK/y/174VjNMpW/b/lEj/bW1Kh3wcw464yxQ11BbSOvlyJy+GxFXCvH6",
  },
  {
    title: "sakura",
    slug: "sakura",
    cdn: "https://unpkg.com/sakura.css/css/sakura.css",
    link: "https://oxal.org/projects/sakura/",
    integrity:
      "sha384-ZKJPMh7X2VgE0MEjXdbOZxmKGF8C3UJvKmoP96SiJNPQLMN372XBrBK9m1cHvC4r",
  },
  {
    title: "Simple.css",
    slug: "simplecss",
    cdn: "https://cdn.simplecss.org/simple.min.css",
    link: "https://simplecss.org/",
    integrity:
      "sha384-exAHcvXSFHgdGgCT7Fsoh7+9etxhuulMHTLEX0Q2OlFIZ7LOhvlIQQ5Dufbu2Thy",
  },
  {
    title: "SPCSS",
    slug: "spcss",
    cdn: "https://cdn.jsdelivr.net/npm/spcss@0.9.0",
    link: "https://susam.github.io/spcss/",
    integrity:
      "sha384-p2ycJtWMcc3uX5L3h/I3xgxs20YCcUK0qcMTtG8sRDYa64V82u24BTji/5uC1ojG",
  },
  {
    title: "style.css",
    slug: "stylecss",
    cdn: "https://unpkg.com/style.css",
    link: "https://ungoldman.com/style.css/",
    integrity:
      "sha384-CVNnEvhxABaD3359ONMLJ7Lja+Beb21adIdLvQOB+bSIAI4y1AszEdrcQDCoQxKU",
  },
  {
    title: "Tacit",
    slug: "tacit",
    cdn: "https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.7.1.min.css",
    link: "https://yegor256.github.io/tacit/",
    integrity:
      "sha384-sdD6Bs09mzu0dYlhn1Iu6IyfWPOkYzg8owHGRa2WjFLLs0BmX2t8igCmmhhbcosg",
  },
  {
    title: "Tiny.css",
    slug: "tinycss",
    cdn: "https://cdn.jsdelivr.net/npm/tiny.css@0/dist/tiny.css",
    link: "https://ihsan6133.github.io/tinycss/",
    integrity:
      "sha384-hnwbfjpWi3/alqfAUKiLBbJdYoSxfVO2NEKx/QlToDgBSxDq1wMzLMIQ0iS7U6j/",
  },
  {
    title: "Water.css",
    slug: "watercss",
    cdn: "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css",
    link: "https://watercss.kognise.dev/",
    integrity:
      "sha384-eHoWBq4xGyEfS3rmZe6gvzlNS/nNJhiPPbKCJN1cQHJukU+q6ji3My2fJGYd1EBo",
  },
  {
    title: "XP.css",
    slug: "xpcss",
    cdn: "https://unpkg.com/xp.css",
    link: "https://botoxparty.github.io/XP.css/",
    integrity:
      "sha384-isKk8ZXKlU28/m3uIrnyTfuPaamQIF4ONLeGSfsWGEe3qBvaeLU5wkS4J7cTIwxI",
  },
];
