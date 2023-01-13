chrome.runtime.onMessage.addListener((request) => {
    if (request.f === 'fullscreen') {
        document.documentElement.requestFullscreen();
        return;
    };

    const toHide = ['._3bfsh',
        '#root>div._1R67g._3YKTw>div>div:nth-child(2)>div>div._33Mo9>div._1Edpk>div.Nxs-p.CZHMx.HajF7._2atFA>button',
        '#root>div._3W86r._3YKTw>div>div>div._3yOsW._3VXxf.eGCMg>div>div.SQR8J.wm1bO',
        '#root > div._1R67g._3YKTw > div > div:nth-child(2) > div > div._33Mo9 > div._2TlMB > div > div'
    ];

    const toFull = '#root>div._3W86r._3YKTw>div>div>div._3yOsW._3VXxf.eGCMg>div>div._1jZrU.wm1bO';

    for (const s of toHide) document.querySelector(s)?.classList.add('ad');
    document.querySelector(toFull)?.classList.add('ad');
});