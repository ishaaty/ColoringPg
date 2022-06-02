"use strict";
let rainbowHeartArray = [];
let freeplayArray = [];
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
                var pa = new CheckablePixel(x, y, "black", 14, "black");
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
                var pb = new CheckablePixel(x, y, "rgb(238, 89, 114)", 10, "rgb(238, 89, 114)");
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
                var pc = new CheckablePixel(x, y, "red", 0, "red");
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
                var pd = new CheckablePixel(x, y, "orangered", 1, "orangered");
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
                var pe = new CheckablePixel(x, y, "orange", 2, "orange");
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
                var pf = new CheckablePixel(x, y, "yellow", 3, "yellow");
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
                var pg = new CheckablePixel(x, y, "yellowgreen", 4, "yellowgreen");
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
                var p = new CheckablePixel(x, y, "green", 5, "green");
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
                var ph = new CheckablePixel(x, y, "rgb(66, 175, 212)", 6, "rgb(66, 175, 212)");
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
                var pi = new CheckablePixel(x, y, "rgb(32, 32, 205)", 7, "rgb(32, 32, 205)");
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
                var pj = new CheckablePixel(x, y, "blueviolet", 8, "blueviolet");
                rainbowHeartArray.push(pj);
                break;
            case ((x === 440) && (y === 320)):
            case ((x === 480) && (y === 360)):
            case ((x === 560) && (y === 440)):
            case ((x === 600) && (y === 480)):
                var pk = new CheckablePixel(x, y, "purple", 9, "purple");
                rainbowHeartArray.push(pk);
                break;
            // case((x === 480) && (y === 320)):
            // case((x === 520) && (y === 360)):
            // case((x === 600) && (y === 440)):
            // case((x === 640) && (y === 480)):
            // let pl : CheckablePixel = new CheckablePixel(x, y, "rgb(238, 89, 114)", 10, "rgb(238, 89, 114)");
            // rainbowHeartArray.push(pl);
            // break;
            // // case((x === 480) && (y === 280)):
            // // case((x === 520) && (y === 320)):
            // // case((x === 600) && (y === 400)):
            // // case((x === 640) && (y === 440)):
            //     let pm : CheckablePixel = new CheckablePixel(x, y, "red", 0, "red");
            //     rainbowHeartArray.push(pm);
            //     break;
            // case((x === 520) && (y === 280)):
            // case((x === 560) && (y === 320)):
            // case((x === 600) && (y === 360)):
            // case((x === 640) && (y === 400)):
            // case((x === 680) && (y === 440)):
            //     let pn : CheckablePixel = new CheckablePixel(x, y, "orangered", 1, "orangered");
            //     rainbowHeartArray.push(pn);
            //     break;
            // case((x === 520) && (y === 240)):
            // case((x === 560) && (y === 280)):
            // case((x === 600) && (y === 320)):
            // case((x === 640) && (y === 360)):
            // case((x === 680) && (y === 400)):
            //     let po : CheckablePixel = new CheckablePixel(x, y, "orange", 2, "orange");
            //     rainbowHeartArray.push(po);
            //     break;
            // case((x === 680) && (y === 360)):
            // case((x === 640) && (y === 320)):
            // case((x === 600) && (y === 280)):
            // case((x === 560) && (y === 240)):
            //     let pp : CheckablePixel = new CheckablePixel(x, y, "yellow", 3, "yellow");
            //     rainbowHeartArray.push(pp);
            //     break;
            // case((x === 600) && (y === 240)):
            // case((x === 640) && (y === 280)):
            // case((x === 680) && (y === 320)):
            //     let pq : CheckablePixel = new CheckablePixel(x, y, "yellowgreen", 4, "yellowgreen");
            //     rainbowHeartArray.push(pq);
            //     break;
            // case((x === 640) && (y === 240)):
            // case((x === 680) && (y === 280)):
            //     let pr : CheckablePixel = new CheckablePixel(x, y, "green", 5, "green");
            //     rainbowHeartArray.push(pr);
            //     break;
            default:
                var px = new CheckablePixel(x, y, "grey", 11, "grey");
                rainbowHeartArray.push(px);
                break;
        }
    }
}
console.log(rainbowHeartArray);
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        let p = new Pixel(x, y, "black");
        freeplayArray.push(p);
    }
}
