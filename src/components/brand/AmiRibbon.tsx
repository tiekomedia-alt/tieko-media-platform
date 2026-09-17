export default function AmiRibbon() {
  return (
    <div className="ami-thread" aria-hidden="true">
      <svg className="ami-thread-desktop" viewBox="0 0 1440 1420" fill="none" preserveAspectRatio="xMidYMin slice">
        <defs>
          <filter id="ami-paper-desktop" x="-15%" y="-10%" width="130%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="1" seed="17" result="grain" />
            <feColorMatrix in="grain" type="saturate" values="0" result="mono" />
            <feComponentTransfer in="mono" result="softGrain"><feFuncA type="table" tableValues="0 0.085" /></feComponentTransfer>
            <feBlend in="SourceGraphic" in2="softGrain" mode="multiply" />
          </filter>
          <mask id="ami-mask-desktop" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="1420">
            <rect width="1440" height="1420" fill="black" />
            <path d="M1420 -18C1390 74 1328 145 1242 211C1176 261 1093 329 1127 402C1159 471 1275 445 1329 361C1381 280 1347 205 1275 200C1211 196 1186 254 1237 304C1299 365 1372 435 1360 543C1348 656 1261 735 1190 814C1107 906 1045 1028 1054 1162C1062 1274 1112 1362 1152 1440" stroke="white" strokeWidth="96" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="1388" cy="59" r="22" fill="black" />
            <ellipse cx="1338" cy="119" rx="33" ry="15" transform="rotate(-43 1338 119)" fill="black" />
            <path d="M1267 181C1290 164 1314 163 1334 178C1317 204 1293 214 1269 205C1258 198 1257 189 1267 181Z" fill="black" />
            <circle cx="1196" cy="250" r="23" fill="black" />
            <ellipse cx="1138" cy="347" rx="34" ry="15" transform="rotate(-29 1138 347)" fill="black" />
            <path d="M1233 396C1255 376 1281 374 1303 392C1285 422 1260 433 1236 423C1224 415 1223 405 1233 396Z" fill="black" />
            <circle cx="1344" cy="501" r="23" fill="black" />
            <ellipse cx="1322" cy="615" rx="34" ry="15" transform="rotate(-65 1322 615)" fill="black" />
            <path d="M1246 730C1267 708 1292 704 1315 721C1299 753 1275 767 1250 759C1237 751 1236 740 1246 730Z" fill="black" />
            <circle cx="1162" cy="850" r="23" fill="black" />
            <ellipse cx="1090" cy="978" rx="34" ry="15" transform="rotate(-63 1090 978)" fill="black" />
            <path d="M1047 1101C1068 1079 1092 1076 1115 1093C1099 1124 1075 1138 1050 1130C1038 1122 1037 1111 1047 1101Z" fill="black" />
            <circle cx="1075" cy="1244" r="23" fill="black" />
            <ellipse cx="1120" cy="1362" rx="34" ry="15" transform="rotate(63 1120 1362)" fill="black" />
          </mask>
        </defs>
        <g className="ami-ribbon-shadow"><rect width="1440" height="1420" fill="#E5252A" mask="url(#ami-mask-desktop)" filter="url(#ami-paper-desktop)" /></g>
      </svg>

      <svg className="ami-thread-mobile" viewBox="0 0 390 1640" fill="none" preserveAspectRatio="xMidYMin slice">
        <defs>
          <filter id="ami-paper-mobile" x="-20%" y="-10%" width="140%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="1" seed="11" result="grain" />
            <feColorMatrix in="grain" type="saturate" values="0" result="mono" />
            <feComponentTransfer in="mono" result="softGrain"><feFuncA type="table" tableValues="0 0.13" /></feComponentTransfer>
            <feBlend in="SourceGraphic" in2="softGrain" mode="multiply" />
          </filter>
          <mask id="ami-mask-mobile" maskUnits="userSpaceOnUse" x="0" y="0" width="390" height="1640">
            <rect width="390" height="1640" fill="black" />
            <path d="M420 532C340 534 296 582 314 646C333 711 397 711 412 660C426 612 369 589 333 638C293 693 316 770 368 830C414 883 413 951 370 1017C321 1092 303 1160 328 1230C349 1289 390 1339 407 1408C421 1465 411 1535 378 1616" stroke="white" strokeWidth="58" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="353" cy="580" r="17" fill="black" />
            <path d="M321 652C340 635 360 633 378 647C365 672 345 682 324 674C314 667 313 660 321 652Z" fill="black" />
            <ellipse cx="346" cy="745" rx="27" ry="12" transform="rotate(48 346 745)" fill="black" />
            <circle cx="389" cy="844" r="17" fill="black" />
            <path d="M365 932C384 912 405 910 423 925C409 954 389 965 368 957C358 950 357 941 365 932Z" fill="black" />
            <ellipse cx="341" cy="1054" rx="27" ry="12" transform="rotate(-63 341 1054)" fill="black" />
            <circle cx="321" cy="1168" r="17" fill="black" />
            <path d="M337 1273C357 1258 377 1260 393 1277C376 1301 355 1308 336 1298C328 1289 329 1281 337 1273Z" fill="black" />
            <ellipse cx="397" cy="1410" rx="27" ry="12" transform="rotate(76 397 1410)" fill="black" />
            <circle cx="399" cy="1528" r="16" fill="black" />
          </mask>
        </defs>
        <g className="ami-ribbon-shadow"><rect width="390" height="1640" fill="#E5252A" mask="url(#ami-mask-mobile)" filter="url(#ami-paper-mobile)" /></g>
      </svg>
    </div>
  );
}
