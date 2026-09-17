function DesktopRibbon() {
  return (
    <svg
      className="ami-thread-desktop"
      viewBox="0 0 1440 1420"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <filter id="ami-print-desktop" x="-12%" y="-8%" width="124%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="2" seed="19" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 .12 0"
            result="soft-grain"
          />
          <feBlend in="SourceGraphic" in2="soft-grain" mode="multiply" />
        </filter>

        <mask id="ami-mask-desktop" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="1420">
          <rect width="1440" height="1420" fill="black" />
          {/* One narrow, open path. Its crossover sits high and well away from the hero copy. */}
          <path
            d="M1439 -54
               C1430 55 1361 106 1284 151
               C1207 196 1122 246 1051 220
               C991 198 1017 136 1079 125
               C1160 111 1235 160 1286 216
               C1340 276 1345 351 1310 431
               C1271 520 1216 620 1191 721
               C1163 835 1194 930 1258 1020
               C1322 1110 1341 1252 1302 1461"
            stroke="white"
            strokeWidth="66"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Deliberate alternating apertures, spaced along the direction of travel. */}
          <circle cx="1398" cy="44" r="13" fill="black" />
          <path d="M1340 82C1353 72 1368 73 1378 84C1367 100 1353 106 1341 100C1334 95 1334 89 1340 82Z" fill="black" />
          <circle cx="1228" cy="182" r="13" fill="black" />
          <path d="M1090 204C1103 192 1119 193 1129 205C1118 223 1104 230 1091 224C1084 219 1083 211 1090 204Z" fill="black" />
          <circle cx="1288" cy="278" r="13" fill="black" />
          <path d="M1275 420C1288 407 1304 408 1315 420C1305 439 1290 446 1277 440C1269 435 1268 427 1275 420Z" fill="black" />
          <circle cx="1220" cy="592" r="13" fill="black" />
          <path d="M1183 745C1196 732 1212 733 1223 746C1212 764 1198 772 1185 766C1177 761 1176 753 1183 745Z" fill="black" />
          <circle cx="1210" cy="896" r="13" fill="black" />
          <path d="M1250 1034C1264 1023 1280 1025 1290 1038C1278 1055 1263 1061 1251 1054C1244 1049 1244 1041 1250 1034Z" fill="black" />
          <circle cx="1324" cy="1182" r="13" fill="black" />
          <path d="M1310 1336C1323 1324 1339 1325 1349 1338C1338 1356 1324 1363 1311 1357C1304 1352 1303 1344 1310 1336Z" fill="black" />
        </mask>
      </defs>

      <g className="ami-ribbon-shadow">
        <rect width="1440" height="1420" fill="#E5252A" mask="url(#ami-mask-desktop)" filter="url(#ami-print-desktop)" />
      </g>
    </svg>
  );
}

function MobileRibbon() {
  return (
    <svg
      className="ami-thread-mobile"
      viewBox="0 0 390 1560"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <filter id="ami-print-mobile" x="-18%" y="-8%" width="136%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="1" seed="23" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 .08 0"
            result="soft-grain"
          />
          <feBlend in="SourceGraphic" in2="soft-grain" mode="multiply" />
        </filter>

        <mask id="ami-mask-mobile" maskUnits="userSpaceOnUse" x="0" y="0" width="390" height="1560">
          <rect width="390" height="1560" fill="black" />
          <path
            d="M432 96
               C375 145 367 230 419 294
               C451 334 444 401 402 457
               C355 521 345 604 376 674
               C413 758 418 843 382 932
               C348 1014 343 1103 373 1180
               C407 1269 405 1384 367 1499
               C357 1528 352 1550 351 1580"
            stroke="white"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="392" cy="166" r="13" fill="black" />
          <path d="M379 260C392 249 406 250 416 261C405 278 392 284 380 278C373 274 373 267 379 260Z" fill="black" />
          <circle cx="396" cy="447" r="13" fill="black" />
          <path d="M355 587C368 575 383 576 393 588C383 605 369 612 357 606C350 601 349 594 355 587Z" fill="black" />
          <circle cx="398" cy="777" r="13" fill="black" />
          <path d="M365 1002C378 989 393 990 404 1002C394 1020 380 1027 367 1021C360 1016 359 1009 365 1002Z" fill="black" />
          <circle cx="375" cy="1190" r="13" fill="black" />
          <path d="M368 1410C382 1398 397 1400 407 1413C395 1430 381 1436 369 1429C362 1425 361 1417 368 1410Z" fill="black" />
        </mask>
      </defs>

      <g className="ami-ribbon-shadow">
        <rect width="390" height="1560" fill="#E5252A" mask="url(#ami-mask-mobile)" filter="url(#ami-print-mobile)" />
      </g>
    </svg>
  );
}

export default function AmiRibbon() {
  return (
    <div className="ami-thread" aria-hidden="true">
      <DesktopRibbon />
      <MobileRibbon />
    </div>
  );
}
