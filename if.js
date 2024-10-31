{
  // 1-masala
  let n = 5;
  if (n > 0) {
    n++;
    console.log(n);
  } else {
    console.log(n);
  }
}

{
  // 2-masala
  let n = -5;
  if (n > 0) {
    n++;
  } else {
    n -= 2;
  }
  console.log(n);
}

{
  // 3-masala
  let n = 0;
  if (n > 0) {
    n++;
  } else if (n < 0) {
    n -= 2;
  } else {
    n = 10;
  }
  console.log(n);
}

{
  // 4-masala
  let n1 = 1,
    n2 = 2,
    n3 = 3,
    result = 0;
  if (n1 > 0) {
    result++;
  }
  if (n2 > 0) {
    result++;
  }
  if (n3 > 0) {
    result++;
  }
  console.log(result);
}

{
  // 5-masala
  let n1 = 1,
    n2 = 2,
    n3 = -4,
    musbat = 0,
    manfiy = 0;
  if (n1 > 0) {
    musbat++;
  } else {
    manfiy++;
  }
  if (n2 > 0) {
    musbat++;
  } else {
    manfiy++;
  }
  if (n3 > 0) {
    musbat++;
  } else {
    manfiy++;
  }
  console.log(`Musbat sonlar ${musbat}ta Manfiy sonlar ${manfiy}ta`);
}

{
  // 6-masala
  let a = 10,
    b = 5;
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

{
  // 7-masala
  let a = 10,
    b = 7;
  if (a < b) {
    console.log(`${a} sanoq o'qi bo'yicha ${a}chi tartib raqamda`);
  } else {
    console.log(`${b} sanoq o'qi bo'yicha ${b}chi tartib raqamda`);
  }
}

{
  // 8-masala
  let a = -10,
    b = 5;
  if (a > b) {
    console.log(a, b);
  } else {
    console.log(b, a);
  }
}

{
  // 9-masala
  let a = 10,
    b = 5;
    if(a > b){
        b = a + b
        console.log(`a = ${a}, b = ${b}`)
    }else{
        console.log(`a = ${a}, b = ${b}`)
    }
}

{
  // 10-masala
  let a = 10,
    b = 5;
  if (a !== b) {
    let overall = a + b;
    a = overall;
    b = overall;
  } else {
    a = 0;
    b = 0;
  }
  console.log(a, b);
}
