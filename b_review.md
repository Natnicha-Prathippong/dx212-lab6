//แก้ข้อ 1: ลดการวน Array ซ้ำในข้อ (4) เพราะ filter().reduce() วนข้อมูล 2 รอบ ขณะที่ reduce()ครั้งเดียวทำงานได้เท่ากันและเหมาะกับข้อมูลขนาดใหญ่กว่า

//ข้อที่ไม่แก้ คือ ข้อ 2: แยก "Dev" เป็นตัวแปร เพราะเป็นการปรับปรุงด้าน readability/maintainability แต่ไม่ได้แก้ปัญหาหลักของโค้ดในตอนนี้

//ข้อที่ไม่แก้ คือ ข้อ 3: ตรวจสอบ tasksDone เพราะข้อมูลตัวอย่างมี tasksDone เป็นตัวเลขที่ถูกต้องอยู่แล้ว การเพิ่ม validation จึงเกินความจำเป็นสำหรับโจทย์นี้

const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ต้น", role: "Dev", tasksDone: 8 },
  { name: "มายด์", role: "SM", tasksDone: 3 },
  { name: "เจ", role: "Dev", tasksDone: 6 },
];

const DEV_ROLE = "Dev";

const names = team.map(({ name, role }) => `${name} (${role})`);
console.log("รายชื่อ:", names);

const devs = team.filter(({ role }) => role === DEV_ROLE);
console.log("เฉพาะ Dev:", devs);

const totalTasks = team.reduce((sum, { tasksDone }) => sum + tasksDone, 0);
console.log("Tasks รวมทั้งทีม:", totalTasks);
