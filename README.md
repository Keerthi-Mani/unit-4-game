# Crystal-Collector-Game

## Overview

Crystal-Collector-Game is a Javascript app that uses the Math.floor(Math.random()) function to generate a random target number between 19 and 120. There are 4 crystals displayed on the screen. For each round, the user will receive a new target number, and each crystal will be assigned a new value between 1 and 12. The user does not know the crystal value until clicking on it. The goal for the user is to click on different crystals so that the sum adds up to the target number for that round.

## Technologies

1. Html
2. JQuery
3. CSS
4. Reset CSS

## Local Installation

### Git Clone

Clone Crystal-Collector-Game to your local git repo like the following:

```
git clone git@github.com:Keerthi-Mani/unit-4-game.git
```

### Reset Style

The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

```
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

```

### Computer Choose Random Number

```
randomNumber = Math.floor(Math.random() * 101) + 19

//19 to 120 has 101 numbers
```

### Each Crystals Random Numbers

```
    // 1 to 12
        crys1_val = Math.floor(Math.random() * 11) + 1;
        crys2_val = Math.floor(Math.random() * 11) + 1;
        crys3_val = Math.floor(Math.random() * 11) + 1;
        crys4_val = Math.floor(Math.random() * 11) + 1;
```

### Screenshot

The Crystal-Collector-Game project and its files should now be in your project folder.

![image](https://user-images.githubusercontent.com/52920074/65917019-78a91780-e3a4-11e9-90da-d5397b21b81a.png)

### Github Deployed Link

[Gem Collector Game](https://keerthi-mani.github.io/unit-4-game/)

### Feedback and issues:

I really appreciate your feedback. If you want to see some improvements in the app I'll be really grateful if you can drop me a message.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

Author - Keerthi

### License

This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgement

Joe Han, Joshua Appel, Erin Rizal, & Jonathan Ho - Rutgers BCS Instructor and TA's

All of the Rutgers BCS Classmates that help make everyday an amazing experience.
