let rainbowHeartArray = [];
let freeplayArray = [];
let okArray = [];
let helloWorldArray = [];

// rainbowHeartArray coordinates
for(let x = 0; x <= 800; x += 40){
    for (let y = 0; y <= 800; y += 40){
        switch(true){
            case((x === 120) && (y >= 280 && y <= 440)):
            case((y === 200) && ((x >= 200 && x <= 320) || (x >= 520 && x <= 640))):
            case((x === 720) && (y >= 280 && y <= 440)):
            case((y === 240) && (x === 160 || x === 360 || x === 480 || x === 680)):
            case((y === 720 || y === 280) && (x >= 400 && x <= 440)):
            case((y === 480) && (x === 160 || x === 680)):
            case((y === 520) && (x === 200 || x === 640)):
            case((y === 560) && (x === 240 || x === 600)):
            case((y === 600) && (x === 280 || x === 560)):
            case((y === 640) && (x === 320 || x === 520)):
            case((y === 680) && (x === 360 || x === 480)):
            case((y === 400) && (x === 520 || x === 560)):
            case((y === 360) && (x === 560)):
                let pa : CheckablePixel = new CheckablePixel(x, y, "black", 14, "black");
                rainbowHeartArray.push(pa);
                break;
            case((x === 160) && (y === 440)):
            case((x === 200) && (y === 480)):
            case((x === 240) && (y === 520)):
            case((x === 280) && (y === 560)):
            case((x === 320) && (y === 600)):
            case((x === 360) && (y === 640)):
            case((x === 400) && (y === 680)):
            case((x === 480) && (y === 320)):
            case((x === 520) && (y === 360)):
            case((x === 600) && (y === 440)):
            case((x === 640) && (y === 480)):
                let pb : CheckablePixel = new CheckablePixel(x, y, "black", 10, "rgb(238, 89, 114)");
                rainbowHeartArray.push(pb);
                break;
            case((x === 160) && (y === 400)):
            case((x === 200) && (y === 440)):
            case((x === 240) && (y === 480)):
            case((x === 280) && (y === 520)):
            case((x === 320) && (y === 560)):
            case((x === 360) && (y === 600)):
            case((x === 400) && (y === 640)):
            case((x === 440) && (y === 680)):
            case((x === 480) && (y === 280)):
            case((x === 520) && (y === 320)):
            case((x === 600) && (y === 400)):
            case((x === 640) && (y === 440)):
                let pc : CheckablePixel = new CheckablePixel(x, y, "black", 0, "red");
                rainbowHeartArray.push(pc);
                break;
            case((x === 160) && (y === 360)):
            case((x === 200) && (y === 400)):
            case((x === 240) && (y === 440)):
            case((x === 280) && (y === 480)):
            case((x === 320) && (y === 520)):
            case((x === 360) && (y === 560)):
            case((x === 400) && (y === 600)):
            case((x === 440) && (y === 640)):
            case((x === 520) && (y === 280)):
            case((x === 560) && (y === 320)):
            case((x === 600) && (y === 360)):
            case((x === 640) && (y === 400)):
            case((x === 680) && (y === 440)):
                let pd : CheckablePixel = new CheckablePixel(x, y, "black", 1, "orangered");
                rainbowHeartArray.push(pd);
                break;
            case((x === 160) && (y === 320)):
            case((x === 200) && (y === 360)):
            case((x === 240) && (y === 400)):
            case((x === 280) && (y === 440)):
            case((x === 320) && (y === 480)):
            case((x === 360) && (y === 520)):
            case((x === 400) && (y === 560)):
            case((x === 440) && (y === 600)):
            case((x === 480) && (y === 640)):
            case((x === 520) && (y === 240)):
            case((x === 560) && (y === 280)):
            case((x === 600) && (y === 320)):
            case((x === 640) && (y === 360)):
            case((x === 680) && (y === 400)):
                let pe : CheckablePixel = new CheckablePixel(x, y, "black", 2, "orange");
                rainbowHeartArray.push(pe);
                break;
            case((x === 160) && (y === 280)):
            case((x === 200) && (y === 320)):
            case((x === 240) && (y === 360)):
            case((x === 280) && (y === 400)):
            case((x === 320) && (y === 440)):
            case((x === 360) && (y === 480)):
            case((x === 400) && (y === 520)):
            case((x === 440) && (y === 560)):
            case((x === 480) && (y === 600)):
            case((x === 680) && (y === 360)):
            case((x === 640) && (y === 320)):
            case((x === 600) && (y === 280)):
            case((x === 560) && (y === 240)):
                let pf : CheckablePixel = new CheckablePixel(x, y, "black", 3, "yellow");
                rainbowHeartArray.push(pf);
                break;
            case((x === 200) && (y === 280)):
            case((x === 240) && (y === 320)):
            case((x === 280) && (y === 360)):
            case((x === 320) && (y === 400)):
            case((x === 360) && (y === 440)):
            case((x === 400) && (y === 480)):
            case((x === 440) && (y === 520)):
            case((x === 480) && (y === 560)):
            case((x === 520) && (y === 600)):
            case((x === 600) && (y === 240)):
            case((x === 640) && (y === 280)):
            case((x === 680) && (y === 320)):
                let pg : CheckablePixel = new CheckablePixel(x, y, "black", 4, "yellowgreen");
                rainbowHeartArray.push(pg);
                break;
            case((x === 200) && (y === 240)):
            case((x === 240) && (y === 280)):
            case((x === 280) && (y === 320)):
            case((x === 320) && (y === 360)):
            case((x === 360) && (y === 400)):
            case((x === 400) && (y === 440)):
            case((x === 440) && (y === 480)):
            case((x === 480) && (y === 520)):
            case((x === 520) && (y === 560)):
            case((x === 640) && (y === 240)):
            case((x === 680) && (y === 280)):
                let p : CheckablePixel = new CheckablePixel(x, y, "black", 5, "green");
                rainbowHeartArray.push(p);
                break;
            case((x === 240) && (y === 240)):
            case((x === 280) && (y === 280)):
            case((x === 320) && (y === 320)):
            case((x === 360) && (y === 360)):
            case((x === 400) && (y === 400)):
            case((x === 440) && (y === 440)):
            case((x === 480) && (y === 480)):
            case((x === 520) && (y === 520)):
            case((x === 560) && (y === 560)):
                let ph : CheckablePixel = new CheckablePixel(x, y, "black", 6, "rgb(66, 175, 212)");
                rainbowHeartArray.push(ph);
                break;
            case((x === 280) && (y === 240)):
            case((x === 320) && (y === 280)):
            case((x === 360) && (y === 320)):
            case((x === 400) && (y === 360)):
            case((x === 440) && (y === 400)):
            case((x === 480) && (y === 440)):
            case((x === 520) && (y === 480)):
            case((x === 560) && (y === 520)):
                let pi : CheckablePixel = new CheckablePixel(x, y, "black", 7, "rgb(32, 32, 205)");
                rainbowHeartArray.push(pi);
                break;
            case((x === 320) && (y === 240)):
            case((x === 360) && (y === 280)):
            case((x === 400) && (y === 320)):
            case((x === 440) && (y === 360)):
            case((x === 480) && (y === 400)):
            case((x === 520) && (y === 440)):
            case((x === 560) && (y === 480)):
            case((x === 600) && (y === 520)):
                let pj : CheckablePixel = new CheckablePixel(x, y, "black", 8, "blueviolet");
                rainbowHeartArray.push(pj);
                break;
            case((x === 440) && (y === 320)):
            case((x === 480) && (y === 360)):
            case((x === 560) && (y === 440)):
            case((x === 600) && (y === 480)):
                let pk : CheckablePixel = new CheckablePixel(x, y, "black", 9, "purple");
                rainbowHeartArray.push(pk);
                break;
            default:
                let px : CheckablePixel = new CheckablePixel(x, y, "black", 11, "grey");
                rainbowHeartArray.push(px);
                break;
        }
    }
}

console.log(rainbowHeartArray);

for(let x = 0; x <= 800; x += 40){
    for (let y = 0; y <= 800; y += 40){
        switch(true){
            case(x === 720 && (y >= 520 && y <= 800)):
            case(x === 680 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 640 && (y != 400 && (y >= 360 && y <= 800))):
            case(x === 600 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 560 && (y >= 520 && y <= 800)):
                let xa : CheckablePixel = new CheckablePixel(x, y, "black", 14, "black");
                okArray.push(xa);
                break;
            case(x === 560 && (y >= 360 && y <= 480)):
            case(x === 520 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 480 && (y >= 520 && y <= 800)):
                let xb : CheckablePixel = new CheckablePixel(x, y, "black", 0, "red");
                okArray.push(xb);
                break;
            case(x === 480 && (y >= 360 && y <= 480)):
            case(x === 440 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 400 && (y >= 520 && y <= 800)):
                let xc : CheckablePixel = new CheckablePixel(x, y, "black", 2, "orange");
                okArray.push(xc);
                break;
            case(x === 400 && (y >= 360 && y <= 480)):
            case(x === 360 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 320 && (y >= 520 && y <= 800)):
                let xd : CheckablePixel = new CheckablePixel(x, y, "black", 3, "yellow");
                okArray.push(xd);
                break;
            case(x === 320 && (y >= 360 && y <= 480)):
            case(x === 280 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 240 && (y >= 520 && y <= 800)):
                let xe : CheckablePixel = new CheckablePixel(x, y, "black", 5, "green");
                okArray.push(xe);
                break;
            case(x === 240 && (y >= 360 && y <= 480)):
            case(x === 200 && ((y >= 360 && y <= 440) || (y >= 520 && y <= 800))):
            case(x === 160 && (y >= 520 && y <= 800)):
                let xf : CheckablePixel = new CheckablePixel(x, y, "black", 7, "rgb(32, 32, 205)");
                okArray.push(xf);
                break;
            case(x === 280 && (y >= 120 && y <= 240)):
            case(x === 320 && (y === 120 || y === 240)):
            case(x === 360 && (y >= 120 && y <= 240)):
            case(x === 440 && (y >= 120 && y <= 240)):
            case(x === 480 && y === 160):
            case(x === 520 && (y === 120 || y >= 200 && y <= 240)):
            case(x === 600 && y === 240):
            case(x === 80 && (y >= 40 && y <= 800)):
                let xg : CheckablePixel = new CheckablePixel(x, y, "black", 10, "rgb(238, 89, 114)");
                okArray.push(xg);
                break;
            case(x === 640 && y === 400):
                let xh : CheckablePixel = new CheckablePixel(x, y, "black", 13, "whitesmoke");
                okArray.push(xh);
                break;
            default:
                let xi : CheckablePixel = new CheckablePixel(x, y, "black", 8, "blueviolet");
                okArray.push(xi);
                break;
        }
    }
}

for(let x = 0; x <= 800; x += 40){
    for (let y = 0; y <= 800; y += 40){
        switch(true){
            case((x === 80 || x === 160 || x === 360 || x === 440) && ((y >= 120 && y<= 280))):
            case((x === 120) && (y === 200 || y === 520)):
            case((x === 280 || x === 240) && ((y >= 160 && y <= 200) || y === 280)):
            case(x === 520) && ((y >= 200 && y <= 280)):
            case(x === 600) && ((y >= 200 && y <= 280) || (y >= 480 && y <= 520)):
            case((x === 560) && (y === 200 || y === 280)):
            case((x === 160 || x === 720) && (y >= 360 && y <= 480)):
            case((x === 200 || x === 720) && (y === 520)):
            case((x === 240 ) && (y >= 360 && y <= 480)):
            case(x === 600) && (y >= 360 && y <= 520):
            case((x === 680) && (y >= 480 && y <= 520)):
            case((x === 240) && (y === 240)):
            case((x === 80) && (y >= 360 && y <= 480)):
            case((x === 320 || x === 400 || x === 480) && (y >= 440 && y <= 520)):
            case((x === 360) && (y === 440 || y === 520)):
            case((x === 520) && (y === 440)):
            case((x >= 80 && x <= 760) && (y === 600)):
            // || 320
                let xa : CheckablePixel = new CheckablePixel(x, y, "black", 14, "black");
                helloWorldArray.push(xa);
                break;
            default:
                let xi : CheckablePixel = new CheckablePixel(x, y, "black", 5, "green");
                helloWorldArray.push(xi);
                break;
        }
    }
}


for(let x = 0; x <= 800; x += 40){
    for (let y = 0; y <= 800; y += 40){
        let p : Pixel = new Pixel(x, y, "black");
        freeplayArray.push(p);
    }
}