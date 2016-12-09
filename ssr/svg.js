import React from 'react';

const Svg = () => (
  <svg className='hide'>
    <defs>
      <symbol id='tag'>
        <path d='M21.8473016,6.87957023 C21.299533,6.33363009 20.5387432,6 19.7018745,6 L9.05081842,6 C7.37708103,6 6.00765952,7.36485035 6.00765952,9.03300079 L6.00765952,19.6485035 C6.00765952,20.4825788 5.90315855,20.9108211 6.46614294,21.4719262 L20.160358,35.1204298 C20.7081266,35.6663699 21.4689163,36 22.305785,36 C23.1426537,36 23.9034434,35.6663699 24.451212,35.1052648 L35.1022681,24.489762 C35.6652525,23.9438219 36,23.1855717 36,22.3514965 C36,21.5174212 35.6500367,20.744006 35.1022681,20.1980659 L21.8473016,6.87957023 Z M21.2110671,8.29707143 C20.7180754,7.8057253 20.0333646,7.50545823 19.2801828,7.50545823 L10.268082,7.51650039 C8.76171832,7.51650039 7.52923897,8.74486571 7.52923897,10.2462011 L7.50446561,19.2269164 C7.50446561,19.9775841 7.80573834,20.6600093 8.31242429,21.1650039 L20.1599226,32.960609 C20.6529143,33.4519551 21.337625,33.7522222 22.0908069,33.7522222 C22.8439887,33.7522222 23.5286994,33.4519551 24.0216912,32.9469604 L33.0585654,23.9552029 C33.5652514,23.4638568 33.8665241,22.7814316 33.8665241,22.0307639 C33.8665241,21.2800963 33.5515571,20.5840226 33.0585654,20.0926764 L21.2110671,8.29707143 Z M9.05081842,11.3077514 C9.05081842,10.0490561 10.0702766,9.03300079 11.3331876,9.03300079 C12.5960985,9.03300079 13.6155568,10.0490561 13.6155568,11.3077514 C13.6155568,12.5664467 12.5960985,13.582502 11.3331876,13.582502 C10.0702766,13.582502 9.05081842,12.5664467 9.05081842,11.3077514 Z' />
      </symbol>
      <symbol id='filter'>
        <path d='M33.6900005,11.5966001 C33.6900005,9.23517523 27.2279378,8 20.8450003,8 C14.4620627,8 8,9.23517523 8,11.5966001 C8,12.1319797 8.33448381,12.6082723 8.92278482,13.0265055 L17.7622002,25.1213578 L17.7622002,34.1272443 C17.7622002,34.3481783 17.893733,34.5449638 18.0971978,34.6302546 L18.4496646,34.7566494 L23.9278003,29.2779998 L23.9278003,25.1228992 L32.7574535,13.0398643 L32.7569397,13.0336987 C33.3508925,12.6139241 33.6900005,12.1345487 33.6900005,11.5966001 L33.6900005,11.5966001 Z M20.8149996,9.19999981 C27.7220689,9.19999981 32.1299992,10.656683 32.1299992,11.6597823 C32.1299992,11.867388 31.9312487,12.0941799 31.5716285,12.3234316 L31.5465387,12.3204799 L31.554902,12.3337627 C30.1592214,13.2099373 26.272765,14.1195648 20.8149996,14.1195648 C15.3518226,14.1195648 11.4629064,13.2084614 10.0711615,12.331303 L10.0795248,12.3180201 L9.87683868,12.1974908 C9.63528804,12.0115312 9.5,11.8290154 9.5,11.6597823 C9.5,10.656683 13.9079303,9.19999981 20.8149996,9.19999981 L20.8149996,9.19999981 Z M22.8,28.6299024 L19,32.4692004 L19,25.4692004 L22.8,25.4692004 L22.8,28.6299024 L22.8,28.6299024 Z M23.0979506,24 L18.7025377,24 L11.3999996,14.3000002 C13.7588598,15.0628789 17.3414123,15.4549994 20.8999996,15.4549994 C24.4585869,15.4549994 28.0406504,15.0628789 30.3999996,14.3004749 L23.0979506,24 L23.0979506,24 Z' />
      </symbol>
      <symbol id='download'>
        <path d='M26.6444694,18.8980705 L26.6444694,6 L16.0577878,6 L16.0577878,18.8980705 L9,18.8980705 L21.3511286,31.6373958 L33.7022572,18.8980705 L26.6444694,18.8980705 Z M25.6141585,19.9252307 L25.6141585,7.23528873 L17.0880988,7.23528873 L17.0880988,19.9252307 L11.404059,19.9252307 L21.3511286,29.8723004 L31.2981982,19.9252307 L25.6141585,19.9252307 Z M9,36 L33.7022572,36 L33.7022572,34.2352941 L9,34.2352941 L9,36 Z' />
      </symbol>
      <symbol id='rename'>
        <path d='M6,29.7491318 L6,36 L12.25,36 L30.6916667,17.5557716 L24.4416667,11.3049035 L6,29.7491318 L6,29.7491318 Z M6.87826299,35.1213203 L11.6097429,35.1213203 L28.7527435,17.9763804 L24.0212636,13.2442433 L6.87826299,30.3891832 L6.87826299,35.1213203 Z M35.5083333,12.7384359 C36.1583333,12.0883456 36.1583333,11.0298653 35.5083333,10.379775 L31.6166667,6.48756772 C30.9666667,5.83747743 29.9083333,5.83747743 29.2583333,6.48756772 L26.2083333,9.53799139 L32.4583333,15.7888596 L35.5083333,12.7384359 L35.5083333,12.7384359 Z' />
      </symbol>
      <symbol id='trash'>
        <path d='M11.5838509,32.6666667 C11.5838509,34.5083333 13.0013975,36 14.7515528,36 L27.4223602,36 C29.1725155,36 30.5900621,34.5083333 30.5900621,32.6666667 L30.5900621,12.6666667 L11.5838509,12.6666667 L11.5838509,32.6666667 L11.5838509,32.6666667 Z M14.8354037,35 L27.3385093,35 C28.6511258,35 29.7142857,33.8279762 29.7142857,32.3809524 L29.7142857,13.6666667 L12.4596273,13.6666667 L12.4596273,32.3809524 C12.4596273,33.8279762 13.5227873,35 14.8354037,35 Z M26.6304348,7.66666667 L25.0465839,6 L17.1273292,6 L15.5434783,7.66666667 L10,7.66666667 L10,9.52941176 L32.173913,9.52941176 L32.173913,7.66666667 L26.6304348,7.66666667 Z M24.8498535,18 L26.3498535,18 L26.3498535,33 L24.8498535,33 L24.8498535,18 Z M20.3498535,18 L21.8498535,18 L21.8498535,33 L20.3498535,33 L20.3498535,18 Z M15.8498535,18 L17.3498535,18 L17.3498535,33 L15.8498535,33 L15.8498535,18 Z' />
      </symbol>
      <symbol id='search'>
        <path d='M25.4066126,27.3178685 C23.3977964,28.6863969 20.9398723,29.4913483 18.285304,29.4913483 C11.5003176,29.4913483 6,24.2326312 6,17.7456741 C6,11.2587171 11.5003176,6 18.285304,6 C25.0702903,6 30.570608,11.2587171 30.570608,17.7456741 C30.570608,20.9891527 29.1955286,23.9255712 26.9723259,26.0511201 L35.6404979,34.3385443 C36.0380423,34.7186265 36.0283794,35.3280607 35.6292625,35.7096464 C35.2273631,36.0938924 34.5880797,36.0960414 34.1951681,35.7203883 L25.4066126,27.3178685 L25.4066126,27.3178685 Z M18.285304,28.1095043 C24.2720567,28.1095043 29.1252781,23.4694598 29.1252781,17.7456741 C29.1252781,12.0218885 24.2720567,7.38184402 18.285304,7.38184402 C12.2985513,7.38184402 7.44532988,12.0218885 7.44532988,17.7456741 C7.44532988,23.4694598 12.2985513,28.1095043 18.285304,28.1095043 L18.285304,28.1095043 Z' />
      </symbol>
      <symbol id='help'>
        <circle id='oval' fill='transparent' stroke='#008F64' strokeWidth='2' cx='21' cy='21' r='14' />
        <g id='i' transform='translate(19.000000, 12.000000)' fill='#008F64'>
          <path d='M3.5,3 L0.5,3 L0.5,0 L3.5,0 L3.5,3 Z' />
          <path d='M3.5,17.3730475 L0.5,17.3730472 L0.5,5 L3.5,5.0000003 L3.5,17.3730475 Z' />
        </g>
      </symbol>
      <symbol id='favorites'>
        <polygon points='21 28 12.7710065 32.3262379 14.3426044 23.163119 7.68520877 16.6737621 16.8855032 15.336881 21 7 25.1144968 15.336881 34.3147912 16.6737621 27.6573956 23.163119 29.2289935 32.3262379 ' />
      </symbol>

      <symbol id='new-folder'>
        <path d='M19.2598448,11.3076923 L15.9397412,8 L8.30350305,8 C6.46914584,8 5.00000002,9.48019231 5.00000002,11.3076923 L5,30.4923077 C5,32.3198077 6.48574634,33.8 8.32010355,33.8 L33.8928387,33.8 C35.727196,33.8 37.2129423,32.3198077 37.2129423,30.4923077 L37.1963418,14.6153846 C37.1963418,12.7878846 35.7105955,11.3076923 33.8762382,11.3076923 L19.2598448,11.3076923 Z M8.16954015,32.4769231 C7.06082638,32.4769231 6.16203628,31.5834521 6.16203628,30.4827995 L6.16203628,11.3172005 C6.16203628,10.2158765 7.05340364,9.32307692 8.15632371,9.32307692 L15.4583262,9.32307692 L18.7411644,12.6307692 L34.0483499,12.6307692 C35.1543319,12.6307692 36.0509074,13.5350878 36.0509074,14.6245613 L36.0509068,30.483131 C36.0509068,31.584272 35.1563923,32.4769231 34.0434029,32.4769231 L8.16954015,32.4769231 Z M18.1015622,23.48 L18.1015623,28.5076911 L16.7914063,28.5076916 L16.7914062,23.4800005 L11.5507813,23.4800006 L11.5507813,22.19 L16.7914062,22.1900005 L16.7914063,17.0300005 L18.1015623,17.03 L18.1015622,22.19 L23.3421872,22.19 L23.3421872,23.4800006 L18.1015622,23.48 Z' />
      </symbol>
      <symbol id='bigger'>
        <polygon points='6 20.0203857 20.0119629 20.0203857 20.0092773 6 22 6 22.0001221 20.0203857 36 20.0203857 36 22.0203857 22 22.0203857 22 36 20.0092773 36 20.0092773 22.0203857 6 22.0203857' />
      </symbol>
      <symbol id='smaller'>
        <rect x='5' y='20' width='30' height='2' />
      </symbol>
      <symbol id='fit-page'>
        <path id='fit+screen' d='M30.5333333,6 L11.4666667,6 C9.55133333,6 8,7.49166667 8,9.33333333 L8,32.6666667 C8,34.5083333 9.55133333,36 11.4666667,36 L30.5333333,36 C32.4486667,36 34,34.5083333 34,32.6666667 L34,9.33333333 C34,7.49166667 32.4486667,6 30.5333333,6 L30.5333333,6 Z M12.0962874,34.3333333 C10.9963982,34.3333333 10.1047619,33.4460856 10.1047619,32.3289992 L10.1047619,9.6710008 C10.1047619,8.56403762 10.9995988,7.66666667 12.0962874,7.66666667 L29.9037126,7.66666667 C31.0036018,7.66666667 31.8952381,8.55391439 31.8952381,9.6710008 L31.8952381,32.3289992 C31.8952381,33.4359624 31.0004012,34.3333333 29.9037126,34.3333333 L12.0962874,34.3333333 Z' />
        <path d='M14.9826028,20.1944351 L14.9826028,18.2632893 L11.6347719,21.4818656 L14.9826028,24.7004419 L14.9826028,22.7692961 L17.9913014,22.7692961 L17.9913014,20.1944351 L14.9826028,20.1944351 Z' />
        <path d='M27.0173972,18.2632893 L27.0173972,20.1944351 L24.0086986,20.1944351 L24.0086986,22.7692961 L27.0173972,22.7692961 L27.0173972,24.7004419 L30.3652281,21.4818656 L27.0173972,18.2632893 Z' />
        <path d='M21.1514318,26.3995329 L21.1514318,24.4683871 L17.8036008,27.6869634 L21.1514318,30.9055396 L21.1514318,28.9743939 L24.1601304,28.9743939 L24.1601304,26.3995329 L21.1514318,26.3995329 Z' transform='translate(20.981866, 27.686963) rotate(-90.000000) translate(-20.981866, -27.686963) ' />
        <path d='M20.8122994,12.0944604 L20.8122994,14.0256061 L17.8036008,14.0256061 L17.8036008,16.6004671 L20.8122994,16.6004671 L20.8122994,18.5316129 L24.1601304,15.3130366 L20.8122994,12.0944604 Z' transform='translate(20.981866, 15.313037) rotate(-90.000000) translate(-20.981866, -15.313037) ' />
      </symbol>
      <symbol id='fit-width'>
        <path d='M10.2713937,20.2607488 C10.2721063,19.1559086 11.1683601,18.2602587 12.2743031,18.2602587 L29.7523708,18.2602587 C30.8578345,18.2602587 31.7539899,19.1643637 31.7539899,20.2607488 L31.7539899,36.0000001 L10.2612415,36 L10.2713937,20.2607488 Z M34,35.9792551 L34,19.9252586 C34,18.156905 32.4489696,16.7246186 30.5340103,16.7246186 L11.4710668,16.7246186 C9.55610753,16.7246186 8.00507713,18.156905 8.00507713,19.9252586 L8.00507713,35.9792551 L34,35.9792551 Z M8,6.00000002 L8,11.3802282 C8,13.1485817 9.5510304,14.5808681 11.4659897,14.5808681 L30.5289332,14.5808681 C32.4438925,14.5808681 33.9949229,13.1485817 33.9949229,11.3802282 L33.9949229,6.00000002 L8,6.00000002 Z M31.7434091,10.7235309 C31.7415297,11.827375 30.8441184,12.7222174 29.7379142,12.7222174 L12.2557178,12.7222174 C11.1499929,12.7222174 10.2536258,11.8295588 10.2536258,10.7235309 L10.2536258,6 L31.7514513,6.00000004 L31.7434091,10.7235309 Z' id='fit_width' />
        <path d='M26.0173972,25.2632893 L26.0173972,27.1944351 L23.0086986,27.1944351 L23.0086986,29.7692961 L26.0173972,29.7692961 L26.0173972,31.7004419 L29.3652281,28.4818656 L26.0173972,25.2632893 Z' />
        <path d='M15.9826028,27.1944351 L15.9826028,25.2632893 L12.6347719,28.4818656 L15.9826028,31.7004419 L15.9826028,29.7692961 L18.9913014,29.7692961 L18.9913014,27.1944351 L15.9826028,27.1944351 Z' />
      </symbol>
      <symbol id='fit-window'>
        <g transform='translate(6.000000, 6.000000)'>
          <path d='M3.03747827,27.962963 C2.48494983,27.962963 2.03703704,27.51297 2.03703704,26.9625217 L2.03703704,3.03747844 C2.03703704,2.48495001 2.48325156,2.03703721 3.03269463,2.03703721 L15,2.03703721 L15,0 L3.7037037,0 C1.65740741,0 0,1.65740741 0,3.7037037 L0,26.2962963 C0,28.3425926 1.65740741,30 3.7037037,30 L27.962963,30 C30.0092593,30 30,28.3425926 30,26.2962963 L30,15 L27.962963,15 L27.962963,26.9673054 C27.962963,27.5171919 27.51297,27.962963 26.9625217,27.962963 L3.03747827,27.962963 Z' />
          <polygon points='18.6943959 2.03703704 26.5 2.03703713 14.6428223 13.4078369 16.1072998 15 28.0000002 3.5 28 11.2962961 29.9906922 11.2962963 29.9906922 0 18.6943959 0' />
        </g>
      </symbol>
      <symbol id='show-pages'>
        <path id='show_pages' d='M6.27272727,6 C4.47272727,6 3,7.50397595 3,9.34216877 L3,32.6578312 C3,34.4960241 4.47272727,36 6.27272727,36 L35.7272727,36 C37.5272727,36 39,34.4960241 39,32.6578312 L39,9.34216877 C39,7.50397595 37.5272727,6 35.7272727,6 L6.27272727,6 Z M16.9090909,33.9999993 L16.9090909,7.93529443 L35.0001566,7.93529443 C36.1046401,7.93529443 37.0000009,8.83250057 37.0000009,9.93726893 L37.0000009,31.9980248 C37.0000009,33.1036848 36.1107961,33.9999993 35.0001566,33.9999993 L16.9090909,33.9999993 Z M6.99961503,33.9999999 C5.89525814,33.9999999 4.99999998,33.1050212 4.99999997,32.0029954 L4.99999983,9.99700528 C4.99999982,8.89409009 5.88743313,8.00000062 6.99961486,8.00000054 L15.0000001,8 L15.0000003,33.9999993 L6.99961503,33.9999999 Z' />
        <path d='M8.99791312,16 C7.89449617,16 7,15.1017394 7,14.0020869 L7,11.9979131 C7,10.8944962 7.89826062,10 8.99791312,10 L11.0020869,10 C12.1055038,10 13,10.8982606 13,11.9979131 L13,14.0020869 C13,15.1055038 12.1017394,16 11.0020869,16 L8.99791312,16 Z' id='pg-3' />
        <path d='M8.99791312,24 C7.89449617,24 7,23.1017394 7,22.0020869 L7,19.9979131 C7,18.8944962 7.89826062,18 8.99791312,18 L11.0020869,18 C12.1055038,18 13,18.8982606 13,19.9979131 L13,22.0020869 C13,23.1055038 12.1017394,24 11.0020869,24 L8.99791312,24 Z' id='pg-2' />
        <path d='M8.99791312,32 C7.89449617,32 7,31.1017394 7,30.0020869 L7,27.9979131 C7,26.8944962 7.89826062,26 8.99791312,26 L11.0020869,26 C12.1055038,26 13,26.8982606 13,27.9979131 L13,30.0020869 C13,31.1055038 12.1017394,32 11.0020869,32 L8.99791312,32 Z' id='pg-1' />
      </symbol>
      <symbol id='show-imgs'>
        <path id='show_pages' d='M8.72727273,6 C7.22727273,6 6,7.50397595 6,9.34216877 L6,32.6578312 C6,34.4960241 7.22727273,36 8.72727273,36 L33.2727273,36 C34.7727273,36 36,34.4960241 36,32.6578312 L36,9.34216877 C36,7.50397595 34.7727273,6 33.2727273,6 L8.72727273,6 Z M9.99700466,34 C8.89408944,34 8,33.1027938 8,31.9980254 L8,9.93726898 C8,8.83160897 8.89497885,7.93529443 9.99700466,7.93529443 L32.0029953,7.93529443 C33.1059106,7.93529443 34,8.83250059 34,9.93726898 L34,31.9980254 C34,33.1036855 33.1050211,34 32.0029953,34 L9.99700466,34 Z' />
        <path d='M11.999615,20 C10.8952581,20 10,19.1125667 10,18.000385 L10,11.999615 C10,10.8952581 10.8874333,10 11.999615,10 L18.000385,10 C19.1047419,10 20,10.8874333 20,11.999615 L20,18.000385 C20,19.1047419 19.1125667,20 18.000385,20 L11.999615,20 Z' id='img-4' />
        <path d='M23.999615,20 C22.8952581,20 22,19.1125667 22,18.000385 L22,11.999615 C22,10.8952581 22.8874333,10 23.999615,10 L30.000385,10 C31.1047419,10 32,10.8874333 32,11.999615 L32,18.000385 C32,19.1047419 31.1125667,20 30.000385,20 L23.999615,20 Z' id='img-3' />
        <path d='M11.999615,32 C10.8952581,32 10,31.1125667 10,30.000385 L10,23.999615 C10,22.8952581 10.8874333,22 11.999615,22 L18.000385,22 C19.1047419,22 20,22.8874333 20,23.999615 L20,30.000385 C20,31.1047419 19.1125667,32 18.000385,32 L11.999615,32 Z' id='img-2' />
        <path d='M23.999615,32 C22.8952581,32 22,31.1125667 22,30.000385 L22,23.999615 C22,22.8952581 22.8874333,22 23.999615,22 L30.000385,22 C31.1047419,22 32,22.8874333 32,23.999615 L32,30.000385 C32,31.1047419 31.1125667,32 30.000385,32 L23.999615,32 Z' id='img-1' />
      </symbol>
      <symbol id='page-up'>
        <path d='M30.5333333,6 L11.4666667,6 C9.55133333,6 8,7.49166667 8,9.33333333 L8,32.6666667 C8,34.5083333 9.55133333,36 11.4666667,36 L30.5333333,36 C32.4486667,36 34,34.5083333 34,32.6666667 L34,9.33333333 C34,7.49166667 32.4486667,6 30.5333333,6 L30.5333333,6 Z M12.0962874,34.3333333 C10.9963982,34.3333333 10.1047619,33.4460856 10.1047619,32.3289992 L10.1047619,9.6710008 C10.1047619,8.56403762 10.9995988,7.66666667 12.0962874,7.66666667 L29.9037126,7.66666667 C31.0036018,7.66666667 31.8952381,8.55391439 31.8952381,9.6710008 L31.8952381,32.3289992 C31.8952381,33.4359624 31.0004012,34.3333333 29.9037126,34.3333333 L12.0962874,34.3333333 Z' />
        <path d='M22.1666667,24 L22.1666667,14.6666667 L24.5,14.6666667 L21,10 L17.5,14.6666667 L19.8333333,14.6666667 L19.8333333,24 L22.1666667,24 Z' />
      </symbol>
      <symbol id='page-down'>
        <path d='M30.5333333,6 L11.4666667,6 C9.55133333,6 8,7.49166667 8,9.33333333 L8,32.6666667 C8,34.5083333 9.55133333,36 11.4666667,36 L30.5333333,36 C32.4486667,36 34,34.5083333 34,32.6666667 L34,9.33333333 C34,7.49166667 32.4486667,6 30.5333333,6 L30.5333333,6 Z M12.0962874,34.3333333 C10.9963982,34.3333333 10.1047619,33.4460856 10.1047619,32.3289992 L10.1047619,9.6710008 C10.1047619,8.56403762 10.9995988,7.66666667 12.0962874,7.66666667 L29.9037126,7.66666667 C31.0036018,7.66666667 31.8952381,8.55391439 31.8952381,9.6710008 L31.8952381,32.3289992 C31.8952381,33.4359624 31.0004012,34.3333333 29.9037126,34.3333333 L12.0962874,34.3333333 Z' />
        <path d='M22.1666667,18 L22.1666667,27.3333333 L24.5,27.3333333 L21,32 L17.5,27.3333333 L19.8333333,27.3333333 L19.8333333,18 L22.1666667,18 Z' />
      </symbol>
      <symbol id='link'>
        <path d='M21.6320859,23.2054853 L19.8589847,24.9799927 L19.917344,25.038352 C20.1599215,25.2818084 20.1599215,25.6789559 19.917344,25.9222365 L12.5308581,33.3085466 C12.2868743,33.5525304 11.8901956,33.5525304 11.6462118,33.3085466 L8.69162917,30.3549015 C8.4475868,30.1099216 8.4475868,29.7133601 8.69162917,29.4696107 L16.0778221,22.0831248 C16.3215715,21.8396098 16.7183088,21.8396098 16.9611207,22.0831248 L17.0197143,22.1414254 L18.7939873,20.3682657 L18.7356281,20.3094963 C17.5119592,19.0861204 15.5278039,19.0861204 14.3034905,20.3094963 L6.91770772,27.6958064 C5.69409743,28.9200612 5.69409743,30.9044509 6.91770772,32.1275339 L9.8718802,35.0821165 C11.0957249,36.3059612 13.0794114,36.3059612 14.3034905,35.0821165 L21.6906209,27.6958064 C22.9142312,26.4724305 22.9142312,24.4873377 21.6906209,23.2637274 L21.6320859,23.2054853 Z M35.0821311,9.87338898 L32.128193,6.91863057 C30.9034109,5.69378981 28.9196657,5.69378981 27.6957039,6.91863057 L20.3091594,14.3042375 C19.0857835,15.5276135 19.0857835,17.5127063 20.3091594,18.7360822 L20.367753,18.7946758 L22.1417916,17.0209887 L22.0826707,16.9626295 C21.8389799,16.7188801 21.8389799,16.3220256 22.0826707,16.0782176 L29.4694495,8.69202468 C29.7140778,8.44809949 30.1095847,8.44809949 30.3538028,8.69202468 L33.3085027,11.6469003 C33.5524864,11.8898294 33.5524864,12.2865667 33.3085027,12.5306091 L25.9220168,19.9169777 C25.678326,20.1604928 25.2815887,20.1604928 25.0380736,19.9169777 L24.9792457,19.8583841 L23.2060859,21.6326571 L23.2643866,21.6910164 C24.4870594,22.9148025 26.4716834,22.9148025 27.6955281,21.6910164 L35.0820726,14.3042375 C36.3058586,13.0799827 36.3058586,11.0964719 35.0821311,9.87338898 Z M15.0782737,26.5667662 L15.4326479,26.922195 C15.82335,27.3116081 16.5345006,27.2401825 17.0123901,26.7610626 L26.7609015,17.0131958 C27.2389667,16.5348376 27.3113884,15.8237455 26.9217409,15.4332778 L26.5673668,15.0787278 C26.1766646,14.6880257 25.4662171,14.7605645 24.9873902,15.2396259 L15.2382929,24.9877857 C14.7611065,25.466554 14.6885091,26.176064 15.0782737,26.5667662 Z' />
      </symbol>
      <symbol id='close'>
        <path d='M19.375,21 L8,9.625 L9.625,8 L21,19.375 L32.375,8 L34,9.625 L22.625,21 L34,32.375 L32.375,34 L21,22.625 L9.625,34 L8,32.375 L19.375,21 Z' />
      </symbol>
      <symbol id='add-page'>
        <circle id='outer' cx='21' cy='21' r='15' />
        <circle id='inner' stroke='#FFFFFF' cx='21' cy='21' r='8' fill='transparent' />
        <path id='plus' fill='#FFFFFF' d='M24.9999998,22 L21.9999998,22 L21.9999998,25 L20.0000001,25 L20.0000001,22 L17,22 L17,20 L20.0000001,19.9999999 L20.0000001,17 L21.9999998,17 L21.9999998,20 L24.9999998,20 L24.9999998,22 Z' />
      </symbol>
      <symbol id='delete-page'>
        <circle id='outer' cx='21' cy='21' r='15' />
        <circle id='inner' stroke='#FFFFFF' cx='21' cy='21' r='8' fill='transparent' />
        <path id='minus' fill='#FFFFFF' d='M24.9999998,22 L22.9999998,22 L21.9999998,22 L20.0000001,22 L19.0000001,22 L17,22 L17,20 L19.0000001,19.9999999 L20.0000001,20 L21.9999998,20 L22.9999998,20 L24.9999998,20 L24.9999998,22 Z' />
      </symbol>
      <symbol id='delete-all-pages'>
        <circle id='outer' cx='21' cy='21' r='15' />
        <circle id='inner' stroke='#FFFFFF' cx='21' cy='21' r='8' fill='transparent' />
        <path id='cross' fill='#FFFFFF' d='M20.4648232,20.959798 L17,17.4949747 L17.4949747,17 L20.959798,20.4648232 L24.4246212,17 L24.9195959,17.4949747 L21.4547727,20.959798 L24.9195959,24.4246212 L24.4246212,24.9195959 L20.959798,21.4547727 L17.4949747,24.9195959 L17,24.4246212 L20.4648232,20.959798 Z' />
      </symbol>
      <symbol id='my-folder'>
        <path d='M33,11.9347826 L21,11.9347826 L18,9 L9,9 C7.3425,9 6.015,10.3133152 6.015,11.9347826 L6,29.5434783 C6,31.1649457 7.3425,32.4782609 9,32.4782609 L33,32.4782609 C34.6575,32.4782609 36,31.1649457 36,29.5434783 L36,14.8695652 C36,13.2480978 34.6575,11.9347826 33,11.9347826 L33,11.9347826 Z M25.5,16.3369565 C27.1575,16.3369565 28.5,17.6502717 28.5,19.2717391 C28.5,20.8932065 27.1575,22.2065217 25.5,22.2065217 C23.8425,22.2065217 22.5,20.8932065 22.5,19.2717391 C22.5,17.6502717 23.8425,16.3369565 25.5,16.3369565 L25.5,16.3369565 Z M31.5,28.076087 L19.5,28.076087 L19.5,26.6086957 C19.5,24.6497283 23.4975,23.673913 25.5,23.673913 C27.5025,23.673913 31.5,24.6497283 31.5,26.6086957 L31.5,28.076087 L31.5,28.076087 Z' />
      </symbol>
      <symbol id='chat'>
        <path d='M33,7 L9,7 C7.3425,7 6.015,8.28413043 6.015,9.86956522 L6,35.6956522 L12,29.9565217 L33,29.9565217 C34.6575,29.9565217 36,28.6723913 36,27.0869565 L36,9.86956522 C36,8.28413043 34.6575,7 33,7 L33,7 Z M16.5,19.9130435 L13.5,19.9130435 L13.5,17.0434783 L16.5,17.0434783 L16.5,19.9130435 L16.5,19.9130435 Z M22.5,19.9130435 L19.5,19.9130435 L19.5,17.0434783 L22.5,17.0434783 L22.5,19.9130435 L22.5,19.9130435 Z M28.5,19.9130435 L25.5,19.9130435 L25.5,17.0434783 L28.5,17.0434783 L28.5,19.9130435 L28.5,19.9130435 Z' />
      </symbol>
    </defs>
  </svg>
);
export default Svg;
