
// let array = [-4, 3, -9, 0, 4, 1];

// let positive = 0;
// let negative = 0;
// let zero = 0;

// for (let b = 0; b < array.length; b++) {
//   if (array[b] > 0) positive = positive + 1;
//   else if (array[b] < 0) negative++;
//   else if (array[b] === 0) zero;
// }

// console.log(negative, positive, zero);

// const sumOfResult = positive + negative + zero;

// console.log((positive / array.length).toFixed(sumOfResult));
// console.log((negative / array.length).toFixed(sumOfResult));
// console.log((zero / array.length).toFixed(sumOfResult));

// let n = [[2], [1, 2], [1, 0, 1, 2]];

// function findDigits(n) {
//   // Write your code here
//   let strPlus = 0;

//   for (let i = 0; i < n.length; i++) {
//     strPlus += strPlus;
//   }
// }
// console.log(n);

// //////////////////////////////////// JumpingOnClouds

// c = [0,0,1,0,0,1,0]

// const JumpingOnClouds = (clouds) => {
//   let now = 0;
//   let overal = 0;

//   for (let i = 0; i < clouds.length; i++) {
//     if (clouds[now + 2] === 0) {
//       now += 2;
//       overal = overal + 1;
//     } else if (clouds[now + 1] === 0) {
//       now++;
//       overal = overal + 1;
//     }
//   }
// };

// JumpingOnClouds()


    // Write your code here




    function extraLongFactorials(n) {

        let result = 0
        
        let arr = []
        
        for (let i = 0; 1 <= 25; i++){
        console.log('q')
        }
    

        }

        console.log(extraLongFactorials(25));


        const dokon = "Telefon dokoni";
        switch (dokon) {
          case "Samsung S1":
            console.log("Hajmi kichikroq va arzon");
            console.log("Narxi 70$");
            break;
          case "Samsung S2":
            console.log("Samsung S1ga qaraganda yaxshiroq");
            console.log("ammo biroz qimmat");
            console.log("Narxi 90$");
            break;
          case "Samsung S3":
            console.log("Kamera tiniq va yaxshi ishlaydi");
            console.log("Narxi 110$");
            break;
          case "Samsung S22 Ultra":
            console.log("Samsung telefonlari orasida eng yaxshisi");
            console.log("Kamerasi 108mp va juda tiniq");
            console.log("Suvdaham ishlay oladi");
            console.log("Narxi 1400$");
            break;
          case "Iphone X":
            console.log("Samsung ga qaraganda farq qiladi");
            console.log("Narxi qimmat ammo yaxshi ishlaydi");
            console.log("Narxi 200$");
            break;
          case "Iphone 14 Pro Max":
            console.log("Iphone telefonlari orasida eng yaxshisi");
            console.log("Kamerasi 108mp va juda tiniq");
            console.log("Suvdaham ishlay oladi");
            console.log("Narxi 1500$");
            break;
          case "Redmi S10":
            console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
            console.log("Narxi 80$");
            break;
          case "Redmi 10 Pro":
            console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
            console.log("Narxi 120$");
            break;
        }
        
        if (dokon === "Samsumg S1") {
          console.log("Hajmi kichikroq va arzon");
          console.log("Narxi 70$");
        } else if (dokon === "Samsung S2") {
          console.log("Samsung S1ga qaraganda yaxshiroq");
          console.log("ammo biroz qimmat");
          console.log("Narxi 90$");
        } else if (dokon === "Samsung S3") {
          console.log("Kamera tiniq va yaxshi ishlaydi");
          console.log("Narxi 110$");
        } else if (dokon === "Samsung S22 Ultra") {
          console.log("Samsung telefonlari orasida eng yaxshisi");
          console.log("Kamerasi 108mp va juda tiniq");
          console.log("Suvdaham ishlay oladi");
          console.log("Narxi 1400$");
        } else if (dokon === "Iphone X") {
          console.log("Samsung ga qaraganda farq qiladi");
          console.log("Narxi qimmat ammo yaxshi ishlaydi");
          console.log("Narxi 200$");
        } else if (dokon === "Iphone 14 Pro Max") {
          console.log("Iphone telefonlari orasida eng yaxshisi");
          console.log("Kamerasi 108mp va juda tiniq");
          console.log("Suvdaham ishlay oladi");
          console.log("Narxi 1500$");
        } else if (dokon === "Redmi S10") {
          console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
          console.log("Narxi 80$");
        } else if (dokon === "Redmi 10 Pro") {
          console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
          console.log("Narxi 120$");
        } else {
          console.log("Sizda telefon xarid qilish uchun mablag' yetarli emas.");
        }