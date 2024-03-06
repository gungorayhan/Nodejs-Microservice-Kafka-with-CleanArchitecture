import express from "express"
import cors from "cors"

import orderRoutes from "./routes/order.routes"
import cartRoutes from "./routes/cart.routes"

const app = express();

app.use(cors());

app.use(express.json())

app.use(orderRoutes)
app.use(cartRoutes)

export default app;