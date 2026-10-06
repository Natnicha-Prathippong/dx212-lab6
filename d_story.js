const findCommonFreeTime = (members) => {
  if (members.length === 0) return [];

  const days = [...new Set(
    members.flatMap(member => member.schedule.map(slot => slot.day))
  )];

  const result = [];

  days.forEach(day => {
    const schedules = members.map(member =>
      member.schedule.filter(slot => slot.day === day)
    );

    if (schedules.some(schedule => schedule.length === 0)) return;

    const firstMemberSlots = schedules[0];

    firstMemberSlots.forEach(slot => {
      let start = slot.start;
      let end = slot.end;

      for (let i = 1; i < schedules.length; i++) {
        const overlapStart = start > schedules[i][0].start
          ? start
          : schedules[i][0].start;

        const overlapEnd = end < schedules[i][0].end
          ? end
          : schedules[i][0].end;

        if (overlapStart >= overlapEnd) {
          start = null;
          break;
        }

        start = overlapStart;
        end = overlapEnd;
      }

      if (start !== null) {
        result.push({ day, start, end });
      }
    });
  });

  return result;
};

// ข้อมูลจำลอง
const members = [
  {
    name: "ฟ้า",
    schedule: [
      { day: "Mon", start: "09:00", end: "12:00" },
      { day: "Tue", start: "13:00", end: "17:00" }
    ]
  },
  {
    name: "ต้น",
    schedule: [
      { day: "Mon", start: "10:00", end: "14:00" },
      { day: "Tue", start: "15:00", end: "18:00" }
    ]
  },
  {
    name: "มายด์",
    schedule: [
      { day: "Mon", start: "11:00", end: "13:00" },
      { day: "Tue", start: "16:00", end: "17:00" }
    ]
  }
];

// กรณีที่ 1: มีเวลาว่างตรงกัน
console.log("กรณีที่ 1:", findCommonFreeTime(members));

// กรณีที่ 2: ไม่มีเวลาตรงกัน
console.log(
  "กรณีที่ 2:",
  findCommonFreeTime([
    {
      name: "เจ",
      schedule: [{ day: "Mon", start: "09:00", end: "10:00" }]
    },
    {
      name: "บี",
      schedule: [{ day: "Mon", start: "11:00", end: "12:00" }]
    }
  ])
);

// กรณีขอบ: ทุกคนว่างตรงกันพอดี 1 ชั่วโมง
console.log(
  "กรณีที่ 3:",
  findCommonFreeTime([
    {
      name: "เอ",
      schedule: [{ day: "Fri", start: "10:00", end: "12:00" }]
    },
    {
      name: "บี",
      schedule: [{ day: "Fri", start: "11:00", end: "12:00" }]
    }
  ])
);
