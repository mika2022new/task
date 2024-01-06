import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
import cors from "cors";
import { orders, products, deleteProductByID, deleteOrderByID } from "../mockData.js";

const app = express();
app.use(cors());

// const server = createServer(app);

// const io = new Server(server, {
//     cors: {
//         orgin: "http://localhost:3000",
//     },
// });
// let connects = [];

// io.listen(3001);
// io.on("connection", (socket) => {
//     socket.on("startApp", (data) => {
//         connects.push(data);
//         io.emit("countConactions", {count: connects.length, id: data });
//     });
// });

app.get("/orders", (req, res) => {
    const newOrders = orders.map((item) => ({ ...item, products: item.products }));
  res.send(newOrders);
});

app.get("/orders/delete", (req, res) => {
    console.log("req.query - ", req.query);

    
const { id } = req.query;

    if(id) {
        deleteOrderByID(id);
        res.send(true);
    } else {
        res.send(false);
    }
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/delete", (req, res) => {

    console.log("req.query - ", req.query);

    const { id } = req.query;

        if(id) {
            deleteProductByID(id);
            res.send(true);
        } else {
            res.send(false);
        }
});

app.listen(3002, () => {
    console.log("server running at http://localhost:3002");
});


//////////////////////////////////////////////////////////

// import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";

// const app = express();
// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });
// let connects = [];

// io.listen(3001);
// io.on("connection", (socket) => {
//   socket.on("startApp", (data) => {
//     connects.push(data);
//     io.emit("countConactions", { count: connects.length, id: data });
//   });
// });

// server.listen(3002, () => {
//   console.log("server running at http://localhost:3002");
// });
