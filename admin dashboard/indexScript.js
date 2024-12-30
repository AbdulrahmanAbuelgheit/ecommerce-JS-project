window.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "../login.html";
    return;
  }
});

/* const products = [
  {
    id: 1,
    category: "chairs",
    image: "images/chair1.png",
    title: "Elegant Office Chair",
    price: 120.0,
    costPrice: 90.0,
    description:
      "This elegant office chair offers both comfort and style for your workspace.",
    count: 15,
    sold: 10,
    discount: 0,
    sellerid: 3,
    sellername: "Ahmed",
    status: "pending",
  },
  {
    id: 2,
    category: "chairs",
    image: "images/chair2.png",
    title: "Classic Dining Chair",
    price: 90.0,
    costPrice: 70.0,
    description:
      "Classic design dining chair, perfect for any traditional dining room.",
    count: 20,
    sold: 5,
    discount: 0,
    sellerid: 3,
    sellername: "Ahmed",
    status: "ordered",
  },
  {
    id: 3,
    category: "chairs",
    image: "images/chair3.png",
    title: "Vintage Wooden Chair",
    price: 75.0,
    costPrice: 55.0,
    description:
      "A vintage-inspired wooden chair to bring rustic charm to any room.",
    count: 8,
    sold: 3,
    discount: 0,
    sellerid: 1,
    sellername: "Ali",
    status: "delivered",
  },
  {
    id: 4,
    category: "chairs",
    image: "images/chair4.png",
    title: "Modern Swivel Chair",
    price: 150.0,
    costPrice: 110.0,
    description:
      "A modern swivel chair with ergonomic design and smooth rotation.",
    count: 10,
    sold: 4,
    discount: 0,
    sellerid: 1,
    sellername: "Ali",
    status: "pending",
  },
  {
    id: 5,
    category: "chairs",
    image: "images/chair5.png",
    title: "Luxury Lounge Chair",
    price: 300.0,
    costPrice: 230.0,
    description:
      "A luxury lounge chair designed for ultimate relaxation and comfort.",
    count: 5,
    sold: 2,
    discount: 0,
    sellerid: 1,
    sellername: "Ali",
    status: "ordered",
  },
  {
    id: 6,
    category: "chairs",
    image: "images/chair6.png",
    title: "Outdoor Patio Chair",
    price: 60.0,
    costPrice: 45.0,
    description:
      "Durable outdoor patio chair designed for all weather conditions.",
    count: 25,
    sold: 5,
    discount: 0,
    sellerid: 1,
    sellername: "Ali",
    status: "delivered",
  },
  {
    id: 7,
    category: "chairs",
    image: "images/chair7.png",
    title: "Minimalist Armchair",
    price: 200.0,
    costPrice: 150.0,
    description:
      "A minimalist armchair with a sleek design, perfect for modern interiors.",
    count: 7,
    sold: 4,
    discount: 0,
    sellerid: 3,
    sellername: "Ahmed",
    status: "pending",
  },
  {
    id: 8,
    category: "tables",
    image: "images/table1.png",
    title: "Glass Coffee Table",
    price: 250.0,
    costPrice: 180.0,
    description:
      "Elegant glass coffee table to complement any modern living room.",
    count: 12,
    sold: 6,
    discount: 0,
    sellerid: 2,
    sellername: "Hesham",
    status: "ordered",
  },
  {
    id: 9,
    category: "tables",
    image: "images/table2.png",
    title: "Wooden Dining Table",
    price: 400.0,
    costPrice: 300.0,
    description:
      "A sturdy wooden dining table perfect for family meals and gatherings.",
    count: 5,
    sold: 5,
    discount: 0,
    sellerid: 2,
    sellername: "Abdulrahman",
    status: "delivered",
  },
  {
    id: 10,
    category: "tables",
    image: "images/table3.png",
    title: "Expandable Dining Table",
    price: 600.0,
    costPrice: 450.0,
    description:
      "Expandable dining table ideal for large families and special events.",
    count: 3,
    sold: 1,
    discount: 0,
    sellerid: 2,
    sellername: "Abdulrahman",
    status: "pending",
  },
  {
    id: 16,
    category: "sofas",
    image: "images/sofa3.png",
    title: "Velvet Sectional Sofa",
    price: 1000.0,
    costPrice: 750.0,
    description:
      "Luxurious velvet sectional sofa that fits perfectly in any living room.",
    count: 20,
    sold: 10,
    discount: 0,
    sellerid: 2,
    sellername: "Abdulrahman",
    status: "pending",
  },
  {
    id: 17,
    category: "sofas",
    image: "images/sofa4.png",
    title: "Compact Loveseat",
    price: 500.0,
    costPrice: 375.0,
    description: "A compact loveseat for small spaces with a cozy design.",
    count: 10,
    sold: 5,
    discount: 0,
    sellerid: 2,
    sellername: "Abdulrahman",
    status: "ordered",
  },
  {
    id: 22,
    category: "sofas",
    image: "images/sofa9.png",
    title: "Corner Sofa Set",
    price: 2000.0,
    costPrice: 1500.0,
    description: "A large corner sofa set for maximum seating and comfort.",
    count: 5,
    sold: 2,
    discount: 0,
    sellerid: 6,
    sellername: "Mohamed",
    status: "pending",
  },
  {
    id: 23,
    category: "accessories",
    image: "images/acc1.png",
    title: "Designer Wall Clock",
    price: 45.0,
    costPrice: 35.0,
    description: "A stylish designer wall clock that enhances any room.",
    count: 30,
    sold: 20,
    discount: 0,
    sellerid: 5,
    sellername: "Amr",
    status: "ordered",
  },
  {
    id: 28,
    category: "lights",
    image: "images/lights2.png",
    title: "Table Lamp",
    price: 60.0,
    costPrice: 45.0,
    description: "A stylish table lamp that adds a warm glow to your space.",
    count: 15,
    sold: 7,
    discount: 0,
    sellerid: 6,
    sellername: "Mohamed",
    status: "pending",
  },
  {
    id: 29,
    category: "lights",
    image: "images/lights3.png",
    title: "Ceiling Chandelier",
    price: 500.0,
    costPrice: 380.0,
    description:
      "An elegant ceiling chandelier to illuminate your living room or dining area.",
    count: 20,
    sold: 17,
    discount: 0,
    sellerid: 5,
    sellername: "Amr",
    status: "ordered",
    totalPrice:4000,
  },
];
const orders = [
  {
    order_id: 1,
    user_id: 1,
    products: [
      {
        id: 1,
        category: "chairs",
        image: "images/chair1.png",
        title: "Elegant Office Chair",
        price: 120.0,
        cost_price: 90.0,
        description:
          "This elegant office chair offers both comfort and style for your workspace.",
        count: 15,
        sold: 10,
        discount: 0,
        sellerid: 20,
        sellername: "Omar",
        status: "pending",
        quantity: 5,
      },
      {
        id: 2,
        category: "chairs",
        image: "images/chair2.png",
        title: "Classic Dining Chair",
        price: 90.0,
        cost_price: 70.0,
        description:
          "Classic design dining chair, perfect for any traditional dining room.",
        count: 20,
        sold: 15,
        discount: 0,
        sellerid: 2,
        sellername: "Hesham",
        status: "ordered",
      },
      {
        id: 8,
        category: "tables",
        image: "images/table1.png",
        title: "Glass Coffee Table",
        price: 250.0,
        costPrice: 180.0,
        description:
          "Elegant glass coffee table to complement any modern living room.",
        count: 12,
        sold: 6,
        discount: 0,
        sellerid: 26,
        sellername: "Malek",
        status: "ordered",
      },
      {
        id: 9,
        category: "tables",
        image: "images/table2.png",
        title: "Wooden Dining Table",
        price: 400.0,
        costPrice: 300.0,
        description:
          "A sturdy wooden dining table perfect for family meals and gatherings.",
        count: 5,
        sold: 5,
        discount: 0,
        sellerid: 2,
        sellername: "Abdulrahman",
        status: "delivered",
      },
      {
        id: 10,
        category: "tables",
        image: "images/table3.png",
        title: "Expandable Dining Table",
        price: 600.0,
        costPrice: 450.0,
        description:
          "Expandable dining table ideal for large families and special events.",
        count: 3,
        sold: 1,
        discount: 0,
        sellerid: 2,
        sellername: "Abdulrahman",
        status: "pending",
      },
      {
        id: 22,
        category: "sofas",
        image: "images/sofa9.png",
        title: "Corner Sofa Set",
        price: 2000.0,
        costPrice: 1500.0,
        description: "A large corner sofa set for maximum seating and comfort.",
        count: 5,
        sold: 2,
        discount: 0,
        sellerid: 6,
        sellername: "Mohamed",
        status: "pending",
      },
      {
        id: 23,
        category: "accessories",
        image: "images/acc1.png",
        title: "Designer Wall Clock",
        price: 45.0,
        costPrice: 35.0,
        description: "A stylish designer wall clock that enhances any room.",
        count: 30,
        sold: 20,
        discount: 0,
        sellerid: 5,
        sellername: "Amr",
        status: "ordered",
      },
      {
        id: 28,
        category: "lights",
        image: "images/lights2.png",
        title: "Table Lamp",
        price: 60.0,
        costPrice: 45.0,
        description:
          "A stylish table lamp that adds a warm glow to your space.",
        count: 15,
        sold: 7,
        discount: 0,
        sellerid: 6,
        sellername: "Mohamed",
        status: "pending",
      },
      {
        id: 29,
        category: "lights",
        image: "images/lights3.png",
        title: "Ceiling Chandelier",
        price: 500.0,
        costPrice: 380.0,
        description:
          "An elegant ceiling chandelier to illuminate your living room or dining area.",
        count: 20,
        sold: 17,
        discount: 0,
        sellerid: 5,
        sellername: "Amr",
        status: "ordered",
      },
    ],
    status: "Delivered",
    payment_type: "Cash on Delivery",
    address: "123 Street, City",
    time: "2024-03-01",
    payment_type: "Direct Bank Transfer",
    totalPrice:1500,
  },
  {
    order_id: 2,
    user_id: 2,
    products: [
      {
        id: 3,
        category: "chairs",
        image: "images/chair3.png",
        title: "Vintage Wooden Chair",
        price: 75.0,
        cost_price: 55.0,
        description:
          "A vintage-inspired wooden chair to bring rustic charm to any room.",
        count: 8,
        sold: 4,
        discount: 0,
        sellerid: 25,
        sellername: "Maged",
        status: "delivered",
        quantity: 2,
      },
    ],
    status: "Pending",
    payment_type: "Credit Card",
    address: "456 Avenue, City",
    time: "2024-02-15",
    payment_type: "Cash on Delivery",
    totalPrice:4500,
  },

  {
    order_id: 3,
    user_id: 3,
    products: [
      {
        id: 4,
        category: "chairs",
        image: "images/chair4.png",
        title: "Modern Swivel Chair",
        price: 150.0,
        costPrice: 110.0,
        description:
          "A modern swivel chair with ergonomic design and smooth rotation.",
        count: 10,
        sold: 8,
        discount: 0,
        sellerid: 3,
        sellername: "Ahmed",
        status: "pending",
        quantity: 1,
        payment_type: "PayPal",
      },
    ],
    status: "Inway",
    payment_type: "Cash on Delivery",
    address: "789 Boulevard, City",
    time: "2024-03-10",
    totalPrice:3500,
  },

  {
    order_id: 4,
    user_id: 4,
    products: [
      {
        id: 23,
        category: "accessories",
        image: "images/acc1.png",
        title: "Designer Wall Clock",
        price: 45.0,
        costPrice: 35.0,
        description: "A stylish designer wall clock that enhances any room.",
        count: 30,
        sold: 20,
        discount: 0,
        sellerid: 5,
        sellername: "Amr",
        status: "ordered",
      },
      {
        id: 28,
        category: "lights",
        image: "images/lights2.png",
        title: "Table Lamp",
        price: 60.0,
        costPrice: 45.0,
        description:
          "A stylish table lamp that adds a warm glow to your space.",
        count: 15,
        sold: 7,
        discount: 0,
        sellerid: 6,
        sellername: "Mohamed",
        status: "pending",
      },
    ],
    status: "Inway",
    payment_type: "Cash on Delivery",
    address: "789 Boulevard, City",
    time: "2024-03-10",
    totalPrice:7500,
  },
  {
    order_id: 5,
    user_id: 5,
    products: [
      {
        id: 3,
        category: "chairs",
        image: "images/chair3.png",
        title: "Vintage Wooden Chair",
        price: 75.0,
        cost_price: 55.0,
        description:
          "A vintage-inspired wooden chair to bring rustic charm to any room.",
        count: 8,
        sold: 4,
        discount: 0,
        sellerid: 1,
        sellername: "Ali",
        status: "delivered",
        quantity: 2,
      },
    ],
    status: "Pending",
    payment_type: "Credit Card",
    address: "456 Avenue, City",
    time: "2024-02-15",
    payment_type: "Cash on Delivery",
    totalPrice:8500,
  },
  {
    order_id: 6,
    user_id: 6,
    products: [
      {
        id: 3,
        category: "chairs",
        image: "images/chair3.png",
        title: "Vintage Wooden Chair",
        price: 75.0,
        cost_price: 55.0,
        description:
          "A vintage-inspired wooden chair to bring rustic charm to any room.",
        count: 8,
        sold: 4,
        discount: 0,
        sellerid: 1,
        sellername: "Ali",
        status: "delivered",
        quantity: 2,
      },
    ],
    status: "Pending",
    payment_type: "Credit Card",
    address: "456 Avenue, City",
    time: "2024-02-15",
    payment_type: "Cash on Delivery",
    totalPrice:9500,
  },
  {
    order_id: 7,
    user_id: 7,
    products: [
      {
        id: 3,
        category: "chairs",
        image: "images/chair3.png",
        title: "Vintage Wooden Chair",
        price: 75.0,
        cost_price: 55.0,
        description:
          "A vintage-inspired wooden chair to bring rustic charm to any room.",
        count: 8,
        sold: 4,
        discount: 0,
        sellerid: 30,
        sellername: "Adam",
        status: "delivered",
        quantity: 2,
      },
    ],
    status: "Pending",
    payment_type: "Credit Card",
    address: "456 Avenue, City",
    time: "2024-02-15",
    payment_type: "Cash on Delivery",
    totalPrice:2500,
  },
];
const customers = [
  {
    id: 1,
    username: "Alex51",
    email: "alex51@yahoo.com",
    password:
      "fd75944c5e2b32dd85b2c66df00d4ee7fd2aa1dfcbc0ea7859c5dc7961942129",
    salt: "a4ee9e3ba84cf995c87adde630ff9c2c",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+19274865825",
    gender: "Female",
    address: "101 Pine Rd",
  },
  {
    id: 2,
    username: "Laura52",
    email: "laura52@yahoo.com",
    password:
      "37ac0f03fac479f4757b33f1aa106b3ebfeb237c232924023dcb197ebc6955e2",
    salt: "33bc6bae2389dd147cdb59b7a3299112",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+16424034611",
    gender: "Female",
    address: "789 Maple Ave",
  },
  {
    id: 3,
    username: "Emily97",
    email: "emily97@yahoo.com",
    password:
      "43bdfdade2444b7c40f9756970541c726a07eee0f51a08fb141672dfe0838315",
    salt: "ff60517bcbf06bf01b6fba1f9ea6ae4a",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+15359221815",
    gender: "Male",
    address: "101 Pine Rd",
  },
  {
    id: 4,
    username: "Alex46",
    email: "alex46@outlook.com",
    password:
      "1397b7130a83925ceb10680619d71c58903bef9755adf9cda979ede675e5581a",
    salt: "ebb53d960dc59739ca499166bd120ff9",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+13742502175",
    gender: "Male",
    address: "123 Main St",
  },
  {
    id: 5,
    username: "Alex97",
    email: "alex97@example.com",
    password:
      "935e7b9cb2113f82628eefff43cb34c9b2ac182092e0c0529c135d2e6e830abc",
    salt: "19ebd697b6c7fb51bd6755a3cb331e57",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+19346410005",
    gender: "Male",
    address: "789 Maple Ave",
  },
  {
    id: 6,
    username: "Emily18",
    email: "emily18@yahoo.com",
    password:
      "ccbc2b489e779237b22d68f89ee9500e0d0f4e7594e1a7bba8c76fe92d893a83",
    salt: "1a024929ad8446d7662808d190920755",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+11825201043",
    gender: "Female",
    address: "101 Pine Rd",
  },
  {
    id: 7,
    username: "Emily49",
    email: "emily49@yahoo.com",
    password:
      "af1039cea08b7128495797079e992238e994e2e4d177f8f32ade16a8c7c535a6",
    salt: "c529add9e33cc84327a79530e309df83",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+15582318161",
    gender: "Male",
    address: "789 Maple Ave",
  },
  {
    id: 8,
    username: "Jane59",
    email: "jane59@gmail.com",
    password:
      "f961c4fa0341b2d37cf78dacbf8b17ff6fac34207bbf8d5b92cee8dc0c215f9f",
    salt: "3148751dfc561715a8fce41522f07efe",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+11561735914",
    gender: "Female",
    address: "101 Pine Rd",
  },
  {
    id: 9,
    username: "John46",
    email: "john46@example.com",
    password:
      "178fce62017f35805e4ee6e00e374dcc016e859aecdb1bbdcc75b36c52668cd8",
    salt: "8ec4ce0bc9028251dc43bf06ceaea238",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+13514509874",
    gender: "Male",
    address: "456 Elm St",
  },
  {
    id: 10,
    username: "Katie74",
    email: "katie74@yahoo.com",
    password:
      "54a91b6a5020f3288b94be662805ddfeed7e422362e18de5ea2fc6248b3c667b",
    salt: "807b9f03b524cd9778cbcc3c9326309f",
    role: "Customer",
    photo: "default.jpg",
    phoneNumber: "+18561605637",
    gender: "Male",
    address: "202 Oak Blvd",
  },
]; */

function initializeData() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(orders));
  }
  if (!localStorage.getItem("customers")) {
    localStorage.setItem("customers", JSON.stringify(customers));
  }
}
initializeData();
const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];

// Function to group orders by month for the current year
const calculateOrdersByMonthCurrentYear = (storedOrders) => {
  const months = Array(12).fill(0); 
  const currentYear = new Date().getFullYear(); 
  storedOrders.forEach((order) => {
    const date = new Date(order.time);
    if (date.getFullYear() === currentYear) {
      // Check if the year matches
      const month = date.getMonth(); 
      months[month]++;
    }
  });
  return months;
};

const ordersByMonth = calculateOrdersByMonthCurrentYear(storedOrders);

const totalOrders = ordersByMonth.reduce((acc, value) => acc + value, 0);

// Update Total Orders in the UI
document.getElementById("totalorders").textContent = `${totalOrders}`;

const monthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const options = {
  series: [
    {
      name: "Orders",
      data: ordersByMonth,
    },
  ],
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    background: "#f8f9fa",
  },
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#1e90ff"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      gradientToColors: ["#1e90ff"],
      opacityFrom: 0.9,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#1e90ff"],
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  xaxis: {
    categories: monthLabels,
    title: {
      text: "Months",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Number of Orders",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  colors: ["#1e90ff"],
  markers: {
    size: 5,
    colors: ["#ffffff"],
    strokeColors: "#1e90ff",
    strokeWidth: 2,
  },
  grid: {
    borderColor: "#e9ecef",
    strokeDashArray: 4,
  },
  tooltip: {
    theme: "light",
    x: {
      format: "MMM",
    },
    y: {
      formatter: (val) => `${val} Orders`,
    },
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    labels: {
      colors: "#6c757d",
    },
  },
};

// Render the chart
new ApexCharts(document.querySelector("#chart1"), options).render();

const getTotalSalesByMonthCurrentYear = (storedOrders) => {
  const months = Array(12).fill(0); 
  const currentYear = new Date().getFullYear(); 

  storedOrders.forEach((order) => {
    const date = new Date(order.time);

    if (date.getFullYear() === currentYear) {
      const month = date.getMonth();

      // Calculate total sales for the current order
      const totalSalesForOrder = order.products.reduce(
        (sum, product) => sum + product.price * (product.quantity || 0), 
        0
      );

      months[month] += totalSalesForOrder;
    }
  });

  return months;
};

const salesByMonth = getTotalSalesByMonthCurrentYear(storedOrders);

const totalSales = salesByMonth.reduce((acc, value) => acc + value, 0);

// Update Total Sales in the UI
document.getElementById("totalesales").textContent = `$${totalSales.toFixed(
  2
)}`;

const optionsSales = {
  series: [
    {
      name: "Total Sales",
      data: salesByMonth,
    },
  ],
  chart: {
    type: "area",
    height: 300,
    toolbar: {
      show: false,
    },
    background: "#f8f9fa",
  },
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#28a745"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      gradientToColors: ["#28a745"],
      opacityFrom: 0.9,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#28a745"],
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    title: {
      text: "Months",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      rotate: -45,
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Total Sales ($)",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  colors: ["#28a745"],
  markers: {
    size: 5,
    colors: ["#ffffff"],
    strokeColors: "#28a745",
    strokeWidth: 2,
  },
  grid: {
    borderColor: "#e9ecef",
    strokeDashArray: 4,
  },
  tooltip: {
    theme: "light",
    x: {
      format: "MMM",
    },
    y: {
      formatter: (val) => `$${val.toFixed(2)}`,
    },
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    labels: {
      colors: "#6c757d",
    },
  },
};

new ApexCharts(document.querySelector("#chart2"), optionsSales).render();

const calculateMonthlyProfitForCurrentYear = (storedOrders) => {
  const monthlyProfit = Array(12).fill(0);
  const currentYear = new Date().getFullYear();

  storedOrders.forEach((order) => {
    const orderDate = new Date(order.time);
    if (orderDate.getFullYear() === currentYear) {
      const monthIndex = orderDate.getMonth();
      const profitForOrder = order.products.reduce(
        (sum, product) =>
          sum +
          ((product.price || 0) * (product.quantity || 0) -
            (product.cost_price || 0) * (product.quantity || 0)),
        0
      );
      monthlyProfit[monthIndex] += profitForOrder;
    }
  });

  return monthlyProfit;
};

// Generate data for the chart
const monthlyProfitData = calculateMonthlyProfitForCurrentYear(storedOrders);
const totalProfitAmount = monthlyProfitData.reduce(
  (acc, value) => acc + value,
  0
);

// Update Total Profit in the UI
document.getElementById(
  "totalprofit"
).textContent = `$${totalProfitAmount.toFixed(2)}`;

// Chart Configuration for Full-Width Total Profit Chart
const profitChartSettings = {
  series: [
    {
      name: "Total Profit",
      data: monthlyProfitData,
    },
  ],
  chart: {
    type: "area",
    height: 300,
    toolbar: {
      show: false,
    },
    background: "#f8f9fa",
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      gradientToColors: ["#ffc107"],
      shadeIntensity: 0.4,
      opacityFrom: 0.9,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  colors: ["#ffc107"],
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#ffc107"],
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    title: {
      text: "Months",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      rotate: -45,
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Total Profit ($)",
      style: {
        color: "#6c757d",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    labels: {
      style: {
        colors: "#6c757d",
        fontSize: "12px",
      },
    },
  },
  grid: {
    borderColor: "#e9ecef",
    strokeDashArray: 4,
  },
  tooltip: {
    theme: "light",
    y: {
      formatter: (value) => `$${value.toFixed(2)}`,
    },
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    labels: {
      colors: "#6c757d",
    },
  },
};

new ApexCharts(document.querySelector("#chart3"), profitChartSettings).render();

function renderOrderStatusChart() {
  const statuses = { Pending: 0, Delivered: 0, Inway: 0 };

  // Count the statuses from the local storage orders
  storedOrders.forEach((order) => {
    if (statuses[order.status] !== undefined) {
      statuses[order.status]++;
    }
  });

  // Render the pie chart
  const chart = new ApexCharts(document.querySelector("#chart6"), {
    chart: {
      type: "pie",
    },
    series: [statuses.Pending, statuses.Delivered, statuses.Inway],
    labels: ["Pending", "Delivered", "Inway"],
  });

  chart.render();
}

renderOrderStatusChart();

function getTopSellers(storedOrders) {
  const sellerOrderCount = {};

  storedOrders.forEach((order) => {
    order.products.forEach((product) => {
      const sellerId = product.seller_id;
      const sellerName = product.seller_name;

      if (!sellerOrderCount[sellerId]) {
        sellerOrderCount[sellerId] = { name: sellerName, count: 0 };
      }

      sellerOrderCount[sellerId].count++;
    });
  });

  return Object.values(sellerOrderCount)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function populateSellersList(sellers) {
  const sellersList = document.getElementById("top-sellers-list");
  if (!sellersList) {
    console.error("Top Sellers list container not found!");
    return;
  }

  sellersList.innerHTML = "";
  sellers.forEach((seller) => {
    const listItem = document.createElement("div");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    listItem.innerHTML = `
      <span>${seller.name}</span>
      <span class="badge bg-primary rounded-pill">${seller.count} Orders</span>
    `;
    sellersList.appendChild(listItem);
  });
}

if (storedOrders.length > 0) {
  const sellers = getTopSellers(storedOrders);
  populateSellersList(sellers);
}
function populateTopProductsByCategory() {
  const categoryGroups = storedProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const topProductsByCategory = Object.entries(categoryGroups).map(
    ([category, products]) => {
      const topProduct = products
        .filter((product) => product.sold > 0)
        .sort((a, b) => b.sold - a.sold)[0];
      return { category, ...topProduct };
    }
  );

  const topProductsList = document.getElementById("top-products-list");
  if (!topProductsList) {
    console.error("Top Products list container not found!");
    return;
  }

  topProductsList.innerHTML = "";

  // Generate HTML for each category's top product
  topProductsByCategory.forEach((product) => {
    if (!product || !product.title) return; // Skip if no top product in the category
    const productItem = `
        <div class="d-flex align-items-center gap-3 list-group-item">
          <img
            src="${product.image || "https://via.placeholder.com/55"}"
            alt="${product.title}"
            class="rounded-circle"
            style="width: 55px; height: 55px; object-fit: cover;"
          />
          <div class="flex-grow-1">
            <h6 class="mb-0">${product.title}</h6>
            <p class="mb-0 text-muted">${product.category}</p>
            <p class="mb-0 text-muted">Sold: ${product.sold}</p>
          </div>
        </div>
      `;
    topProductsList.innerHTML += productItem;
  });
}

populateTopProductsByCategory();
