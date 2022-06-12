"use strict";
let rainbowHeartArray = [];
let freeplayArray = [];
let okArray = [];
let helloWorldArray = [];
let susArray = [];
let shroomArray = [];
// rainbowHeartArray coordinates
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case ((x === 120) && (y >= 280 && y <= 440)):
            case ((y === 200) && ((x >= 200 && x <= 320) || (x >= 520 && x <= 640))):
            case ((x === 720) && (y >= 280 && y <= 440)):
            case ((y === 240) && (x === 160 || x === 360 || x === 480 || x === 680)):
            case ((y === 720 || y === 280) && (x >= 400 && x <= 440)):
            case ((y === 480) && (x === 160 || x === 680)):
            case ((y === 520) && (x === 200 || x === 640)):
            case ((y === 560) && (x === 240 || x === 600)):
            case ((y === 600) && (x === 280 || x === 560)):
            case ((y === 640) && (x === 320 || x === 520)):
            case ((y === 680) && (x === 360 || x === 480)):
            case ((y === 400) && (x === 520 || x === 560)):
            case ((y === 360) && (x === 560)):
                let pa = new CheckablePixel(x, y, "black", 14, "black");
                rainbowHeartArray.push(pa);
                break;
            case ((x === 160) && (y === 440)):
            case ((x === 200) && (y === 480)):
            case ((x === 240) && (y === 520)):
            case ((x === 280) && (y === 560)):
            case ((x === 320) && (y === 600)):
            case ((x === 360) && (y === 640)):
            case ((x === 400) && (y === 680)):
            case ((x === 480) && (y === 320)):
            case ((x === 520) && (y === 360)):
            case ((x === 600) && (y === 440)):
            case ((x === 640) && (y === 480)):
                let pb = new CheckablePixel(x, y, "black", 10, "rgb(238, 89, 114)");
                rainbowHeartArray.push(pb);
                break;
            case ((x === 160) && (y === 400)):
            case ((x === 200) && (y === 440)):
            case ((x === 240) && (y === 480)):
            case ((x === 280) && (y === 520)):
            case ((x === 320) && (y === 560)):
            case ((x === 360) && (y === 600)):
            case ((x === 400) && (y === 640)):
            case ((x === 440) && (y === 680)):
            case ((x === 480) && (y === 280)):
            case ((x === 520) && (y === 320)):
            case ((x === 600) && (y === 400)):
            case ((x === 640) && (y === 440)):
                let pc = new CheckablePixel(x, y, "black", 0, "red");
                rainbowHeartArray.push(pc);
                break;
            case ((x === 160) && (y === 360)):
            case ((x === 200) && (y === 400)):
            case ((x === 240) && (y === 440)):
            case ((x === 280) && (y === 480)):
            case ((x === 320) && (y === 520)):
            case ((x === 360) && (y === 560)):
            case ((x === 400) && (y === 600)):
            case ((x === 440) && (y === 640)):
            case ((x === 520) && (y === 280)):
            case ((x === 560) && (y === 320)):
            case ((x === 600) && (y === 360)):
            case ((x === 640) && (y === 400)):
            case ((x === 680) && (y === 440)):
                let pd = new CheckablePixel(x, y, "black", 1, "orangered");
                rainbowHeartArray.push(pd);
                break;
            case ((x === 160) && (y === 320)):
            case ((x === 200) && (y === 360)):
            case ((x === 240) && (y === 400)):
            case ((x === 280) && (y === 440)):
            case ((x === 320) && (y === 480)):
            case ((x === 360) && (y === 520)):
            case ((x === 400) && (y === 560)):
            case ((x === 440) && (y === 600)):
            case ((x === 480) && (y === 640)):
            case ((x === 520) && (y === 240)):
            case ((x === 560) && (y === 280)):
            case ((x === 600) && (y === 320)):
            case ((x === 640) && (y === 360)):
            case ((x === 680) && (y === 400)):
                let pe = new CheckablePixel(x, y, "black", 2, "orange");
                rainbowHeartArray.push(pe);
                break;
            case ((x === 160) && (y === 280)):
            case ((x === 200) && (y === 320)):
            case ((x === 240) && (y === 360)):
            case ((x === 280) && (y === 400)):
            case ((x === 320) && (y === 440)):
            case ((x === 360) && (y === 480)):
            case ((x === 400) && (y === 520)):
            case ((x === 440) && (y === 560)):
            case ((x === 480) && (y === 600)):
            case ((x === 680) && (y === 360)):
            case ((x === 640) && (y === 320)):
            case ((x === 600) && (y === 280)):
            case ((x === 560) && (y === 240)):
                let pf = new CheckablePixel(x, y, "black", 3, "yellow");
                rainbowHeartArray.push(pf);
                break;
            case ((x === 200) && (y === 280)):
            case ((x === 240) && (y === 320)):
            case ((x === 280) && (y === 360)):
            case ((x === 320) && (y === 400)):
            case ((x === 360) && (y === 440)):
            case ((x === 400) && (y === 480)):
            case ((x === 440) && (y === 520)):
            case ((x === 480) && (y === 560)):
            case ((x === 520) && (y === 600)):
            case ((x === 600) && (y === 240)):
            case ((x === 640) && (y === 280)):
            case ((x === 680) && (y === 320)):
                let pg = new CheckablePixel(x, y, "black", 4, "yellowgreen");
                rainbowHeartArray.push(pg);
                break;
            case ((x === 200) && (y === 240)):
            case ((x === 240) && (y === 280)):
            case ((x === 280) && (y === 320)):
            case ((x === 320) && (y === 360)):
            case ((x === 360) && (y === 400)):
            case ((x === 400) && (y === 440)):
            case ((x === 440) && (y === 480)):
            case ((x === 480) && (y === 520)):
            case ((x === 520) && (y === 560)):
            case ((x === 640) && (y === 240)):
            case ((x === 680) && (y === 280)):
                let p = new CheckablePixel(x, y, "black", 5, "green");
                rainbowHeartArray.push(p);
                break;
            case ((x === 240) && (y === 240)):
            case ((x === 280) && (y === 280)):
            case ((x === 320) && (y === 320)):
            case ((x === 360) && (y === 360)):
            case ((x === 400) && (y === 400)):
            case ((x === 440) && (y === 440)):
            case ((x === 480) && (y === 480)):
            case ((x === 520) && (y === 520)):
            case ((x === 560) && (y === 560)):
                let ph = new CheckablePixel(x, y, "black", 6, "rgb(66, 175, 212)");
                rainbowHeartArray.push(ph);
                break;
            case ((x === 280) && (y === 240)):
            case ((x === 320) && (y === 280)):
            case ((x === 360) && (y === 320)):
            case ((x === 400) && (y === 360)):
            case ((x === 440) && (y === 400)):
            case ((x === 480) && (y === 440)):
            case ((x === 520) && (y === 480)):
            case ((x === 560) && (y === 520)):
                let pi = new CheckablePixel(x, y, "black", 7, "rgb(32, 32, 205)");
                rainbowHeartArray.push(pi);
                break;
            case ((x === 320) && (y === 240)):
            case ((x === 360) && (y === 280)):
            case ((x === 400) && (y === 320)):
            case ((x === 440) && (y === 360)):
            case ((x === 480) && (y === 400)):
            case ((x === 520) && (y === 440)):
            case ((x === 560) && (y === 480)):
            case ((x === 600) && (y === 520)):
                let pj = new CheckablePixel(x, y, "black", 8, "blueviolet");
                rainbowHeartArray.push(pj);
                break;
            case ((x === 440) && (y === 320)):
            case ((x === 480) && (y === 360)):
            case ((x === 560) && (y === 440)):
            case ((x === 600) && (y === 480)):
                let pk = new CheckablePixel(x, y, "black", 9, "purple");
                rainbowHeartArray.push(pk);
                break;
            default:
                let px = new CheckablePixel(x, y, "black", 11, "grey");
                rainbowHeartArray.push(px);
                break;
        }
    }
}
console.log(rainbowHeartArray);
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case (x === 720 && (y >= 520 && y <= 800)):
            case (x === 680 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 640 && (y != 400 && (y >= 360 && y <= 800))):
            case (x === 600 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 560 && (y >= 520 && y <= 800)):
                let xa = new CheckablePixel(x, y, "black", 14, "black");
                okArray.push(xa);
                break;
            case (x === 560 && (y >= 360 && y <= 480)):
            case (x === 520 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 480 && (y >= 520 && y <= 800)):
                let xb = new CheckablePixel(x, y, "black", 0, "red");
                okArray.push(xb);
                break;
            case (x === 480 && (y >= 360 && y <= 480)):
            case (x === 440 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 400 && (y >= 520 && y <= 800)):
                let xc = new CheckablePixel(x, y, "black", 2, "orange");
                okArray.push(xc);
                break;
            case (x === 400 && (y >= 360 && y <= 480)):
            case (x === 360 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 320 && (y >= 520 && y <= 800)):
                let xd = new CheckablePixel(x, y, "black", 3, "yellow");
                okArray.push(xd);
                break;
            case (x === 320 && (y >= 360 && y <= 480)):
            case (x === 280 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 240 && (y >= 520 && y <= 800)):
                let xe = new CheckablePixel(x, y, "black", 5, "green");
                okArray.push(xe);
                break;
            case (x === 240 && (y >= 360 && y <= 480)):
            case (x === 200 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case (x === 160 && (y >= 520 && y <= 800)):
                let xf = new CheckablePixel(x, y, "black", 7, "rgb(32, 32, 205)");
                okArray.push(xf);
                break;
            case (x === 280 && (y >= 120 && y <= 240)):
            case (x === 320 && (y === 120 || y === 240)):
            case (x === 360 && (y >= 120 && y <= 240)):
            case (x === 440 && (y >= 120 && y <= 240)):
            case (x === 480 && y === 160):
            case (x === 520 && (y === 120 || y >= 200 && y <= 240)):
            case (x === 600 && y === 240):
            case (x === 80 && (y >= 40 && y <= 800)):
                let xg = new CheckablePixel(x, y, "black", 10, "rgb(238, 89, 114)");
                okArray.push(xg);
                break;
            case (x === 640 && y === 400):
                let xh = new CheckablePixel(x, y, "black", 13, "whitesmoke");
                okArray.push(xh);
                break;
            default:
                let xi = new CheckablePixel(x, y, "black", 8, "blueviolet");
                okArray.push(xi);
                break;
        }
    }
}
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case ((x === 80 || x === 160 || x === 360 || x === 440) && ((y >= 120 && y <= 280))):
            case ((x === 120) && (y === 200 || y === 520)):
            case ((x === 280 || x === 240) && ((y >= 160 && y <= 200) || y === 280)):
            case (x === 520) && ((y >= 200 && y <= 280)):
            case (x === 600) && ((y >= 200 && y <= 280) || (y >= 480 && y <= 520)):
            case ((x === 560) && (y === 200 || y === 280)):
            case ((x === 160 || x === 720) && (y >= 360 && y <= 480)):
            case ((x === 200 || x === 720) && (y === 520)):
            case ((x === 240) && (y >= 360 && y <= 480)):
            case (x === 600) && (y >= 360 && y <= 520):
            case ((x === 680) && (y >= 480 && y <= 520)):
            case ((x === 240) && (y === 240)):
            case ((x === 80) && (y >= 360 && y <= 480)):
            case ((x === 320 || x === 400 || x === 480) && (y >= 440 && y <= 520)):
            case ((x === 360) && (y === 440 || y === 520)):
            case ((x === 520) && (y === 440)):
            case ((x >= 80 && x <= 760) && (y === 600)):
                // || 320
                let xa = new CheckablePixel(x, y, "black", 14, "black");
                helloWorldArray.push(xa);
                break;
            default:
                let xi = new CheckablePixel(x, y, "black", 5, "green");
                helloWorldArray.push(xi);
                break;
        }
    }
}
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case (x === 160 && (y >= 280 && y <= 520)):
            case (x === 200 && (y >= 280 && y <= 520)):
                let ea = new CheckablePixel(x, y, "black", 1, "orangered");
                susArray.push(ea);
                break;
            case ((x === 600 || x === 560) && y === 320):
                let eb = new CheckablePixel(x, y, "black", 13, "whitesmoke");
                susArray.push(eb);
                break;
            case (x === 400 && (y >= 320 && y <= 360)):
            case (x === 440 && (y >= 360 && y <= 400)):
            case ((x >= 480 && x <= 600) && y === 400):
                let ec = new CheckablePixel(x, y, "black", 11, "grey");
                susArray.push(ec);
                break;
            // light blue
            case ((x >= 440 && x <= 600) && y === 280):
            case (x !== 560 && x !== 600 && (x >= 440 && x <= 640) && y === 320):
            case ((x >= 480 && x <= 640) && y === 360):
                let ed = new CheckablePixel(x, y, "black", 6, "rgb(66, 175, 212)");
                susArray.push(ed);
                break;
            case (x === 280 && (y >= 200 && y <= 680)):
            case (x === 320 && (y >= 160 && y <= 680)):
            case (x == 360 && y !== 320 && y !== 360 && (y >= 160 && y <= 520)):
            case (x === 400 && ((y >= 160 && y < 280) || (y > 400 && y <= 520))):
            case ((x === 440 || x === 480) && ((y >= 160 && y <= 200) || (y >= 480 && y <= 520))):
            case (x === 520 && ((y >= 160 && y <= 200) || (y >= 480 && y <= 680))):
            case (x === 560 && (y === 200 || (y >= 480 && y <= 680))):
                let ee = new CheckablePixel(x, y, "black", 0, "red");
                susArray.push(ee);
                break;
            // black
            case (x === 120 && (y >= 280 && y <= 520)):
            case (x === 240 && (y >= 200 && y <= 680)):
            case ((x >= 320 && x <= 520) && y === 120):
            case ((x === 160 || x === 200) && (y === 240 || y === 560)):
            case ((x === 280 || x === 560) && y === 160):
            case ((x >= 360 && x <= 480) && y === 560):
            case ((x >= 440 && x <= 600) && (y === 240 || y === 440)):
            case ((x === 360 || x === 680) && (y === 320 || y === 360)):
            case (x === 600 && (y === 200 || (y >= 480 && y <= 680))):
            case ((x === 360 || x === 480) && (y >= 600 && y <= 680)):
            case (((x >= 280 && x <= 320) || (x >= 520 && x <= 560)) && y === 720):
            case ((x === 400 || x === 640) && (y === 280 || y === 400)):
                let ef = new CheckablePixel(x, y, "black", 14, "black");
                susArray.push(ef);
                break;
            default:
                let eg = new CheckablePixel(x, y, "black", 8, "blueviolet");
                susArray.push(eg);
                break;
        }
    }
}
// Super mushroom array
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case ((x >= 320 && x <= 520) && (y === 120)):
            case ((x === 240 || x === 280 || x === 560 || x === 600) && (y === 160)):
            case ((x === 200 || x === 640) && (y === 200)):
            case ((x === 160 || x === 680) && (y === 240 || y === 280 || y === 520)):
            case ((x === 120 || x === 720) && (y >= 320 && y <= 480)):
            case ((x === 200 || x === 640 || x === 680) && (y === 520)):
            case ((x >= 240 && x <= 600) && (y === 480)):
            case ((x === 600) && (y === 520)):
            case ((x === 200 || x === 640) && (y === 560 || y === 600)):
            case ((x === 240 || x === 600) && (y === 640)):
            case ((x >= 280 && x <= 560) && (y === 680)):
            case ((x === 360 || x === 480) && (y === 520 || y === 560)):
                let ef = new CheckablePixel(x, y, "black", 14, "black");
                shroomArray.push(ef);
                break;
            case ((x >= 160 && x <= 240) && (y === 320)):
            case ((x >= 320 && x <= 520) && (y >= 160 && y <= 240)):
            case ((x === 280) && (y === 280 || y === 320)):
            case ((x === 400 || y === 440) && (y === 160)):
            case ((x >= 400 && x <= 520) && (y === 200)):
            case ((x === 560) && (y === 280 || y === 320)):
            case ((x === 200) && (y === 360 || y === 480)):
            case ((x === 240) && (y >= 400 && y <= 480)):
            case ((x === 320) && (y === 160)):
            case ((x >= 600 && x <= 680) && (y === 320)):
            case ((x === 640) && (y === 360 || y === 480)):
            case ((x === 600) && (y >= 400 && y <= 480)):
            case ((x >= 280 && x <= 560) && (y === 440)):
            case ((x === 280 || x === 320 || x === 520 || x === 560) && (y === 400)):
            case ((x === 240 || x === 280 || x === 560 || x === 600) && (y === 360)):
            case ((x === 600) && (y >= 360 && y <= 440)):
            case ((x === 640) && (y === 480)):
                let ex = new CheckablePixel(x, y, "black", 0, "red");
                shroomArray.push(ex);
                break;
            default:
                let eg = new CheckablePixel(x, y, "black", 13, "whitesmoke");
                shroomArray.push(eg);
                break;
        }
    }
}
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        let p = new Pixel(x, y, "black");
        freeplayArray.push(p);
    }
}
