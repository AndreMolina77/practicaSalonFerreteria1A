// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import reviewRoutes from "./src/routes/reviews.js";
import cookieParser from "cookie-parser";
import loginRoute from "./src/routes/login.js"
import registerClientsRoutes from "./src/routes/registerClients.js"
import registerEmployee from "./src/routes/registerEmployee.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import logoutRoute from "./src/routes/logout.js"
import cors from "cors"

app.use(
  cors({
    origin: "http://localhost:5173",
    // Permitir envío de cookies y credenciales
    credentials: true
  })
);

// Creo una constante que es igual a la libreria que importé
const app = express();
//s
//Que acepte datos en json
app.use(express.json());

app.use(cookieParser());


// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviewRoutes);

app.use("/api/registerClients", registerClientsRoutes)

app.use("/api/registerEmployee", registerEmployee);
app.use("/api/login", loginRoute)
app.use("/api/logout", logoutRoute);

app.use("/api/RecoveryPassword", recoveryPasswordRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
