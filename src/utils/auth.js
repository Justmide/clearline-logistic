// Auth and client session management for ClearLine Express Shipping Portal

const STORAGE_USERS_KEY = "clearline_users";
const STORAGE_CURRENT_USER_KEY = "clearline_current_user";

// Default demo user so testing login is instant
const DEFAULT_DEMO_USER = {
  id: "cl_usr_demo",
  suiteId: "CL-UK-8842",
  name: "Alexander Wright",
  email: "alex.wright@example.co.uk",
  phone: "+44 7700 900123",
  address: "42 Queen's Gate, South Kensington, London SW7 5HR",
  createdAt: "2026-01-15T10:00:00Z",
};

export function getChinaWarehouseAddress(suiteId = "CL-UK-8842") {
  return {
    recipientEn: `ClearLine (${suiteId})`,
    recipientCn: `快线物流转运 (${suiteId})`,
    phone: "+86 138 2345 6789",
    addressEn: `Room 302, Building B, Logistics Innovation Hub, Bao'an District, Shenzhen, Guangdong, China (Suite: ${suiteId})`,
    addressCn: `广东省深圳市宝安区物流产业园B栋302室 (${suiteId})`,
    postcode: "518101",
    instructions: "Paste this exact address into your Taobao, 1688, JD, or supplier shipping form. Include your Suite ID on the label.",
  };
}

export function getAllUsers() {
  if (typeof window === "undefined") return [DEFAULT_DEMO_USER];
  try {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify([DEFAULT_DEMO_USER]));
      return [DEFAULT_DEMO_USER];
    }
    return JSON.parse(raw);
  } catch {
    return [DEFAULT_DEMO_USER];
  }
}

export function getCurrentUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function registerUser({ name, email, password, phone, address }) {
  const users = getAllUsers();
  const existing = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
  if (existing) {
    throw new Error("An account with this email already exists. Please log in.");
  }

  // Generate unique China suite code e.g. CL-UK-6291
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const suiteId = `CL-UK-${randomSuffix}`;

  const newUser = {
    id: `cl_usr_${Date.now()}`,
    suiteId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password, // Stored in local demo storage
    phone: phone.trim(),
    address: address.trim(),
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(newUser));

  // Dispatch global event so Navbar updates immediately
  window.dispatchEvent(new CustomEvent("clearline:auth-change", { detail: newUser }));
  return newUser;
}

export function loginUser(emailOrSuite, password) {
  const users = getAllUsers();
  const query = emailOrSuite.trim().toLowerCase();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === query ||
      u.suiteId.toLowerCase() === query
  );

  if (!user) {
    throw new Error("No account found with this email or Suite ID.");
  }

  // Simple password check (if demo user, any password or password check)
  if (user.password && user.password !== password) {
    throw new Error("Incorrect password. Please try again.");
  }

  localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
  window.dispatchEvent(new CustomEvent("clearline:auth-change", { detail: user }));
  return user;
}

export function logoutUser() {
  localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
  window.dispatchEvent(new CustomEvent("clearline:auth-change", { detail: null }));
}

// Sample shipments linked to the user account
export const DEMO_SHIPMENTS = [
  {
    trackingNo: "CLE-88392-UK",
    status: "In Transit (Air)",
    statusStage: 3, // 1: Received, 2: Customs Export, 3: Flight en route, 4: UK Customs, 5: Out for Delivery, 6: Delivered
    service: "Air Courier Express (DDP)",
    origin: "Shenzhen Transit Hub, CN",
    destination: "London, UK",
    weight: "4.8 kg",
    packagesCount: 3,
    contents: "Consumer electronics, apparel (Taobao consolidation)",
    estimatedDelivery: "3 business days",
    lastLocation: "Flight CZ-307 departed Guangzhou Baiyun → London Heathrow",
    timeline: [
      { date: "Oct 12, 18:30", text: "Flight CZ-307 in air en route to London Heathrow (LHR)", active: true },
      { date: "Oct 11, 21:15", text: "Export customs clearance completed at Shenzhen Airport", active: false },
      { date: "Oct 10, 14:00", text: "Packages consolidated & repacked at ClearLine Shenzhen Hub", active: false },
      { date: "Oct 09, 11:20", text: "3 merchant packages received at warehouse", active: false },
    ],
  },
  {
    trackingNo: "CLE-74190-UK",
    status: "Customs Cleared (UK)",
    statusStage: 4,
    service: "Air Cargo Direct",
    origin: "Guangzhou Hub, CN",
    destination: "Manchester, UK",
    weight: "12.5 kg",
    packagesCount: 1,
    contents: "Commercial product samples",
    estimatedDelivery: "Tomorrow",
    lastLocation: "Heathrow Logistics Centre — Transferred to DPD UK",
    timeline: [
      { date: "Oct 13, 07:15", text: "HMRC Customs Cleared (DDP Paid). Handed to DPD UK", active: true },
      { date: "Oct 12, 19:40", text: "Arrived at London Heathrow Airport (LHR)", active: false },
      { date: "Oct 10, 08:30", text: "Dispatched from Guangzhou Baiyun Airport", active: false },
    ],
  },
  {
    trackingNo: "CLE-62001-UK",
    status: "Delivered",
    statusStage: 6,
    service: "Sea Freight Economy",
    origin: "Ningbo Port, CN",
    destination: "Birmingham, UK",
    weight: "48.0 kg",
    packagesCount: 4,
    contents: "Home goods & furniture accessories",
    estimatedDelivery: "Delivered on Oct 05",
    lastLocation: "Delivered to recipient address — Signed by Alexander Wright",
    timeline: [
      { date: "Oct 05, 14:22", text: "Delivered to doorstep in Birmingham. Signed by A. Wright", active: true },
      { date: "Oct 04, 09:10", text: "Out for delivery with Royal Mail ParcelForce", active: false },
      { date: "Oct 01, 16:00", text: "Vessel docked at Port of Felixstowe, UK customs cleared", active: false },
    ],
  },
];
