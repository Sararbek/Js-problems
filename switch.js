{
  // 1-masala
  let day = 1,
    result;
  switch (day) {
    case 1:
      result = "Dushanba";
      break;
    case 2:
      result = "Seshanba";
      break;
    case 3:
      result = "Chorshanba";
      break;
    case 4:
      result = "Payshanba";
      break;
    case 5:
      result = "Juma";
      break;
    case 6:
      result = "Shanba";
      break;
    case 7:
      result = "Yakshanba";
      break;
    default:
      result = "Bunday hafta kuni yo'q";
  }
  console.log(result);
}

{
  // 2-masala
  let k = 5,
    result;
  switch (k) {
    case 1:
      result = "yomon";
      break;
    case 2:
      result = "qoniqarsiz";
      break;
    case 3:
      result = "qoniqarli";
      break;
    case 4:
      result = "yaxshi";
      break;
    case 5:
      result = "a'lo";
      break;
    default:
      result = "xato";
  }
  console.log(result);
}

{
  // 3-masala
  let month = 1,
    result;
  switch (month) {
    case 1:
    case 2:
    case 12:
      result = "qish";
      break;
    case 3:
    case 4:
    case 5:
      result = "bahor";
      break;
    case 6:
    case 7:
    case 8:
      result = "yoz";
      break;
    case 9:
    case 10:
    case 11:
      result = "kuz";
      break;
    default:
      result = "Bunday oy mavjud emas";
  }
  console.log(result);
}

{
  // 4-masala
  let month = 10,
    result;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = "Ushbu oyda 31 kun mavjud";
      break;
    case 4:
    case 5:
    case 9:
    case 11:
      result = "Ushbu oyda 30 kun mavjud";
      break;
    case 2:
      result = "Ushbu oyda 28 kun mavjud";
  }
  console.log(result);
}

{
  // 5-masala
  let a = 5,
    b = 6,
    amal = 4,
    result;

  switch (amal) {
    case 1:
      result = a + b;
      break;
    case 2:
      result = a - b;
      break;
    case 3:
      result = a / b;
      break;
    case 4:
      result = a * b;
  }
  console.log(result);
}

{
  // 6-masala
  let k = 2, //Uzunlik birliklari (metr, santimetr, disemetr)
    n = 1, //Kesma uzunligi
    result;
  switch (k) {
    case 1: //disemetr
      result = `${n / 10} metr`;
      break;
    case 2: // kilometr
      result = `${n * 1000} metr`;
      break;
    case 3: // metr
      result = `${n} metr`;
      break;
    case 4: //millimetr
      result = `${n / 1000} metr`;
      break;
    case 5: //santimetr
      result = `${n / 100} metr`;
  }
  console.log(result);
}

{
  // 7-masala
  let unit = 3,
    weight = 10,
    result;
  switch (unit) {
    case 1: //kilogramm
      result = `${weight} kg`;
      break;
    case 2: // milligramm
      result = `${weight / 1000000} kg`;
      break;
    case 3: //gramm
      result = `${weight / 1000} kg`;
      break;
    case 4: //tonna
      result = `${weight * 1000} kg`;
      break;
    case 5: //sentner
      result = `${weight * 100} kg`;
  }
  console.log(result);
}

{
  // 8-masala

  let d = 151,
    m = 4,
    result;
  y = 2008;

  switch (y % 4 !== 0) {
    case true:
      switch (m) {
        case 1:
          switch (d <= 31) {
            case true:
              result = `${d}-yanvar ${y}-yil`;
              break;
            default:
              result = `${y}-yilning yanvarida faqat 31 kun mavjud`;
          }
          break;
        case 3:
          switch (d <= 31) {
            case true:
              result = `${d}-mart ${y}-yil`;
              break;
            default:
              result = `${y}-yilning martida faqat 31 kun mavjud`;
          }
          break;
        case 5:
          switch (d <= 31) {
            case true:
              result = `${d}-may ${y}-yil`;
              break;
            default:
              result = `${y}-yilning mayida faqat 31 kun mavjud`;
          }
          break;
        case 7:
          switch (d <= 31) {
            case true:
              result = `${d}-Iyul ${y}-yil`;
              break;
            default:
              result = `${y}-yilning Iyulida faqat 31 kun mavjud`;
          }
          break;
        case 8:
          switch (d <= 31) {
            case true:
              result = `${d}-avgust ${y}-yil`;
              break;
            default:
              result = `${y}-yilning avgustida faqat 31 kun mavjud`;
          }
          break;
        case 10:
          switch (d <= 31) {
            case true:
              result = `${d}-oktyabr ${y}-yil`;
              break;
            default:
              result = `${y}-yilning oktyabrida faqat 31 kun mavjud`;
          }
          break;
        case 12:
          switch (d <= 31) {
            case true:
              result = `${d}-dekabr ${y}-yil`;
              break;
            default:
              result = `${y}-yilning dekabirida faqat 31 kun mavjud`;
          }
          break;
        case 4:
          switch (d <= 30) {
            case true:
              result = `${d}-aprel ${y}-yil`;
              break;
            default:
              result = `${y}-yilning aprelida faqat 30 kun mavjud`;
          }
          break;
        case 6:
          switch (d <= 30) {
            case true:
              result = `${d}-iyun ${y}-yil`;
              break;
            default:
              result = `${y}-yilning iyunida faqat 30 kun mavjud`;
          }
          break;
        case 9:
          switch (d <= 30) {
            case true:
              result = `${d}-sentyabr ${y}-yil`;
              break;
            default:
              result = `${y}-yilning sentyabrida faqat 30 kun mavjud`;
          }
          break;
        case 11:
          switch (d <= 30) {
            case true:
              result = `${d}-noyabr ${y}-yil`;
              break;
            default:
              result = `${y}-yilning noyabrida faqat 30 kun mavjud`;
          }
          break;
        case 2:
          switch (d <= 28) {
            case true:
              result = `${d}-fevral ${y}-yil`;
              break;
            default:
              result = `${y}-yilning fevralida faqat 28 kun mavjud`;
          }
      }
      break;
    default:
      result = `Siz kabisa yilini kiritdingiz`;
  }
  console.log(result);
}

{
    //9-masala
  let d = 28,
    m = 2,
    result;
  y = 2007;

  switch (y % 4 !== 0) {
    case true:
      switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          switch (d < 31) {
            case true:
              result = `${d += 1}/${m}/${y}`;
          } switch(d == 31){
            case true:
                result = `${1}/${m += 1}/${y}`;
          } switch(d < 0 || d > 31){
            case true:
                result = `Bunday kun mavjud emas`
          }
          break
        case 4:
        case 6:
        case 9:
        case 11:
            switch (d < 30) {
                case true:
                  result = `${d += 1}/${m}/${y}`;
              } switch(d == 30){
                case true:
                    result = `${1}/${m += 1}/${y}`;
              }switch(d < 0 || d > 30){
                case true:
                    result = `Bunday kun mavjud emas`
              }
              break
        case 2:
            switch (d < 28) {
                case true:
                  result = `${d += 1}/${m}/${y}`;
              } switch(d == 28){
                case true:
                    result = `${1}/${m += 1}/${y}`;
              }
              switch(d < 0 || d > 28){
                case true:
                    result = `Ushbu yilda bunday kun mavjud emas`
              }
              break
        default: 
              result = `Bunday oy mavjud emas`
      }
      break;
    default:
      result = `Siz kabisa yilini kiritdingiz`;
  }
  console.log(result);
}

{
  // 10-masala
  /**
   * Yo'nalishlar
   * "s" - shimol
   * "j" - janub
   * "q" - sharq
   * "g" - g'arb
   *
   * Komandalar
   * 0 - harakatni davom ettir
   * 1 - chapga buril
   * 2 - o'nga buril
   */
  let y = "s",
    k = 2;
  switch (y) {
    case "s":
      switch (k) {
        case 0:
          y = "s";
          break;
        case 1:
          y = "g";
          break;
        case 2:
          y = "q";
      }
      break;
    case "j":
      switch (k) {
        case 0:
          y = "j";
          break;
        case 1:
          y = "q";
          break;
        case 2:
          y = "g";
      }
      break;
    case "q":
      switch (k) {
        case 0:
          y = "q";
          break;
        case 1:
          y = "s";
          break;
        case 2:
          y = "j";
      }
      break;
    case "g":
      switch (k) {
        case 0:
          y = "g";
          break;
        case 1:
          y = "j";
          break;
        case 2:
          y = "s";
      }
      break;
  }
  console.log(y);
}
