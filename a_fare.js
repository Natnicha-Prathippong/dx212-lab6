const calcFare = (distanceKm) => {
  // ตรวจสอบระยะทาง
  if (typeof distanceKm !== 'number' || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const distance = Math.ceil(distanceKm);

  // 2 กม.แรก 10 บาท ที่เหลือ กม.ละ 2 บาท
  return distance <= 2 ? 10 : 10 + (distance - 2) * 2;
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22
