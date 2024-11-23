import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
//Conecta ao banco de dados utilizando a string de conexão armazenada na variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes")
    const colecao =db.collection("posts")
    return colecao.find().toArray()
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes")
    const colecao =db.collection("posts")
    return colecao.insertOne(novoPost)
}

export async function putPost(id, novoPost){
    const db = conexao.db("imersao-instabytes")
    const colecao =db.collection("posts")
    const objId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objId)},{$set:novoPost})
}