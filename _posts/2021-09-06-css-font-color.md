---
author: Le Koj
---


<h4 id="capitalize">6 different ways to set font color.</h4>

1. Named Color
2. Hexadecimal Color
3. RGB Color
4. RGBA Color
5. HSL Color
6. HSLA Color


#### Named Color

+ You apply the color property by naming the color.
+ There are around 147 named colors recognized by browsers.
+ Basic Syntax:

```
    element {  
        color:  colorName;  
    }
```
{: .basic-code-container}

#### Hexadecimal Color (Hex Colors)

+ A total of 7 characters represent hex colors.
+ Starts with a pound sign (#).
+ Followed by any combination of numbers between [0 to 9], and any letters [A to F] or [a to f].
+ The first two values represent RED.
+ The second two represent GREEN.
+ The last two represent BLUE.  


+ Basic Syntax:

```
    element {  
        color: #dc143c;  
        }

    element {  
           color: #c0c0c0;  
        }
```
{: .basic-code-container}

#### RGB Color

+ RGB stands for Red, Green, Blue.
+ You specify the color in terms of how much red, green, and blue you want.
+ All 3 values are expressed with numbers between 0 and 255.

+ Basic Syntax:

```
    element {  
        color: rgb(amountOfRed, amountOfGreen, amountOfBlue);  
        }
```
{: .basic-code-container}


#### RGBA color

+ RGBA stands for Red, Green, Blue, Alpha.
+ You specify the color in terms of how much red, green, and blue you want.
+ The Alpha specifies the opacity of the color.
+ It takes a value from 0.0 to 1.0:  
    + 0.0 means 0% opacity.
    + 1.0 means 100% opacity.
+ All 3 values are expressed with numbers between 0 and 255.

+ Basic Syntax:

```
    element {  
        color: rgb(amountOfRed, amountOfGreen, amountOfBlue, alpha);  
        }
```
{: .basic-code-container}


#### HSL color

+ HSL stands for Hue, Saturation, Lightness.
+ Hue represents the color wheel in 360 degrees.
    - 0 degrees is red
    - 120 degrees is green
    - 240 degrees is blue
+ Saturation is the percentage amount of gray in the color.
    - 0% is the shade of gray
    - 100% is the color itself    
+ Lightness is the percentage amount of darkness and lightness
    - 0% is black
    - 100% is white  


+ Basic Syntax

```
    element {  
        color: hsl(colorDegree, saturationDegree, lightnessDegree);  
        }
```
{: .basic-code-container}


#### HSLA color

+ HSLA stands for Hue, Saturation, Lightness, Alpha.
+ Hue represents the color wheel in 360 degrees.
    - 0 degrees is red.
    - 120 degrees is green.
    - 240 degrees is blue.
+ Saturation is the percentage amount of gray in the color.
    - 0% is the shade of gray.
    - 100% is the color itself.
+ Lightness is the percentage amount of darkness and lightness.
    - 0% is black.
    - 100% is white.
+ The Alpha specifies the opacity of the color.
+ It takes a value from 0.0 to 1.0.
    + 0.0 means 0% opacity.
    + 1.0 means 100% opacity.

+ Basic Syntax:

```
    element {  
        color: hsl(colorDegree, saturationDegree, lightnessDegree, alpha);  
        }
```
{: .basic-code-container}


<p>Credits:</p>

[CSS Font Color – How to Style Text in HTML](https://www-freecodecamp-org.cdn.ampproject.org/v/s/www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/amp/?amp_js_v=a6&amp_gsa=1&usqp=mq331AQIKAGwASCAAgM%3D#aoh=16305628764404&csi=0&referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s&ampshare=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fcss-font-color-how-to-style-text-in-html%2F)

