import express from "express";
import { loginInstrutor, loginAluno } from "../controllers/authController.js";
import { verificarToken, verificarUsuario, verificarAdmin } from "../utils/verificarToken.js";
    const router = express.Router();
    router.post('/instrutor/login', loginInstrutor);
    router.post('/aluno/login', loginAluno)
router.get("/verificartoken", verificarToken, (req, res) => {
        res.status(200).json({ message: "Você está autenticado." });
    });
    router.get("/verificarusuario/:id", verificarUsuario, (req, res) => {
        res.status(200).json(
            { message: "O id passado é do usuário logado ou de um administrador." });
    });
    router.get("/verificaradmin/:id", verificarAdmin, (req, res) => {
        res.status(200).json({ message: "O id passado é de um administrador." });
    });
export default router;